# Script de cópia e limpeza do MedPenguin para o GitHub
$src = "F:\PROJETOS"
$dst = "F:\PROJETOS\MedPenguin-GitHub-Version"

Write-Host "Iniciando cópia limpa de $src para $dst..."

# Criar pasta de destino
if (!(Test-Path $dst)) {
    New-Item -ItemType Directory -Path $dst -Force | Out-Null
    Write-Host "Pasta de destino criada: $dst"
}

# Copiar arquivos da raiz (excluindo temporários, scripts utilitários e zips grandes)
Get-ChildItem -Path $src -File | ForEach-Object {
    $name = $_.Name
    if ($name -eq "6a03758a1f72970689b3348a-55bb8da60d874ee0.zip" -or
        $name -eq "q1.tmp.js" -or
        $name -eq "q2.tmp.js" -or
        $name -like "find_duplicates*" -or
        $name -eq "shuffle_all.js") {
        Write-Host "Excluindo arquivo da raiz: $name"
    } else {
        Copy-Item -Path $_.FullName -Destination (Join-Path $dst $name) -Force
    }
}

# Copiar subpastas recursivamente
$dirs = @("app", "assets", "audio", "auth", "netlify")
foreach ($dir in $dirs) {
    $srcDir = Join-Path $src $dir
    $dstDir = Join-Path $dst $dir
    if (Test-Path $srcDir) {
        Write-Host "Copiando pasta: $dir..."
        Copy-Item -Path $srcDir -Destination $dst -Recurse -Force
    }
}

# Limpar funções sensíveis do Netlify (Webhooks, integrações de pagamento do Stripe/MercadoPago)
$funcPath = Join-Path $dst "netlify\functions"
if (Test-Path $funcPath) {
    $sensitiveFiles = @(
        "create-mercadopago-payment.js",
        "create-stripe-checkout-session.js",
        "get-stripe-checkout-session.js",
        "mercadopago-webhook.js",
        "stripe-webhook.js"
    )
    foreach ($file in $sensitiveFiles) {
        $filePath = Join-Path $funcPath $file
        if (Test-Path $filePath) {
            Remove-Item -Path $filePath -Force
            Write-Host "Removido arquivo de backend sensível: netlify/functions/$file"
        }
    }
}

# Sanitizar o arquivo config.js substituindo credenciais reais por placeholders
$configPath = Join-Path $dst "config.js"
if (Test-Path $configPath) {
    $content = Get-Content -Path $configPath -Raw
    $content = $content.Replace("https://lnjvmkicgrhdzbrtbtnc.supabase.co", "YOUR_SUPABASE_URL")
    $content = $content.Replace("sb_publishable_L9kDJvQB-TakbvXJypAbjA_K-0wcOmB", "YOUR_SUPABASE_PUBLISHABLE_KEY")
    Set-Content -Path $configPath -Value $content -Force
    Write-Host "config.js higienizado com placeholders para o Supabase."
}

Write-Host "Processo concluído com sucesso!"

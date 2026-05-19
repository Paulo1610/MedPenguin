
const fs = require('fs');
const path = 'c:/Users/Paulo/.gemini/antigravity/scratch/site/quiz/js/questions_extracted.js';

fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    // Simple regex to extract the object since it's a JS file with a variable declaration
    const content = data.replace('const questionsData = ', '').replace(/;$/, '');

    // We can't strict parse JSON because it's JS code (keys might not be quoted, comments, etc).
    // but looking at the file, it seems close to JSON.
    // Let's rely on valid JS execution.

    eval(data); // This defines questionsData

    const unit501Questions = questionsData.filter(q => q.unitId === 501);

    console.log(`Found ${unit501Questions.length} questions for Unit 501.`);
    unit501Questions.forEach(q => {
        console.log(`ID: ${q.id} | Has Image: ${q.image ? q.image : 'NULL'} | Text: ${q.text.pt.substring(0, 30)}...`);
    });
});

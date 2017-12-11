
// Requires answers in [{id: number, selected: string}]
module.exports = function(answers) {

    const questions = require('./data/questions.js');
    const influences = {};

    for (const answer of answers) {
        // Do input validation because users will provide incorrect results.
        // Check if the question actually exists.
        // Check if the answer given is in the question.
        if (answer.id in questions && answer.selected && answer.selected in questions[answer.id].answers) {
            const answer_influence = questions[answer.id].answers[answer.selected].influence;
            for (const inf of answer_influence) {
                if (!(inf in influences)) influences[inf] = 0;

                // Increment with one.
                influences[inf] = influences[inf] + 1;
            }
        }
    }

    return influences;
}

module.exports = function(answers) {
    const questions = require('./data/questions.js');

    const answerKeys = Object.keys(answers);

    const influences = {};

    for (const key of answerKeys) {

        // Do input validation because users will provide incorrect results.

        // Check if the question actually exists.
        // Check if the answer given is in the question.
        if (key in questions && answers[key] in questions[key].answers) {

            for (const inf of questions[key].answers[answers[key]].influence) {
                if (!(inf in influences)) influences[inf] = 0;

                // Increment with one.
                influences[inf] = influences[inf] + 1;
            }
        }
    }

    return influences;
}
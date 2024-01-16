
function validateQuizz() {
    // Récupérer  réponses
    const answers = [
        document.querySelector('input[name="q1"]:checked'),
        document.querySelector('input[name="q2"]:checked'),
        document.querySelector('input[name="q3"]:checked'),
        document.querySelector('input[name="q4"]:checked'),
        document.querySelector('input[name="q5"]:checked'),
        document.querySelector('input[name="q6"]:checked'),
        document.querySelector('input[name="q7"]:checked'),
        document.querySelector('input[name="q8"]:checked'),
        document.querySelector('input[name="q9"]:checked'),
        document.querySelector('input[name="q10"]:checked'),
    ];

    // Réponses correctes
    const correctAnswers = ['paris', 'berlin', 'rome', 'tokyo', 'brasilia', 'moscow', 'new delhi', 'ottawa', 'canberra', 'madrid'];

    // Vérifier les réponses
    let score = 0;
    for (let i = 0; i < answers.length; i++) {
        if (answers[i] && answers[i].value === correctAnswers[i]) {
            score++;
        }
    }

    // Affichage du résultat
    const quizzResult = document.getElementById('quizzResult');
    quizzResult.textContent = `Votre note : ${score} / 10`;

    let message = '';
    if (score >= 5) {
        message = `Bravo! Vous avez bien réussi avec un score de ${score} / 10.`;
    } else {
        message = `Vous pouvez faire mieux. Continuez à vous entraîner! Votre score est de ${score} / 10.`;
    }

    const correctAnswersList = document.getElementById('correctAnswersList');
    correctAnswersList.innerHTML = '<h3>Réponses correctes :</h3><ul>';
    for (let i = 0; i < correctAnswers.length; i++) {
        correctAnswersList.innerHTML += `<li>Question ${i + 1}: ${correctAnswers[i]}</li>`;
    }
    correctAnswersList.innerHTML += '</ul>';

    // Afficher l'alerte
    alert(message);
}

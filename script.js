$(document).ready(function () {
    const words = [
        { word: "always", translation: "завжди" },
        { word: "never", translation: "ніколи" },
        { word: "often", translation: "часто" },
        { word: "sometimes", translation: "іноді" },
        { word: "usually", translation: "зазвичай" },
        { word: "rarely", translation: "рідко" },
        { word: "quickly", translation: "швидко" },
        { word: "slowly", translation: "повільно" },
        { word: "easily", translation: "легко" },
        { word: "hardly", translation: "насилу" },
    ];

    let currentIndex = 0;
    let correctAnswers = 0;
    let wrongAnswers = 0;

    function updateCard() {
        $("#word-display").text(words[currentIndex].word);
        $("#progress-text").text(`${currentIndex + 1}/${words.length}`);
    }

    function showModal() {
        const level = correctAnswers >= 8 ? "Високий" : correctAnswers >= 5 ? "Середній" : "Початковий";
        $("#result-text").text(`Ваш рівень: ${level}`);
        $("#result-modal").fadeIn();
    }

    $("#check-button").click(function () {
        const userTranslation = $("#translation-input").val().trim().toLowerCase();
        if (userTranslation === words[currentIndex].translation.toLowerCase()) {
            correctAnswers++;
            $("#correct-count").text(correctAnswers);
        } else {
            wrongAnswers++;
            $("#wrong-count").text(wrongAnswers);
        }
        currentIndex++;
        if (currentIndex < words.length) {
            updateCard();
            $("#translation-input").val("");
        } else {
            showModal();
        }
    });

    $("#close-modal").click(function () {
        $("#result-modal").fadeOut();
    });

    // Randomize words on load
    words.sort(() => Math.random() - 0.5);
    updateCard();
});

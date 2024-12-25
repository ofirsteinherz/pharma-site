document.addEventListener('DOMContentLoaded', function() {
    // Search functionality
    const searchInput = document.getElementById('search');
    const questionCards = document.querySelectorAll('.question-card');

    searchInput.addEventListener('input', function(e) {
        const query = e.target.value.toLowerCase();
        
        questionCards.forEach(card => {
            const category = card.querySelector('.category').textContent.toLowerCase();
            const question = card.querySelector('.question').textContent.toLowerCase();
            
            if (category.includes(query) || question.includes(query)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });

    // Question answering functionality
    questionCards.forEach(card => {
        const options = card.querySelectorAll('.option');
        const explanation = card.querySelector('.explanation');
        const correctAnswer = parseInt(card.dataset.correct);

        options.forEach((option, index) => {
            option.addEventListener('click', function() {
                if (!card.classList.contains('answered')) {
                    card.classList.add('answered');
                    
                    if (index === correctAnswer) {
                        option.classList.add('correct');
                    } else {
                        option.classList.add('incorrect');
                        options[correctAnswer].classList.add('correct');
                    }
                    
                    explanation.classList.add('visible');
                }
            });
        });
    });
});
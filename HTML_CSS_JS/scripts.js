document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('recommendation-form');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const newRecommendation = document.getElementById('new-recommendation').value;
        if (newRecommendation) {
            const recommendationList = document.getElementById('recommendation-list');
            const newRecommendationDiv = document.createElement('div');
            newRecommendationDiv.classList.add('recommendation');
            newRecommendationDiv.innerHTML = `<p>${newRecommendation}</p><p>- Anonymous</p>`;
            recommendationList.appendChild(newRecommendationDiv);
            document.getElementById('new-recommendation').value = '';
            alert('Thank you for your recommendation!');
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const commentForm = document.getElementById('comment-form');
    const commentInput = document.getElementById('comment-input');
    const commentsContainer = document.getElementById('comments-container');

    commentForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const commentText = commentInput.value;

        if (commentText.trim() !== '') {
            // Create a new comment element
            const newComment = document.createElement('div');
            newComment.classList.add('comment');
            newComment.innerHTML = `
                <div class="user-info">
                    <span class="user-name">John Doe</span>
                    <span class="rating">★★★★☆</span> <!-- Example: 4-star rating -->
                </div>
                <p>${commentText}</p>
            `;

            // Append the new comment to the comments container
            commentsContainer.appendChild(newComment);

            // Clear the comment input
            commentInput.value = '';
        }
    });
});

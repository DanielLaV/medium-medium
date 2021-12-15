
window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

    let stories = document.body.querySelectorAll(".storyDiv")

    stories.forEach(story => {
        story.addEventListener("click", e => {
            const id = story.getAttribute('value')
            location.pathname = `/stories/${id}`
        })
    })
})

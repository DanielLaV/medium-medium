
window.addEventListener('DOMContentLoaded', (event) => {
    let stories = document.body.querySelectorAll(".storyDiv")

    stories.forEach(story => {
        story.addEventListener("click", e => {
            const id = story.getAttribute('value')
            location.pathname = `/stories/${id}`
        })
    })
})

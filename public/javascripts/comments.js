const submitComment = document.querySelector('#submitComment')
const storyId = submitComment.getAttribute('value')



async function getComments() {
    if (location.pathname === `/stories/${storyId}`) {
        console.log('in comments', location.pathname)

        const comments = await fetch(`/api/${storyId}/comments`, {
            method: "GET"
        }).then(data => data.text())
            .catch(e => console.log('THIS IS AN ERROR CATCH ', e));
        console.log("==============================================")
        const commentStatus = JSON.parse(comments).foundComments
        console.log(commentStatus)

        commentStatus.forEach(comment => {

            const commentDiv = document.querySelector('#commentsDiv')
            const content = document.createElement('p')
            content.innerText = comment.content
            commentDiv.appendChild(content)

        })
        // const { allComments } = JSON.parse(comments)
        // console.log(allComments)
    }
}

window.addEventListener('DOMContentLoaded', async e => {

    getComments();
    submitComment.addEventListener("click", async e => {
        let content = document.querySelector('#commentContent').value

        let _data = {
            content,
            storyId,
        }

        content = "";

        await fetch(`/api/comments`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(_data),
        }).catch(e => console.log('THIS IS AN ERROR CATCH ', e));

        getComments();
    })



})

const submitComment = document.querySelector('#submitComment')
const storyId = submitComment.getAttribute('value')



async function getComments(sI) {

    console.log('in comments', sI)

    const comments = await fetch(`/api/${storyId}/comments`, {
        method: "GET"
    })  .then(data => data.text())
        .then(dat => console.log(dat, 'DAT FILE!!!!!!!'))
        .catch(e => console.log('THIS IS AN ERROR CATCH ', e));
    console.log("==============================================")
    const parsedComments = JSON.parse(comments);
    const commentStatus = parsedComments.foundComments;
    const userId = parsedComments.userId;
    // console.log('COMMENT STATUS ==========', commentStatus)
    console.log('USER ID AFTER FETCH ==========', userId)

    commentStatus.forEach(comment => {

        const commentDiv = document.querySelector('#commentsDiv')
        const content = document.createElement('p')
        const editButton = document.createElement('button');
        editButton.innerText = "Edit";
        editButton.setAttribute('value', comment.id)
        editButton.setAttribute('class', 'editCommentButtons');
        content.innerText = comment.content;
        commentDiv.appendChild(content)
        commentDiv.appendChild(editButton);


    })
    // const { allComments } = JSON.parse(comments)
    // console.log(allComments)

}

window.addEventListener('DOMContentLoaded', async e => {

    await getComments(storyId);
    submitComment.addEventListener("click", async e => {
        let contentDiv = document.querySelector('#commentContent')
        let content = contentDiv.value;

        let _data = {
            content,
            storyId,
        }

        contentDiv.value = "";

        try {

            await fetch(`/api/comments`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(_data),
            })
                .then(res => res.text())
                .then(text => JSON.parse(text))
                .then(data => {
                    console.log('DATA IS ======================================', data);
                    const commentDiv = document.querySelector('#commentsDiv');
                    const content = document.createElement('p');
                    const editButton = document.createElement('button');
                    editButton.innerText = "Edit";
                    content.innerText = data.message.content;
                    editButton.name = data.userId;
                    commentDiv.appendChild(content);
                    commentDiv.appendChild(editButton);
                    getComments(data);

                })
            // .catch(e => console.log('THIS IS AN ERROR CATCH ', e));
        } catch (err) {
            console.log('THIS IS YOUR ERROR', err);
        }

        // getComments();
        // console.log("=============+TEST====")
    })

    const editButtons = document.querySelectorAll('.editCommentButtons');
    console.log('EDIT BUTTONs', editButtons);
    editButtons.forEach(editButton => {
        editButton.addEventListener('click', e => {
            console.log('VALUE IS ===================', editButton.getAttribute('value'));
        })

    })


})

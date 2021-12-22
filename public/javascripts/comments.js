const submitComment = document.querySelector('#submitCommentButton')
const storyId = submitComment.getAttribute('value')


function addComment() {
    submitComment.addEventListener("click", async e => {
        e.stopPropagation();
        const newComment = document.querySelector('#newComment')
        const content = newComment.value;
        const commentsDiv = document.querySelector('#commentsDiv')

        if (content === '') {
            alert('Comment can not be empty');
            return;
        }

        let _data = {
            content,
            storyId,
        }

        newComment.value = "";
        await fetch(`/api/comments`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(_data),
        })
            .then(res => res.json())
            .catch(e => console.log('THIS IS AN ERROR CATCH ', e));

        const thisComment = document.createElement('div')
        thisComment.classList.add(`thisComment`)

        const commentContent = document.createElement('p')
        commentContent.innerText = content

        const editDeleteButtons = document.createElement('div')
        editDeleteButtons.classList.add('editDeleteButtons')

        const editButton = document.createElement('button')
        editButton.innerText = 'Edit'

        const deleteButton = document.createElement('button')
        deleteButton.innerText = 'Delete'

        thisComment.appendChild(commentContent)
        editDeleteButtons.appendChild(editButton)
        editDeleteButtons.appendChild(deleteButton)
        thisComment.appendChild(editDeleteButtons)
        commentsDiv.appendChild(thisComment)


    })
}

function editComment() {
    const editButtons = document.querySelectorAll('.editCommentButtons')
    editButtons.forEach(button => {
        button.addEventListener('click', e => {
            e.stopPropagation();
            const commentId = button.getAttribute('value');
            const editTextArea = document.querySelector(`#textArea${commentId}`)
            const control = document.querySelector(`#editController${commentId}`)
            control.classList.add('open')
            const editCommentAction = document.querySelector(`#submitEdit${commentId}`)
            cancelEdit();
            editCommentAction.addEventListener('click', async e => {
                e.stopPropagation();
                const content = editTextArea.value
                let _data = {
                    content,
                    commentId,
                }
                await fetch(`/api/comments/${commentId}`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(_data),
                })
                    .then(res => res.json())
                    .catch(e => console.log('THIS IS AN ERROR CATCH ', e));

                //find p tag
                const comment = document.querySelector(`#comment${commentId}`)
                //set innerText to the new comment info
                comment.innerText = editTextArea.value
                //close edit box (remove class open)
                control.classList.remove('open')
                //event listener for cancel buttons that will close box (remove class open)

            })
        })
    });
}

function deleteComment() {
    const deleteButtons = document.querySelectorAll('.deleteCommentButtons')
    deleteButtons.forEach(button => {
        const commentId = button.getAttribute('value');
        button.addEventListener('click', async e => {
            e.stopPropagation();
            await fetch(`/api/comments/${commentId}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .catch(e => console.log('THIS IS AN ERROR CATCH ', e));

            const thisComment = document.querySelector(`#thisComment${commentId}`)
            thisComment.remove();
        })
    })
}

function cancelEdit() {
    const controls = document.querySelectorAll('.editText')
    controls.forEach(control => {
        if (control.classList.contains('open')) {
            const commentId = control.getAttribute('value')
            const cancel = document.querySelector(`#cancelEdit${commentId}`)
            cancel.addEventListener("click", e => {
                e.stopPropagation();
                control.classList.remove('open')
            })
        }
    })
}


window.addEventListener('DOMContentLoaded', e => {
    addComment();
    editComment();
    deleteComment();
})

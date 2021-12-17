const submitComment = document.querySelector('#submitComment')
const storyId = submitComment.getAttribute('value')



async function getComments(postData) {

    const comments = await fetch(`/api/${storyId}/comments`, {
        method: "GET"
    }).then(data => data.text())
        .catch(e => console.log('THIS IS AN ERROR CATCH ', e));
    const parsedComments = JSON.parse(comments);
    const commentStatus = parsedComments.foundComments;
    const userId = parsedComments.userId;
    const commentDiv = document.querySelector('#commentsDiv')
    if (postData != 0) {
        console.log('if')
        const content = document.createElement('p')
        const editButton = document.createElement('button');

        editButton.innerText = "Edit";
        editButton.setAttribute('value', postData.message.id)
        editButton.setAttribute('class', 'editCommentButtons');
        content.innerText = postData.message.content;

        commentDiv.appendChild(content)
        commentDiv.appendChild(editButton);
    } else {
        console.log('else')
        commentStatus.forEach(comment => {

            const content = document.createElement('p')
            const editButton = document.createElement('button');

            editButton.innerText = "Edit";
            editButton.setAttribute('value', comment.id)
            editButton.setAttribute('class', 'editCommentButtons');
            content.innerText = comment.content;

            commentDiv.appendChild(content)
            commentDiv.appendChild(editButton);
        })

        const editButtons = document.querySelectorAll('.editCommentButtons');
        editButtons.forEach(editButton => {
            editButton.addEventListener('click', e => {
                e.stopPropagation();
                console.log('VALUE IS ===================', editButton.getAttribute('value'));
            })

        })


    }
}

function addComment() {
    submitComment.addEventListener("click", async e => {
        e.stopPropagation();
        let contentDiv = document.querySelector('#commentContent')
        let content = contentDiv.value;

        let _data = {
            content,
            storyId,
        }

        contentDiv.value = "";
        await fetch(`/api/comments`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(_data),
        })
            .then(res => res.text())
            .then(text => JSON.parse(text))
            .then(postData => {
                getComments(postData)
                const editButtons = document.querySelectorAll('.editCommentButtons').reset();
            })
            .catch(e => console.log('THIS IS AN ERROR CATCH ', e));

    })
}


getComments(0);
addComment();

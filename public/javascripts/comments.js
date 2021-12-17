const submitComment = document.querySelector('#submitComment')
const storyId = submitComment.getAttribute('value')



async function getComments(postData) {

    const comments = await fetch(`/api/${storyId}/comments`, {
        method: "GET"
    })  .then(data => data.text())
        .catch(e => console.log('THIS IS AN ERROR CATCH ', e));
    const parsedComments = JSON.parse(comments);
    const commentStatus = parsedComments.foundComments;
    const userId = parsedComments.userId;
    const commentDiv = document.querySelector('#commentsDiv')
    if (postData != 0) {
        console.log('if')
        const content = document.createElement('p');

        content.innerText = postData.message.content;
        commentDiv.appendChild(content);

        if (userId === postData.message.userId) {
            const editButton = document.createElement('button');

            editButton.innerText = "Edit";
            editButton.setAttribute('value', postData.message.id)
            editButton.setAttribute('class', 'editCommentButtons');
            content.setAttribute('value', postData.message.id);
            commentDiv.appendChild(editButton);
        }


    } else {
        console.log('else')
        commentStatus.forEach(comment => {

            const content = document.createElement('p')
            const editButton = document.createElement('button');

            content.innerText = comment.content;
            commentDiv.appendChild(content)

            if (userId === comment.userId) {
                editButton.innerText = "Edit";
                editButton.setAttribute('value', comment.id)
                editButton.setAttribute('class', 'editCommentButtons');
                content.setAttribute('value', comment.id);
                commentDiv.appendChild(editButton);
            }

        })

        // const editButtons = document.querySelectorAll('.editCommentButtons');
        // editButtons.forEach(editButton => {
        //     editButton.addEventListener('click', e => {
        //         e.stopPropagation();
        //     })

        // })

    }
    editComment()
}

function addComment() {
    submitComment.addEventListener("click", async e => {
        e.stopPropagation();
        let contentDiv = document.querySelector('#commentContent')
        let content = contentDiv.value;

        if (content === '') {
            alert('Comment can not be empty');
            return;
        }

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
            })
            .catch(e => console.log('THIS IS AN ERROR CATCH ', e));

    })
}
function editComment() {
    const editButtons = document.querySelectorAll('.editCommentButtons');

    editButtons.forEach(async button => {
        button.addEventListener('click', async e => {
            e.stopPropagation();
            const commentId = button.getAttribute('value');

            const commentObj = await fetch(`/api/comments/${commentId}`, {
                method: "GET"
            })  .then(data => data.text())
                .catch(e => console.log('THIS IS AN ERROR CATCH ', e));

            const comment = JSON.parse(commentObj).comment.content;



            console.log('Comment ID ', comment)


        })
    });
};
// console.log('THIS IS CONTENT ========', content)
getComments(0);
addComment();

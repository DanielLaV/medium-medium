const submitComment = document.querySelector('#submitComment')

submitComment.addEventListener("click", async e => {
    const content = document.querySelector('#commentContent').value
    const storyId = submitComment.getAttribute('value')

    let _data = {
        content,
        storyId,
    }

    await fetch(`/api/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(_data),
    })
        .then(data => {
            return data.text();
        })
        .catch(e => console.log('THIS IS AN ERROR CATCH ', e));
    // console.log('RESPONSE IS ========', response)
    // const { comment } = JSON.parse(comment);

})

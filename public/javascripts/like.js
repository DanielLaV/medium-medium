const likeButtons = document.querySelectorAll(".likeButton");
console.log(likeButtons);
window.addEventListener("DOMContentLoaded", (e) => {
  console.log('--------test-');
  let message;

  likeButtons.forEach((likeButton) => {
    const user = likeButton.getAttribute("class").split(' ')[1];
    const story = likeButton.getAttribute("id");
    console.log("u-s: ",user, story);
    let data = {
      userId: user,
      storyId: story,
    };

    likeButton.addEventListener("click", async (e) => {
      console.log("---------like button clicked");
      const isLiked = await fetch(`/api/stories/${story}/like`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((data) => data.text());
      message = JSON.parse(isLiked).message;
      try {
      likeButton.style.color = message;
      } catch (e){
        console.log(e);
      }
    });
  });

});

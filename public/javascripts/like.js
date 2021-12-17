const likeButtons = document.querySelectorAll(".likeButton");

window.addEventListener("DOMContentLoaded", (e) => {
  console.log('--------test-');
  likeButtons.forEach(async (likeButton) => {
    const user = likeButton.getAttribute("value");
    const story = likeButton.getAttribute("id");

    let data = {
      userId: user,
      storyId: story,
    };

    const isLiked = await fetch(`/api/stories/${story}/like`, {
      method: "GET",
    })
      .then((data) => data.text());
    const { message } = JSON.parse(isLiked);
    likeButton.innerText = message;

    likeButton.addEventListener("click", async (e) => {
      const isLiked = await fetch(`/api/stories/${story}/like`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((data) => data.text());
      const { message } = JSON.parse(isLiked);
      likeButton.innerText = message;
    });
  });
});

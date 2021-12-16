const likeButtons = document.querySelectorAll(".likeButton");

window.addEventListener("DOMContentLoaded", (e) => {
  likeButtons.forEach(async (likeButton) => {
    const user = followButton.getAttribute("value");
    const story = followButton.getAttribute("id");

    let data = {
      userId: user,
      storyId: story,
    };

    const isLiked = await fetch(`/api/stories/${storyId}/like`, {
      method: "GET",
    })
      .then((data) => data.text())
      .then((text) => JSON.parse(text).message);
    likeButton.innerText = `ICON AND NUMBER OF LIKES`;

    likeButton.addEventListener("click", async (e) => {
      const response = await fetch(`/api/stories/${storyId}/like`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((data) => data.text())
        .then((text) => JSON.parse(text));

      likeButton.innerText = response.message;
    });
  });
});

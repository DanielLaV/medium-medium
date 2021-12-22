const likeButtons = document.querySelectorAll(".likeButton");
console.log(likeButtons);
window.addEventListener("DOMContentLoaded", (e) => {
  console.log("--------test-");
  let message;

  likeButtons.forEach((likeButton) => {

    const storyId = likeButton.getAttribute("id");
    let data = {
      storyId,
    };

    likeButton.addEventListener("click", async (e) => {
      console.log("---------like button clicked");
      const isLiked = await fetch(`/api/stories/${storyId}/like`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const JSONmessage = await isLiked.json();
      const message = JSONmessage.message;
      console.log(message);
  
      try {
        const likeCount = document.querySelector(`#likeCount-${storyId}`);
        if (message === "unlike") {
          likeButton.classList.remove("liked"); //
          likeCount.innerHTML = --likeCount.innerHTML;
        } else {
          likeButton.classList.add("liked"); //
          likeCount.innerHTML = ++likeCount.innerHTML;
        }
        //Liked or notLiked
      } catch (e) {
        console.log(e);
      }
    });
  });
});

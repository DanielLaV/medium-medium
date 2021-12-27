const followButtons = document.querySelectorAll(".followButton");

window.addEventListener("DOMContentLoaded", (e) => {
  e.stopPropagation();
  followButtons.forEach(async (followButton) => {
    const followingUser = followButton.getAttribute("value");
    const followerUser = followButton.getAttribute("id");
    //can't follow yourself
    if (followingUser === followerUser) {
      followButton.style.display = "none";
    }

    followButton.addEventListener("click", async (e) => {
      e.stopPropagation();

      let _data = {
        followerUserId: followerUser,
        followingUserId: followingUser,
      };

      const response = await fetch("/api/follow", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(_data),
      });
      const JSONresponse = await response.json();
      const message = JSONresponse.message;

      const followCount = document.querySelector("#followerCount");
      if (message === "Follow") {
        followCount.innerHTML = --followCount.innerHTML;
      } else {
        followCount.innerHTML = ++followCount.innerHTML;
      }

      followButtons.forEach((button) => {
        button.innerText = message;
        if (message === "Follow") {
          button.classList.add("follow");
          button.classList.remove("following");
        } else {
          button.classList.add("following");
          button.classList.remove("follow");
        }
      });
    });
  });
});

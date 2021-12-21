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



    // const isFollowing = await fetch(`/api/profiles/${followingUser}/follow`, {
    //   method: "GET",
    // })
    //   .then((data) => data.text())
    //   .catch((e) => console.log("THIS IS AN ERROR CATCH ", e));

    // const followStatus = JSON.parse(isFollowing).message;

    // followButton.innerText = followStatus;

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
      console.log('THIS IS JSONRESPONSE==========', JSONresponse);
      const message = JSONresponse.message;

      followButtons.forEach((button) => {
        button.innerText = message;
      });
    });
  });
});

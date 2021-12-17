const followButtons = document.querySelectorAll(".followButton");


window.addEventListener("DOMContentLoaded", (e) => {
  console.log('DOMCONTENTLOADED');
  followButtons.forEach(async(followButton) => {
    const followingUser = followButton.getAttribute("value");
    const followerUser = followButton.getAttribute("id");
console.log('FOLLOWINGUSER IS ==============================', followingUser)
console.log('FOLLOWERUSER IS ==============================', followerUser)
    if (followingUser === followerUser) {
      followButton.style.display = "none";
    }

    let _data = {
      followerUserId: followerUser,
      followingUserId: followingUser
    }

    const isFollowing = await fetch(`/api/profiles/${followingUser}/follow`, {
      method: "GET"
    })
      .then(data => data.text())
      .catch(e => console.log('THIS IS AN ERROR CATCH ', e));

    const followStatus = JSON.parse(isFollowing).message;

    followButton.innerText = followStatus;




    followButton.addEventListener("click", async (e) => {

      // let _data = {
      //     followerUserId: followerUser,
      //     followingUserId: followedUser
      //   }
      const response = await fetch("/api/follow", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(_data),
      })
        .then(data => {
          return data.text();
        })
        .catch(e => console.log('THIS IS AN ERROR CATCH ', e));


      const { message } = JSON.parse(response);

      followButtons.forEach((button) => {
        button.innerText = message;
      })

    });
  })
});

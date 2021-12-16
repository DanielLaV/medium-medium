const followButtons = document.querySelectorAll(".followButton");
const db = "./db/models";


window.addEventListener("DOMContentLoaded", (e) => {
  followButtons.forEach(async(followButton) => {
    console.log('FOLLLOW BUTTTON========', followButton);
    const followingUser = followButton.getAttribute("value");
    const followerUser = followButton.getAttribute("id");
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

const followButton = document.querySelector(".followButton");
const db = "./db/models";

window.addEventListener("DOMContentLoaded", (e) => {
  followButton.addEventListener("click", async (e) => {
    const followedUser = followButton.getAttribute("value");
    const followerUser = followButton.getAttribute("id");
    let _data = {
      followerUserId: followerUser,
      followingUserId: followedUser
    }

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

    followButton.innerText = message;

    /*
      -Grab data from response via .json
      -If now following = message
        update button to say following
      else
        update button to say follow





    */
  });
});

const followButton = document.querySelector(".followButton");
const db = "./db/models";

window.addEventListener("DOMContentLoaded", (e) => {
  followButton.addEventListener("click", (e) => {
    console.log(followButton.getAttribute("value"));
    console.log(followButton.getAttribute("id"));
    fetch("/API/profiles/:username/follow", [
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: followButton.innerText,
      },
    ]);
  });
});

followButton.addEventListener("click", e => {
  const followed = followButton.getAttribute('value')
  const follower = followButton.getAttribute('id')

  if (db.Relationship.findOne({where: {followedUserId: followed, followerUserId: follower}}))
   {
    fetch("/profiles/:username/follow", [
      {
        method:"DELETE",
        headers: {"Content-Type": "application/json"},
        //body?
      }
      ])
    }
  else {
    fetch("/profiles/:username/follow", [
      {
        method:"POST",
        headers: {"Content-Type": "application/json"},
        //body?
      }
      ])
  }
})

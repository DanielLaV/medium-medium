window.addEventListener('DOMContentLosaded', (e) => {
    const followButton = document.querySelector('.followButton')
    fetch ('/profiles/:username/follow', )
    if (db.Relationship.findOne({where: {followedUserId: followed, followerUserId: follower}})) {
        followButton.innerText = "Following"
    } else followButton.innerText = "Follow"

})

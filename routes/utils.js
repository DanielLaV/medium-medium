const findFollowers = (user) =>  {
    const userRelationships = await db.Relationship.findAll({
        where: {
          followerUserId: user,
        },
        include: "FollowingLinks",
      });

      let usersFollowing = [];

      for (let idx in userRelationships) {
        let relat = await db.User.findByPk(
          userRelationships[idx].followingUserId
        );
        usersFollowing.push(relat);
      }
}

"use strict";

module.exports = {

  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        { username: 'Demo', passwordHash: 'password', firstName: 'Demo', lastName: 'User', about: "I'm a demo user", profileImage: 'https://demos.lucentinian.com/usersdemo/api/user/pic', email: "demo@demo.com", createdAt: new Date(), updatedAt: new Date() },
        { username: 'ImFromSixthSense', passwordHash: 'password', firstName: 'Dr. Malcolm', lastName: 'Crowe', about: 'I know a kid. He sees dead people. That probably should have been my first clue.', profileImage: 'https://i.pinimg.com/originals/d5/9c/9c/d59c9c118230c366bceb74a2bb58c240.jpg', email: "sixthsense@six.com", createdAt: new Date(), updatedAt: new Date() },
        { username: 'FriendlyGhost', passwordHash: 'password', firstName: 'Casper', lastName: 'N/A', about: "I'm basically a super hero.", profileImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFgZDRm-s6bY5qVCHSB9HhpxX3wvFctGtRuw&usqp=CAU', email: "casper@friendly.com", createdAt: new Date(), updatedAt: new Date() },
        { username: 'Psych', passwordHash: 'Psych', firstName: 'Shawn', lastName: 'Spencer', about: "I solve crimes with my partner Magic Head. We definitely didn't rip off Scrubs.", profileImage: 'https://pbs.twimg.com/profile_images/115129520/ss-june-006_400x400.jpg', email: "shawn@pysch.com", createdAt: new Date(), updatedAt: new Date() },
        { username: 'NotAFake', passwordHash: 'password', firstName: 'John', lastName: 'Edward', about: "Everytime I ask a group of 100+ people, 'Who here has lost someone to a heart attack?', I always find someone. I'm the most psychicest.", email: "john@johnedwards.com", profileImage: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/John_Edwards%2C_official_Senate_photo_portrait.jpg', createdAt: new Date(), updatedAt: new Date() },
        { username: 'JerseyGrrrl', passwordHash: 'password', firstName: 'Theresa', lastName: 'Caputo', about: "Have you seen my hair?", profileImage: 'https://www.theresacaputo.com/wp-content/uploads/2018/05/theresa-about-2018.jpg', email: "theresa@jerseygrrrl.com", createdAt: new Date(), updatedAt: new Date() },
        { username: 'LEGEND', passwordHash: 'password', firstName: 'Miss', lastName: 'Cleo', about: 'You know who I am.', profileImage: 'https://www.usmagazine.com/wp-content/uploads/1427916060_miss-cleo-350.jpg?quality=86&strip=all', email: "iam@legend.com", createdAt: new Date(), updatedAt: new Date() },
        { username: 'Zman', passwordHash: 'password', firstName: 'Zoltar', lastName: 'the Magnificent', about: "I'm at every carnival. Are you capable of being in multiple places at the same time?", profileImage: 'https://pinballpro.net/wp-content/uploads/2018/12/deluxezoltar.png', email: "zman@ghost.com", createdAt: new Date(), updatedAt: new Date() },
        { username: 'Gengar', passwordHash: 'password', firstName: 'Gengar', lastName: 'Gengar', about: 'Gengar', profileImage: 'https://static.pokemonpets.com/images/monsters-images-800-800/94-Gengar.webp', email: "boo@ghost.com", createdAt: new Date(), updatedAt: new Date() },
        { username: 'MoaningMyrtle', passwordHash: 'password', firstName: 'Myrtle', lastName: 'Warren', about: "Haters gonna hate. Spend most of my time creeping on the boys in the bathroom.", email: "crybaby@ccry.com", profileImage: 'https://imgix.bustle.com/rehost/2016/9/13/e68d9216-317a-4422-8cbb-fcfa297dbd05.jpg?w=800&fit=crop&crop=faces&auto=format%2Ccompress', createdAt: new Date(), updatedAt: new Date() },
        { username: 'MeanGirl', passwordHash: 'password', firstName: 'Karen', lastName: 'Smith', about: "I'm kind of psychic. I have a 5th sense. It's like I have ESPN or something.", email: "karen@meangirl.com", profileImage: 'https://static.wikia.nocookie.net/meangirls/images/c/c2/Karen-Smith-karen-smith-5596613-398-600.jpg/revision/latest?cb=20160210155137', createdAt: new Date(), updatedAt: new Date() },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Users', null, {});

  },
};

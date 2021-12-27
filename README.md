# Medium for Mediums

![image](https://user-images.githubusercontent.com/58845762/147298102-fc5edebb-702e-4987-8957-d0ac201056ea.png)

## Summary

[Medium for Mediums](https://medium-for-mediums.herokuapp.com/?) is a web application built using [Express](https://expressjs.com/) and [Pug](https://pugjs.org/api/getting-started.html). It is a clone of [Medium.com](https://medium.com), with a theme geared toward attracting users who are mediums. Medium for Mediums allows users to:
- Create an account
- Log in / Log out
- Create, edit and delete comments on stories
- Like stories
- View and follow other users' profile
- See who other users follow

## Structure
#### Back end

The app was built using Express with a postgreSQL database. All endpoints were built using RESTful conventions and respond with a JSON API.

#### Front end

The front end was built using Pug, JavaScript and raw CSS.

## Libraries
- [Express](https://expressjs.com/)
- [Bcrypt](https://www.npmjs.com/package/bcrypt)
- [Cookie-parser](https://www.npmjs.com/package/cookie-parser)
- [Csrf](https://www.npmjs.com/package/csrf)
- [Morgan](https://www.npmjs.com/package/morgan)
- [pg](https://www.npmjs.com/package/pg)
- [Pug](https://pugjs.org/api/getting-started.html)
- [HTTP-errors](https://www.npmjs.com/package/http-errors)
- [Express-validator](https://express-validator.github.io/docs/)

## Primary Components
### User Authorization
Passwords are hashed before being saved in the database using Bcrypt. When a user attempts to log in, their password is hashed and compared against the hashed password saved in the database.
![image](https://user-images.githubusercontent.com/58845762/147297848-799706ac-00f3-46a4-a638-308faeb90cd7.png)

### Create Story
Users can create new stories which will be associated with their accounts. Stories have a title and an optional image.
![image](https://user-images.githubusercontent.com/58845762/147298385-984f690f-9241-43e7-b056-a110aea1ff00.png)

### View Profile / Follow Users
Users can view other profiles and follow them.
![image](https://user-images.githubusercontent.com/58845762/147299590-a1d8d9f8-a153-4a43-b66d-cd88d8425bb3.png)



This project was created by Christopher Breen, Nathan Treadaway, Jesse Brooks and Daniel LaVergne. 

You can find the creators' information below:

Christopher Breen: [Github](https://github.com/breencf)   [LinkedIn](https://www.linkedin.com/in/breencf/)

Jesse Brooks: [Githhub](https://github.com/Josso7)

Daniel LaVergne: [Github](https://github.com/DanielLaV) [LinkedIn](https://www.linkedin.com/in/daniel-lavergne-137772206/)

Nathan Treadaway: [Github](https://github.com/ta-cos) [LinkedIn](www.linkedin.com/in/nathan-treadaway)

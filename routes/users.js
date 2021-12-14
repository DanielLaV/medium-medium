const express = require('express');
const { check, validationResult } = require('express-validator');
const router = express.Router();
const { csrfProtection, asyncHandler } = require('../utils');
const db = require('../db/models');
const { User } = db;
const bcrypt = require('bcryptjs');

const userValidator = [
  check('username')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a valid username')
    .isLength({ max: 50 })
    .withMessage('Username must not be more than 50 characters'),
  check('email')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Email Address')
    .isLength({ max: 100 })
    .withMessage('Email Address must not be more than 100 characters long')
    .isEmail()
    .withMessage('Email Address is not a valid email')
    .custom((value) => {
      return db.User.findOne({ where: { email: value } })
        .then((user) => {
          if (user) {
            return Promise.reject('The provided Email Address is already in use by another account');
          }
        });
    }),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Password required')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long'),
  check('confirmPassword')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Confirm Password')
    .isLength({ max: 50 })
    .withMessage('Confirm Password must not be more than 50 characters long')
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Confirm Password does not match Password');
      }
      return true;
    }),
  check('firstName')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a valid first name')
    .isLength({ max: 50 })
    .withMessage('Name must not be more than 50 characters'),
  check('lastName')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a valid last name')
    .isLength({ max: 50 })
    .withMessage('Name must not be more than 50 characters'),
]

/* GET users listing. */

router.get('/login', csrfProtection, asyncHandler(async (req, res, next) => {
  res.render('login', { csrfToken: req.csrfToken()});
}));

router.get('/signup', csrfProtection, asyncHandler(async (req, res, next) => {
  res.render('signup', { csrfToken: req.csrfToken()} );
}));

router.post('/signup', csrfProtection, userValidator, asyncHandler(async (req, res) => {
  const { username, password, firstName, lastName, email } = req.body;
  console.log(req.body);
  const validatorErrors = validationResult(req)
  if (validatorErrors.isEmpty()) {
    const passwordHash = await bcrypt.hash(password, 4);
    await db.User.create( { username, firstName, lastName, email, passwordHash } );
    console.log('if')
    res.redirect('/');
    return;
  } else {
    const errors = validatorErrors.array().map((error) => error.msg);
    console.log("-----------------------------------" ,validatorErrors);
    res.render('signup', {
      title: 'Register',
      username,
      password,
      firstName,
      lastName,
      email,
      errors,
      csrfToken: req.csrfToken(),
    });
  }

}));

router.post('/login', csrfProtection, asyncHandler( async (req, res) => {
  const { email, password } = req.body
  // console.log('---------------', email);
  const user = await db.User.findOne({ where: { email }})
  // console.log('---------------', user);
  if (user) {
    if (await bcrypt.compare(password, user.passwordHash.toString())){
      console.log('password compare');
      res.redirect("/");
    } else {
      //generate error
    }
  }
  console.log(`sending ${email} and ${password}`)
}));



module.exports = router;

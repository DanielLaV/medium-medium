const express = require('express');
const { check, validationResult } = require('express-validator');
const router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils');
const db = require('../db/models');
const { Users } = db;

const userValidator = [
  check('username')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a valid username')
    .isLength({ max: 50 })
    .withMessage('Username must not be more than 50 characters'),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Password required')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long'),
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
router.get('/', asyncHandler(async (req, res, next) => {
  res.send('respond with a resource');
}));

router.post('/signup', csrfProtection, userValidator, asyncHandler(async (req, res, next) => {

}));

router.post('/login', csrfProtection, asyncHandler(async (req, res, next) => {

}));

module.exports = router;

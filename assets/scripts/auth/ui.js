'use strict'

const store = require('./../store')

const signUpSuccess = function (res) {
  // Resets the form
  $('#sign-up').trigger('reset')
  // Messaging
  $('#message').text('Sign Up Successful! Go Sign In :)')
}
const signUpFailure = function () {
  $('#message').text('Sign up failed :(')
}

const signInSuccess = function (res) {
  // Resets the form
  $('#sign-in').trigger('reset')
  $('#message').text('Signed in successfully!')
  store.user = res.user
  $('#after-sign-in').show()
  $('#before-sign-in').hide()
}

const signInFailure = function () {
  $('#message').text('Sign in failed')
}

const signOutSuccess = function () {
  // clear out the user - set the stored user to null
  store.user = null
  $('#message').text('Signed out successfully!')
  $('#before-sign-in').show()
  $('#after-sign-in').hide()
}

const signOutFailure = function () {
  $('#message').text('Sign out failure')
}

const changePasswordSuccess = function () {
  $('#change-password').trigger('reset')
  $('#message').text('Password changed successfully!')
}

const changePasswordFailure = function () {
  $('#message').text('Password change failed')
}
module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}

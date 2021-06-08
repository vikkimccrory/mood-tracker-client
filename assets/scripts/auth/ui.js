'use strict'

const store = require('./../store')

const signUpSuccess = function (res) {
  $('#sign-up').trigger('reset')
  $('#message').html('Sign Up Successful! Go Sign In :)')
  $('#message').addClass('success')
  setTimeout(() => {
    $('#message').html('')
    $('#message').removeClass('success')
  }, 5000)
}

const signUpFailure = function () {
  $('#sign-up').trigger('reset')
  $('#message').html('Sign up failed :(')
  $('#message').addClass('failure')
  setTimeout(() => {
    $('#message').html('')
    $('#message').removeClass('failure')
  }, 5000)
}

const signInSuccess = function (res) {
  // Resets the form
  $('#sign-in').trigger('reset')
  $('#message').html('Signed in successfully!')
  $('#message').addClass('success')
  setTimeout(() => {
    $('#message').html('')
    $('#message').removeClass('success')
  }, 5000)
  store.user = res.user
  $('#after-sign-in').show()
  $('#before-sign-in').hide()
}

const signInFailure = function () {
  $('#sign-in').trigger('reset')
  $('#message').html('Sign in failed')
  $('#message').addClass('failure')
  setTimeout(() => {
    $('#message').html('')
    $('#message').removeClass('failure')
  }, 5000)
}

const signOutSuccess = function () {
  // clear out the user - set the stored user to null
  store.user = null
  $('#message').html('Signed out successfully!')
  $('#message').addClass('success')
  setTimeout(() => {
    $('#message').html('')
    $('#message').removeClass('success')
  }, 5000)
  $('#before-sign-in').show()
  $('#after-sign-in').hide()
}

const signOutFailure = function () {
  $('#message').html('Sign out failure')
  $('#message').addClass('failure')
  setTimeout(() => {
    $('#message').html('')
    $('#message').removeClass('failure')
  }, 5000)
}

const changePasswordSuccess = function () {
  $('#change-password').trigger('reset')
  $('#message').html('Password changed successfully!')
  $('#message').addClass('success')
  setTimeout(() => {
    $('#message').html('')
    $('#message').removeClass('success')
  }, 5000)
}

const changePasswordFailure = function () {
  $('#message').html('Password change failed')
  $('#message').addClass('failure')
  setTimeout(() => {
    $('#message').html('')
    $('#message').removeClass('failure')
  }, 5000)
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

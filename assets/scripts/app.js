'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
const entryEvents = require('./entries/events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // auth
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-up-button').click(function () {
    $('#sign-up').toggle()
  })
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#change-password-button').click(function () {
    $('#change-password').toggle()
  })
  // entries
  $('#mood-form').on('submit', entryEvents.onCreateEntry)
  $('#get-all-entries').on('click', entryEvents.onGetAllEntries)
  $('#destroy-entry').on('submit', entryEvents.onDestroyEntry)
  $('#destroy-button').click(function () {
    $('#destroy-entry').toggle()
  })
  $('#update-form').on('submit', entryEvents.onUpdateEntry)
  $('#update-button').click(function () {
    $('#update-form').toggle()
  })
})

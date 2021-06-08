'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
const entryEvents = require('./entries/events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#change-password').on('submit', authEvents.onChangePassword)
  // entries
  $('#mood-form').on('submit', entryEvents.onCreateEntry)
  $('#get-all-entries').on('click', entryEvents.onGetAllEntries)
  $('#destroy-entry').on('submit', entryEvents.onDestroyEntry)
  $('#update-form').on('submit', entryEvents.onUpdateEntry)
})

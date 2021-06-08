'use strict'

const createEntrySuccess = function (res) {
  $('#mood-form').trigger('reset')
  console.log(res)
  $('#message').html('Entry Created!')
  $('#message').addClass('success')
  setTimeout(() => {
    $('#message').html('')
    $('#message').removeClass('success')
  }, 5000)
}

const createEntryFailure = function (res) {
  $('#message').html('Entry Creation Failed')
  $('#message').addClass('failure')
  setTimeout(() => {
    $('#message').html('')
    $('#message').removeClass('failure')
  }, 5000)
}

const getAllEntriesSuccess = function (res) {
  $('#index-message').text('Here are all your entries!')
  let entryHtml = ''
  res.entries.forEach(entry => {
    entryHtml += `
   <div>
      <h4>${entry.mood}</h4>
      <p>${entry.dayDetails}</p>
      <p>ID: ${entry._id}</p>
    </div>
  `
    $('#entry-display-get-all').html(entryHtml)
    // Reloading the mood form functionality: will work on if I have time
    // $('#mood').hide()
    // $('#mood-form-reload').show()
  })
}

const getAllEntriesFailure = function (res) {
  $('#message').html('Could not get all entries')
  $('#message').addClass('failure')
  setTimeout(() => {
    $('#message').html('')
    $('#message').removeClass('failure')
  }, 5000)
}

const destroyEntrySuccess = function (res) {
  $('#destroy-entry').trigger('reset')
  $('#message').html('Entry Deleted!')
  $('#message').addClass('success')
  setTimeout(() => {
    $('#message').html('')
    $('#message').removeClass('success')
  }, 5000)
}

const destroyEntryFailure = function () {
  $('#message').html('Destroy Entry Failed')
  $('#message').addClass('failure')
  setTimeout(() => {
    $('#message').html('')
    $('#message').removeClass('failure')
  }, 5000)
}

const updateEntrySuccess = function (res) {
  console.log(res)
  $('#message').html('Entry successfully updated')
  $('#message').addClass('success')
  setTimeout(() => {
    $('#message').html('')
    $('#message').removeClass('success')
  }, 5000)
}

const updateEntryFailure = function () {
  $('#message').html('Entry update failed')
  $('#message').addClass('failure')
  setTimeout(() => {
    $('#message').html('')
    $('#message').removeClass('failure')
  }, 5000)
}

module.exports = {
  createEntrySuccess,
  createEntryFailure,
  getAllEntriesSuccess,
  getAllEntriesFailure,
  destroyEntrySuccess,
  destroyEntryFailure,
  updateEntrySuccess,
  updateEntryFailure
}

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
  console.log(res.entries)
  res.entries.forEach(entry => {
    entryHtml += `
   <div>
      <br>
      <p>Mood Ratings: Happiness: ${entry.mood[0].happiness}, Sadness: ${entry.mood[0].sadness},
      Anxiety: ${entry.mood[0].anxiety}, Irritability: ${entry.mood[0].irritability},
      Energetic: ${entry.mood[0].energetic}, Calm: ${entry.mood[0].calm}, Confident: ${entry.mood[0].confident}</p>

      <p>Day Details: ${entry.dayDetails}</p>
      <p>ID: ${entry._id}</p>
      <p>-----------------------------</p>
    </div>
  `
  })
  $('#entry-display-get-all').html(entryHtml)
  // Reloading the mood form functionality: will work on if I have time
  // $('#mood').hide()
  // $('#mood-form-reload').show()
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

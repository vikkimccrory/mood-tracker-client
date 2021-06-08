'use strict'
const config = require('./../config')
const store = require('./../store')

const createEntry = function (data) {
  return $.ajax({
    method: 'POST',
    data: {
      entry: {
        mood: [data.entry.mood],
        dayDetails: data.entry.dayDetails
      }
    },
    url: config.apiUrl + '/entries',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

const getAllEntries = function () {
  return $.ajax({
    url: config.apiUrl + '/entries',
    method: 'GET',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

const destroyEntry = function (entryId) {
  return $.ajax({
    url: config.apiUrl + '/entries/' + entryId,
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

const updateEntry = function (entryId, data) {
  return $.ajax({
    method: 'PATCH',
    data: {
      entry: {
        mood: [data.entry.mood],
        dayDetails: data.entry.dayDetails
      }
    },
    url: config.apiUrl + '/entries' + entryId,
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}
module.exports = {
  createEntry,
  getAllEntries,
  destroyEntry,
  updateEntry
}

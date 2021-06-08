'use strict'

const getFormFields = require('./../../../lib/get-form-fields')
const ui = require('./ui')
const api = require('./api')

// CREATE

const onCreateEntry = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)

  api.createEntry(data)
    .then(ui.createEntrySuccess)
    .catch(ui.createEntryFailure)
}

// INDEX

const onGetAllEntries = function (event) {
  event.preventDefault()
  console.log('in onGetAllEntries')
  api.getAllEntries()
    .then(ui.getAllEntriesSuccess)
    .catch(ui.getAllEntriesFailure)
}

// DELETE

const onDestroyEntry = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)

  api.destroyEntry(data.entry.id)
    .then(ui.destroyEntrySuccess)
    .catch(ui.destroyEntryFailure)
}

// UPDATE

const onUpdateEntry = function (event) {
  event.preventDefault()
  console.log('in onUpdateEntry')

  const form = event.target
  const entryData = getFormFields(form)

  const entryId = entryData.entry.id

  api.updateEntry(entryId, entryData)
    .then(ui.updateEntrySuccess)
    .catch(ui.onError)
}

module.exports = {
  onCreateEntry,
  onGetAllEntries,
  onDestroyEntry,
  onUpdateEntry
}

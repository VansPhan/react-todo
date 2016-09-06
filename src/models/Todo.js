import axios from 'axios'

function TodoModel() {}

TodoModel.all = function() {
  var request = axios.get("https://epic-db.herokuapp.com/epics")
  return request
}

module.exports = TodoModel
const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });
//
// Todo.findOneAndRemove({}).then((todo) => {
//
// });

// Todo.findByIdAndRemove('5ac6fc6875f062844b965257').then((todo) => {
//   console.log(todo);
// });

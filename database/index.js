const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/immortal');

const oneLinerSchema = new mongoose.Schema({
  userInput: String,
  author: String,
  category: {
    type: String,
    required: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const OneLiner = mongoose.model('OneLiner', oneLinerSchema);

const saveToDb = (inputObj, callback) => {
  const newOneLiner = new OneLiner(inputObj);
  newOneLiner.save((err, response) => {
    if (err) {
      console.error('posterror: ', err);
      return callback(err, null);
    }
    return callback(null, response);
    
  });
};

const fetchOneLiners = callback => {
  OneLiner.find(
    {},
    null,
    { sort: { date: -1 }, limit: 50 },
    (err, oneLiners) => {
      if (err) {
        console.error('geterror: ', err);
        return callback(err, null);
      } 
      return callback(null, oneLiners);
    },
  )
};

const deleteOneLiner = (searchId, callback) => {
  OneLiner.deleteOne({ _id: searchId.id }, (err, response) => {
    if (err) {
      console.error('deleteError: ', err);
      return callback(err, null);
    }
    return callback(null, response);
    
  });
};

module.exports.saveToDb = saveToDb;
module.exports.fetchOneLiners = fetchOneLiners;
module.exports.deleteOneLiner = deleteOneLiner;

var mongoose = require('mongoose');
mongoose.connect('mongodb://<use>:<password>@<prefix>.mongolab.com:29793/<dbname>');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {

  var kittySchema = mongoose.Schema({
      name: String
  });

  var Kitten = mongoose.model('Kitten', kittySchema);

  var silence = new Kitten({ name: 'Silence' });
  silence.save();
});

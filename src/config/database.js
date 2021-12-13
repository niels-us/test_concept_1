const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// mongoose.connect('mongodb://127.0.0.1:27017/database_agraria', {
mongoose.connect('mongodb://mongo/database_agraria', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

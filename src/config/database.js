const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// mongoose.connect(uri, { server: { reconnectTries: Number.MAX_VALUE } });
// mongoose.connect('mongodb://127.0.0.1:27017/database_agraria', {
mongoose.connect('mongodb://mongo/database_agraria', {
    // server: { reconnectTries: Number.MAX_VALUE },
    useNewUrlParser: true,
    useUnifiedTopology: true
});

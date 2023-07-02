let express = require(`express`);
let app = express();
let port = 3005;

app.listen(port, function () {
    console.log(`http://localhost:${port}`);
});

// Настройка CORS
let cors = require('cors');
app.use(cors({ origin: 'http://localhost:5173' }));


// Настройка POST-запроса — JSON
app.use(express.json());

// Настройка БД

let DBhost = '127.0.0.1';
let DBport = '27017';
let DBname = 'play_words';

let mongoose = require('mongoose');
mongoose.connect('mongodb://'+ DBhost +':'+ DBport +'/'+ DBname);

let wordsSchema = new mongoose.Schema({
    text: String,
    word: [{
        value: String, 
        guessed: Boolean
    }]
})

let Word = mongoose.model('words', wordsSchema);

app.get('/words/all', async function (req, res) {
    let response = await Word.find()
    res.send(response)
})

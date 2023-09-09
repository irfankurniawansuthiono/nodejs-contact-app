const express = require('express');
const {loadContacts, pengecekanData, pengecekanFolder, addContact, removeContact}= require('./utils/contactHandler');
const cors = require('cors');
const iso3166 = require('iso-3166-1');
const { v4 } = require('uuid');

const app = express();
const port = 3000;
const allCountries = iso3166.all();

app.set('view engine', 'pug');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));


// API
app.post('/:id', (req, res)=>{
    const id = req.params.id;
    removeContact(id);
    res.redirect('http://localhost:3000');
})

app.use(cors({
    origin: 'http://localhost:3000',
}));

app.get('/api/usersDetails',(req,res)=>{
    res.json(loadContacts());
})

app.get('/api/COUNTRY',(req,res)=>{
    res.json(allCountries)
})


// POST
app.post('/',(req, res)=>{
        const newContact = {id : v4(),...req.body}
        addContact(newContact);
        res.redirect('/');
})


// ROUTES
app.get('/', (req, res) => {
    pengecekanFolder()
    pengecekanData()
    const contacts = loadContacts();
    res.render('index',{title : 'Home', contacts});
})





app.get('/*',(req,res)=>{
    res.status(404);
    res.render('filenotfound');
})



app.listen(port,()=>{
    console.log(`server is online! listening on port: ${port}\nUrl : http://localhost:${port}`);
})
const fs = require('fs');

const folderPath = './data';
const dataPath = './data/data.json';

// pengecekan folder
const pengecekanFolder = ()=>{
    if (!fs.existsSync(folderPath)){
        fs.mkdirSync(folderPath);
    }
}

// pengecekan data
const pengecekanData = () => { 
    if (!fs.existsSync(dataPath)){
        fs.writeFileSync(dataPath, "[]", "utf8");
    }
}

const readJSON = () => {
    const dataJSON = fs.readFileSync(dataPath,'utf-8')
    const convertJSON = JSON.parse(dataJSON)
    return convertJSON;
}

const jsonWriteHandlerAdd = (contact)=>{
    const readJSON = loadContacts();
    readJSON.push(contact);
    fs.writeFileSync(dataPath, JSON.stringify(readJSON, null, 4));
}

const jsonReplaceHandler = (contacts)=>{
    const contactsArray = Array.from(contacts)
    console.log(contactsArray.length)
    if(contactsArray.length > 0){
        fs.writeFileSync(dataPath, JSON.stringify(contacts, null, 4));
    }
    else{
        fs.writeFileSync(dataPath, '[]');
    }
}

const loadContacts = ()=>{
    return readJSON();
}

const addContact = (contact)=>{
    jsonWriteHandlerAdd(contact);
}

const removeContact = (id)=>{
    const contacts = readJSON();
    const newContacts = contacts.filter(contacts => contacts.id !== id);
    jsonReplaceHandler(newContacts);
}




function findContact (nama){
    const dataJSON = readJSON();
    const cariNama = dataJSON.find((contact)=>{
        if(contact.nama === nama){
            return {nama : contact.nama, nohp : contact.nohp, email: contact.email}
        }
    })
    return cariNama;
}

module.exports = {loadContacts, pengecekanData, pengecekanFolder, addContact, removeContact}
import './App.css';
// import Header from './Component/Header.js';
// import AddContact from './Component/AddContact';
import ContactList from './Component/ContactList';
import React, { useState, useEffect } from 'react'
import { uuid } from 'uuidv4'
import api from "./api/contacts"
// import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'


//retriving data from json servers
const retriveContact = async () => {
  const response = await api.get("/contacts")
  return response.data;
}

function App() {

  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");


  const AddContactHandler = async (contact) => {

    const request = {
      id: uuid(),
      ...contact
    }

    const response = await api.post("/contacts", request)
    setContacts([...contacts, response.data]);
  }

  useEffect(() => {
    // const LOCAL_STORAGE_KEY = "CONTACT";
    // const localStorageContact = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY,));
    // setContacts(localStorageContact);
    const getAllContacts = async () => {
      const contacts = await retriveContact();
      if (contacts)
        setContacts(contacts);
    }
    getAllContacts();
  }, [])


  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`);
    const newContact = contacts.filter((contact) => contact.id !== id)
    setContacts(newContact);
  }

  const searchHandler = (searchTerm) => {
      setSearchTerm(searchTerm);
  }
  //   const editContactHandler = async (id,data) => {
  //     await api.put(`/contact/${id}`, data);
  // }

  // useEffect(() => {
  //   // const LOCAL_STORAGE_KEY = "CONTACT";
  //   // localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  // }, [contacts])

  return (
    <>
      <div className="ui container">
        {/* <Router> */}
        {/* <Header /> */}
        {/* <Routes> 
            <Route path="/add" element={()=> <AddContact AddContactHandler={AddContactHandler} /> }/> 
            <Route path="/" element={()=><ContactList contacts={contacts} removeContactHandler={removeContactHandler}/> }/>
          </Routes> */}
        {/* </Router>  */}
        {/* <AddContact AddContactHandler={AddContactHandler} /> */}
        <ContactList
          key={"" + new Date().getTime()}
          contacts={contacts}
          removeContactHandler={removeContactHandler}
          value={searchTerm}
          searchHandler={searchHandler}
        />
      </div>
    </>
  );
}

export default App;

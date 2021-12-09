import React, { useRef } from 'react'
import ContactCard from './ContactCard';

const ContactList = (props) => {

    const { contacts } = props;
    const inputTag=useRef(null)
    const renderContactLList = contacts.map((contact) => {
        return (
            <ContactCard contact={contact} removeContactHandler={props.removeContactHandler} />
        )
    })

    const searchHandle = (e) => {
        e.preventDefault();
        props.searchHandler(inputTag.current.value);
    }


    return (
        <>
            <div style={{marginTop:"25px"}}>
            <div className="ui search">
                <div className="ui icon input">
                    <input
                        type="text"
                        placeholder="Search Contact"
                        className="prompt"
                        ref={inputTag}
                        value={props.value}
                        onSearchChange={(e)=>searchHandle(e)}      
                    />
                    <i className="search icon"></i>
                </div>
            </div>
            </div>
            <div className="ui container ">
                <br />
                <hr />
                <h2>Contact List</h2>
                {/* {renderContactLList} */}
            </div>
        </>
    )
}

export default ContactList

import React from 'react'

const ContactCard = (props) => {
    const { id,name,email } = props.contact;
    return (
        <div>
            <hr/>
            <div className="card item">
                <div className="content" style={{ display: "flex", justifyContent: "space-between" }}>
                    <div className="header">
                       <span> <h2>{name}</h2></span>
                        <span><h4>{email}</h4></span>
                    </div>
                    <div>
                        <i className="edit outline icon" style={{ color: "blue", fontSize: "20px", margin: "5px" }}
                        onClick={()=>props.removeContactHandler(id)}>
                        </i>
                        
                        <i className="trash alternate outline icon" style={{ color: "red", fontSize: "20px", margin: "5px" }}
                        onClick={()=>props.removeContactHandler(id)}>
                        </i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactCard

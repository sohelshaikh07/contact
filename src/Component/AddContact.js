import React, { Component } from 'react'

class AddContact extends Component {
    state = {
        name: "",
        email:''
    }
    add = (e) => {
        e.preventDefault();
        if (this.state.name === "" || this.state.email === "")
        {
            alert("All Fields Are Mandatory")
            return
        }
        this.props.AddContactHandler(this.state)
        this.setState({ name: "", email: "" });
    }
    
    render() {
        return (
            <div className="ui main">
                <h2>Add Contact</h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label>Name</label>
                        <input 
                        type="text" 
                        name="name"
                         placeholder="name" 
                        className=""
                        value={this.state.name}
                        onChange={(e)=>this.setState({name: e.target.value})}
                        />
                        
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input 
                        type="text" 
                        name="email" 
                        placeholder="Email" 
                        className=""
                        value={this.state.email}
                        onChange={(e)=>this.setState({email: e.target.value})}
                        />
                        
                    </div>

                    <div className="field">
                        <button type="submit" className="ui button blue" >Add</button>
                    </div>
                </form>
                
            </div>
        )
    }
}
export default AddContact;
import React, { Component } from 'react';



class AddUserForm extends Component {

    initialFormState = {
        form: {
            id: null,
            name: '',
            username: '',
        },
    }
    state = this.initialFormState;


    handleInputChange = event => {
        const { name, value } = event.target

        this.setState({
            form: { ...this.state.form, [name]: value },
        })
    }



    handleSubmit = event => {
        event.preventDefault()

        const { id, name, username } = this.state.form
        const { addUser } = this.props

        const newUser = {
            id,
            name,
            username,
        }

        addUser(newUser)
        this.setState(this.initialFormState)
    }

    render() {

        const { name, username } = this.state.form


        return (<form onSubmit={this.handleSubmit} >
            <div className="form-group">
                <label >Name</label>
                <input className="form-control" type="text"
                    name="name"
                    value={name}
                    onChange={this.handleInputChange} />
            </div>
            <div className="form-group">
                <label>Username</label>
                <input className="form-control" type="text"
                    name="username"
                    value={username}
                    onChange={this.handleInputChange} />
            </div>
            <br></br>
            <button type="submit" className="btn btn-primary" disabled={!name || !username} >Add new user</button>
        </form>);
    }
}

export default AddUserForm;
import React, { Component } from 'react';


class EditUserForm extends Component {

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
        const { updateUser } = this.props

        const updatedUser = {
            id,
            name,
            username,
        }

        updateUser(this.props.id, updatedUser)
        this.setState(this.initialFormState)
    }


    render() {

        const { name, username } = this.state.form

        return ( <form
      onSubmit= {this.handleSubmit}
    >
      <div className="form-group">
        <label >Name</label>
        <input className="form-control" type="text"
          name="name"
          value={name}
          onChange={this.handleInputChange} />
      </div>
      <div className="form-group">
        <label>Phone</label>
        <input className="form-control" type="number  "
          name="username"
          value={username}
          onChange={this.handleInputChange} />
      </div>
      <br></br>
      <button className="btn btn-warning">Update user</button>
      <button
        className="btn btn-warning"
        // onClick={() => Editing(false)}
      >
        Cancel
      </button>
    </form>);
    }
}

export default EditUserForm;
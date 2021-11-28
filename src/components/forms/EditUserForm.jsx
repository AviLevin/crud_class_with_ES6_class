import React, { Component } from 'react';


class EditUserForm extends Component {

  initialFormState = {
    form: {
      name: this.props.name,
      username: this.props.username,
    },
  }
  state = this.initialFormState;


  componentDidUpdate(prevProps, prevState) {
    if (prevProps.id !== this.props.id) {
      const user = this.props.getUserById(this.props.id)

      this.setState({
        form: {
          name: user.name,
          username: user.username,
        },
      })
    }
  }


  handleInputChange = event => {
    const { name, value } = event.target

    this.setState({
      form: { ...this.state.form, [name]: value },
    })
  }


  handleSubmit = event => {
    event.preventDefault()

    const { name, username } = this.state.form
    const { updateUser } = this.props

    const updatedUser = {
      id: this.props.id,
      name,
      username,
    }

    updateUser(this.props.id, updatedUser)
    this.setState(this.initialFormState)
  }




  render() {
    const { name, username } = this.state.form

    return (<form

      onSubmit={this.handleSubmit}

    >
      <div className="form-group">
        <label >Name</label>
        <input className="form-control" type="text"
          name="name"
          value={name}
          onChange={this.handleInputChange} />
      </div>
      <div className="form-group">
        <label>Username</label>
        <input className="form-control" type="number  "
          name="username"
          value={username}
          onChange={this.handleInputChange} />
      </div>
      <br></br>
      <button className="btn btn-warning">Update user</button>

      <button
        type="button"
        className="btn btn-warning"
        onClick={() => { this.props.cancelEditUser() }}
      >
        Cancel
      </button>
    </form>);
  }
}

export default EditUserForm;
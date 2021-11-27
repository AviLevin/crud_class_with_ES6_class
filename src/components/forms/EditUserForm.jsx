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

    console.log('prevProps', prevProps.id)
    console.log('tpID', this.props.id)
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
    console.log('tpid on render', this.props.id)
    console.log('name is', name)
   

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
        className="btn btn-warning"
      // onClick={() => Editing(false)}
      >
        Cancel
      </button>
    </form>);
  }
}

export default EditUserForm;
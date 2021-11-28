import React, { Component } from "react";
import UserTable from "./components/tables/UserTable";
import AddUserForm from "./components/forms/AddUserForm";
import EditUserForm from "./components/forms/EditUserForm";
class App extends Component {
  initialState = {
    users: [
      { id: 1, name: "Avraham", username: "Avi" },
      { id: 2, name: "Isaac", username: "Aizic" },
      { id: 3, name: "Jacob", username: "Jake" },
    ],
    currnetUser: [{ id: "", name: "", username: "" }],
    editing: false,
  };

  state = this.initialState;

  addUser = (user) => {
    const { users } = this.state;
    user.id = users.length + 1;
    this.setState({ users: [...users, user] });
  };

  deleteUser = (id) => {
    const { users } = this.state;
    this.setState({
      users: users.filter((user) => user.id !== id),
    });
    this.setState({ editing: false });
  };

  // edit________________________

  editUser = (user) => {
    this.setState({ editing: true });
    this.setState({ currnetUser: user });
  };

  updateUser = (id, updatedUser) => {
    const { users } = this.state;

    this.setState({
      users: users.map((user) => (user.id === id ? updatedUser : user)),
    });
    this.setState({ editing: false });
  };

  cancelEditUser = () => {
    this.setState({ editing: false });
  };

  getUserById = (id) => {
    const { users } = this.state;
    const u = users.filter((user) => user.id === id);
    return u[0];
  };

  render() {
    const { users, currnetUser} = this.state;

    return (
      <div className="container">
        <div className="row top">
          <h1>
            CRUD App with <span className="title">ES6 Class</span>{" "}
          </h1>
        </div>

        <div className="row">
          <div className="col-3">
            {this.state.editing ? (
              <div>
                <h2>Edit user</h2>
                <EditUserForm
                  updateUser={this.updateUser}
                  getUserById={this.getUserById}
                  {...currnetUser}
                  {...this.state}
                  cancelEditUser={this.cancelEditUser}
                />
              </div>
            ) : (
              <div>
                <h2>Add user</h2>
                <AddUserForm addUser={this.addUser} />
              </div>
            )}
          </div>

          <div className="col-9">
            <h2>View users</h2>
            <UserTable
              users={users}
              deleteUser={this.deleteUser}
              editUser={this.editUser}
            ></UserTable>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

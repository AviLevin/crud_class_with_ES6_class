import React, { Component } from 'react';




class UserTable extends Component {
  render() {

    const { users, deleteUser, editUser, getUserById } = this.props;

    return (<table className="table">
      <thead>
        <tr className="table-primary">
          <th>Name</th>
          <th>Username</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.length > 0 ? (
          users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>
                <button
                   onClick={() =>  {editUser(user)}}
                  className="button muted-button"
                >
                  Edit
                </button>
                
                <button
                  onClick={() =>  {deleteUser(user.id)}}
                  className="button muted-button"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={3}>No users</td>
          </tr>
        )}
      </tbody>
    </table>
    )


  }
}

export default UserTable;




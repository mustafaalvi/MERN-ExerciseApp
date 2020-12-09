import React, { Component } from 'react';
import axios from 'axios';

const User = props => (
    <tr>
        <td>{props.user.username}</td>
        <td>{props.user.height}</td>
        <td>{props.user.weight}</td>
    </tr>
)



export default class UserList extends Component {
    constructor(props) {
        super(props);

        this.state = {users: []};
    }

    componentDidMount() {
        axios.get('http://localhost:5000/viewusers/')
            .then(response => {
                this.setState({ users: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    userList() {
        return this.state.users.map(currentuser => {
            return <User user={currentuser} key={currentuser._id}/>;
        })
    }


    render() {
        return (
            <div>
                <h3>Logged Users</h3>
                <table className="table">
                    <thead className="thead-light">
                    <tr>
                        <th>Username</th>
                        <th>Height</th>
                        <th>Weight</th>
                    </tr>
                    </thead>
                    <tbody>
                    { this.userList() }
                    </tbody>
                </table>
            </div>
        )
    }

}


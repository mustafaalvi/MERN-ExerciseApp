import React, {Component} from 'react'; 
import axios from 'axios'; 

export default class CreateUser extends Component{
    constructor(props){
        super(props); 

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeHeight = this.onChangeHeight.bind(this);
        this.onChangeWeight = this.onChangeWeight.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            height: '',
            weight: '',
        }
    }

    onChangeUsername(e){
        this.setState({
            username: e.target.value,
        }); 
    }

    onChangeHeight(e){
        this.setState({
            height: e.target.value,
        });
    }

    onChangeWeight(e){
        this.setState({
            weight: e.target.value,
        });
    }


    onSubmit(e) {
        e.preventDefault();
    
        const user = {
            username: this.state.username,
            height: this.state.height,
            weight: this.state.weight,
        }
        
        console.log(user);
        
        axios.post('http://localhost:5000/users/add', user)
            .then(res => console.log(res.data)); 
        
        this.setState({
            username: '',
            height: '',
            weight: '',
        })
    }

    render() {
        return (
          <div>
            <h3>Create New User</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Username: </label>
                    <input  type="text"
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}
                    />
                </div>
                <div className="form-group">
                    <label>Height: </label>
                    <input  type="text"
                            required
                            className="form-control"
                            value={this.state.height}
                            onChange={this.onChangeHeight}
                    />
                </div>
                <div className="form-group">
                    <label>Weight: </label>
                    <input  type="text"
                            required
                            className="form-control"
                            value={this.state.weight}
                            onChange={this.onChangeWeight}
                    />
                </div>
              <div className="form-group">
                <input type="submit" value="Create User" className="btn btn-primary" />
              </div>
            </form>
          </div>
        )
      }
}
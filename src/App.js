import React, {Component} from 'react';
import Message from './message';
import Users from './users';
import Posts from './posts';
import Table from './table';
import './App.css';

class App extends Component {

  state = { query: "", posts: [], users:[], filteredUsers: [] };
  items  =  ['List Item 1','List Item 2', 'List Item 3'];
  isVisible = true;
  users = [];

  componentDidMount(){
    this.getUsers();
  }

  getPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(rsp=>rsp.json())
        .then(response =>{
            this.setState({posts:response});
            console.log(response)
        })
  }

    getUsers = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(rsp=>rsp.json())
            .then(response =>{
                this.setState({filteredUsers: response});
                this.users = response;
                console.log(response)
            })
    }

  createAlert = (e)=> {
    this.setState({ query: "hello" });
  }

  showOnConsole(){
    console.log("Button clicked");
  }

  queryUpdate = (e)=>{
      this.setState({query: e.target.value});
      this.filterUsers(e.target.value);
      console.log(e.target.value)
  }

    filterUsers = (name) => {
        const filteredUsers = this.users.filter((u)=>u.name.toLowerCase().includes(name.toLowerCase()));
        if(name != "" && filteredUsers.length > 0){
            this.setState({filteredUsers:filteredUsers})
        }else{
            this.setState({filteredUsers:this.users})
        }
    }

  render(){
      return (
          <div className="App">
              <header className="App-header">
                  <p>Hello world Users Table</p>
                  <input value={this.state.query} onChange={this.queryUpdate} placeholder="search for name"/><br/>
                  <Table users={this.state.filteredUsers}/>
              </header>
          </div>
      );
  }
}

export default App;

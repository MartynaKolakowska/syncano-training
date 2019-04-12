import Syncano from '@syncano/client';
import * as React from 'react';
import './App.css';

import logo from './logo.svg';


interface IState {
  firstname: string,
  lastname: string
}
  const s = new Syncano('young-frog-3698');

class App extends React.Component<any, IState> {

  constructor(props:any){
    super(props);
    this.state = {
      firstname: '',
      lastname: ''
    }
  }


  public handleSubmit = (e:any) => {
    const { firstname, lastname } = this.state;
    e.preventDefault();
    if(firstname.length > 0 && lastname.length > 0){
        s.get('hello-world/hello',{
          firstname,
          lastname
        }).then((result:any) => {
            alert('Hello '+ firstname + ' ' + lastname);
        })
    }else{
      alert('Fill the fields before calling the socket!');
    }
  }

  public handleChange = (e:any) => {
    this.setState({
      [e.target.name]: e.target.value
    } as IState)
  }

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <form onSubmit = {this.handleSubmit}>
            First name :  <input type ="text" className = "input" value={this.state.firstname} name = "firstname" placeholder = "First name" onChange = {this.handleChange}/><br/>
            Last name :  <input type ="text" className = "input" value={this.state.lastname} name = "lastname" placeholder = "Last name" onChange = {this.handleChange}/><br/>
            <input type="submit" value="Submit" />
          </form>
        </header>

      </div>
    );
  }
}

export default App;

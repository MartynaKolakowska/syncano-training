import Syncano from '@syncano/client';
import * as React from 'react';
import './App.css';

import Button from 'antd/lib/button';

import logo from './logo.svg';


interface IState {
  // firstname: string,
  // lastname: string,
  tasks: string[],
  task: ''
}
  const s = new Syncano('young-frog-3698');

class App extends React.Component<any, IState> {

  constructor(props:any){
    super(props);
    this.state = {
      // firstname: '',
      // lastname: '',
      tasks: [],
      task: ''
    }
  }

  public componentDidMount(){
    s.get('events/list')
    .then(response => {
      this.setState({
        tasks : response
      })
      // tslint:disable-next-line:no-console
      console.log(response)
    })
  }


  public handleSubmit = (e:any) => {
    const { task } = this.state;
    e.preventDefault();
    // if(firstname.length > 0 && lastname.length > 0){
    //     s.get('hello-world/hello',{
    //       firstname,
    //       lastname
    //     }).then((result:any) => {
    //         alert('Hello '+ firstname + ' ' + lastname);
    //     })
    // }else{
    //   alert('Fill the fields before calling the socket!');
    // }
    if(task.length > 0){
      s.put('events/create',{
        task
      }).then((result:any) => {
        // tslint:disable-next-line:no-console
        console.log(result);
        this.setState({
          tasks: [...this.state.tasks,result]
      })
    })
  }
}

  public handleChange = (e:any) => {
    this.setState({
      [e.target.name]: e.target.value
    } as IState)
  }

  public deleteButton = (item:any) => (event:any) => {
    s.get('events/remove',{
      id: item.id
    }).then((result:any) => {
      if(result.status === 'success'){
        this.setState({
          tasks : this.state.tasks.filter(i => i !== item)
        })
      }
    })
  }

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <form onSubmit = {this.handleSubmit}>
            TO DO :  <input type ="text" className = "input" name = "task" value = {this.state.task} placeholder = "to do" onChange = {this.handleChange}/><br/>
            {/* First name :  <input type ="text" className = "input" value={this.state.firstname} name = "firstname" placeholder = "First name" onChange = {this.handleChange}/><br/>
            Last name :  <input type ="text" className = "input" value={this.state.lastname} name = "lastname" placeholder = "Last name" onChange = {this.handleChange}/><br/> */}
            <input type="submit" value="Submit" />
          </form>
          <div>
            <ul>
              {
                this.state.tasks.length ===0 ?
                <h1> no tasks</h1>
                :
                this.state.tasks.map((item : any,i)=> {
                  return <li key={i}>
                          <p>{item.todo}</p>
                          <button onClick={this.deleteButton(item)}>Delete</button>
                          </li>
                })
              }
            </ul>
          </div>
          <Button type="primary">Button</Button>
        </header>

      </div>
    );
  }
}

export default App;

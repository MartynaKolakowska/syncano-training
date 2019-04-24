import * as React from "react";

import TodoInput from './TodoInput';

import { observer } from 'mobx-react';

interface IProps {
    todo : any
}

interface IState {
    editing : boolean
}

export default observer(
    class TodoItem extends React.Component<IProps, IState>{
       public state ={
            editing : false
        }

        public handleDoubleClick = () => {
            this.setState({
                editing: true
            })
        }

        public handleSave = (id : number, text : string) => {
            const {todo} = this.props;
            if(text.length === 0){
                todo.remove()
            } else {
                todo.edit(text)
            }
            this.setState({
                editing: false
            })
        }

       public render() {
            const {todo} = this.props
            let element;
            this.state.editing ? 
            element = (
                <TodoInput
                    text = {todo.text}
                    editing = {this.state.editing}
                    onSave = { (text : any) => this.handleSave(todo.id, text)}
                />
            )
            :
            element =(
                <div>
                    <input
                        type = "checkbox"
                        checked = {todo.done}
                        onChange = {()=> todo.doneTask()}
                    />
                    <label onDoubleClick={this.handleDoubleClick}>{todo.text}</label>
                    <button onClick={() => todo.remove()}>Remove</button>
                </div>
            )
            return (
                <li>
                    {element}
                </li>
            )
        }
    }
)
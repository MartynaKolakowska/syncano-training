import * as React from "react";

import TodoInput from './TodoInput';

import {Checkbox, Button, Divider} from 'antd'

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
                <div className="list-element">
                    <Checkbox
                        checked = {todo.done}
                        onChange = {()=> todo.doneTask()}
                    />
                    <label onDoubleClick={this.handleDoubleClick}>{todo.text}</label>
                    <Button 
                    ghost = {true}
                    type ="danger"
                    size ="small"
                    onClick={() => todo.remove()}
                    >Remove</Button>
                    <Divider />
                </div>
            )
            return (
                    <div>
                        {element}
                    </div>

            )
        }
    }
)
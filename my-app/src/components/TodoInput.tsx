import * as React from 'react';

import {Input, Button} from 'antd';

interface IProps {
    text?: string,
    onSave?: any,
    newTodo?: any,
    placeholder? : string,
    editing?:boolean
}

interface IState {
    text: string
}

export default class TodoInput extends React.Component<IProps, IState> {
       public state = {
            text:this.props.text || ""
        }

        public handleSubmit = (e : any) => {
            this.props.onSave(this.state.text);
            if(this.props.newTodo){
                this.setState({
                    text: ''
                })
            }
        }

        public handleChange =(e : any) => {
            this.setState({
                text: e.target.value
            })
        }


        public render() {
            return (
                <div>
                    <Input className ="input-width"
                        placeholder = {this.props.placeholder}
                        value = {this.state.text}
                        onChange = {this.handleChange}
                    />
                    <Button 
                        ghost={true}
                        type ="primary"
                        onClick = {this.handleSubmit}
                        >
                        Submit
                    </Button>
                        
                   
                </div>
            )
        }
}
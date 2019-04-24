import * as React from 'react';

import TodoInput from './TodoInput';


export default class Header extends React.Component<any,any> {

    public handleSave = (text : string) => {
        if(text.length !== 0){
            this.props.store.addTodo(text)
        }
    }

   public render(){
        return(
            <header>
                <TodoInput
                    onSave = {this.handleSave}
                    placeholder = "To do..."
                />
            </header>
        )
    }
}
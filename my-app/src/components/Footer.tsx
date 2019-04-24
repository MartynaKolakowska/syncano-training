import * as React from 'react';

import { observer } from 'mobx-react'

interface IProps {
    store:any
}

export default observer(
    class Footer extends React.Component<IProps, any>{

        public renderTodoCount = () => {
            const { activeCount } = this.props.store;
            const itemWord= activeCount === 1 ? "item" : "items";
            return(
                <span>
                    <strong>{activeCount || "No" }</strong> {itemWord} left
                </span>
            )
        }

        public renderClearButton = () => {
            const { doneCount, clearDone } = this.props.store;
            if(doneCount > 0) {
                return (
                    <button onClick = {() => clearDone()}>Clear completed</button>
                )
            }else {return null};
        }

       public render (){
            return (
                <footer>
                    {this.renderTodoCount()}
                    {this.renderClearButton()}
                </footer>
            )
        }
    }
)
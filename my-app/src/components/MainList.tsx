import * as React from 'react';

import Footer from './Footer';
import TodoItem from './TodoItem';

import { observer } from 'mobx-react'

interface IProps {
    store:any
}

export default observer(
        class MainList extends React.Component<IProps, any>{
           public handleClearCompleted = () => {
                this.props.store.clearDone()
            }

           public renderToggleAll = () => {
                const { store } = this.props;
                if( store.todos.length > 0){
                    return (
                        <span>
                            <input
                                id = "toggle-all"
                                type = "checkbox"
                                checked = {store.doneCount === store.todos.length}
                                onChange = { () => store.completeAll()}
                            />
                            <label htmlFor="toggle-all">Mark all as complete</label>
                        </span>
                    )
                }else {return null};
            }

           public renderFooter = (completedCount : any) => {
                const { store } = this.props;
                if(store.todos.length){
                    return <Footer  store = {store} />
                }else {return null};
            }

           public render() {
                return (
                    <section>
                        {this.renderToggleAll()}
                        <ul>
                            {this.props.store.todos.map((todo : any) => <TodoItem key={todo.id} todo={todo} />)}
                        </ul>
                        {this.renderFooter(this.props.store.completedCount)}
                    </section>
                )
            }
        }
)
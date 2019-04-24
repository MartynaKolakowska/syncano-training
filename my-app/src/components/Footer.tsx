import * as React from 'react';

import { observer } from 'mobx-react';

import {Typography, Button} from 'antd';

interface IProps {
    store:any
}

export default observer(
    class Footer extends React.Component<IProps, any>{

        public renderTodoCount = () => {
            const {Text} = Typography;
            const { activeCount } = this.props.store;
            const itemWord= activeCount === 1 ? "item" : "items";
            return(
                <Text>
                    <strong>{activeCount || "No" }</strong> {itemWord} left
                </Text>
            )
        }

        public renderClearButton = () => {
            const { doneCount, clearDone } = this.props.store;
            if(doneCount > 0) {
                return (
                    <Button 
                    type="dashed" 
                    onClick = {() => clearDone()}
                    size="small"
                    >
                    Clear completed</Button>
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
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

// import { getSnapshot, destroy, onSnapshot} from 'mobx-state-tree'

import TodoStore from './models/ToDo';

const store = TodoStore.create({
  todos: [
    {
      text: 'Task 1',
      done: false,
      id: 0,
    },
    {
      text: 'Task 2',
      done: false,
      id: 2,
    }
  ]
})

ReactDOM.render(
  <App store ={store} />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();

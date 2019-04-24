import { types,destroy, getRoot } from 'mobx-state-tree'
import { type } from 'os';

const Todo = types
    .model({
        done: false,
        id: types.identifierNumber,
        text: types.string,
    })
    .actions(self =>({
        remove(){
            getRoot(self).removeTodo(self)
        },
        edit(text) {
            self.text = text
        },
        doneTask(){
            self.done = !self.done
        }
    }))

const TodoStore = types
    .model({
        todos: types.array(Todo)
    })
    .views(self =>({
        get doneCount(){
            return self.todos.reduce((count,todo) => (todo.done ? count +1 : count), 0)
        },
        get activeCount(){
            return self.todos.length - self.doneCount
        }
    }))
    .actions(self =>({
       addTodo(text) {     
            // tslint:disable-next-line:no-console
            console.log(text)
           const id = self.todos.reduce((maxID,todo)=> Math.max(todo.id,maxID), -1) +1
           self.todos.unshift({
               id,
               text
           })
       },
       removeTodo(todo){
           destroy(todo)
       },
       completeAll(){
           const allChecked = self.todos.every(todo => todo.done)
           self.todos.forEach(todo => {
               if(!todo.done){
                   todo.doneTask()
               }
                })
       },
       clearDone(){
           self.todos.replace(self.todos.filter(todo => todo.done ===false))
       } 
    }))

export default TodoStore;
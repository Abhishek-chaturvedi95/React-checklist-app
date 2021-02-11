import React from "react"
import TodoItem from "./TodoItem"
import todosData from "./todosData"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: todosData
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(id) {
        this.setState(prev => {
            const updated = prev.todos.map(item => {
                if(item.id === id){
                    //Return a new object with only the completed value reversed
                    return{
                        ...item,
                        completed = !item.completed
                    }
                return item
            })
            return {
                todos : updated
            }
        })
    }
    
    render() {
        const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange = {this.handleChange}/>)
        
        return (
            <div className="todo-list">
                {todoItems}
            </div>
        )    
    }
}

export default App

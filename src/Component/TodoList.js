import React from 'react'
import TodoItem from './TodoItem'
import './TodoList.css'

function TodoList(props) {
    return (
        <ul className="goal-list">
            {props.items.map(goal=>(
                <TodoItem
                key={goal.id}
                id={goal.id}
                onDelete={props.onDeleteItem}>
                    {goal.text}
                </TodoItem>
            ))}
        </ul>
    )
}

export default TodoList

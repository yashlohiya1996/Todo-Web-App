import React from 'react'
import './TodoItem.css'

function TodoItem(props) {

    const deleteHandler=()=>{
        props.onDelete(props.id);
    };

    return (
        <li className="goal-item" onClick={deleteHandler}>
            {props.children}

        </li>
    );
};

export default TodoItem;

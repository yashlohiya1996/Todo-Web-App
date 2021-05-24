import React, {useState} from 'react'
import './TodoForm.css'

function TodoForm(props) {
    const [input, setInput]=useState('');
    
    const fromSubmit=(event)=>{
        event.preventDefault();
        props.onAddTodo(input);
    };

    const inputChange=event=>{
        setInput(event.target.value);
    };
    return (
            <form onSubmit={fromSubmit}>
                <div className='form-control'>
                    <label style={{marginLeft:'50%',fontFamily:'fantasy'}}>Todo List</label>
                    <input type='text' style={{borderRadius:'16px', borderColor:'black'}}/>
                </div>
                <button type='submit' onChange={inputChange} style={{marginLeft:'50%' , color: 'black', borderRadius:'12px', backgroundColor:'greenyellow'}}>Add Goal</button>    
            </form>
    );
};

export default TodoForm;

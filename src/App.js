import React,{useState} from 'react'
import './App.css';
import TodoForm from './Component/TodoForm';
import TodoList from './Component/TodoList';

function App() {
  
  const [courseGoal, setCourseGoal] = useState([
    {text: 'Read Book', id: 'g1'},
    {text: 'Walking', id:'g2'}
  ]);

  const addGoalHandler= enteredText =>{
    setCourseGoal(prevGoals =>{
      const updateGoals = [...prevGoals];
      updateGoals.unshift({text: enteredText, id: Math.random().toString()});
      return updateGoals;
    })
  }

  const deleteItemHandler=(goalId)=>{
    setCourseGoal(prevGoals=>{
      const updateGoals=prevGoals.filter(goal=>goal.id !== goalId);
      return updateGoals;
    });
  };

  let content =(<p style={{textAlign:'center'}}>No Goals Found, Add Goals Now!</p>)
  if(courseGoal.length>0){
    content=(
      <TodoList items={courseGoal} onDeleteItem={deleteItemHandler} />
    )
  }
  return (
    <div>
      <section id='goals-form'>
          <TodoForm onAddTodo={addGoalHandler} />
      </section>
      <section id='goals'>
        {content}
      </section>
    </div>
  );
}

export default App;

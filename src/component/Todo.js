import React from 'react';
import './Todo.css';
const Todo=({todo,Delete,Update})=>{
    // console.log(todo[0].item);
    let todoList=todo.length>0?todo.map((val)=>{
        return(
            <div className="collection-item" key={val.id}>
            <span>{val.item}</span>
<i className="fa fa-times red-text right" aria-hidden="true" onClick={Delete.bind(this,val.id)}></i>
<i className="fa fa-pencil red-text right" onClick={Update.bind(this,val.id)}  aria-hidden="true"></i>

            </div>
        );
    }):<p className="container-item center">Nothing to do</p>;
    // console.log(todoList);
    return(
        <div className="collection">
            {todoList}
        </div>
    );
}
export default Todo; 
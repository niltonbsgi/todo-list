import React from 'react';
import './todo-item.scss';

const TodoItem = ({title, subtitle, editClick, deleteClick}) => {
    return(
        <div className="card">
            <div className="content">
                <h3>{ title }</h3>
                <h5>{ subtitle }</h5>
                <button onClick={ editClick } className="button button-orange">Edit</button>
                <button onClick={ deleteClick } className="button button-red">Delete</button>
            </div>            
        </div>    
    )
}

export default TodoItem;
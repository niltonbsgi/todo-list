import React from 'react';
import './todo-add.scss';

const TodoAdd = ({ value, change, textAreaValue, textAreaChange, onClick}) => {
    return (
        <div className="card">
            <div className="content">
                <input placeholder="add title" value={ value } onChange={ change } />
                <textarea value={ textAreaValue } onChange={ textAreaChange }  placeholder="..."/>
                <div onClick={ onClick }  name="save" className="button-crud"><i className="far fa-save content"/></div>
            </div>               
        </div>  
    )
}

export default  TodoAdd;
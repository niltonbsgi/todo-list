import React from 'react';

const TodoHeader = ({title}) =>{
    return(
        <div style={{ borderBottom: '0.2px solid #C0C0C0' }}>
            <h1>{ title }</h1>
        </div>
    )
}

export default TodoHeader
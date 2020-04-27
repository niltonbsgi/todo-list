import React from 'react';
import TodoHeader from '../TodoHeader/todo-header';
import TodoAdd from '../TodoAdd/todo-add';
import TodoItem from '../TodItem/todo-item';

import './todo-menu.scss';

const CreateButton = ({onClick}) =>{
    return(
        <div className="margin-top">
            <div onClick={ onClick }  className="button-create"><p>Create New</p></div>
        </div>
    )
}

class TodoMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            detail: '',
            showCreate: false,
            list: []
        };
    }

    addItem() {

        var _list = this.state.list
        
        var item = { 
            id: _list.length + 1,
            title: this.state.title, 
            detail: this.state.detail
        }

        _list.push(item)

        this.setState({ 
            ...this.state, 
            list: _list,
            title:'',
            detail:'',
            showCreate: false
        })

    }

    removeItem(item){ debugger
        var list = this.state.list.filter(element => element.id != item.id)
        this.setState({...this.state, list: list})
    }

    render(){
        return (
            <>
                <TodoHeader title="TODO list"/>
                <CreateButton onClick={ ()=> this.setState({...this.state, showCreate: !this.state.showCreate}) } />
                { this.state.showCreate &&
                    <TodoAdd
                        value={ this.state.title } 
                        change={ (e)=> this.setState({...this.state.state, title: e.target.value })} 
                        textAreaValue={ this.state.detail } 
                        textAreaChange={ (e)=> this.setState({...this.state.state, detail: e.target.value })}  
                        onClick={ ()=> this.addItem() }
                    />
                }        

                { this.state.list.map((element, index)=>{
                    return (
                        <TodoItem 
                            id={index}
                            title={element.title} 
                            subtitle={element.detail}
                            deleteClick={ (e)=> this.removeItem(element)}/>
                    ) 
                  }) 
                }
            </>
        )
    }
}

export default TodoMenu
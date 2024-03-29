import React from 'react'
import {connect} from 'react-redux'
import {addTodo} from '../redux/actions'
class AddTodo extends React.Component {
    constructor(prop) {
        super(prop)
        this.state = {
            input: ''
        }
    }
    updateInput = (input) => {
        this.setState({
            input
            
        })
    }
    handleAddTodo = () => {
        this.props.addTodo(this.state.input)
        this.setState({
            input: ''
        })
    }
    render () {
        return (
            <div>
                <input onChange={e=>this.updateInput(e.target.value)} value={this.state.input}/>
                <button onClick={this.handleAddTodo}>Add A Todo List</button>
            </div>
        )
    }
}

export default connect(
    null,
    {addTodo}
)(AddTodo);
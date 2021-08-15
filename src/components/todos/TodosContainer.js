import React, {Component} from 'react';
import {connect} from 'react-redux';
import Todo from './Todo';

class TodosContainer extends Component {

    render() {
        return(
            <div>
                {this.props.todos.map((todo, index) => <Todo key={index} text={todo}/>)}
            </div>
        )
    }
}

// mapStateToProps = state => {
//     return {
//         todos: state.todos
//     }
// }

export default connect(state => ({todos: state.todos}))(TodosContainer);
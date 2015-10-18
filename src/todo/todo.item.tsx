import * as React from "react";

import { Todo } from './todo.interface';
import MouseEventHandler = __React.MouseEventHandler;

export default class TodoItem extends React.Component<TodoItemProps, {}> {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                {this.props.description}
                <button onClick={this.props.editTodo}>Edit</button>
                <button onClick={this.props.removeTodo}>X</button>
            </div>
        );
    }

}

//.bind(this, this.props.todo.id)
//<button onClick={this.props.removeTodo.bind(this, this.props.todo.id)}>Remove</button>

interface TodoItemProps {
    key: string;
    description: string;
    editTodo: MouseEventHandler;
    removeTodo: MouseEventHandler;
}






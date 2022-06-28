import React from 'react'
import Todo from '../models/todo'
import TodoItem from './TodoItem';
import { filter } from 'lodash';

const TodoList = ({ todos, setTodos }: Props) => {
	const deleteTask = (e: React.SyntheticEvent) => {
		setTodos(
			filter(todos, (todo: Todo) => {
				return todo.id !== selectedTask(e)
			})
		)
	}

	const selectedTask = (e: React.SyntheticEvent) => {
		return +e.currentTarget.getAttribute('data-index')!;
	}
	
	return (
		<div>
			{
			  todos.map((t) => (
					<TodoItem
						todo={t}
						onDeleteClick={deleteTask}
						key={t.id}
					/>
			  ))
			}
		</div>
	)

}

interface Props {
	todos: Todo[];
	setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export default TodoList

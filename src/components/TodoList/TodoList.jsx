import './TodoList.css';
import { fetchTodoList } from '../../api/fetch-todo-list';

const todoListResource = fetchTodoList();

const TodoList = () => {
	const todoList = todoListResource.read();

	return (
		<>
			<section className='section-wrapper'>
				<h2>Fetch Todos</h2>
				<ul className='todo-list'>
					{todoList.map((todo) => (
						<li key={todo.id}>{todo.title}</li>
					))}
				</ul>
			</section>
		</>
	);
};

export default TodoList;

import './App.css';
import { Suspense } from 'react';
import TodoList from './components/TodoList/TodoList';

function App() {
	return (
		<>
			<div className='page-title'>React Suspense</div>

			<Suspense fallback={<div className='loading'>Loading...</div>}>
				<TodoList />
			</Suspense>
		</>
	);
}

export default App;

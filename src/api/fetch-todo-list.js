import { wrapPromise } from './wrapPromise';

export const fetchTodoList = () => {
	// const promise = fetch('https://jsonplaceholder.typicode.com/todos').then(
	// 	(res) => res.json()
	// );

	// for loading demo...
	const promise = new Promise((resolve, reject) => {
		setTimeout(() => {
			fetch('https://jsonplaceholder.typicode.com/todos')
				.then((res) => res.json())
				.then((data) => {
					resolve(data);
				})
				.catch((error) => {
					reject(error);
				});
		}, 3000);
	});

	return wrapPromise(promise);
};

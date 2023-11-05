export const wrapPromise = (promise) => {
	let status = 'pending';
	let result;

	const suspender = promise.then(
		(res) => {
			status = 'fulfilled';
			result = res;
		},
		(err) => {
			status = 'rejected';
			result = err;
		}
	);

	const read = () => {
		switch (status) {
			case 'pending':
				throw suspender;
			case 'rejected':
				throw result;
			default:
				return result;
		}
	};

	return { read };
};

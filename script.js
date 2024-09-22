const button = document.getElementById('btn');
const outputDiv = document.getElementById('output');
const input = document.getElementById('ip');

function asyncOperation(result, delay) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(result);
		}, delay);
	});
}

button.addEventListener('click', () => {
	outputDiv.textContent = '';

	const number = Number(input.value);

	asyncOperation(number, 2000)
		.then((result) => {
			outputDiv.textContent = `Result: ${result}`;
			return asyncOperation(result * 2, 1000);
		})
		.then((result) => {
			outputDiv.textContent = `Result: ${result}`;
			return asyncOperation(result - 3, 1000);
		})
		.then((result) => {
			outputDiv.textContent = `Result: ${result}`;
			return asyncOperation(result / 2, 1000);
		})
		.then((result) => {
			outputDiv.textContent = `Result: ${result}`;
			return asyncOperation(result + 10, 1000);
		})
		.then((finalResult) => {
			outputDiv.textContent = `Final Result: ${finalResult}`;
		})
		.catch((error) => {
			outputDiv.textContent = `Error: ${error.message}`;
		});
});
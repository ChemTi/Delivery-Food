export const partners = () => {
	const renderItems = (data) => {
		data.forEach(elem => {
			console.log(JSON.stringify(elem));
		});
	}

	fetch('https://test-f9fd4-default-rtdb.firebaseio.com/db/partners.json')
		.then((response) => response.json())
		.then((data) => {
			renderItems(data);
		})
		.catch((error) => {
			console.log(error);
		})
}
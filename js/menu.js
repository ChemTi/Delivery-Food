const restourant = `food-band`;

const renderItems = (data) => {
	data.forEach(eleme => {
		console.log(JSON.stringify(eleme));
	});
}

fetch(`./db/${restourant}.json`)
	.then((response) => response.json())
	.then((data) => {
		renderItems(data);
	})
	.catch((error) => {
		console.log(error);
	})  
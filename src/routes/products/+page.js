import Product from './product.svelte';

export const load = async (loadEvent) => {
	console.log('Load function called in page.js');
	const { data } = loadEvent;
	return {
		...data,
		Component: Product
	};
};

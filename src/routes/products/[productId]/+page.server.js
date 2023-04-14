import { redirect } from '@sveltejs/kit';

export const load = async (serverLoadEvent) => {
	const { fetch, params } = serverLoadEvent;
	const { productId } = params;
	if (productId > 20) {
		// throw error(404, {
		// 	message: 'Oh no! Looks like the product is not available',
		// 	hint: 'Try a different product'
		// });
		throw redirect(307, '/products');
	}
	const response = await fetch(`http://localhost:4000/products/${productId}`);
	const product = await response.json();
	return {
		title: 'Product Details:',
		product: product
	};
};

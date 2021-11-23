const fetch = require('node-fetch');

const productController = {
  getproducts: async (req, res) => {
    let query = req.query.q;
    const queryLimit = 4;
    const apiMeli = `https://api.mercadolibre.com/sites/MLA/search?q=${query}&limit=${queryLimit}`;
		
		const response = await fetch(apiMeli).then(res=> res.json())

		const author = {
			name: "Pol",
			lastname: "Suar"
		};

		const categories =
			response.filters.length && response.filters[0].values
				? response.filters[0].values[0].path_from_root.map(category => category.name)
				: [];
				
		const items = response.results.map(product => {
			const [amount, decimals] = product.price.toString().split(".");
			return {
				id: product.id,
				title: product.title,
				price: {
					currency: product.currency_id,
					amount: parseInt(amount),
					decimals: parseInt(decimals)
				},
				picture: product.thumbnail,
				condition: product.condition,
				free_shipping: product.shipping.free_shipping
			};
		})

		const productsData = {
			author,
			categories,
			items
		}
		return res.status(200).send(productsData)
	},

	getSingleProduct: async (req, res)=> {
		let query = req.params.id;
		const productUrl = `https://api.mercadolibre.com/items/${query}`;
		const descriptionUrl= `https://api.mercadolibre.com/items/${query}/description`;

		const product = await fetch(productUrl).then(res=> res.json())
		const description = await fetch(descriptionUrl).then(res=> res.json())
		const [amount, decimals] = product.price.toString().split(".");

		const singleProductData =  {
			author: {
				name: "Pol",
				lastname: "Suar"
			},
			item: {
				id: product.id,
				title: product.title,
				price: {
					currency: product.currency_id,
					amount: parseInt(amount),
					decimals: parseInt(decimals)
				},
				picture: product.thumbnail,
				condition: product.condition,
				free_shipping: product.shipping.free_shipping,
				sold_quantity: product.sold_quantity,
				description: description.plain_text
			}
		}
		return res.status(200).send(singleProductData)
	}
}

module.exports = productController
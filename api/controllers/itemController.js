//require("dotenv").config();
const express = require("express");
const router = express.Router();


const itemController = {
  getItems: (req, res) => {
    let query = req.query.q;
    const queryLimit = 4;
    const apiMeli = `https://api.mercadolibre.com/sites/MLA/search?q=${query}&limit=${queryLimit}`;

		router.get(apiMeli, (req, res) =>{
			const author = {
				name: "Pol",
				lastname: "Suar"
			};

			const categories =
				res.filters.length && res.filters[0].values
					? res.filters[0].values[0].path_from_root.map(category => category.name)
					: [];
					
			const items = res.results
				.map(item => {
					const [amount, decimals] = item.price.toString().split(".");
	
					return {
						id: item.id,
						title: item.title,
						price: {
							currency: item.currency_id,
							amount: parseInt(amount),
							decimals: parseInt(decimals)
						},
						picture: item.thumbnail,
						condition: item.condition,
						free_shipping: item.shipping.free_shipping
					};
				})
				.slice(0, queryLimit);

			return {
				author,
				categories,
				items
			}
			})
		.then(items => res.json(items))
  },


}


module.exports = itemController
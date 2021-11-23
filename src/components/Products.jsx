import React,{ useEffect}  from 'react'
import { useSelector, useDispatch} from "react-redux";
import { Breadcrumb } from '../components/Breadcrumb'
import { Link } from 'react-router-dom';
import { getProducts } from "../state/products";
import "../assets/css/Products.scss"

export default function Products() {
	const products = useSelector((state) => state.products);
	let params = new URLSearchParams(window.location.search)
	let query = params.get("search");
	const dispatch = useDispatch();
	
	useEffect(() => {
    dispatch(getProducts(query));
  }, []);

	return (
		<>
			<div className="body">
				<Breadcrumb />
					<div className="description" >
						{products.items && products.items.map(item => (
							<Link to={`/items/${item.id}`} key={item.id}>
									<div className="row" >
											<div className="column left" >
													<img className="product-image"
															src={item && item.picture} alt={item.title} />
											</div>
											<div className="column middle" >
													<p>
															<span className="product-price">{item && `$ ${item.price.amount}`}</span>{item.price.decimals && <span className="item-price-decimals" >{item.price.decimals}</span>}
															{item.free_shipping && <span className="dot-green" />}
													</p><br />
													<p>
															<span className="title">{item && `${item.title}`}</span>
													</p>
													<p>
														<span className="title">{item.condition === 'new' ? "Nuevo" : "Usado"}</span>
													</p>
											</div>
											<div className="column right" ><p>{products.author && `${products.author.name} ${products.author.lastname}`}</p></div>
									</div>
									<hr/>
							</Link>
						))}
				</div>
			</div>
		</>
	)
}

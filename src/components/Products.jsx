import React,{ useEffect}  from 'react'
import { useSelector, useDispatch} from "react-redux";
import { Breadcrumb } from '../components/Breadcrumb'
import { Link } from 'react-router-dom';
import { getProducts } from "../state/products";

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
			<Breadcrumb />
			<div className=" center width-90-percent">
					<div className="detail" >
						{products.items && products.items.map(item => (
							<Link to={`/items/${item.id}`} key={item.id}>
									<div className="row full-width" >
											<div className="column side" >
													<img className="object-contain"
															src={item && item.picture} alt={'Foto del producto'} width="180" height="180" />
											</div>
											<div className="column middle-50 text-left" >
													<p>
															<span className="price-products">{item && `${item.price.currency} $ ${item.price.amount}`}</span>
															{item.free_shipping && <span className="dot-green" />}
													</p><br />
													<p>
															<span className="title">{item && `${item.title}`}</span>
													</p>
											</div>
											<div className="column side" ><p>{products.author && `${products.author.name} ${products.author.lastname}`}</p></div>
									</div>
									<hr/>
							</Link>
						))}
				</div>
			</div>
		</>
	)
}

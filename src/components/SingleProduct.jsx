import React, { useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { getSingleProduct } from '../state/singleProduct';
import { useParams } from 'react-router-dom'
import { Breadcrumb } from '../components/Breadcrumb';
//import './styles.css'

export default function SingleProduct() {
	let { id } = useParams();
	const singleProduct = useSelector((state) => state.singleProduct);
	const dispatch = useDispatch();
	useEffect(() => {
    dispatch(getSingleProduct(id));
  }, []);

	return (
		<>
			<Breadcrumb />
			{singleProduct.item?
			<div className=" center width-90-percent">
					<div className="detail" >
							<div className="row full-width">
									<div className="column middle-75" >
											<img src={singleProduct && singleProduct.item.picture} alt={'Foto del producto'} className="img-responsive" />
											<div className="text-left">
													<h2>Descripción del producto</h2>
													<p>{singleProduct && singleProduct.item.description}</p>
											</div>
									</div>
									<div className="column side" >
											<div className="text-left">
													<p className="subtitle">
															{singleProduct && `${singleProduct.item.condition.toUpperCase()} - ${singleProduct.item.sold_quantity} vendidos `}
													</p>
													<span className="title">{singleProduct && `${singleProduct.item.title}`}</span>
													<p>
															<span className="price">{singleProduct && `$ ${singleProduct.item.price.amount}`}</span>
															<span className="price-decimals">{singleProduct && singleProduct.item.price.decimals}</span>
													</p>
											</div>
											<div >
													<button className="btn-buy" type="submit">Comprar</button>
											</div>
									</div>
							</div>
					</div>
			</div>
			: null
			}
		</>
	)
}

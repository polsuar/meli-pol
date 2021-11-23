import React, { useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { getSingleProduct } from '../state/singleProduct';
import { useParams } from 'react-router-dom'
import { Breadcrumb } from '../components/Breadcrumb';
import "../assets/css/SingleProduct.scss"

export default function SingleProduct() {
	let { id } = useParams();
	const singleProduct = useSelector((state) => state.singleProduct);
	const dispatch = useDispatch();
	useEffect(() => {
    dispatch(getSingleProduct(id));
  }, []);

	return (
		<>
			{singleProduct.item?
			<div className="body">
			<Breadcrumb />
				<div className="container" >
					<div className="row">
						<div className="column left-70" >
							<img
								src={singleProduct && singleProduct.item.picture}
								alt={'Foto del producto'}
								className="img-responsive" />
							<div>
								<h2 className="description-title">Descripción del producto</h2>
								<p className="description-text">{singleProduct && singleProduct.item.description}</p>
							</div>
						</div>
						<div className="column right-30 col col-4" >
							<div>
								<p className="single-subtitle">
									{singleProduct && `${singleProduct.item.condition === 'new' ? "Nuevo" : "Usado"} - ${singleProduct.item.sold_quantity} vendidos `}
								</p>
								<span className="single-title">{singleProduct && `${singleProduct.item.title}`}</span>
								<p>
									<span className="single-price">{singleProduct.item && `$ ${singleProduct.item.price.amount}`}</span>
									{singleProduct.item.price.decimals && <span className="single-price-decimals" >{singleProduct.item.price.decimals}</span>}
									{singleProduct.item.free_shipping && <span className="single-free-shipping" />}
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

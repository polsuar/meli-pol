import React, { useState } from "react";
import { useNavigate  , Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getProducts } from "../state/products";
import logo from '../assets/images/Logo_ML@2x.png'

export default function NavBar() {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  let navigate = useNavigate();

  function searchQuery(event) {
		
    event.preventDefault();
		dispatch(getProducts(query));
    navigate(`/items?search=${query}`);
  }

  return (
    <form className="nav-form" role="search" onSubmit={searchQuery}>
			<Link to="/">
				<img className="nav-logo" src={logo} alt="Mercado Libre Argentina - Donde comprar y vender de todo" />
			</Link> 
      <input
        type="text"
        className="nav-input"
        placeholder="Nunca dejes de buscar"
        onChange={event => setQuery(event.target.value)}
      />
      <button type="submit" className="navbar-btn" />
    </form>
  );
}



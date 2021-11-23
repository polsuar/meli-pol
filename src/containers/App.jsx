import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Navbar from "../components/Navbar";
import Products from "../components/Products"
import SingleProduct from "../components/SingleProduct"


export default function App() {

	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="items" element={<Products />} />
				<Route path="items/:id" element={<SingleProduct />} />
			</Routes> 
		</>
	)
}



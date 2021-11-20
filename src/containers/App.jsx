import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Navbar from "../components/Navbar";
import Products from "../components/Products"
import SingleProduct from "../components/SingleProduct"
//import BreadCrumb from "../components/BreadCrumb"


export default function App() {

	return (
		<>
			<Navbar />
 			<Routes>
				<Route exact path="/" element={<Home />} />

				<Route exact path="/items" element ={<Products />} />

				<Route exact path="/items/:id"
					render={({ match }) => <SingleProduct id={match.params.id} />}
				/>

			</Routes> 
		</>
	)
}



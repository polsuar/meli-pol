import React from 'react'
import { useSelector } from "react-redux";
//import "./Breadcrumb.scss";

export function Breadcrumb() {
	const categories = useSelector((state) => state.products.categories);
  return (
    <ul className={"breadcrumb"}>
      {categories && categories.map(category => (
          <li className={"breadcrumb-item"} key={category}>
            {category}
          </li>
        ))}
    </ul>
  );
}

import React from "react";
import Product from "./pages/Product";
import AddProduct from "./pages/AddProduct";
import Dashboard from "./components/Dashboard";
const App = () => {
	const urlParams = new URLSearchParams(window.location.search);
	// berdasarkan slug
	if (urlParams.get("page") == "dashboard") {
		return <Dashboard />;
	}
	if (urlParams.get("page") == "product2") {
		return <Product />;
	}
	if (urlParams.get("page") == "products") {
		return <Product />;
	}
	if (urlParams.get("page") == "add_product") {
		return <AddProduct />;
	}
};

export default App;

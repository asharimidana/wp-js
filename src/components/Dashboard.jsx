import React, { useState, useEffect } from "react";
import axios from "axios";
import AddProduct from "./AddProduct";

const Dashboard = () => {
	const [id, setId] = useState("");
	const [datax, setData] = useState([]);
	const [showModal, setShowModal] = useState(false);
	const [add, setAdd] = useState(false);

	// togle modal
	const fromChild = (data) => {
		setAdd(data);
	};

	// GET /users
	const getData = async (e) => {
		try {
			e.preventDefault();
			const response = await axios.get("https://jsonplaceholder.org/users");
			setData(response.data);
			console.log(response.data);
			return response.data;
		} catch (err) {}
	};

	return (
		<div className="dashboard  bg-yellow-500">
			{add ? <AddProduct setter={add} fromChild={fromChild} /> : null}
			<div className="border pl-1 py-4">
				<h3 className="text-white">TOKO PENJUALAN LAPTOP KENDARI</h3>
				<p>
					contoh Dashboard component at <code>src/components/Dashboard.jsx</code>
				</p>

				<button
					type="button"
					className="bg-violet-500 hover:bg-violet-700 mr-2 py-1 px-2 rounded text-white"
					onClick={() => setAdd(!add)}
				>
					Add
				</button>

				<button
					type="button"
					className="bg-violet-500 hover:bg-violet-700 mr-2 py-1 px-2 rounded text-white"
					onClick={getData}
				>
					Get User
				</button>
				<button
					onClick={() => setData([])}
					className="bg-red-500 hover:bg-red-700 mr-2 py-1 px-2 rounded text-white"
				>
					Delete
				</button>

				{datax.map((item, index) => (
					<div className="bg-primary">
						<ul>{item.id}</ul>
						<ul>{item.email}</ul>
					</div>
				))}
			</div>
		</div>
	);
};

export default Dashboard;

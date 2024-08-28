import React, { useState, useEffect } from "react";
import axios from "axios";

const Product = () => {
	const [id, setId] = useState("");
	const [datax, setData] = useState([]);
	useEffect(() => {}, []);

	const getData = async (e) => {
		try {
			e.preventDefault();
			const response = await axios.get("https://jsonplaceholder.org/users");
			setData(response.data);
			return response.data;
		} catch (err) {}
	};
	return (
		<div className="dashboard  p-2 ">
			<h2 className="text-dark text-xl py-5">Produk Saya</h2>
			<div className="bg-slate-50 p-5">
				{/* Search products */}
				<div className="flex gap-x-2 pb-4">
					<div className="flex-1 mt-0 ">
						<input
							id="city"
							name="nama_produk"
							type="text"
							autoComplete="address-level2"
							className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							placeholder="Cari Nama Produk, ID Produk"
						/>
					</div>
					<div className="flex-1 mt-0">
						<input
							id="region"
							name="kategori"
							type="text"
							autoComplete="address-level1"
							className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							placeholder="Cari berdasarkan kategori"
						/>
					</div>
					<button
						type="submit"
						className="sm:col-span-2 rounded-md bg-slate-50 px-2 py-1 text-sm font-normal text-blue-500 border border-1 border-blue-500 shadow-sm hover:bg-slate-100 "
					>
						Terapkan
					</button>{" "}
					<button
						type="submit"
						className="sm:col-span-2 rounded-md bg-slate-50 px-2 py-1 text-sm font-normal text-blue-500 border border-1 border-blue-500 shadow-sm hover:bg-slate-100 "
					>
						Atur Ulang
					</button>{" "}
				</div>
				{/* End search products */}

				<>
					<table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
						<thead className="bg-gray-200">
							<tr className="">
								<th className="px-6 py-2 text-xs text-gray-500">Produk</th>
								<th className="px-6 py-2 text-xs text-gray-500">Penjualan</th>
								<th className="px-6 py-2 text-xs text-gray-500">Harga</th>
								<th className="px-6 py-2 text-xs text-gray-500">Stok</th>
								<th className="px-6 py-2 text-xs text-gray-500">Aksi</th>
								<th className="px-6 py-2 text-xs text-gray-500">Delete</th>
							</tr>
						</thead>
						<tbody className="bg-white divide-y divide-gray-300">
							<tr className="whitespace-nowrap">
								<td className="px-6 py-4 text-sm text-gray-500">1</td>
								<td className="px-6 py-4">
									<div className="text-sm text-gray-900">Adam joe</div>
								</td>
								<td className="px-6 py-4">
									<div className="text-sm text-gray-500">adamjoe@example.com</div>
								</td>
								<td className="px-6 py-4 text-sm text-gray-500">2021-12-12</td>
								<td className="px-6 py-4">
									<a href="#">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="w-6 h-6 text-blue-400"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
											/>
										</svg>
									</a>
								</td>
								<td className="px-6 py-4">
									<a href="#">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="w-6 h-6 text-red-400"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
											/>
										</svg>
									</a>
								</td>
							</tr>
							<tr className="whitespace-nowrap">
								<td className="px-6 py-4 text-sm text-gray-500">2</td>
								<td className="px-6 py-4">
									<div className="text-sm text-gray-900">Jon doe</div>
								</td>
								<td className="px-6 py-4">
									<div className="text-sm text-gray-500">jhondoe@example.com</div>
								</td>
								<td className="px-6 py-4 text-sm text-gray-500">2021-1-12</td>
								<td className="px-6 py-4">
									<a href="#">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="w-6 h-6 text-blue-400"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
											/>
										</svg>
									</a>
								</td>
								<td className="px-6 py-4">
									<a href="#">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="w-6 h-6 text-red-400"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 
                4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
											/>
										</svg>
									</a>
								</td>
							</tr>
							<tr className="whitespace-nowrap">
								<td className="px-6 py-4 text-sm text-gray-500">3</td>
								<td className="px-6 py-4">
									<div className="text-sm text-gray-900">Emily chan</div>
								</td>
								<td className="px-6 py-4">
									<div className="text-sm text-gray-500">emilychan@example.com</div>
								</td>
								<td className="px-6 py-4 text-sm text-gray-500">2021-1-12</td>
								<td className="px-6 py-4">
									<a href="#">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="w-6 h-6 text-blue-400"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 
                112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
											/>
										</svg>
									</a>
								</td>
								<td className="px-6 py-4">
									<a href="#">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="w-6 h-6 text-red-400"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 
                4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
											/>
										</svg>
									</a>
								</td>
							</tr>
						</tbody>
					</table>
					.
				</>

				<hr className="border border-1 border-blue-500 my-4" />
				<p>
					ashari midana Dashboard component at <code>src/components/Dashboard.jsx</code>
				</p>
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

export default Product;

import React, { useState, useEffect } from "react";
import axios from "axios";
import MyModal from "../components/dialogs/OpenDial.jsx";
import Example from "../components/dialogs/Example.jsx";
import {
	Description,
	Dialog,
	DialogPanel,
	DialogTitle,
	Menu,
	MenuButton,
	MenuItem,
	MenuItems,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

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

	// handling dialog
	let [isOpen, setIsOpen] = useState(true);
	const handleDeactivate = async () => {
		await fetch("/deactivate-account", { method: "POST" });
		setIsOpen(false);
	};
	return (
		<div className="dashboard  p-2 ">
			<h2 className="text-dark text-xl py-5">Produk Saya</h2>
			<Example />
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
							</tr>
						</thead>
						<tbody className="bg-white divide-y divide-gray-300">
							<tr className="whitespace-nowrap">
								<td className="px-6 py-4 text-sm text-gray-500">3</td>
								<td className="px-6 py-4">
									<div className="text-sm text-gray-900">Emily chan</div>
								</td>
								<td className="px-6 py-4">
									<div className="text-sm text-gray-500">emilychan@example.com</div>
								</td>
								<td className="px-6 py-4 text-sm text-gray-500">2021-1-12</td>
								<td className="px-6 py-4 ">
									<a
										className="text-blue-500 p-1 block hover:text-blue-800 border-0 avtive:bg-dark"
										href="#"
									>
										Ubah
									</a>
									<Menu as="div" className="relative inline-block text-left">
										<div>
											<MenuButton className="inline-flex w-full justify-center  rounded-md  p-1 text-sm  text-blue-500 ">
												Lainnya
												<ChevronDownIcon
													aria-hidden="true"
													className="-mr-1 h-5 w-5 text-gray-400"
												/>
											</MenuButton>
										</div>

										<MenuItems
											transition
											className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
										>
											<div className="py-1">
												<MenuItem>
													<a
														href="#"
														className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
													>
														Hapus
													</a>
												</MenuItem>
												<MenuItem>
													<a
														href="#"
														className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
													>
														Arsipkan
													</a>
												</MenuItem>
											</div>
										</MenuItems>
									</Menu>
								</td>
							</tr>
						</tbody>
					</table>
					.
				</>
			</div>
		</div>
	);
};

export default Product;

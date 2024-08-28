import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";

export default function MyModal() {
	let [isOpen, setIsOpen] = useState(false);

	function open() {
		setIsOpen(true);
	}

	function close() {
		setIsOpen(false);
	}

	return (
		<>
			<Button
				onClick={open}
				className="rounded-md bg-black/20 py-2 px-4 text-sm font-medium text-white focus:outline-none data-[hover]:bg-black/30 data-[focus]:outline-1 data-[focus]:outline-white"
			>
				Open dialog
			</Button>

			<Dialog
				open={isOpen}
				as="div"
				className="relative bg-slate-300 z-10 focus:outline-none"
				onClose={close}
				__demoMode
			>
				<div className="fixed w-50 inset-center z-10 overflow-y-auto h-80 bg-gray-200 rounded rounded-md">
					<Button
						className="inline-flex items-center gap-2 rounded-md bg-red-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-red-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-red-700"
						onClick={close}
					>
						x
					</Button>
					<div className="flex items-center justify-center p-4">
						<DialogPanel
							transition
							className=" max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-200 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
						>
							<DialogTitle as="h3" className="text-base/7 font-medium text-dark">
								Payment successful
							</DialogTitle>
							<p className="mt-2 text-sm/6 text-gray-500">
								Your payment has been successfully submitted. We’ve sent you an email with all of the
								details of your order.
							</p>
							<div className="mt-4">
								<p className="mt-2 text-sm/6 text-gray-500">
									Your payment has been successfully submitted. We’ve sent you an email with all of
									the details of your order.
								</p>
								<Button
									className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
									onClick={close}
								>
									Got it, thanks!
								</Button>
							</div>
						</DialogPanel>
					</div>
				</div>
			</Dialog>
		</>
	);
}

const NavigationBar = () => {
	return (
		<div className=" h-full w-1/5 text-center ">
			<ul className="text-left mb-40">
				<li className="py-3 bg-black text-white pl-10">
					{/* <img src={homelogo} className="w-8" /> */}
					Dashboard
				</li>
				<li className="py-3 pl-10 cursor-pointer transition-all duration-200 ease-out  hover:bg-black hover:text-white">
					My Transactions
				</li>
				<li className="py-3 pl-10 cursor-pointer transition-all duration-200 ease-out  hover:bg-black hover:text-white ">
					Account
				</li>
				<li className="py-3 pl-10 cursor-pointer transition-all duration-200 ease-out  hover:bg-black hover:text-white">
					Disputes
				</li>
				<li className="py-3 pl-10 cursor-pointer transition-all duration-200 ease-out  hover:bg-black hover:text-white">
					Earn money
				</li>
			</ul>
			<div className="mb-auto">
				<p className="text-xs text-gray-500">Account Type: Individual | Business</p>
			</div>
			<div className="flex ml-4 mt-4">
				<div className="bg-black text-yellow-500 px-2 py-3 rounded-tl-xl rounded-bl-xl">
					<p className="text-sm">Buying Active</p>
				</div>
				<div className="bg-gray-300 px-2 py-3 rounded-tr-xl rounded-br-xl">
					<p className="text-sm">Switch To Business</p>
				</div>
			</div>
		</div>
	);
};

export default NavigationBar;

import NavigationBar from '../../Layout/Navigation';

const LandingPage = () => {
	return (
		<div className="h-screen">
			<div className="flex mt-10">
				<NavigationBar />
				<div className="flex-1 px-12">
					<h1 className="font-bold text-3xl">
						Hi, <span className="text-yellow-500">Austine</span>!
					</h1>
				</div>
			</div>
		</div>
	);
};

export default LandingPage;

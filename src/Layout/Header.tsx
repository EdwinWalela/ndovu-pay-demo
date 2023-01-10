import logo from '../assets/logo.svg';
import helpIcon from '../assets/help.svg';
import bellIcon from '../assets/bell.svg';

const Header = () => {
	return (
		<header className="flow-root shadow-md px-2">
			<div className="float-left">
				<img src={logo} className="w-36 ml-3 mt-2" />
			</div>
			<div className="float-right">
				<div className="flex p-4 align-middle">
					<img src={helpIcon} className="w-8 mr-2" />
					<p className="text-sm mr-10 pt-2">Help</p>
					<img src={bellIcon} className="w-8 mr-10" />
					<img src="https://picsum.photos/id/237/300" className="w-8 rounded-full mr-2" />
					<p className="pt-1">Austine</p>
				</div>
			</div>
		</header>
	);
};

export default Header;

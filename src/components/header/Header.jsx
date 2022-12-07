import React from "react";
import "./header.scss";
import { logo } from "../../assets/images";

const Header = () => {
	return (
		<div className="header">
			<div className="header__inner container">
				<div className="header__logo">
					<img src={logo} alt="" />
				</div>
			</div>
		</div>
	);
};

export default Header;

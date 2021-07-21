import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Header() {
	return (
		<header>
			<Link className="logo" to="/">
				Moviefy <img src={logo} height="30px" alt="Logo do site" />
			</Link>
			<Link className="favoritos" to="/favoritos">
				Favoritos
			</Link>
		</header>
	);
}

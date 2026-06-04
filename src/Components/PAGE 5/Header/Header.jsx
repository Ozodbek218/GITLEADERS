import React from 'react'
import './Header.css'

export default function Header() {
	return (
		<header className="page5-header">
			<div className="page5-header__inner">
				<div className="page5-header__left">
					<a href="#" className="logo">Studybay</a>
				</div>

				<nav className="page5-header__nav">
					<ul>
						<li><a href="#">Promo Codes</a></li>
						<li><a href="#">Reviews</a></li>
						<li><a href="#">About Us</a></li>
					</ul>
				</nav>

				<div className="page5-header__auth">
					<a className="login" href="#">Log In</a>
					<a className="signup-btn" href="#">Sign Up</a>
				</div>
			</div>
		</header>
	)
}


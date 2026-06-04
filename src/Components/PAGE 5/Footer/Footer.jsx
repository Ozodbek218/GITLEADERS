import React from 'react'
import './Footer.css'

export default function Footer() {
	return (
		<footer className="page5-footer">
			<div className="footer-top">
				<div className="footer-left">support@studybay.ws</div>

				<div className="footer-center">
					<a href="#">Similar Websites</a>
					<a href="#">Contacts</a>
					<a href="#">Privacy and Cookie Policy</a>
				</div>

				<div className="footer-right">
					<a href="#">Log In</a>
					<a className="signup" href="#">Sign Up</a>
				</div>
			</div>

			<div className="footer-bottom">
				<div className="copyright">© 2011–2021 Studybay All Rights Reserved</div>
			</div>
		</footer>
	)
}


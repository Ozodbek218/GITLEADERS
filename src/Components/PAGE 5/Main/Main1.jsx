import React from 'react'
import './Main1.css'

export default function Main1() {
	const promos = [
		'ps21sb',
		'start10',
		'fdbck21'
	]

	return (
		<main className="page5-main">
			<div className="promo-list">
				{promos.map((code, i) => (
					<div className="promo-card" key={code + i}>
						<div className="promo-left">
							<div className="promo-logo">Studybay</div>
						</div>

						<div className="promo-center">
							<h4>30% OFF</h4>
							<p className="promo-title">Studybay Promo Code: Extra 30% Off Store-Wide</p>
							<p className="promo-desc">We use anti-plagiarism software to ensure you get high-quality, unique papers. We offer a limited warranty, including</p>
						</div>

						<div className="promo-right">
							<div className="code-box">{code}</div>
							<button className="promo-btn">Use Promo Code</button>
						</div>
					</div>
				))}
			</div>

			<section className="hero">
				<div className="hero-content">
					<h2>Confusing homework?</h2>
					<p className="hero-sub">Get expert help with any course or subject</p>
					<button className="hero-cta">Get Help</button>
				</div>

				<div className="hero-image" aria-hidden="true"></div>
			</section>
		</main>
	)
}


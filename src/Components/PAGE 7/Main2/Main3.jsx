import React from 'react'
import './Main3.css'

export default function Main3() {
	const reviews = [
		{
			name: 'Miranda C.',
			date: '10.14.2021',
			rating: 5,
			quality: 5,
			price: 4,
			support: 3,
			deadline: 5,
			pros: ['Click rate metric for each keyword','Content gap analysis','Best link database I\'ve used'],
			cons: ['URL rating','New and lost referring domains links is a bit confusing as well']
		},
		{
			name: 'Miranda C.',
			date: '10.14.2021',
			rating: 5,
			quality: 5,
			price: 4,
			support: 3,
			deadline: 5,
			pros: ['Click rate metric for each keyword','Content gap analysis','Best link database I\'ve used'],
			cons: ['URL rating','New and lost referring domains links is a bit confusing as well']
		}
	]

	return (
		<div className="reviews-section">
			{reviews.map((r, idx) => (
				<article className="review-card" key={idx}>
					<div className="review-left">
						<div className="avatar">MC</div>
					</div>

					<div className="review-body">
						<div className="review-header">
							<div className="review-author">
								<strong>{r.name}</strong>
								<span className="review-date">{r.date}</span>
							</div>
							<div className="review-sentiment">Positive<div className="smile">😊</div></div>
						</div>

						<div className="rating-line">Rating: <span className="stars">{Array.from({length: r.rating}).map((_,i)=>(<span key={i}>★</span>))}{Array.from({length: 5-r.rating}).map((_,i)=>(<span key={'e'+i}>☆</span>))}</span></div>

						<div className="ratings-grid">
							<div><strong>Quality:</strong> <span className="small-stars">{Array.from({length: r.quality}).map(()=> '★')}</span></div>
							<div><strong>Price:</strong> <span className="small-stars">{Array.from({length: r.price}).map(()=> '★')}</span></div>
							<div><strong>Support:</strong> <span className="small-stars">{Array.from({length: r.support}).map(()=> '★')}</span></div>
							<div><strong>Deadline:</strong> <span className="small-stars">{Array.from({length: r.deadline}).map(()=> '★')}</span></div>
						</div>

						<p className="review-text">I hired 3 different experts 4 so far and they all did a great job. They all finished the assignments on time with high quality. They are online most of the time and answer any questions right away! I also like the answer Centre As they are ready to help with any issue at anytime.</p>

						<div className="proscons">
							<div className="pc-box">
								<h4>Pros and Cons</h4>
								<ul>
									{r.pros.map((p, i)=> <li key={i} className="plus">+ {p}</li>)}
									{r.cons.map((c, i)=> <li key={'c'+i} className="minus">- {c}</li>)}
								</ul>
							</div>
						</div>
                        
					</div>
				</article>
			))}

			<div className="reviews-pagination"><span>2</span></div>
            <div>
                        <h2>Some header</h2>
                        <p>
                            I was seven years old when my then best friend went missing. This was a time before the internet was mainstream, before smartphones, and before the world became a global village. Back then, communities were much more close-knit, and the disappearance of a child sent shockwaves through my little town.
I was the last person to have seen my friend, too. We were playing ball in the park in the afternoon. That was our time. We had to be home before dark and do our homework, and in November, you bet the evening crept up fast. It was my ball, and so I took it home.
                        </p>
                        </div>
		</div>
	)
}


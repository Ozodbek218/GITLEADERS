import React from 'react'
import './Main2.css'

export default function Main2() {
  const promos = ['ps21sb','start10','fdbck21']

  return (
    <main className="page6-main">
      <div className="top-banner">
        <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1400&q=80" alt="team using phones" />
      </div>

        <div className="image-text">
            <p className="image-text__desc">I was seven years old when my then best friend went missing. This was a time before the internet was mainstream, before smartphones, and before the world became a global village. Back then, communities were much more close-knit, and the disappearance of a child sent shockwaves through my little town.
I was the last person to have seen my friend, too. We were playing ball in the park in the afternoon. That was our time. We had to be home before dark and do our homework, and in November, you bet the evening crept up fast. It was my ball, and so I took it home.</p>
<br />
<br />
            <h2 className="image-text__title">Some header</h2>
            <p className="image-text__desc">I remember speaking to the police. At that age, you aren't really aware of much. You do what's asked of you. I was no exception. I answered every question the man with the badge asked me, and, strangely, I don't think I was afraid at all. If anything, I was curious about when they would find my friend.</p>
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

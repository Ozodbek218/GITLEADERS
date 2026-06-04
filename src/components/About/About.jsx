import React from 'react'
import './About.css'
import a2 from '../../assets/aboutimg.jpg'
const About = () => {
  return (
    <div>
        <div className="about-container">
            <div className="study">
                <p>Studybay / About Us</p>
            </div>
            <div className="about-logo">
                <h1>About Us</h1>
            </div>
            <img src={a2} alt="" />
        </div>

        <div className="about-text">
            <p>I was seven years old when my then best friend went missing. This was a time before the internet was mainstream, before smartphones, and before the world became a global village. Back then, communities were much more close-knit, and the disappearance of a child sent shockwaves through my little town.</p>
            <p>I was the last person to have seen my friend, too. We were playing ball in the park in the afternoon. That was our time. We had to be home before dark and do our homework, and in November, you bet the evening crept up fast. It was my ball, and so I took it home.</p>

          <div className="some-text">
            <h2>Some header</h2>

            <p>I remember speaking to the police. At that age, you aren't really aware of much. You do what's asked of you. I was no exception. I answered every question the man with the badge asked me, and, strangely, I don't think I was afraid at all. If anything, I was curious about when they would find my friend.</p>
          </div>
        </div>
    </div>
  )
}

export default About
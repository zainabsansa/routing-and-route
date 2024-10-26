import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div>
        <p>About Page</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum culpa totam possimus quidem error ex maxime vero! Molestias beatae aspernatur deserunt consequatur enim in sapiente suscipit eos dignissimos praesentium, nostrum ipsam vitae, quos, quaerat ab velit at quod esse doloremque. Iure voluptatibus aut atque temporibus minima laboriosam, dolore harum vel!</p>

        <div style={{ display: "flex", gap: "20px"}}>
        <Link to='/'>Home</Link>
        <Link to='/contact'>Contact</Link>
      </div>
    </div>
  )
}

export default About
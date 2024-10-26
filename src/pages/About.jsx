import React, { useState } from 'react'
import { IoMoon, IoSunny } from 'react-icons/io5';
import { Link } from 'react-router-dom'

function About() {
    const [dark, setDark] = useState(false);

    function handleDarkMode() {
      setDark(!dark);
      document.body.classList.toggle('dark-mode')
    }

  return (
    <div>
        <p>About Page</p>
        <button onClick={handleDarkMode}>
        {!dark ? <IoSunny/>: <IoMoon/>}
      </button>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum culpa totam possimus quidem error ex maxime vero! Molestias beatae aspernatur deserunt consequatur enim in sapiente suscipit eos dignissimos praesentium, nostrum ipsam vitae, quos, quaerat ab velit at quod esse doloremque. Iure voluptatibus aut atque temporibus minima laboriosam, dolore harum vel!</p>

        <div style={{ display: "flex", gap: "20px"}}>
        <Link to='/'>Home</Link>
        <Link to='/contact'>Contact</Link>
      </div>
    </div>
  )
}

export default About
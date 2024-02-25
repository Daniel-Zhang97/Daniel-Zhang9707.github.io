import DZlogo from '../images/DZlogo.png'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Navbar = () => {
  return (
    <div id="navbar">
      <a href="https://daniel-zhang97.github.io/Portfolio/">
        <img src={DZlogo} alt="DZlogo" id="logo"></img>
      </a>

      <div id="navbar-right">
        <a
          className="navbar-link-icon"
          href="https://github.com/Daniel-Zhang97"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          className="navbar-link-icon"
          href="https://www.linkedin.com/in/danzhang9707"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  )
}

export default Navbar

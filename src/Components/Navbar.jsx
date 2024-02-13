import DZlogo from '../images/DZlogo.png'

const Navbar = () => {
  return (
    <div id="navbar">
      <a href="https://daniel-zhang97.github.io/Portfolio/">
        <img src={DZlogo} alt="DZlogo" id="logo"></img>
      </a>
    </div>
  )
}

export default Navbar

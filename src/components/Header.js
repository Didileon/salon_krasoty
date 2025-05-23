import studio1 from '../assets/images/studio1.jpg'

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <img className="header-logo" src={studio1} alt="logo" />
      </div>
    </header>
  )
}

export default Header
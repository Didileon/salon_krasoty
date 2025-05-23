import makeup11 from '../assets/images/makeup11.jpg'
import makeup from '../assets/images/makeup.jpg'
import hear from '../assets/images/hear.jpg'
import hear11 from '../assets/images/hear11.jpg'
import manik11 from '../assets/images/manik11.jpg'
import manik from '../assets/images/manik.jpg'
import ped from '../assets/images/ped.jpg'
import ped1 from '../assets/images/ped1.jpg'
import ya from '../assets/images/ya.jpg'
import otziv1 from '../assets/images/otziv1.jpg'

const Main = () => {
  return (
    <main className="main-content">
      <div className="grid-container">
        <div className="grid-item">
          <a href="/Makeup">
            <img src={makeup11} alt="makeupLogo" className="img-large" />
          </a>
          <img src={makeup} alt="makeup" className="img-small" />
        </div>

        <div className="grid-item">
          <img src={hear} alt="hear" className="img-small" />
          <a href="/Hear">
            <img src={hear11} alt="hearLogo" className="img-large" />
          </a>
        </div>

        <div className="grid-item">
          <a href="/Manicure">
            <img src={manik11} alt="manicureLogo" className="img-large" />
          </a>
          <img src={manik} alt="manicure" className="img-small" />
        </div>

        <div className="grid-item">
          <img src={ped1} alt="pedicure" className="img-small" />
          <a href="/Pedicure">
            <img src={ped} alt="pedicureLogo" className="img-large" />
          </a>
        </div>

        <div className="grid-item">
          <a href="/Portfolio">
            <img src={otziv1} alt="feedbackLogo" className="img-large" />
          </a>
          <img src={ya} alt="feedback" className="img-small" />
        </div>
      </div>
    </main>
  )
}

export default Main

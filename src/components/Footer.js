import vk from '../assets/images/vk.jpg'
import insta from '../assets/images/insta.jpg'
import tg from '../assets/images/tg.jpg'
import apply_int from '../assets/images/apply_int.png'
import mainpr from '../assets/images/mainpr.png'


function Footer() {

    return (
        <div>
            <section className='footer'>

                <div>
                    <a href="https://t.me/didileontuk">
                        <img className='img' src={apply_int}  alt='apply' width="250px" /> 
                    </a>
                </div>
                    <br />

                    <a href="/">
                        <img className='img' src={mainpr}  alt='main' width="251px" /> 
                    </a> 
                <br /><br /><br />

               <div className="niz">                  
                    <a href="https://vk.com/didileon?from=groups">
                        <img className='img1' src={vk}  alt='logoVK' width="50px" />
                    </a>

                    <a href="https://instagram.com/didileon_makeup?utm_medium=copy_link">
                        <img className='img2' src={insta}  alt='logoInsa' width="50px" />
                    </a>    
                    
                    <a href="https://t.me/didileontuk"> 
                        <img className='img3' src={tg}  alt='logotg' width="53px" />
                    </a>   

                <br /><br />

               </div>

            </section>

        </div>
    )
}

export default Footer;
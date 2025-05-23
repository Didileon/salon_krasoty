import {  Routes, Route  } from 'react-router-dom';
import './App.css';
import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import Makeup from './components/Makeup';
import Hear from './components/Hear';
import Manicure from './components/Manicure';
import Pedicure from './components/Pedicure';
import Portfolio from './components/Portfolio';


 



function App() {

	return (
	        <>

            <div className='App'>
                <div>
                    <Header />
                </div>


                <div>
                    <Routes>
                            <Route exact path='/' element={<Main />} />
                            <Route path='Makeup' element={<Makeup />} />
                            <Route path='Hear' element={<Hear />} />
                            <Route path='Manicure' element={<Manicure />} />
                            <Route path='Pedicure' element={<Pedicure />} />
                            <Route path='Portfolio' element={<Portfolio />} />
                         
                    </Routes>

                </div>

                <div>
                    <Footer />
                </div>
              </div>
            </>


	)
}


export default App;
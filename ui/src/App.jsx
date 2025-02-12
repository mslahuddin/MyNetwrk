import './App.css'
import Navbar from './components/Navbar'
import Body from './components/body'
import Footer from './components/footer'
import Logo from './assets/logo.svg'
import Rec from './assets/Rec.png'
import Box1 from './assets/box1.png'
import Box2 from './assets/box2.png'
import Box3 from './assets/box3.png'
import Box4 from './assets/Box4.svg'
import Img1 from './assets/Img1.png'
import Img2 from './assets/Img2.png'
import Img3 from './assets/Img3.png'


function App() {


  return (
    <>
      <Navbar Logo={Logo}
        Rec={Rec}
        Box1={Box1}
      />
      <Body Box2={Box2}
        Box3={Box3}
        Box4={Box4}
        Img1={Img1}
        Img2={Img2}
        Img3={Img3}
        
        />
        <Footer/>
    </>
  )
}

export default App

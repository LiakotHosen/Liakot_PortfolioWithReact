//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
//import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
//import Test from './components/Resume/Test';
import Cv from './components/Cv';
import Certificates from './components/Certificates';
import Myprojects from './components/Myprojects';
//import Award from './components/Award';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Myprojects/>
      <Cv />
      <Certificates />
    
      <Contact />
      <Footer />
    </div>
  );
}
export default App;
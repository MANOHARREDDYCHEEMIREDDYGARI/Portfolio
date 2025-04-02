import Header from './components/Header.jsx';
import About from './components/About';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Experience from './components/Experience.jsx';
import Certifications from "./components/Certifications.jsx";
import Skills   from "./components/Skills.jsx";


function Greet(){
  return (
      <>
        <SayHello/>
        <SayHi/>
      </>
  )
}

function App() {
  return (
      <div>
        {/*<Header />
            <About />
            <Skills/>
            <Projects />
            <Contact />
            <Footer />*/}
        <div>
          <Header />
          <div id="about">
            <About />
              <div id ="experience">
                  <Experience />
              </div>
              <div id ="skills">
                  <Skills />
              </div>
              <div
                  id ="certifications">
                  <Certifications />
              </div>
          </div>
          <div id="projects">
            <Projects />
          </div>
          <div id="contact">
            <Contact />
          </div>
          <Footer />
        </div>
      </div>
  );
}

export default App;
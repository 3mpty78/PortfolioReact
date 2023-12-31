import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import Projects from "./pages/Projects";
import CursorSphere from "./components/Sphere";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

function App() {
      return (
            <main id="app">
                  <CursorSphere />
                  <Navigation />
                  <Home />
                  <Projects />
                  <Skills />
                  <Contact />
            </main>
      );
}

export default App;

import logo from './logo.svg';
import './App.css';
import NavBar from "./navbar"
import Projects from "./pages/projects"
import About from "./pages/about"
import Home from "./pages/home"

function App() {
  let component
  switch (window.location.pathname) {
    case "/":
      component = <Home />
      break
    case "/projects":
      component = <Projects />
      break
    case "/about":
      component = <About />
      break
  }
  return (
    <>
      <NavBar />
      {component}
    </>
  )
}

export default App;

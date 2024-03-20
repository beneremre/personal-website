import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import HomePage from "./pages/Home";
import About from "./pages/About";
import Academic from "./pages/Academic";
import Work from "./pages/Work";
import Header from "./components/Header";
import Icon from "./assets/e6.png";
import { AvatarFrame } from "./pages/Home/styles";
import LeftNavigator from "./components/LeftNavigator";
import "./transition.css";

function App() {
  function AnimatedSwitch({ children }) {
    const location = useLocation();

    return (
      <TransitionGroup>
        <CSSTransition key={location.key} timeout={500} classNames="slide-up">
          <Routes location={location}>{children}</Routes>
        </CSSTransition>
      </TransitionGroup>
    );
  }

  return (
    <BrowserRouter>
      <AvatarFrame src={Icon} />
      <LeftNavigator />
      <Header />
      <AnimatedSwitch>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/academic" element={<Academic />} />
        <Route path="/work" element={<Work />} />
      </AnimatedSwitch>
    </BrowserRouter>
  );
}

export default App;

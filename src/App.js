import styled from "styled-components";
import NavBar from "./components/Header/NavBar";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Footer/Contact";
import AboutMe from "./components/AboutMe/AboutMe";
import Home from "./components/Header/Home";
import TechStack from "./components/TeckStack/TechStack";
import Projects from "./components/Projects/Projects";
import Timeline from "./components/Timeline/Timeline";

function App() {
    return (
        <Container>
            <NavBar/>
            <Home/>
            <LightColor>
                <AboutMe/>
            </LightColor>
            <TechStack/>
            <LightColor>
                <Projects/>
            </LightColor>
            <Timeline/>
            <Contact/>
            <Footer/>
        </Container>
    );
}

export default App;

const Container = styled.div``;

const LightColor = styled.div`
  background: var(---secondary);
  color: var(---primary);
`;


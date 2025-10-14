import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Events from "./components/Events";
// import Gallery from "./components/Gallery";
import Leadership from "./components/Leadership";
// import MusicTeam from "./components/MusicTeam";
import Footer from "./components/Footer";
import WelcomeBanner from "./components/WelcomeBanner";
import WeeklyWorship from "./components/WeeklyWorship";
import "./App.css";
import Resources from "./components/Resources";
import PhotoMarquee from "./components/PhotoMarquee";
import TestYourKnowledge from "./components/TestYourKnowledge";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <WelcomeBanner />
        <About />
        <PhotoMarquee />
        <Events />
        <Leadership />
        {/* <MusicTeam /> */}
        <Resources />
        <TestYourKnowledge />
        {/* <Gallery /> */}
        <WeeklyWorship />
      </main>
      <Footer />
    </>
  );
}

export default App;

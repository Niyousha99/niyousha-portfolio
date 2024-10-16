import "./App.css";
import About from "./components/About";
import ExperienceTimeline from "./components/ExperienceTimeline";
import ResumeDownload from "./components/ResumeDownload";
import ScrollToTopButton from "./components/Button/ScrollToTopButton";

function App() {
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="App">
      <About />
      <ExperienceTimeline />
      <ResumeDownload />
      <ScrollToTopButton handleClick={handleClick} />
    </div>
  );
}

export default App;

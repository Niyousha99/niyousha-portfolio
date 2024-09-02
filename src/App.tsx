import './App.css';
import About from './components/About';
import ExperienceTimeline from './components/ExperienceTimeline';
import ActionButton from './components/Button/ActionButton';
import { RESUME_LINK } from './assets/data/ExperienceInfo';

function App() {
  const onDownload = () => {
    const link = document.createElement("a");
    link.download = `niyousha_raeesinejad_resume.txt`;
    link.href = "./download.txt";
    link.click();
  };


  return (
    <div className="App">
      <About />
      <ExperienceTimeline />
      <ActionButton
        text='Download CV'
        link={RESUME_LINK}

      />
    </div>
  );
}

export default App;

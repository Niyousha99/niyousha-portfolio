import './App.css';
import About from './components/About';
import ExperienceTimeline from './components/ExperienceTimeline';
import ActionButton from './components/Button/ActionButton';
import { RESUME_LINK } from './assets/data/ExperienceInfo';

function App() {
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

import './App.css';
import Home from './components/Home.tsx';
import { BrowserRouter as Router,Routes ,Route, useNavigate } from 'react-router-dom';
import TextToSpeechComponent from './components/TextToSpeechComponent.tsx';
import ChatBot from './components/ChatBot.tsx';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/translate" element={<TextToSpeechComponent/>} />
        <Route path="/chatbot" element={<ChatBot/>} />
      </Routes>
    </Router>
  );
}

export default App;

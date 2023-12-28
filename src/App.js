import './App.css';
import Home from './components/Home.tsx';
import { Routes ,Route } from 'react-router-dom';
import TextToSpeechComponent from './components/TextToSpeechComponent.tsx';
import ChatBot from './components/ChatBot.tsx';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/translate" element={<TextToSpeechComponent/>} />
      <Route path="/chatbot" element={<ChatBot/>} />
    </Routes>
  );
}

export default App;

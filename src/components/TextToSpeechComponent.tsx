import React, { useEffect, useState } from 'react';
import apiService from '../services/ai-service.ts';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const TextToSpeechComponent = () => {
  const [inputText, setInputText] = useState('');
  const [audioURL, setAudioURL] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState<string>();

  useEffect(() => {
    // Uncomment and adjust as needed
    // apiService.getLanguages().then((res) => {
    //   setLangs(res);
    //   if (res.message) {
    //     setMsg(res.message);
    //   }
    // });
    // apiService.getVoices().then((res) => {
    //   setLangs(res);
    //   if (res.message) {
    //     setMsg(res.message);
    //   }
    // });
  }, []);

  const containerStyle = {
    maxWidth: '600px',
    margin: 'auto',
    padding: '20px',
  };

  const titleStyle = {
    textAlign: 'center',
    marginBottom: '20px',
  };

  const textAreaStyle = {
    width: '100%',
    marginBottom: '20px',
    padding: '10px',
  };

  const buttonStyle = {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const loadingMessageStyle = {
    marginTop: '20px',
  };

  const convertTextToSpeech = async () => {
    setLoading(true);
    // await translateText();

    try {
      const res = await apiService.convertToSpeech(translatedText);
      setAudioURL(res.result.audio_url);
    } catch (error) {
      console.error('Error converting text to speech:', error);
    }

    setLoading(false);
  };

  const translateText = async () => {
    setLoading(true);

    try {
      const res = await apiService.googleTranslate(inputText);
      const data = res.data;
      setTranslatedText(data.translations[0]['translatedText']);
    } catch (error) {
      console.error('Error translating text:', error);
    }

    setLoading(false);
  };
  const navigate = useNavigate();

  return (
    <div style={containerStyle}>
      <button onClick={()=>navigate('/')} style={{ display: 'flex', alignItems: 'center' }}>
        <FontAwesomeIcon icon={faArrowLeft} style={{ marginRight: '8px' }} />
        Back
      </button>
      <h2 style={titleStyle}>Cloudlabs Text To Speech</h2>
      <textarea
        rows="4"
        cols="50"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter text to convert to speech..."
        style={textAreaStyle}
      />
      <button onClick={convertTextToSpeech} disabled={loading} style={buttonStyle}>
        Convert to Speech
      </button>
      <button onClick={translateText} disabled={loading} style={{ ...buttonStyle, marginLeft: '20px' }}>
        Translate
      </button>
      {msg && <p>{msg}</p>}
      {translatedText && <p>{translatedText}</p>}
      {loading && <p style={loadingMessageStyle}>Converting to speech...</p>}
      {!loading && audioURL && (
        <div style={{ marginTop: '20px' }}>
          <h3>Generated Audio:</h3>
          <audio controls>
            <source src={audioURL} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      )}
    </div>
  );
};

export default TextToSpeechComponent;

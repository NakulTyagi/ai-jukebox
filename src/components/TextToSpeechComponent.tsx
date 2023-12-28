import React, { useEffect, useState } from 'react';
import apiService from '../services/ai-service.ts';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import SearchableDropdown from './SearchableDropdown.js';

const TextToSpeechComponent = () => {
  const [inputText, setInputText] = useState('');
  const [audioURL, setAudioURL] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState<string>();
  const [langs, setLanguages] = useState([]);
  const [selectedValue, setSelectedValue] = useState<any>('');

  useEffect(() => {
    // Uncomment and adjust as needed
    apiService.getLanguages().then((res) => {
      if (res.message) {
        setMsg(res.message);
      }
      setLanguages(res.data.languages);
    });
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
    color:'white'
  };

  const textAreaStyle = {
    width: '100%',
    marginBottom: '20px',
    padding: '10px',
    border:'1px solid green',
    borderRadius: 12,
    color: 'white',
    backgroundColor:'#696969'
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
      const res = await apiService.googleTranslate(inputText, selectedValue.code);
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
      <button onClick={()=>navigate('/')} style={{ display: 'flex', alignItems: 'center', ...buttonStyle, backgroundColor: 'grey' }}>
        <FontAwesomeIcon icon={faArrowLeft} style={{ marginRight: '8px' }} />
        Back
      </button>
      <h2 style={titleStyle}>Text Translation</h2>
      <textarea
        rows="4"
        cols="50"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter text to convert to speech..."
        style={textAreaStyle}
      />
      {langs &&       
      <SearchableDropdown
        options={langs}
        label="name"
        id="code"
        selectedVal={selectedValue}
        handleChange={(option) => setSelectedValue(option)}
      />}
      {/* <button onClick={convertTextToSpeech} disabled={loading} style={buttonStyle,  marginRight: '20px'}>
        Convert to Speech
      </button> */}
      <button onClick={translateText} disabled={loading} style={{ ...buttonStyle, marginTop: 20 }}>
        Translate
      </button>
      {msg && <p>{msg}</p>}
      {translatedText && <p style={{color:'white', marginTop: 24, fontSize: 40, textAlign:'center'}}>{translatedText}</p>}
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
              <style> 
                {` 
                    ::placeholder { 
                        color: white; 
                    }` 
                } 
            </style> 
    </div>
  );
};

export default TextToSpeechComponent;

import React, { useState } from 'react'
import apiService from '../services/ai-service.ts';
import './LoadingSpinner.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function ChatBot() {
  const [userchat, setUserChat] = useState<any>([]);
  const [aiReplies, setAiReplies] = useState<any>([]);
  const [inputText, setInputText] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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

  const sendChat = async () => {
    setLoading(true);
    setInputText('');
    let prompts = [...userchat];
    prompts.push(inputText);
    setUserChat(prompts);
    try {
        let replies = [...aiReplies]
      const res = await apiService.chatbot(inputText);
      replies.push(res?.out);
      setAiReplies(replies);
        console.log(res)
    } catch (error) {
      console.error('Error translating text:', error);
    }

    setLoading(false);
  };

  return (
    <div style={{padding: 80, gap:20}}>
      <button onClick={()=>navigate('/')} style={{ display: 'flex', alignItems: 'center', ...buttonStyle, marginBottom: 20, backgroundColor: 'grey'  }}>
        <FontAwesomeIcon icon={faArrowLeft} style={{ marginRight: '8px' }} />
        Back
      </button>
        <div>
            <textarea
                rows="4"
                cols="50"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Start Chatting with AI... (try what's 2+5?)"
                style={textAreaStyle}
            />
        </div>
        <button onClick={sendChat} disabled={loading}  style={{ ...buttonStyle, marginLeft: '20px' }}>
            Send
        </button>
        <div style={{margin: 50, gap: 20, flexDirection:'column', alignItems:'center', display:'flex'}}>
            {userchat.map((prompt, index)=>{
                return <div style={{flexDirection:'column', width: 600, padding:16, border:'1px solid green', borderRadius: 12}}>
                    <div style={{ paddingBottom: 20,color: 'white', width:'100%'}}>
                        <div style={{float:'right',}}>
                        {prompt}
                        </div>
                    </div>
                    <br />
                    <div style={{float:'left', marginBottom: 20, color: 'white',}}>
                        <div style={{float:'left', color: 'white',}}>
                            {aiReplies[index] ? aiReplies[index] : 
                            <div style={{display:'flex', gap:4}}>
                                <div className="pulsating-animation"></div>
                                <div className="pulsating-animation"></div>
                                <div className="pulsating-animation"></div>
                            </div>
                            }
                        </div>
                    </div>
                </div>
            })}
        </div>
        <style> 
                {` 
                    ::placeholder { 
                        color: white; 
                    }` 
                } 
            </style> 
    </div>
  )
}

export default ChatBot
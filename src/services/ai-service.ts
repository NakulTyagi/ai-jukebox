
const text_url = 'https://cloudlabs-text-to-speech.p.rapidapi.com/synthesize';

const apiService = {
  getVoices: async () => {
    const url = 'https://cloudlabs-text-to-speech.p.rapidapi.com/voices?language_code=en-US';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '1fffba5decmshc04e02bd7ba41d4p1bd287jsn0de02ee6c949',
            'X-RapidAPI-Host': 'cloudlabs-text-to-speech.p.rapidapi.com'
        }
    };

    const response = await fetch(url, options);;

    return response.json();
  },

  getLanguages: async () => {
    const url = 'https://cloudlabs-text-to-speech.p.rapidapi.com/languages';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '1fffba5decmshc04e02bd7ba41d4p1bd287jsn0de02ee6c949',
            'X-RapidAPI-Host': 'cloudlabs-text-to-speech.p.rapidapi.com'
        }
    };

    const response = await fetch(url, options);;

    return response.json();
  },

  convertToSpeech: async (inputText) => {
    const options = {
        method: 'POST',
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          'X-RapidAPI-Key': '1fffba5decmshc04e02bd7ba41d4p1bd287jsn0de02ee6c949',
          'X-RapidAPI-Host': 'cloudlabs-text-to-speech.p.rapidapi.com',
        },
        body: new URLSearchParams({
          voice_code: 'ja-JP-1',
          text: inputText,
          speed: '1.00',
          pitch: '1.00',
          output_type: 'audio_url',
        }),
      };
    const response = await fetch(text_url, options);

    return response.json();
  },

  // Add other HTTP methods as needed (e.g., put, delete, etc.)

  googleDetect: async (inputText) => {
    const url = 'https://google-translate1.p.rapidapi.com/language/translate/v2/detect';
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'Accept-Encoding': 'application/gzip',
            'X-RapidAPI-Key': '1fffba5decmshc04e02bd7ba41d4p1bd287jsn0de02ee6c949',
            'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
        },
        body: new URLSearchParams({
            q: inputText
        })
    };
    const response = await fetch(url, options);
    return response.json();
  },

  googleTranslate: async (inputText) => {
    const url = 'https://google-translate1.p.rapidapi.com/language/translate/v2';
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'Accept-Encoding': 'application/gzip',
            'X-RapidAPI-Key': '1fffba5decmshc04e02bd7ba41d4p1bd287jsn0de02ee6c949',
            'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
        },
        body: new URLSearchParams({
            q: inputText,
            target: 'es',
            source: 'en'
        })
    };
    const response = await fetch(url, options);
    return response.json();
  },

  chatbot: async (inputText) => {
    const url = 'https://robomatic-ai.p.rapidapi.com/api';
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': '1fffba5decmshc04e02bd7ba41d4p1bd287jsn0de02ee6c949',
        'X-RapidAPI-Host': 'robomatic-ai.p.rapidapi.com'
      },
      body: new URLSearchParams({
        in: inputText,
        op: 'in',
        cbot: '1',
        SessionID: 'RapidAPI1',
        cbid: '1',
        key: 'RHMN5hnQ4wTYZBGCF3dfxzypt68rVP',
        ChatSource: 'RapidAPI',
        duration: '1'
      })
    };
    
    const response = await fetch(url, options);
    return response.json();
  },
};

export default apiService;
import React, { useState, useEffect } from 'react';

// Replace 'YOUR_OPENAI_API_KEY' with your actual OpenAI API key
const OpenAIAPIKey = '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';

const TextCompletionComponent = () => {
  const [inputText, setInputText] = useState('');
  const [completion, setCompletion] = useState('');
  const [loading, setLoading] = useState(false);

  const getCompletion = async () => {
    setLoading(true);

    try {
      const response = await fetch('https://api.openai.com/v1/engines/davinci/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${OpenAIAPIKey}`,
        },
        body: JSON.stringify({
          prompt: inputText,
          max_tokens: 50, // Adjust as needed
        }),
      });

      const data = await response.json();
      setCompletion(data.choices[0].text);
    } catch (error) {
      console.error('Error fetching completion:', error);
    }

    setLoading(false);
  };

  useEffect(() => {
    if (inputText.trim() !== '') {
      getCompletion();
    } else {
      setCompletion('');
    }
  }, [inputText]);

  return (
    <div>
      <h2>Text Completion with OpenAI GPT-3</h2>
      <textarea
        rows="4"
        cols="50"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter text for completion..."
      />
      {loading && <p>Loading completion...</p>}
      {!loading && completion && (
        <div>
          <h3>Completion:</h3>
          <p>{completion}</p>
        </div>
      )}
    </div>
  );
};

export default TextCompletionComponent;

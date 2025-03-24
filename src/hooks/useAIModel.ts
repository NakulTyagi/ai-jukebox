import { useState } from 'react';

interface AIModelHookProps {
  modelName: string;
  initialPrompt?: string;
}

export const useAIModel = ({ modelName, initialPrompt = '' }: AIModelHookProps) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<any>(null);

  const generateContent = async (prompt: string) => {
    setLoading(true);
    setError(null);
    
    try {
      // Implementation will depend on the specific AI service being used
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt, model: modelName }),
      });
      
      const data = await response.json();
      setResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    result,
    generateContent,
  };
}; 
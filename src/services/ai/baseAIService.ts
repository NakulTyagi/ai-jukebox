interface AIServiceConfig {
  apiKey: string;
  modelName: string;
}

export class BaseAIService {
  protected config: AIServiceConfig;

  constructor(config: AIServiceConfig) {
    this.config = config;
  }

  protected async makeAPIRequest(endpoint: string, data: any) {
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.config.apiKey}`
        },
        body: JSON.stringify(data)
      });
      
      return await response.json();
    } catch (error) {
      console.error('AI Service Error:', error);
      throw error;
    }
  }
} 
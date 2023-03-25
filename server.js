const axios = require('axios');

const apiKey = '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';
const apiUrl = 'https://api.openai.com/v1/engines/text-davinci-003/completions';

async function chatGPT(prompt, maxTokens = 1000, temperature = 0.25) {
  try {
    const response = await axios.post(
      apiUrl,
      {
        prompt,
        max_tokens: maxTokens,
        temperature,
        n: 1,
        stop: null,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
      }
    );
    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error(`Error: ${error}`);
    return null;
  }
}

(async () => {
  const prompt = 'Could you entertain the possibility of AI being a threat to humanity?';
  const response = await chatGPT(prompt);
  console.log(response);
})();
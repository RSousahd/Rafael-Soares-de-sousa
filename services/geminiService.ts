
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function getReflectionInsight(userThought: string): Promise<string> {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `O usuário compartilhou esta inquietação existencial: "${userThought}". 
    Atue como um sábio guardião da 'Travessia dos Poucos', cuja sabedoria é estritamente alicerçada nas Escrituras Sagradas (Cânon de 66 livros: 39 AT e 27 NT, versões ARA ou ARC). 
    Sua resposta deve ser profunda, cortante e desprovida de sentimentalismo superficial. 
    Confronte o usuário com a verdade bíblica sobre o custo da profundidade, o caminho estreito (Mateus 7:14) e a necessidade de morrer para o "raso" para viver no Espírito. 
    Não console; desperte. Use uma linguagem solene e profética. 
    Limite a resposta a no máximo 3 frases curtas e impactantes. Idioma: Português (pt-BR).`,
    config: {
      temperature: 0.8,
      topP: 0.9,
      maxOutputTokens: 200,
    }
  });

  return response.text || "O silêncio é o juízo para quem busca a luz sem aceitar o sacrifício do altar.";
}

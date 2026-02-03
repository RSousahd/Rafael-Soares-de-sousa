
import React, { useState } from 'react';
import { getReflectionInsight } from '../services/geminiService';

const ReflectionTool: React.FC = () => {
  const [input, setInput] = useState('');
  const [insight, setInsight] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    setLoading(true);
    setInsight(null);
    try {
      const result = await getReflectionInsight(input);
      setInsight(result);
    } catch (err) {
      setInsight("A profundidade não pode ser forçada. Tente novamente quando o ruído silenciar.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="reflexao" className="py-40 bg-void-900 relative overflow-hidden">
      <div className="absolute inset-0 noise-overlay opacity-[0.02] pointer-events-none"></div>
      <div className="max-w-3xl mx-auto px-8 relative z-10 text-center">
        <p className="text-ember-500 text-xs tracking-[0.4em] uppercase mb-12">Escala de Sinceridade</p>
        <h2 className="font-serif text-4xl md:text-5xl text-ash-200 mb-8 leading-tight">
          O que hoje parece raso em sua existência?
        </h2>
        <p className="text-ash-400 text-lg mb-12 italic">
          Descreva sua inquietação. Não para nós, mas para o espelho da verdade.
        </p>

        <form onSubmit={handleSubmit} className="space-y-8">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Escreva aqui..."
            className="w-full bg-void-800 border-b border-ash-700/30 p-6 text-ash-200 font-serif text-xl focus:border-ember-500 outline-none transition-all min-h-[150px] resize-none"
          />
          <button
            type="submit"
            disabled={loading || !input.trim()}
            className="px-12 py-4 bg-void-950 border border-ember-500/40 text-ember-400 uppercase tracking-widest text-xs hover:bg-ember-500/10 transition-all disabled:opacity-30"
          >
            {loading ? 'Sondando Profundezas...' : 'Encarar Resposta'}
          </button>
        </form>

        {insight && (
          <div className="mt-16 p-10 bg-void-800/50 border-l-2 border-ember-500 animate-[reveal_1s_ease-out]">
            <p className="font-serif text-2xl text-ash-200 italic leading-relaxed">
              "{insight}"
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ReflectionTool;

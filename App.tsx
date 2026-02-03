
import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import ReflectionTool from './components/ReflectionTool';

type Page = 'home' | 'manifesto' | 'privacidade' | 'instagram';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [currentPage]);

  const renderContent = () => {
    switch (currentPage) {
      case 'manifesto':
        return <ManifestoView />;
      case 'privacidade':
        return <PrivacyView />;
      case 'instagram':
        return <InstagramView />;
      default:
        return <HomeView />;
    }
  };

  return (
    <div className="min-h-screen selection:bg-ember-500/20 bg-void-950 overflow-x-hidden">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 noise-overlay opacity-[0.03]"></div>
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-ember-500/10 rounded-full blur-[150px] animate-pulse-slow"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-amber-600/5 rounded-full blur-[120px] animate-float"></div>
      </div>

      {/* Floating Side Tagline - CORRIGIDO: Posição e Visibilidade */}
      <div className="fixed left-8 inset-y-0 z-40 hidden xl:flex items-center pointer-events-none">
        <div className="flex flex-col items-center justify-center">
          <span 
            className="text-ember-500/80 text-[10px] uppercase tracking-[0.9em] font-bold whitespace-nowrap drop-shadow-lg"
            style={{ 
              writingMode: 'vertical-lr', 
              transform: 'rotate(180deg)',
              textRendering: 'optimizeLegibility'
            }}
          >
            Nem todos foram chamados para a superfície
          </span>
          <div className="w-px h-12 bg-ember-500/30 mt-8"></div>
        </div>
      </div>

      <Navigation onNavigate={(p) => setCurrentPage(p as Page)} currentPage={currentPage} />

      {renderContent()}

      {/* Footer */}
      <footer className="py-24 border-t border-ash-900/20 bg-void-950 text-center relative overflow-hidden z-10">
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <button onClick={() => setCurrentPage('home')} className="font-serif text-4xl text-ash-200 mb-6 font-light">1<span className="text-ember-500 drop-shadow-[0_0_10px_rgba(201,162,39,0.3)]">%</span></button>
          <p className="text-ash-400 text-[10px] uppercase tracking-[0.6em] mb-16 font-bold">O Ponto de Ruptura</p>
          <div className="w-16 h-px bg-ash-800/50 mx-auto mb-16"></div>
          <div className="flex justify-center gap-10 text-[10px] uppercase tracking-[0.4em] text-ash-300 font-semibold mb-20">
             <button onClick={() => setCurrentPage('instagram')} className="hover:text-ember-500 transition-colors">Instagram</button>
             <button onClick={() => setCurrentPage('manifesto')} className="hover:text-ember-500 transition-colors">Manifesto</button>
             <button onClick={() => setCurrentPage('privacidade')} className="hover:text-ember-500 transition-colors">Privacidade</button>
          </div>
          <p className="text-ash-500 text-[9px] uppercase tracking-[0.5em] font-medium">
            &copy; {new Date().getFullYear()} — A Travessia dos Poucos. Criado para o silêncio.
          </p>
        </div>
      </footer>
    </div>
  );
};

const HomeView: React.FC = () => (
  <>
    {/* Hero Section */}
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden z-10 pt-20">
      <div className="max-w-5xl mx-auto px-8 text-center">
        <div className="reveal opacity-0 translate-y-10 transition-all duration-[1.5s] ease-out delay-300">
          <p className="text-ember-500 text-[11px] md:text-[12px] tracking-[0.7em] uppercase mb-16 font-bold drop-shadow-[0_2px_15px_rgba(201,162,39,0.4)]">
            Nem todos foram chamados para a superfície
          </p>
          
          <h1 className="font-serif text-[22vw] md:text-[16rem] font-light text-ash-200 tracking-tighter leading-none mb-4 select-none">
            1<span className="text-ember-500 drop-shadow-[0_0_40px_rgba(201,162,39,0.4)]"> %</span>
          </h1>
          
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-ember-500/50 to-transparent mx-auto my-16"></div>
          
          <p className="font-serif text-xl md:text-3xl text-ash-300 italic font-light max-w-2xl mx-auto leading-relaxed opacity-90 drop-shadow-sm">
            "A travessia — desde sempre — foi para poucos."
          </p>
        </div>

        <div className="mt-40 reveal opacity-0 translate-y-10 transition-all duration-1000 delay-1000">
          <a href="#manifesto" className="inline-flex flex-col items-center gap-6 text-ash-400 hover:text-ember-400 transition-all group">
            <span className="text-[10px] uppercase tracking-[0.6em] font-bold opacity-60 group-hover:opacity-100 transition-opacity">Iniciar Mergulho</span>
            <div className="relative w-px h-24 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-ember-500 to-transparent transform -translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out"></div>
              <div className="w-full h-full bg-ash-900/40"></div>
            </div>
          </a>
        </div>
      </div>
    </header>

    {/* Manifesto Preview */}
    <section id="manifesto" className="py-48 relative z-10">
      <div className="max-w-4xl mx-auto px-8">
        <div className="space-y-40">
          <div className="reveal opacity-0 translate-y-10 transition-all duration-[1.2s]">
            <p className="text-ember-500 text-[11px] tracking-[0.6em] uppercase mb-12 font-bold">O Chamado Primordial</p>
            <h2 className="font-serif text-4xl md:text-6xl text-ash-200 leading-[1.2] font-extralight tracking-tight">
              Alguns aprendem a viver nas margens. Outros sentem — <span className="text-ash-400 italic opacity-80">sem linguagem, sem nome, sem explicação</span> — que existe um ponto onde a fé deixa de ser discurso e passa a ser <span className="text-ember-500 underline decoration-ember-500/40 underline-offset-8">peso</span>.
            </h2>
          </div>

          <div className="reveal opacity-0 translate-y-10 transition-all duration-[1.2s] grid md:grid-cols-2 gap-24 items-start">
            <div className="pt-10">
              <div className="w-16 h-px bg-ember-500 mb-12"></div>
              <p className="text-xl text-ash-300 leading-relaxed font-light">
                Se você chegou até aqui, já percebeu: há um incômodo que não se resolve com mais mensagens, mais estudos, mais ambiente. 
              </p>
              <p className="text-xl text-ash-300 leading-relaxed font-light mt-8">
                 Você crê. Mas algo permanece <span className="text-ash-100 font-normal border-b border-ash-700">raso</span>. É a sensação silenciosa de que a maioria parou antes da travessia e chamou isso de maturidade.
              </p>
            </div>
            <div className="bg-void-900/60 border border-ash-800/40 p-16 relative backdrop-blur-sm group hover:border-ember-500/40 transition-colors duration-700 shadow-2xl">
               <div className="absolute -top-3 -left-3 w-10 h-10 border-t border-l border-ember-500"></div>
               <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b border-r border-ember-500"></div>
               <p className="font-serif text-2xl text-ash-200 italic leading-snug">
                "Não é uma crise de fé. É uma <span className="text-ember-500 font-medium">fratura de profundidade</span> que exige reparo no abismo."
               </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Diagnóstico Section */}
    <section id="diagnostico" className="py-48 bg-void-900 relative border-y border-ash-900/30">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-32 items-center">
          <div className="reveal opacity-0 translate-y-10 transition-all duration-1000">
             <p className="text-ember-500 text-[11px] tracking-[0.6em] uppercase mb-10 font-bold">O Diagnóstico</p>
             <h3 className="font-serif text-5xl md:text-7xl text-ash-200 leading-[1.1] mb-10 font-light tracking-tighter">
              O problema nunca foi falta de fé.
             </h3>
             <p className="font-serif text-3xl text-ember-500 italic opacity-90 tracking-tight drop-shadow-sm">
              Foi o vício no conforto da superfície.
             </p>
          </div>
          <div className="reveal opacity-0 translate-y-10 transition-all duration-1000 space-y-10">
            <p className="text-xl text-ash-300 leading-relaxed font-light">
              Fomos condicionados a permanecer onde é seguro. Onde tudo é explicado rápido. Onde o custo é administrável. Onde ninguém precisa morrer para continuar pertencendo.
            </p>
            <div className="p-10 border-l border-ember-500 bg-void-950/60 italic shadow-xl">
              <p className="font-serif text-2xl text-ash-200 leading-relaxed">
                "A verdade nunca se entrega por inteiro onde o ego permanece intacto."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <ReflectionTool />

    <section id="fronteira" className="py-64 relative overflow-hidden text-center bg-void-950">
      <div className="absolute inset-0 bg-gradient-to-b from-void-900/60 to-void-950 pointer-events-none"></div>
      <div className="max-w-4xl mx-auto px-8 relative z-10">
        <div className="reveal opacity-0 translate-y-10 transition-all duration-[1.5s]">
          <p className="text-ember-500 text-[11px] tracking-[0.7em] uppercase mb-16 font-bold">A Fronteira Final</p>
          <h2 className="font-serif text-5xl md:text-8xl text-ash-200 mb-16 font-extralight tracking-tighter leading-tight">
            Assumir o custo é a <span className="italic text-ash-300">única</span> porta.
          </h2>
          <p className="text-ash-300 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed mb-24 font-light drop-shadow-sm">
            Ao avançar, você não está adquirindo um livro. Está declarando guerra contra a mediocridade do seu próprio raso. 
          </p>

          <div className="flex flex-col items-center gap-12">
            <a 
              href="https://a.co/d/8QOXW3L" 
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-block transition-transform duration-500 hover:scale-105"
            >
              <div className="absolute -inset-6 bg-ember-500/20 blur-3xl group-hover:bg-ember-500/40 transition-all duration-700 rounded-full"></div>
              <div className="relative px-20 py-10 bg-void-900/90 border border-ember-500/50 group-hover:border-ember-500 transition-all duration-700 backdrop-blur-md shadow-[0_10px_50px_rgba(201,162,39,0.1)]">
                <span className="font-serif text-3xl text-ember-400 tracking-[0.3em] uppercase block mb-3 drop-shadow-sm">Atravessar</span>
                <span className="text-[10px] text-ash-400 tracking-[0.5em] font-bold opacity-80 group-hover:opacity-100 transition-opacity">Consumar o Sacrifício</span>
              </div>
            </a>

            <div className="w-px h-16 bg-gradient-to-b from-ember-500 to-transparent"></div>

            <p className="text-ash-400 text-[11px] uppercase tracking-[0.6em] max-w-sm mx-auto leading-loose font-bold italic drop-shadow-md">
              "A travessia — desde sempre — foi para poucos."
            </p>
          </div>
        </div>
      </div>
    </section>
  </>
);

const ManifestoView: React.FC = () => (
  <div className="pt-40 pb-20 max-w-4xl mx-auto px-8 relative z-10">
    <p className="text-ember-500 text-[12px] tracking-[0.8em] uppercase mb-16 font-bold text-center">O Manifesto 1%</p>
    <h1 className="font-serif text-5xl md:text-7xl text-ash-200 mb-20 leading-tight font-light text-center">
      A Recusa do Raso
    </h1>
    <div className="space-y-16 font-light text-xl text-ash-300 leading-relaxed">
      <p className="reveal opacity-0 translate-y-10 transition-all duration-700">
        Nós vivemos na era da velocidade, mas a alma opera em profundidade. O 1% não é uma elite financeira ou intelectual, mas uma <span className="text-ember-500 font-normal">elite de consciência</span>. Aqueles que entenderam que a expansão horizontal do ego só produz exaustão.
      </p>
      <div className="h-px w-20 bg-ember-500/30"></div>
      <p className="reveal opacity-0 translate-y-10 transition-all duration-700 delay-100">
        Nossa missão é o mergulho. O Manifesto 1% é para quem parou de buscar respostas fáceis e começou a fazer as perguntas perigosas. A travessia exige que você deixe na margem o que você <span className="italic">acha</span> que sabe.
      </p>
      <div className="p-12 border border-ash-800/40 bg-void-900/40 font-serif italic text-2xl text-ash-200 reveal opacity-0 translate-y-10 transition-all duration-700 delay-200">
        "Prefiro o peso da verdade no abismo do que a leveza da mentira na superfície."
      </div>
      <p className="reveal opacity-0 translate-y-10 transition-all duration-700 delay-300">
        Não buscamos seguidores. Buscamos companheiros de travessia. Aqueles que estão dispostos a encarar o silêncio e o custo da profundidade. Se este texto ressoa, você já faz parte do caminho.
      </p>
    </div>
  </div>
);

const PrivacyView: React.FC = () => (
  <div className="pt-40 pb-20 max-w-4xl mx-auto px-8 relative z-10">
    <p className="text-ember-500 text-[12px] tracking-[0.8em] uppercase mb-16 font-bold">Confiança e Silêncio</p>
    <h1 className="font-serif text-5xl md:text-7xl text-ash-200 mb-20 leading-tight font-light">
      Privacidade Sagrada
    </h1>
    <div className="space-y-12 font-light text-lg text-ash-400 leading-relaxed">
      <section>
        <h2 className="text-ash-200 font-serif text-2xl mb-4">1. Identidade no Abismo</h2>
        <p>Não coletamos seus dados para vendê-los. Suas reflexões na ferramenta de IA são temporárias e processadas para o seu crescimento pessoal. O silêncio é o nosso maior ativo.</p>
      </section>
      <section>
        <h2 className="text-ash-200 font-serif text-2xl mb-4">2. Cookies e Rastreamento</h2>
        <p>Utilizamos apenas o estritamente necessário para que sua experiência seja fluida. Não rastreamos seus passos fora desta fronteira.</p>
      </section>
      <section>
        <h2 className="text-ash-200 font-serif text-2xl mb-4">3. O Custo da Confiança</h2>
        <p>Ao navegar por aqui, você entra em um ambiente de respeito mútuo. Seus dados são tratados com a mesma profundidade que tratamos a verdade.</p>
      </section>
    </div>
  </div>
);

const InstagramView: React.FC = () => (
  <div className="pt-40 pb-20 max-w-4xl mx-auto px-8 relative z-10 text-center flex flex-col items-center justify-center min-h-[70vh]">
    <div className="w-24 h-24 mb-12 flex items-center justify-center rounded-full border border-ember-500/40 relative group overflow-hidden">
      <div className="absolute inset-0 bg-ember-500/10 group-hover:bg-ember-500/20 transition-colors"></div>
      <span className="text-ember-500 text-4xl">1</span>
    </div>
    <p className="text-ember-500 text-[12px] tracking-[0.8em] uppercase mb-8 font-bold">Eco Digital</p>
    <h1 className="font-serif text-5xl text-ash-200 mb-8 leading-tight font-light">
      @1porcento.oficial
    </h1>
    <p className="text-ash-400 text-xl max-w-lg mb-16 leading-relaxed font-light">
      Siga os fragmentos da travessia no mundo das imagens. Um lembrete diário de que o raso não é o seu lugar.
    </p>
    <a 
      href="https://instagram.com" 
      target="_blank" 
      className="px-12 py-5 border border-ember-500 text-ember-500 uppercase tracking-widest text-xs font-bold hover:bg-ember-500 hover:text-void-950 transition-all"
    >
      Seguir o Rastro
    </a>
  </div>
);

export default App;

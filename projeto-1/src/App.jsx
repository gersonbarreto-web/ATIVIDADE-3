import React from 'react';
import './App.css';

function App() {
  const projetos = [
 
    {
      titulo: "Sistema de Matricula",
      desc: "Interface responsiva com foco em UX.",
      link: "https://github.com/gersonbarreto-web/atividade_pontuada2/blob/main/questao_1.py"
    }
  ];

  return (
    <div className="portfolio">
      <nav className="navbar">
        <h1>Dev<span>Match</span></h1>
        <ul>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#skills">Habilidades</a></li>
          <li><a href="#projetos">Projetos</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>

      <header className="hero">
        <h2>Olá, eu sou o Gerson Bruno Nunes Barreto 👋</h2>
        <p>Desenvolvedor de Sistemas em busca de novos desafios.</p>
        <a href="#projetos" className="btn-primary">Ver Projetos</a>
      </header>

      <section id="sobre" className="section">
        <h2>Quem Sou Eu</h2>
        <p>
          Estudante de Desenvolvimento de Sistemas apaixonado por resolver problemas 
          através do código. Meu objetivo é criar soluções eficientes e aprender 
          novas tecnologias diariamente.
        </p>
      </section>

      <section id="skills" className="section bg-light">
        <h2>Habilidades</h2>
        <div className="skills-grid">
          <span>HTML5</span>
          <span>CSS3</span>
          <span>JavaScript (ES6+)</span>
          <span>React.js</span>
          <span>Node.js</span>
          <span>Git & GitHub</span>
        </div>
      </section>

      <section id="projetos" className="section">
        <h2>Projetos</h2>
        <div className="projects-grid">
          {projetos.map((proj, index) => (
            <div key={index} className="card">
              <h3>{proj.titulo}</h3>
              <p>{proj.desc}</p>
              <a href={proj.link} target="_blank" rel="noreferrer">Ver Repositório</a>
            </div>
          ))}
        </div>
      </section>

      <footer id="contato" className="footer">
        <h2>Contato</h2>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/gerson-bruno-5aab63411/">LinkedIn</a>
          <a href="https://github.com/gersonbarreto-web/">GitHub</a>
          <a href="gersonbruno671@gmail.com">E-mail</a>
        </div>
        <p>© 2026 - Desenvolvido com React</p>
      </footer>
    </div>
  );
}

export default App;
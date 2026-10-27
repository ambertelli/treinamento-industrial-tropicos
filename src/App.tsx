import { useState } from "react";
import { ArrowUpRight, BookOpen, CheckCircle2, ClipboardList, Factory, Search, ShieldCheck, Wrench } from "lucide-react";

type ModuleInfo = { id: string; name: string; code: string; subtitle: string; status: string; topics: string[] };
const modules: ModuleInfo[] = [
  { id: "rew450", name: "Rebobinadeira REW-450 AFH", code: "MÓDULO 01", subtitle: "Preparação, operação e cuidados com o equipamento", status: "Em estruturação", topics: ["Conhecimento do equipamento", "Preparação e inspeção", "Operação segura", "Limpeza e conservação"] },
  { id: "ls301", name: "Cortadeira LS-30.1 AFH", code: "MÓDULO 02", subtitle: "Rotinas de trabalho e segurança operacional", status: "Em estruturação", topics: ["Conhecimento do equipamento", "Preparação e inspeção", "Operação segura", "Limpeza e conservação"] }
];
export default function App() {
  const [selected, setSelected] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const current = modules.find((item) => item.id === selected);
  const filtered = modules.filter((item) => item.name.toLowerCase().includes(query.toLowerCase()));
  return <div className="app-shell">
    <aside className="sidebar">
      <div className="brand"><div className="brand-mark"><Factory size={22}/></div><div><strong>TRÓPICOS</strong><span>ACADEMIA INDUSTRIAL</span></div></div>
      <div className="side-label">AMBIENTE DE APRENDIZAGEM</div>
      <button className={!selected ? "nav-item active" : "nav-item"} onClick={() => setSelected(null)}><BookOpen size={18}/> Visão geral</button>
      <div className="side-label">TREINAMENTOS</div>
      {modules.map((m) => <button key={m.id} className={selected === m.id ? "nav-item active" : "nav-item"} onClick={() => setSelected(m.id)}><Wrench size={18}/><span>{m.name.replace(" AFH","")}</span></button>)}
      <div className="sidebar-bottom"><ShieldCheck size={17}/><span>Segurança em primeiro lugar</span></div>
    </aside>
    <main className="main">
      <header className="topbar"><div className="breadcrumb">Treinamentos <span>/</span> {current ? current.name : "Visão geral"}</div><div className="user-chip"><span className="user-dot">T</span><span>Trópicos Industrial</span></div></header>
      {current ? <section className="content">
        <button className="back-link" onClick={() => setSelected(null)}>← Voltar à visão geral</button>
        <div className="module-hero"><div><span className="eyebrow">{current.code}</span><h1>{current.name}</h1><p>{current.subtitle}</p><span className="status"><span/> {current.status}</span></div><div className="hero-icon"><Wrench size={44}/></div></div>
        <div className="section-heading"><div><span className="eyebrow">CONTEÚDO DO MÓDULO</span><h2>Trilha de aprendizagem</h2></div><span className="muted">4 etapas previstas</span></div>
        <div className="topic-list">{current.topics.map((topic, i) => <div className="topic-row" key={topic}><div className="topic-number">{String(i + 1).padStart(2,"0")}</div><div className="topic-text"><strong>{topic}</strong><span>Conteúdo técnico será validado com o manual oficial antes da publicação.</span></div><span className="topic-tag">Em preparação</span><ArrowUpRight size={18} className="topic-arrow"/></div>)}</div>
        <div className="notice"><ShieldCheck size={20}/><p><strong>Conteúdo em validação</strong><br/>Use sempre o manual oficial e os procedimentos aprovados pela empresa. Esta interface ainda não contém instruções operacionais autorizadas.</p></div>
      </section> : <section className="content">
        <div className="welcome"><div><span className="eyebrow">CENTRO DE CAPACITAÇÃO</span><h1>Treinamento Industrial</h1><p>Aprender com segurança. Operar com excelência.</p></div><div className="welcome-icon"><Factory size={48}/></div></div>
        <div className="stats-grid"><div className="stat-card"><span>Módulos planejados</span><strong>02</strong><small>Equipamentos industriais</small></div><div className="stat-card"><span>Etapas por módulo</span><strong>04</strong><small>Trilha inicial planejada</small></div><div className="stat-card"><span>Publicação técnica</span><strong>Em validação</strong><small>Antes do uso em campo</small></div></div>
        <div className="section-heading"><div><span className="eyebrow">BIBLIOTECA DE TREINAMENTOS</span><h2>Escolha um equipamento</h2><p>Acesse o módulo para acompanhar a estrutura de aprendizagem.</p></div><label className="search-box"><Search size={17}/><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Buscar equipamento"/></label></div>
        <div className="module-grid">{filtered.map((m) => <button className="module-card" key={m.id} onClick={() => setSelected(m.id)}><div className="card-top"><div className="card-icon"><Wrench size={23}/></div><span className="card-code">{m.code}</span></div><h3>{m.name}</h3><p>{m.subtitle}</p><div className="card-footer"><span><ClipboardList size={16}/> 4 etapas planejadas</span><span className="card-link">Abrir módulo <ArrowUpRight size={16}/></span></div></button>)}</div>
        <div className="notice"><CheckCircle2 size={20}/><p><strong>Projeto em fase inicial</strong><br/>Esta versão organiza os módulos e a navegação. Os conteúdos específicos serão desenvolvidos a partir dos manuais correspondentes e revisados antes de serem usados em treinamento.</p></div>
      </section>}
      <footer>© Trópicos Industrial · Treinamento e desenvolvimento operacional</footer>
    </main>
  </div>;
}
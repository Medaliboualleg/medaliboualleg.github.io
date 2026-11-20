import { useEffect, useState } from 'react'
import { content, links } from './content.js'
import { Yarn, Icon } from './icons.jsx'

function getInitialLang() {
  try {
    const saved = localStorage.getItem('lang')
    if (saved === 'fr' || saved === 'ar') return saved
  } catch (e) { /* stockage indisponible */ }
  return 'fr'
}

function Ext({ href, children, className, newTab }) {
  return (
    <a href={href} className={className} target="_blank" rel="noopener noreferrer">
      {children}<span className="sr-only"> {newTab}</span>
    </a>
  )
}

export default function App() {
  const [lang, setLang] = useState(getInitialLang)
  const [menuOpen, setMenuOpen] = useState(false)
  const t = content[lang]

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = t.dir
    try { localStorage.setItem('lang', lang) } catch (e) { /* ignore */ }
  }, [lang, t.dir])

  const toggleLang = () => setLang(lang === 'fr' ? 'ar' : 'fr')
  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <a href="#main" className="skip">{lang === 'fr' ? 'Aller au contenu' : 'انتقل إلى المحتوى'}</a>

      <header className="nav">
        <div className="wrap nav-inner">
          <a href="#top" className="brand" aria-label={t.name} onClick={closeMenu}>
            <Yarn className="brand-mark" />
            <span className="brand-text">
              <span className="brand-ar">محمد علي بوعلاق</span>
              <span className="brand-lat">MOHAMED ALI BOUALLEG</span>
            </span>
          </a>

          <nav id="nav-links" className={`links ${menuOpen ? 'open' : ''}`} aria-label="Navigation">
            {t.nav.map(([id, label]) => (
              <a key={id} href={`#${id}`} onClick={closeMenu}>{label}</a>
            ))}
          </nav>

          <div className="nav-actions">
            <button className="lang" onClick={toggleLang} aria-label={t.switchAria}
              lang={lang === 'fr' ? 'ar' : 'fr'}>
              {t.switchLabel}
            </button>
            <button className="burger" aria-expanded={menuOpen} aria-controls="nav-links"
              aria-label={t.menu} onClick={() => setMenuOpen(!menuOpen)}>
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>

      <main id="main">
        {/* HERO — bleu nuit, cercles concentriques et pelote comme sur la couverture de la charte */}
        <section className="hero" id="top">
          <div className="rings" aria-hidden="true" />
          <div className="wrap hero-grid">
            <div className="hero-text">
              <p className="eyebrow">{t.hero.eyebrow}</p>
              <h1>
                {t.hero.titleA}<br />
                <em>{t.hero.titleB}</em>
              </h1>
              <p className="lead">{t.hero.lead}</p>
              <div className="cta">
                <a href="#contact" className="btn primary">{t.hero.primary}</a>
                <a href="#projets" className="btn ghost">{t.hero.secondary}</a>
              </div>
            </div>
            <div className="hero-mark" aria-hidden="true">
              <div className="disc"><Yarn /></div>
            </div>
          </div>
        </section>

        <section id="services" className="paper">
          <div className="wrap">
            <h2>{t.services.title}</h2>
            <p className="sub">{t.services.sub}</p>
            <div className="grid">
              {t.services.items.map(([ico, title, text]) => (
                <article className="card" key={title}>
                  <div className="ico"><Icon name={ico} /></div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="parcours" className="paper alt">
          <div className="wrap">
            <h2>{t.career.title}</h2>
            <p className="sub">{t.career.sub}</p>
            <ol className="timeline">
              {t.career.items.map(([when, role, org, text]) => (
                <li className="job" key={org}>
                  <div className="when">{when}</div>
                  <div>
                    <h3>{role}</h3>
                    <div className="org">{org}</div>
                    {text && <p>{text}</p>}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="projets" className="paper">
          <div className="wrap">
            <h2>{t.projects.title}</h2>
            <p className="sub">{t.projects.sub}</p>
            <div className="grid projects-grid">
              {t.projects.items.map(([title, text, tag, href]) => (
                <Ext className="card link-card" href={href} key={title} newTab={t.newTab}>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <span className="tag">{tag} <span aria-hidden="true">↗</span></span>
                </Ext>
              ))}
              <figure className="card quote-card">
                <figcaption className="quote-label">{t.projects.quote.label}</figcaption>
                <blockquote lang="ar" dir="rtl">«{t.projects.quote.text}»</blockquote>
                <p>{t.projects.quote.caption}</p>
              </figure>
            </div>
          </div>
        </section>

        <section id="competences" className="paper alt">
          <div className="wrap">
            <h2>{t.skills.title}</h2>
            <p className="sub">{t.skills.sub}</p>
            <div className="skills-cols">
              <div>
                <h3>{t.skills.toolsTitle}</h3>
                <ul className="chips">{t.skills.tools.map((s) => <li className="chip" key={s} dir="ltr">{s}</li>)}</ul>
              </div>
              <div>
                <h3>{t.skills.langsTitle}</h3>
                <ul className="chips">{t.skills.langs.map((s) => <li className="chip" key={s}>{s}</li>)}</ul>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-wrap">
          <div className="rings" aria-hidden="true" />
          <div className="wrap contact">
            <h2>{t.contact.title}</h2>
            <p className="lead">{t.contact.lead}</p>
            <div className="cta center">
              <Ext href={links.linkedin} className="btn primary" newTab={t.newTab}>{t.contact.cta}</Ext>
            </div>
            <ul className="socials">
              {[['LinkedIn', links.linkedin], ['YouTube', links.youtube], ['Facebook', links.facebook],
                ['TikTok', links.tiktok], ['GitHub', links.github]].map(([label, href]) => (
                <li key={label}><Ext href={href} newTab={t.newTab}>{label}</Ext></li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap footer-inner">
          <Yarn className="footer-mark" />
          <span>© {new Date().getFullYear()} {t.name} · {t.footer}</span>
        </div>
      </footer>
    </>
  )
}

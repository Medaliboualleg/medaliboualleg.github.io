# medaliboualleg.github.io

Site personnel de Mohamed Ali Boualleg — React + Vite, charte « Med Ali »
(Bleu nuit `#0E2A5C`, Bleu ciel `#8FB8E6`, Papier `#F1F0EC` ; Montserrat, Tajawal, Amiri).

## Modifier le site
- **Textes (FR et AR)** : `src/content.js`
- **Couleurs et styles** : `src/styles.css` (variables en haut du fichier)
- **Structure** : `src/App.jsx`

## Travailler en local
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # génère dist/
```

## Mise en ligne
Chaque `push` sur `main` construit le site et le publie automatiquement
(GitHub Actions → GitHub Pages). Réglage requis une fois :
Settings → Pages → Source : **GitHub Actions**.

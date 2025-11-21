# 🎨 GLR Creative Coding Grid: The Collaborative Wall

**Welkom Developers.**

Vandaag bouwen we niet alleen. Vandaag bouwen we **samen**.
Dit project is een experiment in **massale samenwerking**. Met de hele klas werken we tegelijkertijd aan één webpagina: een interactieve "Muur" die zichzelf automatisch opbouwt.

Jouw doel? Jouw stukje van de muur claimen, stylen en publiceren zonder de boel voor de rest te slopen. 🚀

---

## ⚠️ De Gouden Regels (De Robot kijkt mee!)

We werken met een **automatische politieagent** (CI/CD Pipeline). Als je je niet aan de regels houdt, wordt je code **automatisch afgekeurd**.

1.  **🚫 GEEN `<html>`, `<head>` of `<body>` tags.**
    * Je bouwt een *onderdeel* (component), geen hele pagina.
2.  **🚫 GEEN `position: fixed`.**
    * Blijf in je eigen vakje.
3.  **🚫 GEEN Externe Plaatjes of Javascript.**
    * Geen `<img src="...">` en geen `background-image: url(...)`.
    * **Challenge:** Alles wat je ziet moet je zelf tekenen met CSS (shapes, gradients, borders) of inline SVG!
4.  **🔒 Blijf van de Systeembestanden af.**
    * Raak `index.html`, `style.css`, `script.js` en de `.github` map NIET aan. De "Watchdog" ziet alles! 👀
5.  **✍️ Werk ALLEEN in je eigen bestand.**
    * Je maakt een bestand aan met jouw eigen studentnummer.

---

## 🛠️ De Workflow (VS Code Editie)

Volg deze stappen precies. We werken als "Open Source" developers via Forks!

### Stap 1: Setup (Fork & Clone) 🍴
Omdat we werken als echte pro's, werk je niet direct in de repository van de docent. Je maakt eerst een kopie voor jezelf.

1.  **Fork de Repository (GitHub):**
    * Kijk rechtsboven op deze pagina op GitHub.
    * Klik op de knop **Fork**.
    * Bevestig dat je hem naar jouw eigen account kopieert.
2.  **Clone JOUW Fork (VS Code):**
    * Klik in jouw Fork op de groene knop **Code** en kopieer de URL.
    * Open VS Code en klik links op het **Source Control** icoon (de vertakking).
    * Klik op **Clone Repository**.
    * Plak de URL bovenin en druk op Enter. Kies een map om in op te slaan.

### Stap 2: Branch maken & Bestand aanmaken
We werken nooit op `main`!

1.  **Branch maken:**
    * Klik in VS Code helemaal linksonder in de balk op **main**.
    * Kies bovenin het menu: **+ Create new branch...**
    * Typ de naam: `feature/jouw-naam` (bijv. `feature/piet-puk`) en druk op Enter.
2.  **Bestand maken:**
    * Ga naar de map `tiles/` in je verkenner.
    * Kopieer `_template.html` en plak hem in dezelfde map.
    * **Hernoem** de kopie naar jouw studentnummer (bijv. `84592.html`).
3.  **Aanpassen:**
    * Open jouw bestand en pas het ID in de CSS en HTML aan naar jouw nummer (bijv. `#tile-84592`).

### Stap 3: 🧪 Lokaal Testen (Terminal)
De website weet nog niet dat jouw bestand bestaat. Draai het hulpscript om dit lokaal te fixen:

1.  Open de **Terminal** in VS Code (`Ctrl + ~`).
2.  Zorg dat je **Git Bash** gebruikt (selecteer via het pijltje naast de `+`).
3.  Typ het volgende commando en druk op Enter:
    ```bash
    ./generate-list.sh
    ```
4.  Open nu `index.html` in je browser. Je tegel staat erbij! 🎉

---

## 🚀 Missie 1: Hello World (De Eerste 20 Minuten)

**Doel:** Bewijzen dat je samen kunt werken met Git en GitHub.

1.  Zorg dat je vakje een **achtergrondkleur** heeft en dat **jouw naam** erin staat.
2.  Sla je bestand op (`Ctrl + S`).
3.  **Stage & Commit (VS Code):**
    * Klik links op het **Source Control** icoon (de vertakking).
    * Klik op het **Plusje (+)** naast jouw bestand (dit is 'Stagen').
    * Typ in het vak erboven een bericht: *"Mijn tegel geclaimd"*.
    * Klik op de blauwe knop **Commit**.
4.  **Push (VS Code):**
    * Klik op de blauwe knop **Publish Branch** (of *Sync Changes*).
5.  **Pull Request (GitHub):**
    * Ga naar GitHub.com (jouw Fork pagina).
    * Je ziet nu een gele balk: *"Compare & pull request"*. Klik hierop.
    * Klik op **Create pull request**.
6.  **WACHT.**
    * Kijk naar de checks. Worden ze groen? ✅ → Top! De docent zal je mergen.
    * Worden ze rood? ❌ → Je hebt een regel overtreden. Fix het, Commit & Sync opnieuw.

---

## 🎨 Missie 2: Make it Shine (Rest van de les)

**Doel:** Laat je CSS skills zien & Design for Detail.

Nu je tegel live staat, gaan we hem mooi maken.
* Gebruik `hover` effecten (dingen die bewegen als je muis erover gaat).
* Gebruik `transform`, `transition` of `border-radius`.

### 🔍 Bonus Missie: Design for Detail
Let op: Op het grote grid is je tegel vrij klein.
**MAAR...** als we erop klikken, wordt hij schermvullend (**Bioscoopmodus**)! 🍿

* **De Uitdaging:** Zorg dat je ontwerp er van veraf duidelijk uitziet (grote vormen/kleuren), maar verstop **kleine details** die we pas zien als we inzoomen.
* *Voorbeeld:* Een huisje is leuk van veraf. Maar als we inzoomen, zien we pas de kat in de vensterbank.

---

## 🛠️ Gereedschapskist & Inspiratie

Omdat je geen plaatjes (`.jpg`/`.png`) mag gebruiken, moet je slim zijn met CSS.
Gebruik deze tools om vette dingen te maken:

### 🌈 Patronen & Achtergronden
* **[CSS3 Patterns Gallery](https://projects.verou.me/css3patterns/)** - *Kopieer de CSS voor ruitjes, stippen en zig-zags.*
* **[CSS Gradient](https://cssgradient.io/)** - *Maak complexe kleurverlopen.*
* **[Haikei](https://app.haikei.app/)** - *Genereer golven en blobs.*
    * *Let op:* Kies 'SVG' en plak de `<svg>...</svg>` code **direct** in jouw HTML file (geen `<img>` tag gebruiken!).

### ✂️ Vormen (Shapes)
* **[Clippy (CSS Clip-Path)](https://bennettfeely.com/clippy/)** - *Maak sterren, pijlen en gekke vormen van je div.*
* **[The Shapes of CSS](https://css-tricks.com/the-shapes-of-css/)** - *Hoe maak je een hartje of pac-man met code?*

### 🎬 Animatie
* **[Animista](https://animista.net/)** - *Test animaties en kopieer de `@keyframes`.*
* **[Cubic-Bezier](https://cubic-bezier.com/)** - *Maak je bewegingen soepel en professioneel.*

---

## 🆘 Help, mijn check faalt!

Krijg je een rood kruis bij je Pull Request? Klik op **"Details"**. De robot vertelt je precies wat er mis is.
* *"Forbidden Tags found"* → Je hebt per ongeluk `<html>` of `<body>` laten staan. Haal ze weg!
* *"Images not allowed"* → Je probeert een plaatje te gebruiken. Teken het na met CSS!
* *"System Files changed"* → Je hebt per ongeluk in `style.css` of `index.html` gewerkt. Draai die wijzigingen terug.

Succes! 💻✨
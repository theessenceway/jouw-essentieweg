# Jouw Essentieweg — premium Nederlandstalige website

Een zelfstandige one-page website voor een persoonlijke sessie van ongeveer drie uur met intuïtief lichaamswerk bij de cliënt thuis.

## Waarom een nieuwe website?

De positionering, taal en visuele richting verschillen voldoende van Time to Integrate. Deze map staat daarom volledig los van de bestaande pagina. Zo kan de nieuwe website korter, toegankelijker en specifieker converteren zonder de oude website te verstoren.

## Starten in VS Code met Claude Code

1. Pak de ZIP uit.
2. Open VS Code.
3. Kies **File → Open Folder**.
4. Open de map `jouw-essentieweg-bodywork-premium`.
5. Open de terminal met **Ctrl + `**.
6. Start Claude Code:

```bash
claude
```

7. Open `CLAUDE-CODE-PROMPT-NL.md`.
8. Kopieer de volledige prompt en plak die in Claude Code.

## Lokaal bekijken

Met Live Server: klik met rechts op `index.html` en kies **Open with Live Server**.

Zonder extensie:

```bash
python -m http.server 8000
```

Open daarna `http://localhost:8000`.

## Beelden

De vrouw met de handen rond haar gezicht staat al ingesteld als de volledige hero-achtergrond via `assets/hero-experience.jpg`.

Nog toevoegen:

- `assets/tom-portrait.jpg` — warme, natuurlijke foto van Tom voor de sectie Over Tom;
- `assets/video-invitation.mp4` — persoonlijke uitnodigingsvideo.

De overige aangeleverde beelden staan al in `/assets` onder duidelijke namen.

## Nog bevestigen vóór publicatie

- definitief tarief;
- definitieve regio en eventuele reiskosten;
- domeinnaam;
- privacytekst;
- intake-, gezondheids- en annuleringsvoorwaarden;
- definitieve testimonials en toestemming om namen te publiceren.

## Publiceren via GitHub Pages

Maak bij voorkeur een nieuwe repository, bijvoorbeeld `jouw-essentieweg-bodywork`. Upload alle bestanden uit deze map naar de root. Ga daarna naar **Settings → Pages → Deploy from a branch → main / root**.

# Slow Running Club Website

Schlankes Setup mit `Preact + Vite` für `slowrunningclub.de` und einfachem Deployment via AWS Amplify.

## Warum dieses Setup?

- **Lean:** Sehr kleines Frontend mit wenigen Dateien.
- **Schnell:** Vite entwickelt und baut schnell.
- **Einfach deploybar:** Jeder Push auf `main` kann automatisch live gehen.

## Voraussetzungen lokal

- Node.js 20+ (inkl. npm)

Hinweis: In deiner aktuellen Agent-Umgebung war `npm` nicht verfügbar. Lokal auf deinem Rechner bitte einmal Node installieren, dann:

```bash
npm install
npm run dev
```

## Lokale Entwicklung

- `npm run dev` startet den Dev-Server
- `npm run build` erzeugt den Build in `dist/`
- `npm run preview` zeigt den gebauten Stand lokal an

## Deployment-Flow (AWS Amplify + Route 53)

1. Repository nach GitHub pushen.
2. In AWS Console zu **Amplify Hosting** gehen.
3. **Deploy an app** → **GitHub** verbinden.
4. Repository + Branch `main` wählen.
5. Build-Einstellungen übernehmen (`amplify.yml` wird automatisch erkannt).
6. Unter **Domain management** die Domain `slowrunningclub.de` verbinden.
7. SSL-Zertifikat wird automatisch ausgestellt.

Ab dann ist der Ablauf:

- Ändern
- Committen
- Push auf `main`
- Amplify deployed automatisch

## Nächste sinnvolle Schritte

- Impressum und Datenschutz als eigene Seite
- Optional Routing mit `preact-router`
- Kontaktformular statt reinem `mailto` Link

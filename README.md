# Todo App

Een React TypeScript applicatie voor het beheren van taken, met persistentie via localStorage en gehost op GitHub Pages.

## Stap-voor-stap Ontwikkelproces

### 1. Project Initialisatie

```bash
npx create-react-app todo-app --template typescript
```

Dit commando creëert de basis projectstructuur:
- `/src` - Broncode directory
  - `index.tsx` - Het startpunt van de applicatie
  - `App.tsx` - De hoofdcomponent
  - `react-app-env.d.ts` - TypeScript declaratie bestand
- `/public` - Statische bestanden
  - `index.html` - De HTML template
  - `manifest.json` - Web app manifest
  - `favicon.ico` - Website icoon
- `package.json` - Project configuratie en dependencies
- `tsconfig.json` - TypeScript configuratie
- `.gitignore` - Git ignore configuratie

### 2. Component Structuur Opzetten

Nieuwe bestanden gecreëerd in `/src`:
- `/types`
  - `Todo.ts` - Interface voor Todo items
    ```typescript
    export interface Todo {
      id: number;
      text: string;
      completed: boolean;
    }
    ```
- `/components`
  - `TodoList.tsx` - Hoofdcomponent voor de todo lijst
  - `Todo.tsx` - Component voor individuele todo items
  - `TodoForm.tsx` - Formulier voor nieuwe todos

### 3. GitHub Pages Deployment Setup

```bash
npm install gh-pages --save-dev
```

Package.json aanpassingen:
```json
{
  "homepage": "https://[username].github.io/todo",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

### 4. Development Server Starten

```bash
npm start
```
Start de ontwikkelserver op http://localhost:3000:
- Hot reloading voor directe updates
- TypeScript compilatie in watch mode
- Console output voor errors en warnings

### 5. Productie Build en Deployment

```bash
npm run deploy
```
Dit voert automatisch twee stappen uit:
1. `npm run predeploy` (npm run build):
   - Bundelt de applicatie
   - Minificeert code
   - Optimaliseert assets
   - Creëert `/build` directory

2. `gh-pages -d build`:
   - Pusht de build naar gh-pages branch
   - Maakt de app beschikbaar op GitHub Pages

## Belangrijke NPM Commando's

### Development Commando's

#### `npm start`
- Start lokale development server
- Opent browser op http://localhost:3000
- Activeert hot reloading
- Toont lint errors in console

#### `npm test`
- Start test runner in watch mode
- Voert unit tests uit
- Toont test coverage

#### `npm run build`
- Creëert geoptimaliseerde productie build
- Output in `/build` directory
- Minificeert en bundelt alle bestanden

#### `npm run deploy`
- Bouwt de applicatie
- Deployt naar GitHub Pages
- Maakt app publiek toegankelijk

#### `npm run eject`
⚠️ **Let op: Onomkeerbare actie!**
- Geeft volledige controle over configuratie
- Verwijdert Create React App abstractie
- Alleen gebruiken indien strikt noodzakelijk

## Applicatie Functionaliteit

De Todo applicatie biedt de volgende features:
- Toevoegen van nieuwe taken
- Markeren van taken als voltooid
- Verwijderen van taken
- Persistentie via localStorage
- Responsive design
- Taak counter
- Leeg-staat bericht

## GitHub Pages Beperkingen

Als statische hosting platform heeft GitHub Pages enkele beperkingen:
- Alleen statische content (HTML, CSS, JavaScript)
- Geen server-side functionaliteit
- Repository limiet van 1GB
- Bandbreedte limiet van 100GB/maand
- Build tijd maximaal 10 minuten

## Learn More

- [Create React App documentatie](https://facebook.github.io/create-react-app/docs/getting-started)
- [React documentatie](https://reactjs.org/)
- [TypeScript documentatie](https://www.typescriptlang.org/)
- [GitHub Pages documentatie](https://docs.github.com/en/pages)

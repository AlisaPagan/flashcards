# Interview Flashcards

Small React + TypeScript flashcards app for technical interview practice.

## Run locally

```bash
npm install
npm run dev
```

Open the URL Vite prints in the terminal.

## What is inside

- Category sessions: HTML/CSS, JavaScript, TypeScript, React, Next.js, Node.js, and Random Mix
- Click-to-flip flashcards
- Previous / Next / Skip / Finish session
- Typed answer field
- Dictation button using the browser SpeechRecognition API
- Keyword-based answer checking
- Manual override: `I was right` / `Almost / partial` / `I was wrong`
- Manual Start / Stop practice timer
- Stats and saved timer blocks in localStorage
- Failed, partial, and skipped cards appear more often in later sessions

## Where to edit cards

Edit `src/data/cards.ts`.

Each card looks like this:

```ts
{
  id: 'js-026',
  category: 'javascript',
  question: 'What is a closure and why is it useful?',
  answer: 'A closure is when a function keeps access to variables from its lexical or outer scope even after that outer function has finished.',
  keywords: ['function', 'lexical scope', 'outer scope', 'keeps access'],
  aliases: {
    'keeps access': ['remembers', 'captures'],
  },
}
```

## Dictation note

Dictation depends on browser support. Chrome and Edge are the safest choices. Firefox usually will not work for SpeechRecognition.

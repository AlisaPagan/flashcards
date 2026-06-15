import type { Flashcard } from '../types';

export const extraCards: Flashcard[] = [
  {
    id: 'javascript-deep-001',
    category: 'javascript',
    question: 'What is an execution context in JavaScript?',
    answer:
      'An execution context is the environment where JavaScript code is evaluated and executed. It contains the variable environment, scope chain, and the value of this. JavaScript creates a global execution context first, then a new function execution context whenever a function is called.',
    keywords: ['environment', 'variables', 'scope chain', 'this', 'function call'],
    aliases: {
      environment: ['context'],
      variables: ['variable environment', 'memory'],
      'function call': ['called function', 'function execution'],
    },
    source: 'Interview-ready JS theory',
  },
  {
    id: 'javascript-deep-002',
    category: 'javascript',
    question: 'What is the call stack?',
    answer:
      'The call stack is the structure JavaScript uses to track function calls. When a function is called, it is pushed onto the stack. When it finishes, it is popped off. Because the stack is last-in-first-out, the most recent function call finishes first.',
    keywords: ['function calls', 'stack', 'push', 'pop', 'last-in-first-out'],
    aliases: {
      stack: ['call stack'],
      push: ['added'],
      pop: ['removed'],
      'last-in-first-out': ['lifo'],
    },
    source: 'Interview-ready JS theory',
  },
  {
    id: 'javascript-deep-003',
    category: 'javascript',
    question: 'What is the event loop in JavaScript?',
    answer:
      'The event loop is the mechanism that lets JavaScript handle asynchronous work while the main thread stays single-threaded. It checks whether the call stack is empty and then moves ready callbacks from queues into the stack to be executed.',
    keywords: ['asynchronous', 'call stack', 'queue', 'single-threaded', 'callback'],
    aliases: {
      asynchronous: ['async'],
      queue: ['task queue', 'callback queue'],
      'single-threaded': ['one thread'],
      callback: ['callback function'],
    },
    source: 'Interview-ready JS theory',
  },
  {
    id: 'javascript-deep-004',
    category: 'javascript',
    question: 'What is the difference between microtasks and macrotasks?',
    answer:
      'Microtasks are higher-priority async tasks, such as Promise callbacks and queueMicrotask. Macrotasks include setTimeout, setInterval, and many browser events. After the call stack is empty, JavaScript runs all available microtasks before moving to the next macrotask.',
    keywords: ['microtasks', 'macrotasks', 'promise', 'setTimeout', 'priority'],
    aliases: {
      microtasks: ['microtask queue'],
      macrotasks: ['task queue', 'tasks'],
      promise: ['promises'],
      priority: ['higher priority', 'before macrotasks'],
    },
    source: 'Interview-ready JS theory',
  },
  {
    id: 'javascript-deep-005',
    category: 'javascript',
    question: 'Why do Promise callbacks run before setTimeout callbacks?',
    answer:
      'Promise callbacks run as microtasks, while setTimeout callbacks run as macrotasks. After the current synchronous code finishes, the event loop clears the microtask queue before taking the next macrotask, so Promise callbacks usually run first.',
    keywords: ['promise', 'microtask', 'setTimeout', 'macrotask', 'queue'],
    aliases: {
      promise: ['then', 'promise callback'],
      microtask: ['microtask queue'],
      macrotask: ['task queue'],
      queue: ['queues'],
    },
    source: 'Interview-ready JS theory',
  },
  {
    id: 'javascript-deep-006',
    category: 'javascript',
    question: 'How does async/await work in JavaScript?',
    answer:
      'async/await is syntax built on top of Promises. An async function always returns a Promise. await pauses the function until the Promise settles, then continues execution. It makes asynchronous code easier to read, but it does not make JavaScript synchronous.',
    keywords: ['promise', 'async function', 'await', 'settles', 'asynchronous'],
    aliases: {
      promise: ['promises'],
      'async function': ['async'],
      settles: ['resolved', 'rejected', 'finished'],
      asynchronous: ['async'],
    },
    source: 'Interview-ready JS theory',
  },
  {
    id: 'javascript-deep-007',
    category: 'javascript',
    question: 'How do you handle errors with async/await?',
    answer:
      'Errors in async/await are usually handled with try/catch. If an awaited Promise rejects, JavaScript throws the rejection inside the async function, so catch can handle it. You can also handle errors by attaching .catch to the returned Promise.',
    keywords: ['try/catch', 'promise rejects', 'async function', 'catch', 'error'],
    aliases: {
      'try/catch': ['try catch'],
      'promise rejects': ['rejected promise', 'rejection'],
      catch: ['.catch'],
      error: ['exception'],
    },
    source: 'Interview-ready JS theory',
  },
  {
    id: 'javascript-deep-008',
    category: 'javascript',
    question: 'What is lexical scope?',
    answer:
      'Lexical scope means that variable access is determined by where code is written in the source code, not where a function is called. Inner functions can access variables from their outer scopes because of lexical scope.',
    keywords: ['where code is written', 'scope', 'outer scope', 'inner function', 'variable access'],
    aliases: {
      'where code is written': ['source code location', 'defined'],
      scope: ['lexical scope'],
      'outer scope': ['parent scope'],
      'inner function': ['nested function'],
      'variable access': ['access variables'],
    },
    source: 'Interview-ready JS theory',
  },
  {
    id: 'javascript-deep-009',
    category: 'javascript',
    question: 'What is a closure and why is it useful?',
    answer:
      'A closure happens when a function keeps access to variables from its outer scope even after the outer function has finished running. Closures are useful for data privacy, callbacks, function factories, and preserving state between function calls.',
    keywords: ['function', 'outer scope', 'keeps access', 'after finished', 'state'],
    aliases: {
      'outer scope': ['parent scope', 'lexical scope'],
      'keeps access': ['remembers', 'captures', 'has access'],
      'after finished': ['after execution', 'after return'],
      state: ['private data', 'saved value'],
    },
    source: 'Interview-ready JS theory',
  },
  {
    id: 'javascript-deep-010',
    category: 'javascript',
    question: 'What is the value of this in JavaScript?',
    answer:
      'this is a special value that depends on how a function is called. In a method call, this usually refers to the object before the dot. In a regular function, it can be undefined in strict mode or the global object in non-strict mode. Arrow functions do not create their own this.',
    keywords: ['how function is called', 'method', 'object', 'strict mode', 'arrow functions'],
    aliases: {
      'how function is called': ['call site', 'called'],
      method: ['object method'],
      object: ['object before the dot'],
      'strict mode': ['use strict'],
      'arrow functions': ['arrow function'],
    },
    source: 'Interview-ready JS theory',
  },
  {
    id: 'javascript-deep-011',
    category: 'javascript',
    question: 'What is the difference between call, apply, and bind?',
    answer:
      'call, apply, and bind let you control the value of this. call invokes the function immediately with arguments listed one by one. apply invokes it immediately with arguments as an array. bind returns a new function with this permanently set.',
    keywords: ['this', 'call', 'apply', 'bind', 'new function'],
    aliases: {
      call: ['call()'],
      apply: ['apply()', 'array arguments'],
      bind: ['bind()', 'bound function'],
      'new function': ['returns function'],
    },
    source: 'Interview-ready JS theory',
  },
  {
    id: 'javascript-deep-012',
    category: 'javascript',
    question: 'What is the prototype chain?',
    answer:
      "The prototype chain is how JavaScript objects inherit properties and methods from other objects. When a property is not found on an object, JavaScript looks up its prototype, then that prototype's prototype, until it finds the property or reaches null.",
    keywords: ['objects', 'inherit', 'properties', 'prototype', 'null'],
    aliases: {
      objects: ['object'],
      inherit: ['inheritance'],
      properties: ['methods', 'property'],
      prototype: ['__proto__', 'prototype chain'],
      null: ['end of chain'],
    },
    source: 'Interview-ready JS theory',
  },
  {
    id: 'javascript-deep-013',
    category: 'javascript',
    question: 'Are JavaScript classes the same as classes in classical OOP languages?',
    answer:
      'JavaScript class syntax is mostly syntactic sugar over prototypes. It gives a cleaner way to create constructor functions and methods, but inheritance still works through the prototype chain, not through classical class-based inheritance.',
    keywords: ['syntactic sugar', 'prototypes', 'constructor', 'methods', 'prototype chain'],
    aliases: {
      'syntactic sugar': ['cleaner syntax'],
      prototypes: ['prototype'],
      constructor: ['constructor function'],
      methods: ['class methods'],
      'prototype chain': ['prototypal inheritance'],
    },
    source: 'Interview-ready JS theory',
  },
  {
    id: 'javascript-deep-014',
    category: 'javascript',
    question: 'What does strict mode do in JavaScript?',
    answer:
      'Strict mode enables stricter parsing and error handling. It prevents some unsafe behavior, such as accidentally creating global variables, changes how this behaves in regular functions, and makes some silent errors throw actual errors.',
    keywords: ['stricter', 'errors', 'global variables', 'this', 'silent errors'],
    aliases: {
      stricter: ['strict'],
      errors: ['throws errors'],
      'global variables': ['accidental globals'],
      'silent errors': ['silent mistakes'],
    },
    source: 'Interview-ready JS theory',
  },
  {
    id: 'javascript-deep-015',
    category: 'javascript',
    question: 'What are ES modules?',
    answer:
      "ES modules are JavaScript's standard module system. They use import and export to share code between files. Modules help organize code, avoid global variables, and allow tools to analyze dependencies and tree-shake unused code.",
    keywords: ['import', 'export', 'organize code', 'dependencies', 'tree-shake'],
    aliases: {
      import: ['imports'],
      export: ['exports'],
      'organize code': ['split code', 'modular'],
      dependencies: ['dependency graph'],
      'tree-shake': ['tree shaking', 'remove unused code'],
    },
    source: 'Interview-ready JS theory',
  },
  {
    id: 'javascript-deep-016',
    category: 'javascript',
    question: 'What is destructuring in JavaScript?',
    answer:
      'Destructuring is syntax for unpacking values from arrays or properties from objects into variables. It makes code shorter and clearer when you need specific values from a larger object or array.',
    keywords: ['unpacking', 'arrays', 'objects', 'variables', 'properties'],
    aliases: {
      unpacking: ['extracting'],
      arrays: ['array'],
      objects: ['object'],
      variables: ['variable'],
      properties: ['object properties'],
    },
    source: 'Interview-ready JS theory',
  },
  {
    id: 'javascript-deep-017',
    category: 'javascript',
    question: 'What is the difference between spread and rest syntax?',
    answer:
      'Spread expands values out of an array or object, for example when copying or passing arguments. Rest collects multiple values into an array or object, for example in function parameters or destructuring. They use the same ... syntax but in different positions.',
    keywords: ['spread', 'expands', 'rest', 'collects', '... syntax'],
    aliases: {
      spread: ['spread operator'],
      expands: ['unpacks', 'copies'],
      rest: ['rest parameter'],
      collects: ['gathers'],
      '... syntax': ['three dots'],
    },
    source: 'Interview-ready JS theory',
  },
  {
    id: 'javascript-deep-018',
    category: 'javascript',
    question: 'What is optional chaining?',
    answer:
      'Optional chaining is the ?. syntax that lets you safely access nested properties or methods when a value may be null or undefined. Instead of throwing an error, it returns undefined when the left side is nullish.',
    keywords: ['?.', 'nested properties', 'null', 'undefined', 'safe access'],
    aliases: {
      '?.': ['optional chaining'],
      'nested properties': ['deep property'],
      null: ['nullish'],
      undefined: ['missing value'],
      'safe access': ['avoid error'],
    },
    source: 'Interview-ready JS theory',
  },
  {
    id: 'javascript-deep-019',
    category: 'javascript',
    question: 'What is nullish coalescing and how is it different from OR?',
    answer:
      'Nullish coalescing uses ?? and only falls back when the left side is null or undefined. The OR operator uses || and falls back for any falsy value, including 0, empty string, false, null, and undefined.',
    keywords: ['??', 'null', 'undefined', '||', 'falsy'],
    aliases: {
      '??': ['nullish coalescing'],
      null: ['nullish'],
      undefined: ['missing value'],
      '||': ['or operator', 'logical or'],
      falsy: ['falsey'],
    },
    source: 'Interview-ready JS theory',
  },
  {
    id: 'javascript-deep-020',
    category: 'javascript',
    question: 'What are truthy and falsy values?',
    answer:
      'Truthy and falsy describe how values behave in boolean contexts. Falsy values include false, 0, empty string, null, undefined, and NaN. Most other values are truthy, including empty arrays and empty objects.',
    keywords: ['boolean context', 'false', '0', 'empty string', 'null', 'undefined', 'NaN'],
    aliases: {
      'boolean context': ['condition', 'if statement'],
      'empty string': ['blank string'],
      NaN: ['not a number'],
    },
    source: 'Interview-ready JS theory',
  },
  {
    id: 'javascript-deep-021',
    category: 'javascript',
    question: 'What is the difference between a shallow copy and a deep copy?',
    answer:
      'A shallow copy copies only the first level of an object or array. Nested objects are still shared by reference. A deep copy copies nested structures too, so changes to nested data do not affect the original.',
    keywords: ['shallow copy', 'first level', 'nested objects', 'reference', 'deep copy'],
    aliases: {
      'shallow copy': ['shallow clone'],
      'first level': ['top level'],
      'nested objects': ['nested data'],
      reference: ['same reference'],
      'deep copy': ['deep clone'],
    },
    source: 'Interview-ready JS theory',
  },
  {
    id: 'javascript-deep-022',
    category: 'javascript',
    question: 'Why is immutability useful in JavaScript apps?',
    answer:
      'Immutability means not changing existing data directly, but creating updated copies instead. It makes state changes easier to track, helps avoid accidental side effects, and is especially useful in React because React relies on reference changes to detect updates.',
    keywords: ['not mutate', 'copies', 'side effects', 'state changes', 'reference changes'],
    aliases: {
      'not mutate': ['immutability', 'do not change directly'],
      copies: ['new object', 'new array'],
      'side effects': ['unexpected changes'],
      'state changes': ['state update'],
      'reference changes': ['new reference'],
    },
    source: 'Interview-ready JS theory',
  },
  {
    id: 'javascript-deep-023',
    category: 'javascript',
    question: 'What is debouncing?',
    answer:
      'Debouncing is a technique that delays running a function until a certain amount of time has passed since the last call. It is useful for search inputs, resize handlers, and other events that fire many times quickly.',
    keywords: ['delay', 'last call', 'search input', 'events', 'many times'],
    aliases: {
      delay: ['wait'],
      'last call': ['last event'],
      'search input': ['search box'],
      events: ['event handlers'],
      'many times': ['frequently', 'rapidly'],
    },
    source: 'Interview-ready JS theory',
  },
  {
    id: 'javascript-deep-024',
    category: 'javascript',
    question: 'What is throttling?',
    answer:
      'Throttling limits how often a function can run during a period of time. Even if an event fires many times, the function runs at most once per interval. It is useful for scroll, resize, and mousemove events.',
    keywords: ['limits', 'how often', 'interval', 'scroll', 'resize'],
    aliases: {
      limits: ['limit'],
      'how often': ['frequency'],
      interval: ['time period'],
      scroll: ['scroll event'],
      resize: ['resize event'],
    },
    source: 'Interview-ready JS theory',
  },
  {
    id: 'javascript-deep-025',
    category: 'javascript',
    question: 'What can cause memory leaks in JavaScript applications?',
    answer:
      'Memory leaks happen when memory is no longer needed but is still referenced, so garbage collection cannot remove it. Common causes include forgotten timers, event listeners that are not removed, global variables, cached data that grows forever, and closures holding large objects.',
    keywords: ['references', 'garbage collection', 'timers', 'event listeners', 'closures'],
    aliases: {
      references: ['still referenced', 'kept in memory'],
      'garbage collection': ['gc'],
      timers: ['setInterval', 'setTimeout'],
      'event listeners': ['listeners'],
      closures: ['closure'],
    },
    source: 'Interview-ready JS theory',
  },
  {
    id: 'react-deep-001',
    category: 'react',
    question: 'What causes a React component to re-render?',
    answer:
      'A React component usually re-renders when its state changes, when its props change, or when its parent re-renders. Context changes can also re-render components that read that context. A re-render means React calls the component function again to calculate the next UI.',
    keywords: ['state changes', 'props change', 'parent re-renders', 'context', 'component function'],
    aliases: {
      'state changes': ['state update', 'setState'],
      'props change': ['new props', 'props update'],
      'parent re-renders': ['parent renders'],
      context: ['context value'],
      'component function': ['function runs again'],
    },
    source: 'Interview-ready React theory',
  },
  {
    id: 'react-deep-002',
    category: 'react',
    question: 'What does it mean that React state is a snapshot?',
    answer:
      'React state behaves like a snapshot for each render. Updating state does not immediately change the variable in the current render. Instead, it schedules a new render, and that next render receives the updated state value.',
    keywords: ['snapshot', 'current render', 'schedules', 'new render', 'updated state'],
    aliases: {
      snapshot: ['state snapshot'],
      'current render': ['same render'],
      schedules: ['queues', 'plans'],
      'new render': ['next render'],
      'updated state': ['new state'],
    },
    source: 'Interview-ready React theory',
  },
  {
    id: 'react-deep-003',
    category: 'react',
    question: 'What is batching in React?',
    answer:
      'Batching means React groups multiple state updates together and performs one re-render instead of re-rendering after every single update. This improves performance and avoids unnecessary intermediate renders.',
    keywords: ['groups', 'state updates', 'one re-render', 'performance', 'unnecessary renders'],
    aliases: {
      groups: ['batches', 'combines'],
      'state updates': ['setState calls'],
      'one re-render': ['single render'],
      'unnecessary renders': ['extra renders'],
    },
    source: 'Interview-ready React theory',
  },
  {
    id: 'react-deep-004',
    category: 'react',
    question: 'Why should state updates based on previous state use the functional updater form?',
    answer:
      'When the next state depends on the previous state, the functional updater is safer because React gives it the latest pending state. This avoids bugs from reading a stale state value inside the current render or event handler.',
    keywords: ['previous state', 'functional updater', 'latest pending state', 'stale state', 'event handler'],
    aliases: {
      'previous state': ['old state', 'current count'],
      'functional updater': ['callback form', 'setState callback'],
      'latest pending state': ['latest state'],
      'stale state': ['old value'],
      'event handler': ['handler'],
    },
    source: 'Interview-ready React theory',
  },
  {
    id: 'react-deep-005',
    category: 'react',
    question: 'What is the difference between controlled and uncontrolled inputs in React?',
    answer:
      'A controlled input stores its value in React state and updates through onChange. An uncontrolled input keeps its own DOM state, and React can read the value with a ref. Controlled inputs are usually better when the UI needs validation, formatting, or live state.',
    keywords: ['controlled', 'React state', 'onChange', 'uncontrolled', 'ref'],
    aliases: {
      controlled: ['controlled input'],
      'React state': ['state'],
      onChange: ['change handler'],
      uncontrolled: ['uncontrolled input'],
      ref: ['useRef'],
    },
    source: 'Interview-ready React theory',
  },
  {
    id: 'react-deep-006',
    category: 'react',
    question: 'What is lifting state up?',
    answer:
      'Lifting state up means moving shared state to the nearest common parent component so multiple child components can use and update the same source of truth through props and callback functions.',
    keywords: ['shared state', 'common parent', 'children', 'source of truth', 'callbacks'],
    aliases: {
      'shared state': ['same state'],
      'common parent': ['parent component'],
      children: ['child components'],
      'source of truth': ['single source of truth'],
      callbacks: ['handler functions', 'setter functions'],
    },
    source: 'Interview-ready React theory',
  },
  {
    id: 'react-deep-007',
    category: 'react',
    question: 'What is composition in React?',
    answer:
      'Composition means building UI by combining small components together instead of creating large inheritance hierarchies. React encourages composition through props, children, and reusable components.',
    keywords: ['combine components', 'small components', 'props', 'children', 'reusable'],
    aliases: {
      'combine components': ['compose components', 'combine UI'],
      'small components': ['smaller components'],
      props: ['component props'],
      children: ['children prop'],
      reusable: ['reuse'],
    },
    source: 'Interview-ready React theory',
  },
  {
    id: 'react-deep-008',
    category: 'react',
    question: 'What is the children prop in React?',
    answer:
      "children is a special prop that contains whatever is placed between a component's opening and closing tags. It is useful for layout components, wrappers, modals, cards, and other reusable UI containers.",
    keywords: ['special prop', 'between tags', 'layout', 'wrapper', 'reusable'],
    aliases: {
      'special prop': ['children prop'],
      'between tags': ['inside component tags'],
      layout: ['layout component'],
      wrapper: ['container'],
      reusable: ['reuse'],
    },
    source: 'Interview-ready React theory',
  },
  {
    id: 'react-deep-009',
    category: 'react',
    question: 'What problem does Context solve in React?',
    answer:
      'Context lets you pass data through the component tree without manually passing props at every level. It is useful for global-ish values like theme, current user, language, or settings, but it should not replace all local state.',
    keywords: ['component tree', 'avoid prop drilling', 'theme', 'current user', 'not all state'],
    aliases: {
      'component tree': ['tree'],
      'avoid prop drilling': ['without prop drilling', 'skip passing props'],
      theme: ['dark mode'],
      'current user': ['auth user'],
      'not all state': ['not every state'],
    },
    source: 'Interview-ready React theory',
  },
  {
    id: 'react-deep-010',
    category: 'react',
    question: 'When would you use useReducer instead of useState?',
    answer:
      'useReducer is useful when state logic is complex, when the next state depends on the previous state in several ways, or when multiple related state values should be updated through clear actions. useState is better for simple independent values.',
    keywords: ['complex state', 'previous state', 'related values', 'actions', 'useState simple'],
    aliases: {
      'complex state': ['complex logic', 'state logic'],
      'previous state': ['old state'],
      'related values': ['connected state'],
      actions: ['dispatch actions'],
      'useState simple': ['simple state'],
    },
    source: 'Interview-ready React theory',
  },
  {
    id: 'react-deep-011',
    category: 'react',
    question: 'What is useRef used for?',
    answer:
      'useRef stores a mutable value that persists between renders without causing a re-render when it changes. It is often used to access DOM elements, store timer IDs, keep previous values, or hold values needed by event handlers.',
    keywords: ['mutable value', 'persists', 'no re-render', 'DOM elements', 'timer IDs'],
    aliases: {
      'mutable value': ['mutable ref'],
      persists: ['keeps value'],
      'no re-render': ['does not rerender'],
      'DOM elements': ['dom node', 'input ref'],
      'timer IDs': ['interval id', 'timeout id'],
    },
    source: 'Interview-ready React theory',
  },
  {
    id: 'react-deep-012',
    category: 'react',
    question: 'What is the difference between useRef and useState?',
    answer:
      'useState stores data that affects rendering, and updating it causes a re-render. useRef stores mutable data that persists between renders, but changing ref.current does not cause a re-render.',
    keywords: ['useState', 'affects rendering', 're-render', 'useRef', 'ref.current'],
    aliases: {
      useState: ['state'],
      'affects rendering': ['used in UI'],
      're-render': ['rerender'],
      useRef: ['ref'],
      'ref.current': ['current property'],
    },
    source: 'Interview-ready React theory',
  },
  {
    id: 'react-deep-013',
    category: 'react',
    question: 'What is useMemo used for?',
    answer:
      'useMemo memoizes the result of a calculation between renders. It is useful when a calculation is expensive or when keeping the same reference helps avoid unnecessary work in child components. It should not be used everywhere by default.',
    keywords: ['memoizes', 'calculation', 'expensive', 'same reference', 'not everywhere'],
    aliases: {
      memoizes: ['caches'],
      calculation: ['computed value'],
      expensive: ['costly'],
      'same reference': ['stable reference'],
      'not everywhere': ['not by default'],
    },
    source: 'Interview-ready React theory',
  },
  {
    id: 'react-deep-014',
    category: 'react',
    question: 'What is useCallback used for?',
    answer:
      'useCallback memoizes a function reference between renders. It is useful when passing callbacks to memoized child components or when a stable function reference is needed in a dependency array. It does not make the function itself faster.',
    keywords: ['memoizes', 'function reference', 'memoized child', 'dependency array', 'not faster'],
    aliases: {
      memoizes: ['caches'],
      'function reference': ['stable callback', 'stable function'],
      'memoized child': ['React.memo child'],
      'dependency array': ['dependencies'],
      'not faster': ['does not speed up'],
    },
    source: 'Interview-ready React theory',
  },
  {
    id: 'react-deep-015',
    category: 'react',
    question: 'What does React.memo do?',
    answer:
      'React.memo memoizes a component and can skip re-rendering it when its props have not changed. It is useful for expensive child components, but it adds comparison work and should not be used blindly on every component.',
    keywords: ['memoizes component', 'skip re-render', 'props', 'expensive child', 'not blindly'],
    aliases: {
      'memoizes component': ['memoized component'],
      'skip re-render': ['avoid rerender'],
      props: ['same props'],
      'expensive child': ['heavy child'],
      'not blindly': ['not everywhere'],
    },
    source: 'Interview-ready React theory',
  },
  {
    id: 'react-deep-016',
    category: 'react',
    question: 'What is a custom hook?',
    answer:
      'A custom hook is a reusable function whose name starts with use and that can call other React hooks. Custom hooks let you extract and share stateful logic between components without duplicating code.',
    keywords: ['reusable function', 'starts with use', 'calls hooks', 'stateful logic', 'share logic'],
    aliases: {
      'reusable function': ['reusable hook'],
      'starts with use': ['use prefix'],
      'calls hooks': ['uses hooks'],
      'stateful logic': ['hook logic'],
      'share logic': ['reuse logic'],
    },
    source: 'Interview-ready React theory',
  },
  {
    id: 'react-deep-017',
    category: 'react',
    question: 'What is useEffect cleanup and when do you need it?',
    answer:
      'useEffect cleanup is a function returned from an effect. React runs it before the effect runs again and when the component unmounts. Cleanup is needed for subscriptions, event listeners, timers, and requests that should be cancelled or ignored.',
    keywords: ['return function', 'before effect runs again', 'unmounts', 'event listeners', 'timers'],
    aliases: {
      'return function': ['cleanup function'],
      'before effect runs again': ['before rerun'],
      unmounts: ['component unmount'],
      'event listeners': ['listeners'],
      timers: ['intervals', 'timeouts'],
    },
    source: 'Interview-ready React theory',
  },
  {
    id: 'react-deep-018',
    category: 'react',
    question: 'What mistakes can happen with a useEffect dependency array?',
    answer:
      'Common mistakes include missing dependencies, adding unstable objects or functions that cause the effect to run too often, and using effects to derive state that could be calculated during render. The dependency array should match the reactive values used inside the effect.',
    keywords: ['missing dependencies', 'unstable objects', 'runs too often', 'derive state', 'reactive values'],
    aliases: {
      'missing dependencies': ['missing deps'],
      'unstable objects': ['new object', 'unstable function'],
      'runs too often': ['infinite loop', 'reruns'],
      'derive state': ['derived state'],
      'reactive values': ['dependencies used inside'],
    },
    source: 'Interview-ready React theory',
  },
  {
    id: 'react-deep-019',
    category: 'react',
    question: 'When should you avoid useEffect?',
    answer:
      'You should avoid useEffect when you can calculate something during render, handle it directly in an event handler, or derive it from existing props or state. Effects are mainly for synchronizing with external systems like APIs, subscriptions, browser APIs, or third-party libraries.',
    keywords: ['calculate during render', 'event handler', 'derive', 'external systems', 'synchronizing'],
    aliases: {
      'calculate during render': ['computed during render'],
      'event handler': ['handler'],
      derive: ['derived state'],
      'external systems': ['outside React'],
      synchronizing: ['sync'],
    },
    source: 'Interview-ready React theory',
  },
  {
    id: 'react-deep-020',
    category: 'react',
    question: 'What are error boundaries in React?',
    answer:
      'Error boundaries are components that catch rendering errors in their child component tree and show a fallback UI instead of crashing the whole app. They do not catch errors in event handlers, async code, or server-side rendering.',
    keywords: ['catch errors', 'child tree', 'fallback UI', 'not event handlers', 'not async'],
    aliases: {
      'catch errors': ['catch rendering errors'],
      'child tree': ['component tree'],
      'fallback UI': ['fallback'],
      'not event handlers': ['event handler errors'],
      'not async': ['async errors'],
    },
    source: 'Interview-ready React theory',
  },
  {
    id: 'react-deep-021',
    category: 'react',
    question: 'What is lazy loading in React?',
    answer:
      'Lazy loading means loading code only when it is needed instead of including everything in the initial bundle. In React, React.lazy and Suspense can be used to split components and show fallback UI while the lazy code loads.',
    keywords: ['load when needed', 'initial bundle', 'React.lazy', 'Suspense', 'fallback UI'],
    aliases: {
      'load when needed': ['load on demand'],
      'initial bundle': ['main bundle'],
      'React.lazy': ['lazy'],
      Suspense: ['suspense boundary'],
      'fallback UI': ['loading fallback'],
    },
    source: 'Interview-ready React theory',
  },
  {
    id: 'react-deep-022',
    category: 'react',
    question: 'Why are keys important when rendering lists in React?',
    answer:
      'Keys help React identify which list items changed, were added, or were removed. Stable keys improve reconciliation and prevent bugs with stateful list items. Index as a key can be unsafe if items are reordered, inserted, or deleted.',
    keywords: ['identify items', 'changed', 'reconciliation', 'stable keys', 'index unsafe'],
    aliases: {
      'identify items': ['track items'],
      changed: ['added', 'removed'],
      reconciliation: ['diffing'],
      'stable keys': ['unique keys'],
      'index unsafe': ['index key problem'],
    },
    source: 'Interview-ready React theory',
  },
  {
    id: 'react-deep-023',
    category: 'react',
    question: 'What is reconciliation in React?',
    answer:
      'Reconciliation is the process React uses to compare the previous UI tree with the next UI tree and decide what needs to change in the DOM. Keys help React match elements correctly during this process.',
    keywords: ['compare', 'previous UI', 'next UI', 'DOM changes', 'keys'],
    aliases: {
      compare: ['diff'],
      'previous UI': ['old tree'],
      'next UI': ['new tree'],
      'DOM changes': ['update DOM'],
      keys: ['stable keys'],
    },
    source: 'Interview-ready React theory',
  },
  {
    id: 'react-deep-024',
    category: 'react',
    question: 'What is prop drilling and how can you avoid it?',
    answer:
      'Prop drilling is passing props through many intermediate components that do not need the data themselves. It can be avoided with better component composition, moving state closer to where it is used, Context, or a state management library when the app is large enough.',
    keywords: ['passing props', 'intermediate components', 'composition', 'Context', 'state management'],
    aliases: {
      'passing props': ['prop drilling'],
      'intermediate components': ['many levels'],
      composition: ['component composition'],
      Context: ['context api'],
      'state management': ['store'],
    },
    source: 'Interview-ready React theory',
  },
  {
    id: 'react-deep-025',
    category: 'react',
    question: 'What are common React performance mistakes?',
    answer:
      'Common mistakes include putting too much state too high in the tree, causing unnecessary re-renders, creating unstable props for memoized children, doing expensive work during every render, missing list keys, and using effects for derived state.',
    keywords: ['state too high', 'unnecessary re-renders', 'unstable props', 'expensive work', 'derived state'],
    aliases: {
      'state too high': ['global state too high', 'too much parent state'],
      'unnecessary re-renders': ['extra renders'],
      'unstable props': ['new objects', 'new functions'],
      'expensive work': ['heavy calculation'],
      'derived state': ['effect for derived state'],
    },
    source: 'Interview-ready React theory',
  },
  {
    id: 'typescript-deep-001',
    category: 'typescript',
    question: 'What problem does TypeScript solve compared to plain JavaScript?',
    answer:
      'TypeScript adds static typing on top of JavaScript. It helps catch many type-related mistakes during development before the code runs, improves autocomplete and refactoring, and makes contracts between parts of the app clearer. It still compiles to JavaScript for the browser or Node.',
    keywords: ['static typing', 'JavaScript', 'catch mistakes', 'autocomplete', 'compiles'],
    aliases: {
      'static typing': ['types', 'type checking'],
      'catch mistakes': ['catch errors', 'before runtime'],
      autocomplete: ['intellisense'],
      compiles: ['transpiles'],
    },
    source: 'Interview-ready TypeScript theory',
  },
  {
    id: 'typescript-deep-002',
    category: 'typescript',
    question: 'What is the difference between type inference and explicit type annotation?',
    answer:
      'Type inference means TypeScript figures out a type from the assigned value or usage. An explicit type annotation is when you write the type yourself. Inference keeps code shorter, while annotations are useful for function parameters, API data, public contracts, and places where the inferred type is too broad or unclear.',
    keywords: ['type inference', 'figures out', 'annotation', 'write type', 'function parameters'],
    aliases: {
      'type inference': ['inferred type'],
      'figures out': ['detects', 'knows'],
      annotation: ['type annotation'],
      'write type': ['manual type'],
      'function parameters': ['parameters'],
    },
    source: 'Interview-ready TypeScript theory',
  },
  {
    id: 'typescript-deep-003',
    category: 'typescript',
    question: 'What is the difference between type and interface in TypeScript?',
    answer:
      'Both type and interface can describe object shapes. Interfaces are often used for object contracts and can be extended or declaration-merged. Type aliases are more flexible because they can describe unions, primitives, tuples, intersections, and more complex compositions. In many object-shape cases, either one works.',
    keywords: ['object shapes', 'interface', 'extend', 'declaration merging', 'type alias', 'union'],
    aliases: {
      'object shapes': ['object type', 'object structure'],
      extend: ['extends'],
      'declaration merging': ['merge declarations'],
      'type alias': ['type'],
      union: ['union type'],
    },
    source: 'Interview-ready TypeScript theory',
  },
  {
    id: 'typescript-deep-004',
    category: 'typescript',
    question: 'What is a union type?',
    answer:
      'A union type means a value can be one of several possible types. For example, string | number means the value can be a string or a number. Before using type-specific methods, you often need to narrow the value to a specific member of the union.',
    keywords: ['one of several', 'string | number', 'narrow', 'specific type', 'type-specific methods'],
    aliases: {
      'one of several': ['multiple possible types'],
      'string | number': ['pipe type'],
      narrow: ['type narrowing'],
      'specific type': ['one type'],
      'type-specific methods': ['methods'],
    },
    source: 'Interview-ready TypeScript theory',
  },
  {
    id: 'typescript-deep-005',
    category: 'typescript',
    question: 'What is an intersection type?',
    answer:
      'An intersection type combines multiple types into one type that must satisfy all of them. For example, A & B means the value needs the members from both A and B. It is commonly used to compose object types.',
    keywords: ['combines', 'multiple types', 'all of them', 'A & B', 'compose'],
    aliases: {
      combines: ['merge', 'combine'],
      'multiple types': ['several types'],
      'all of them': ['both types'],
      'A & B': ['ampersand type'],
      compose: ['composition'],
    },
    source: 'Interview-ready TypeScript theory',
  },
  {
    id: 'typescript-deep-006',
    category: 'typescript',
    question: 'What is type narrowing in TypeScript?',
    answer:
      'Type narrowing is when TypeScript reduces a broad type to a more specific type based on checks in the code. Common narrowing tools include typeof, instanceof, equality checks, the in operator, truthiness checks, and custom type guards.',
    keywords: ['broad type', 'specific type', 'typeof', 'instanceof', 'type guards'],
    aliases: {
      'broad type': ['wide type'],
      'specific type': ['narrow type'],
      typeof: ['type of'],
      instanceof: ['instance of'],
      'type guards': ['guard function'],
    },
    source: 'Interview-ready TypeScript theory',
  },
  {
    id: 'typescript-deep-007',
    category: 'typescript',
    question: 'What is the difference between any and unknown?',
    answer:
      'any turns off type checking for a value, so you can do almost anything with it. unknown also represents an uncertain value, but TypeScript forces you to narrow or check it before using it. unknown is safer than any when dealing with external or unpredictable data.',
    keywords: ['any', 'turns off type checking', 'unknown', 'narrow', 'safer'],
    aliases: {
      any: ['any type'],
      'turns off type checking': ['no type safety'],
      unknown: ['unknown type'],
      narrow: ['check first', 'type guard'],
      safer: ['more safe'],
    },
    source: 'Interview-ready TypeScript theory',
  },
  {
    id: 'typescript-deep-008',
    category: 'typescript',
    question: 'What is the never type used for?',
    answer:
      'never represents a value that should never exist. It appears for functions that never return, impossible branches, or exhaustive checks in unions. It is useful when you want TypeScript to warn you if a union case was not handled.',
    keywords: ['never exist', 'never return', 'impossible', 'exhaustive checks', 'union case'],
    aliases: {
      'never exist': ['impossible value'],
      'never return': ['throws forever', 'infinite loop'],
      impossible: ['unreachable'],
      'exhaustive checks': ['exhaustiveness'],
      'union case': ['union member'],
    },
    source: 'Interview-ready TypeScript theory',
  },
  {
    id: 'typescript-deep-009',
    category: 'typescript',
    question: 'What are generics in TypeScript?',
    answer:
      'Generics let you write reusable types, functions, and components that work with different types while keeping type safety. A generic type parameter acts like a variable for a type, for example function identity<T>(value: T): T.',
    keywords: ['reusable', 'different types', 'type safety', 'type parameter', '<T>'],
    aliases: {
      reusable: ['reuse'],
      'different types': ['multiple types'],
      'type safety': ['typed'],
      'type parameter': ['generic parameter'],
      '<T>': ['T generic'],
    },
    source: 'Interview-ready TypeScript theory',
  },
  {
    id: 'typescript-deep-010',
    category: 'typescript',
    question: 'What is a generic constraint?',
    answer:
      'A generic constraint limits which types can be passed to a generic. For example, T extends { id: string } means T can be any type, but it must have an id property. Constraints let you use certain properties safely inside a generic function.',
    keywords: ['limits types', 'extends', 'must have', 'property', 'generic function'],
    aliases: {
      'limits types': ['restricts'],
      extends: ['extends constraint'],
      'must have': ['requires'],
      property: ['field'],
      'generic function': ['generic'],
    },
    source: 'Interview-ready TypeScript theory',
  },
  {
    id: 'typescript-deep-011',
    category: 'typescript',
    question: 'What is a literal type?',
    answer:
      "A literal type is a type that allows only one exact value or a small set of exact values. For example, 'success' | 'error' is more specific than string. Literal types are useful for status values, variants, and discriminated unions.",
    keywords: ['exact value', 'specific', 'string literal', 'status', 'discriminated unions'],
    aliases: {
      'exact value': ['fixed value'],
      specific: ['narrow'],
      'string literal': ['literal string'],
      status: ['state'],
      'discriminated unions': ['tagged unions'],
    },
    source: 'Interview-ready TypeScript theory',
  },
  {
    id: 'typescript-deep-012',
    category: 'typescript',
    question: 'What is a discriminated union?',
    answer:
      'A discriminated union is a union of object types that share a common literal property, often called kind, type, or status. TypeScript can use that property to narrow the union and know which fields are available in each branch.',
    keywords: ['union', 'common property', 'literal', 'narrow', 'branches'],
    aliases: {
      union: ['union type'],
      'common property': ['discriminator', 'tag'],
      literal: ['literal value'],
      narrow: ['type narrowing'],
      branches: ['cases'],
    },
    source: 'Interview-ready TypeScript theory',
  },
  {
    id: 'typescript-deep-013',
    category: 'typescript',
    question: 'What does optional property mean in TypeScript?',
    answer:
      'An optional property uses the ? syntax and means the property may be missing or undefined. For example, name?: string means the object does not have to include name. Code that reads the property should handle the missing case.',
    keywords: ['? syntax', 'may be missing', 'undefined', 'object', 'handle missing'],
    aliases: {
      '? syntax': ['question mark'],
      'may be missing': ['optional'],
      undefined: ['can be undefined'],
      object: ['object property'],
      'handle missing': ['check exists'],
    },
    source: 'Interview-ready TypeScript theory',
  },
  {
    id: 'typescript-deep-014',
    category: 'typescript',
    question: 'What does readonly do in TypeScript?',
    answer:
      'readonly marks a property as not assignable after it is created. It prevents direct reassignment in TypeScript, but it is mainly a compile-time check. It does not automatically make nested objects deeply immutable at runtime.',
    keywords: ['not assignable', 'after created', 'compile-time', 'not runtime', 'not deeply immutable'],
    aliases: {
      'not assignable': ['cannot reassign'],
      'after created': ['after initialization'],
      'compile-time': ['type check'],
      'not runtime': ['runtime not frozen'],
      'not deeply immutable': ['not deep readonly'],
    },
    source: 'Interview-ready TypeScript theory',
  },
  {
    id: 'typescript-deep-015',
    category: 'typescript',
    question: 'What is Record<K, V> used for?',
    answer:
      'Record<K, V> creates an object type where keys are K and values are V. It is useful for dictionaries, maps by ID, lookup objects, and category-to-value mappings.',
    keywords: ['object type', 'keys', 'values', 'dictionary', 'lookup'],
    aliases: {
      'object type': ['object'],
      keys: ['key type'],
      values: ['value type'],
      dictionary: ['map object'],
      lookup: ['lookup object'],
    },
    source: 'Interview-ready TypeScript theory',
  },
  {
    id: 'typescript-deep-016',
    category: 'typescript',
    question: 'What do Pick, Omit, and Partial do?',
    answer:
      'Pick creates a type with selected properties from another type. Omit creates a type without selected properties. Partial makes all properties optional. They are utility types that help reuse and transform existing types.',
    keywords: ['Pick', 'selected properties', 'Omit', 'without properties', 'Partial', 'optional'],
    aliases: {
      Pick: ['pick utility'],
      'selected properties': ['choose fields'],
      Omit: ['omit utility'],
      'without properties': ['remove fields'],
      Partial: ['partial utility'],
      optional: ['all optional'],
    },
    source: 'Interview-ready TypeScript theory',
  },
  {
    id: 'typescript-deep-017',
    category: 'typescript',
    question: 'How do you type React component props in TypeScript?',
    answer:
      'You usually define a type or interface for the props object, then use it as the parameter type for the component. For example, type ButtonProps = { label: string; onClick: () => void }. Then function Button({ label, onClick }: ButtonProps) { ... }.',
    keywords: ['props object', 'type', 'interface', 'component parameter', 'callback'],
    aliases: {
      'props object': ['props'],
      type: ['type alias'],
      interface: ['props interface'],
      'component parameter': ['function parameter'],
      callback: ['onClick'],
    },
    source: 'Interview-ready TypeScript theory',
  },
  {
    id: 'typescript-deep-018',
    category: 'typescript',
    question: 'How do you type React events in TypeScript?',
    answer:
      'React events have specific event types, such as React.ChangeEvent<HTMLInputElement> for input changes or React.MouseEvent<HTMLButtonElement> for button clicks. The element type matters because it controls which target properties are available.',
    keywords: ['React.ChangeEvent', 'React.MouseEvent', 'HTMLInputElement', 'HTMLButtonElement', 'target properties'],
    aliases: {
      'React.ChangeEvent': ['change event'],
      'React.MouseEvent': ['mouse event', 'click event'],
      HTMLInputElement: ['input element'],
      HTMLButtonElement: ['button element'],
      'target properties': ['event target'],
    },
    source: 'Interview-ready TypeScript theory',
  },
  {
    id: 'typescript-deep-019',
    category: 'typescript',
    question: 'How should you type API responses in TypeScript?',
    answer:
      'You can create types that describe the expected response shape and use them when working with fetched data. But TypeScript only checks at compile time, so external API data may still need runtime validation before you trust it completely.',
    keywords: ['response shape', 'fetched data', 'compile time', 'external API', 'runtime validation'],
    aliases: {
      'response shape': ['data shape'],
      'fetched data': ['api data'],
      'compile time': ['static checking'],
      'external API': ['server response'],
      'runtime validation': ['validate at runtime'],
    },
    source: 'Interview-ready TypeScript theory',
  },
  {
    id: 'typescript-deep-020',
    category: 'typescript',
    question: 'What is a type guard?',
    answer:
      'A type guard is a check that helps TypeScript narrow a value to a more specific type. Built-in guards include typeof, instanceof, and the in operator. You can also write custom guards using a return type like value is User.',
    keywords: ['check', 'narrow', 'typeof', 'instanceof', 'custom guard', 'value is'],
    aliases: {
      check: ['condition'],
      narrow: ['type narrowing'],
      typeof: ['type of'],
      instanceof: ['instance of'],
      'custom guard': ['custom type guard'],
      'value is': ['type predicate'],
    },
    source: 'Interview-ready TypeScript theory',
  },
  {
    id: 'next-deep-001',
    category: 'next',
    question: 'What is the App Router in Next.js?',
    answer:
      "The App Router is Next.js's file-system based router built around the app directory. It uses React features like Server Components, layouts, nested routes, loading states, and error boundaries. Routes are created from folders and special files such as page.tsx and layout.tsx.",
    keywords: ['file-system router', 'app directory', 'Server Components', 'layouts', 'page.tsx'],
    aliases: {
      'file-system router': ['file based routing', 'filesystem routing'],
      'app directory': ['app folder', 'app router'],
      'Server Components': ['server component'],
      layouts: ['layout.tsx'],
      'page.tsx': ['page file'],
    },
    source: 'Interview-ready Next.js theory',
  },
  {
    id: 'next-deep-002',
    category: 'next',
    question: 'What is the difference between page.tsx and layout.tsx in the Next.js App Router?',
    answer:
      'page.tsx defines the UI for a specific route segment and makes that route publicly accessible. layout.tsx wraps pages and nested routes, keeps shared UI like navigation, and can preserve state between route changes. A route needs a page file to be reachable.',
    keywords: ['page.tsx', 'specific route', 'layout.tsx', 'wraps pages', 'shared UI'],
    aliases: {
      'page.tsx': ['page file'],
      'specific route': ['route segment'],
      'layout.tsx': ['layout file'],
      'wraps pages': ['wraps routes', 'nested routes'],
      'shared UI': ['navigation', 'common UI'],
    },
    source: 'Interview-ready Next.js theory',
  },
  {
    id: 'next-deep-003',
    category: 'next',
    question: 'How do dynamic routes work in the Next.js App Router?',
    answer:
      'Dynamic routes use folder names with square brackets, such as [id] or [slug]. The dynamic value becomes available as a route parameter. This is useful for pages like products, blog posts, user profiles, and detail pages where the path changes by data.',
    keywords: ['square brackets', '[id]', 'route parameter', 'slug', 'detail pages'],
    aliases: {
      'square brackets': ['bracket folder'],
      '[id]': ['dynamic segment'],
      'route parameter': ['params'],
      slug: ['dynamic slug'],
      'detail pages': ['details page'],
    },
    source: 'Interview-ready Next.js theory',
  },
  {
    id: 'next-deep-004',
    category: 'next',
    question: 'What is loading.tsx used for in Next.js?',
    answer:
      'loading.tsx creates an instant loading UI for a route segment while its content is loading. It works with React Suspense and helps show a fallback during navigation or data loading without manually wiring a loading state in every page.',
    keywords: ['loading UI', 'route segment', 'Suspense', 'fallback', 'data loading'],
    aliases: {
      'loading UI': ['loading state', 'spinner'],
      'route segment': ['segment'],
      Suspense: ['react suspense'],
      fallback: ['fallback UI'],
      'data loading': ['loading data'],
    },
    source: 'Interview-ready Next.js theory',
  },
  {
    id: 'next-deep-005',
    category: 'next',
    question: 'What are error.tsx and not-found.tsx used for in Next.js?',
    answer:
      'error.tsx defines an error UI for a route segment and catches rendering errors below it. not-found.tsx defines the UI shown when a route calls notFound() or when a matching resource is missing. They help handle failures close to the route where they happen.',
    keywords: ['error.tsx', 'error UI', 'not-found.tsx', 'notFound', 'route segment'],
    aliases: {
      'error.tsx': ['error file'],
      'error UI': ['error boundary', 'fallback error'],
      'not-found.tsx': ['not found file', '404 UI'],
      notFound: ['notFound()'],
      'route segment': ['segment'],
    },
    source: 'Interview-ready Next.js theory',
  },
  {
    id: 'next-deep-006',
    category: 'next',
    question: 'What is the difference between Server Components and Client Components in Next.js?',
    answer:
      'Server Components render on the server and can access server-only resources like databases, files, and private environment variables. Client Components render in the browser after hydration and can use state, effects, event handlers, and browser APIs. In the App Router, components are Server Components by default unless marked with use client.',
    keywords: ['server', 'browser', 'use client', 'state', 'effects', 'environment variables'],
    aliases: {
      server: ['Server Components', 'server component'],
      browser: ['Client Components', 'client component'],
      'use client': ['client directive'],
      state: ['useState'],
      effects: ['useEffect'],
      'environment variables': ['private env vars'],
    },
    source: 'Interview-ready Next.js theory',
  },
  {
    id: 'next-deep-007',
    category: 'next',
    question: 'When do you need the "use client" directive in Next.js?',
    answer:
      'You need use client when a component uses client-only features such as useState, useEffect, event handlers, browser APIs, or client-side libraries. The directive marks a boundary where the component and its imported children become part of the client bundle.',
    keywords: ['use client', 'useState', 'useEffect', 'event handlers', 'browser APIs', 'client bundle'],
    aliases: {
      'use client': ['client directive'],
      useState: ['state'],
      useEffect: ['effects'],
      'event handlers': ['onClick', 'onChange'],
      'browser APIs': ['window', 'document'],
      'client bundle': ['browser bundle'],
    },
    source: 'Interview-ready Next.js theory',
  },
  {
    id: 'next-deep-008',
    category: 'next',
    question: 'Why should you avoid putting "use client" too high in a Next.js component tree?',
    answer:
      'Putting use client too high sends more components and JavaScript to the browser than necessary. It can increase bundle size and reduce the benefits of Server Components. A better approach is to keep most components server-rendered and move only interactive pieces into small Client Components.',
    keywords: ['too high', 'more JavaScript', 'bundle size', 'Server Components', 'interactive pieces'],
    aliases: {
      'too high': ['root component', 'parent component'],
      'more JavaScript': ['client JS'],
      'bundle size': ['larger bundle'],
      'Server Components': ['server-rendered'],
      'interactive pieces': ['interactive components'],
    },
    source: 'Interview-ready Next.js theory',
  },
  {
    id: 'next-deep-009',
    category: 'next',
    question: 'What are Route Handlers in the Next.js App Router?',
    answer:
      'Route Handlers let you create server-side endpoints inside the app directory using route.ts files. They can handle HTTP methods like GET, POST, PUT, and DELETE and are commonly used for APIs, webhooks, auth callbacks, or backend-for-frontend logic.',
    keywords: ['route.ts', 'server-side endpoints', 'HTTP methods', 'API', 'webhooks'],
    aliases: {
      'route.ts': ['route file'],
      'server-side endpoints': ['server endpoint'],
      'HTTP methods': ['GET', 'POST', 'DELETE'],
      API: ['api route'],
      webhooks: ['webhook'],
    },
    source: 'Interview-ready Next.js theory',
  },
  {
    id: 'next-deep-010',
    category: 'next',
    question: 'What are Server Actions in Next.js?',
    answer:
      'Server Actions are server-side functions that can be called from forms or Client Components to mutate data. They use the use server directive and can keep mutation logic on the server, reducing the need to manually create API routes for simple form submissions.',
    keywords: ['server-side functions', 'mutate data', 'use server', 'forms', 'API routes'],
    aliases: {
      'server-side functions': ['server functions'],
      'mutate data': ['data mutation', 'update data'],
      'use server': ['server directive'],
      forms: ['form submissions'],
      'API routes': ['route handlers'],
    },
    source: 'Interview-ready Next.js theory',
  },
  {
    id: 'next-deep-011',
    category: 'next',
    question: 'How does data fetching usually work in Next.js App Router Server Components?',
    answer:
      'In Server Components, you can fetch data directly during rendering on the server. This keeps secrets and server-only logic out of the browser and can reduce client-side loading states. Client Components should fetch data in the browser only when the data truly depends on client-side state or browser-only behavior.',
    keywords: ['Server Components', 'fetch directly', 'server', 'secrets', 'client-side loading'],
    aliases: {
      'Server Components': ['server component'],
      'fetch directly': ['data fetching'],
      server: ['server-side'],
      secrets: ['private data', 'env vars'],
      'client-side loading': ['loading state'],
    },
    source: 'Interview-ready Next.js theory',
  },
  {
    id: 'next-deep-012',
    category: 'next',
    question: 'What should you know about caching in Next.js?',
    answer:
      'Next.js includes caching and revalidation features to avoid unnecessary work and improve performance. Depending on how data is fetched and configured, a page or request can be static, dynamic, cached, or revalidated later. In interviews, the key idea is knowing that caching affects freshness, performance, and when server code runs.',
    keywords: ['caching', 'revalidation', 'performance', 'freshness', 'server code'],
    aliases: {
      caching: ['cache'],
      revalidation: ['revalidate'],
      performance: ['faster'],
      freshness: ['stale data', 'fresh data'],
      'server code': ['server rendering'],
    },
    source: 'Interview-ready Next.js theory',
  },
  {
    id: 'next-deep-013',
    category: 'next',
    question: 'How do metadata and SEO work in the Next.js App Router?',
    answer:
      'Next.js can generate metadata for pages using the metadata export or generateMetadata function. Metadata is used for title, description, Open Graph tags, and other SEO or sharing information. Dynamic metadata can depend on route params or fetched data.',
    keywords: ['metadata', 'generateMetadata', 'title', 'description', 'Open Graph', 'SEO'],
    aliases: {
      metadata: ['meta'],
      generateMetadata: ['generate metadata'],
      title: ['page title'],
      description: ['meta description'],
      'Open Graph': ['og tags'],
      SEO: ['search engines'],
    },
    source: 'Interview-ready Next.js theory',
  },
  {
    id: 'next-deep-014',
    category: 'next',
    question: 'How do environment variables work in Next.js?',
    answer:
      'Environment variables store configuration and secrets outside the code. Server-only environment variables should stay private and are safe to use in Server Components, Route Handlers, and server code. Variables exposed to the browser must be prefixed with NEXT_PUBLIC_, so secrets should never use that prefix.',
    keywords: ['environment variables', 'secrets', 'server-only', 'NEXT_PUBLIC', 'browser'],
    aliases: {
      'environment variables': ['env vars', '.env'],
      secrets: ['private keys', 'api keys'],
      'server-only': ['server side'],
      NEXT_PUBLIC: ['NEXT_PUBLIC_'],
      browser: ['client'],
    },
    source: 'Interview-ready Next.js theory',
  },
  {
    id: 'next-deep-015',
    category: 'next',
    question: 'What is the difference between Link navigation and using a regular anchor tag in Next.js?',
    answer:
      'Next.js Link enables client-side navigation between internal routes and can use built-in optimizations such as prefetching. A regular anchor tag performs normal browser navigation and is fine for external links or special cases, but Link is usually preferred for internal app navigation.',
    keywords: ['Link', 'client-side navigation', 'internal routes', 'prefetching', 'anchor tag'],
    aliases: {
      Link: ['next link', 'Link component'],
      'client-side navigation': ['client navigation'],
      'internal routes': ['inside app'],
      prefetching: ['prefetch'],
      'anchor tag': ['a tag', 'regular link'],
    },
    source: 'Interview-ready Next.js theory',
  },
  {
    "id": "node-deep-001",
    "category": "node",
    "question": "What is Node.js?",
    "answer": "Node.js is a JavaScript runtime that lets JavaScript run outside the browser, usually on a server. It is built around an event-driven, non-blocking I/O model, which makes it useful for APIs, web servers, scripts, tooling, and real-time applications.",
    "keywords": [
      "JavaScript runtime",
      "outside browser",
      "server",
      "event-driven",
      "non-blocking I/O"
    ],
    "aliases": {
      "JavaScript runtime": [
        "js runtime",
        "runtime"
      ],
      "outside browser": [
        "outside the browser"
      ],
      "server": [
        "backend"
      ],
      "event-driven": [
        "events"
      ],
      "non-blocking I/O": [
        "non blocking io",
        "async io"
      ]
    },
    "source": "Interview-ready Node/Express/Auth theory"
  },
  {
    "id": "node-deep-002",
    "category": "node",
    "question": "What does non-blocking I/O mean in Node.js?",
    "answer": "Non-blocking I/O means Node can start an operation like reading a file, querying a database, or calling an API, then continue doing other work while waiting for the result. When the operation finishes, a callback, Promise, or async function continues the logic.",
    "keywords": [
      "does not wait",
      "file",
      "database",
      "API call",
      "callback",
      "Promise"
    ],
    "aliases": {
      "does not wait": [
        "non-blocking",
        "continue doing work"
      ],
      "file": [
        "file system"
      ],
      "database": [
        "db"
      ],
      "API call": [
        "request"
      ],
      "callback": [
        "callback function"
      ],
      "Promise": [
        "promises",
        "async await"
      ]
    },
    "source": "Interview-ready Node/Express/Auth theory"
  },
  {
    "id": "node-deep-003",
    "category": "node",
    "question": "How does the event loop matter in Node.js?",
    "answer": "The Node event loop lets Node handle many asynchronous operations with a single main JavaScript thread. It coordinates timers, I/O callbacks, promises, and other queued work. It is why Node can serve many requests without creating a new thread for every request.",
    "keywords": [
      "event loop",
      "asynchronous",
      "single main thread",
      "timers",
      "I/O callbacks",
      "many requests"
    ],
    "aliases": {
      "event loop": [
        "node event loop"
      ],
      "asynchronous": [
        "async"
      ],
      "single main thread": [
        "single thread"
      ],
      "timers": [
        "setTimeout",
        "setInterval"
      ],
      "I/O callbacks": [
        "io callbacks"
      ],
      "many requests": [
        "multiple requests"
      ]
    },
    "source": "Interview-ready Node/Express/Auth theory"
  },
  {
    "id": "node-deep-004",
    "category": "node",
    "question": "Is Node.js single-threaded?",
    "answer": "JavaScript execution in Node mainly runs on a single thread, but Node itself is not purely single-threaded. It uses the event loop and background worker threads from libuv for some expensive I/O or system operations. The practical point is that CPU-heavy JavaScript can still block the main thread.",
    "keywords": [
      "single thread",
      "event loop",
      "worker threads",
      "libuv",
      "CPU-heavy",
      "block"
    ],
    "aliases": {
      "single thread": [
        "single-threaded"
      ],
      "worker threads": [
        "thread pool",
        "background threads"
      ],
      "libuv": [
        "uv"
      ],
      "CPU-heavy": [
        "cpu intensive"
      ],
      "block": [
        "blocking"
      ]
    },
    "source": "Interview-ready Node/Express/Auth theory"
  },
  {
    "id": "node-deep-005",
    "category": "node",
    "question": "What is the difference between CommonJS and ES modules in Node.js?",
    "answer": "CommonJS uses require and module.exports, while ES modules use import and export. CommonJS was the older default module system in Node, while ES modules are the modern JavaScript standard. A project can configure module behavior with package.json and file extensions.",
    "keywords": [
      "CommonJS",
      "require",
      "module.exports",
      "ES modules",
      "import",
      "export"
    ],
    "aliases": {
      "CommonJS": [
        "cjs"
      ],
      "require": [
        "require()"
      ],
      "module.exports": [
        "exports"
      ],
      "ES modules": [
        "esm"
      ],
      "import": [
        "imports"
      ],
      "export": [
        "exports"
      ]
    },
    "source": "Interview-ready Node/Express/Auth theory"
  },
  {
    "id": "node-deep-006",
    "category": "node",
    "question": "What is package.json used for?",
    "answer": "package.json describes a Node project. It stores metadata, scripts, dependencies, devDependencies, version information, and configuration fields. It also lets npm or another package manager know what packages to install and what commands are available.",
    "keywords": [
      "metadata",
      "scripts",
      "dependencies",
      "devDependencies",
      "package manager"
    ],
    "aliases": {
      "metadata": [
        "project info"
      ],
      "scripts": [
        "npm scripts"
      ],
      "dependencies": [
        "packages"
      ],
      "devDependencies": [
        "dev dependencies"
      ],
      "package manager": [
        "npm",
        "pnpm",
        "yarn"
      ]
    },
    "source": "Interview-ready Node/Express/Auth theory"
  },
  {
    "id": "node-deep-007",
    "category": "node",
    "question": "What is the difference between dependencies and devDependencies?",
    "answer": "dependencies are packages needed for the app to run in production. devDependencies are packages needed during development or build time, such as TypeScript, testing tools, linters, or bundlers. The exact install behavior depends on the package manager and environment.",
    "keywords": [
      "production",
      "development",
      "build time",
      "TypeScript",
      "testing",
      "linters"
    ],
    "aliases": {
      "production": [
        "runtime"
      ],
      "development": [
        "dev"
      ],
      "build time": [
        "build"
      ],
      "TypeScript": [
        "ts"
      ],
      "testing": [
        "test tools"
      ],
      "linters": [
        "eslint"
      ]
    },
    "source": "Interview-ready Node/Express/Auth theory"
  },
  {
    "id": "node-deep-008",
    "category": "node",
    "question": "Why do we use environment variables in backend apps?",
    "answer": "Environment variables keep configuration outside the code. They are used for secrets and environment-specific values like database URLs, API keys, ports, JWT secrets, and feature flags. They should not be committed to Git if they contain sensitive information.",
    "keywords": [
      "configuration",
      "outside code",
      "secrets",
      "database URL",
      "API keys",
      "not committed"
    ],
    "aliases": {
      "configuration": [
        "config"
      ],
      "outside code": [
        "not hardcoded"
      ],
      "secrets": [
        "secret values"
      ],
      "database URL": [
        "db url",
        "connection string"
      ],
      "API keys": [
        "api key"
      ],
      "not committed": [
        "not in git"
      ]
    },
    "source": "Interview-ready Node/Express/Auth theory"
  },
  {
    "id": "node-deep-009",
    "category": "node",
    "question": "What is Express.js?",
    "answer": "Express.js is a minimal web framework for Node.js. It helps create HTTP servers, define routes, handle requests and responses, use middleware, and build REST APIs or backend services.",
    "keywords": [
      "web framework",
      "Node.js",
      "HTTP server",
      "routes",
      "middleware",
      "REST API"
    ],
    "aliases": {
      "web framework": [
        "framework"
      ],
      "Node.js": [
        "node"
      ],
      "HTTP server": [
        "server"
      ],
      "routes": [
        "routing"
      ],
      "middleware": [
        "middlewares"
      ],
      "REST API": [
        "api"
      ]
    },
    "source": "Interview-ready Node/Express/Auth theory"
  },
  {
    "id": "node-deep-010",
    "category": "node",
    "question": "What is Express middleware?",
    "answer": "Express middleware is a function that runs during the request-response cycle. It receives req, res, and next. Middleware can read or modify the request, send a response, handle errors, authenticate users, log requests, or pass control to the next middleware.",
    "keywords": [
      "request-response cycle",
      "req",
      "res",
      "next",
      "authenticate",
      "pass control"
    ],
    "aliases": {
      "request-response cycle": [
        "request response cycle"
      ],
      "req": [
        "request"
      ],
      "res": [
        "response"
      ],
      "next": [
        "next function"
      ],
      "authenticate": [
        "auth"
      ],
      "pass control": [
        "call next"
      ]
    },
    "source": "Interview-ready Node/Express/Auth theory"
  },
  {
    "id": "node-deep-011",
    "category": "node",
    "question": "What does next() do in Express middleware?",
    "answer": "next() passes control to the next middleware or route handler. If you do not send a response and do not call next, the request can hang. Calling next with an error passes control to error-handling middleware.",
    "keywords": [
      "passes control",
      "next middleware",
      "route handler",
      "request can hang",
      "error-handling middleware"
    ],
    "aliases": {
      "passes control": [
        "pass control",
        "continues"
      ],
      "next middleware": [
        "following middleware"
      ],
      "route handler": [
        "handler"
      ],
      "request can hang": [
        "hang request",
        "never responds"
      ],
      "error-handling middleware": [
        "error middleware"
      ]
    },
    "source": "Interview-ready Node/Express/Auth theory"
  },
  {
    "id": "node-deep-012",
    "category": "node",
    "question": "What is the difference between req.params, req.query, and req.body in Express?",
    "answer": "req.params contains route parameters from the URL path, like /users/:id. req.query contains query string values after the question mark, like ?page=2. req.body contains data sent in the request body, usually from POST, PUT, or PATCH requests after body-parsing middleware runs.",
    "keywords": [
      "req.params",
      "route parameters",
      "req.query",
      "query string",
      "req.body",
      "request body"
    ],
    "aliases": {
      "req.params": [
        "params"
      ],
      "route parameters": [
        "url params",
        "path params"
      ],
      "req.query": [
        "query"
      ],
      "query string": [
        "query params"
      ],
      "req.body": [
        "body"
      ],
      "request body": [
        "posted data"
      ]
    },
    "source": "Interview-ready Node/Express/Auth theory"
  },
  {
    "id": "node-deep-013",
    "category": "node",
    "question": "What is the purpose of controllers and services in a backend app?",
    "answer": "Controllers usually handle HTTP-specific work like reading req, sending res, and choosing status codes. Services usually contain business logic that is not tied directly to Express. Separating them makes code easier to test, reuse, and maintain.",
    "keywords": [
      "controllers",
      "HTTP",
      "services",
      "business logic",
      "test",
      "maintain"
    ],
    "aliases": {
      "controllers": [
        "controller"
      ],
      "HTTP": [
        "request response"
      ],
      "services": [
        "service layer"
      ],
      "business logic": [
        "app logic"
      ],
      "test": [
        "testing"
      ],
      "maintain": [
        "maintainable"
      ]
    },
    "source": "Interview-ready Node/Express/Auth theory"
  },
  {
    "id": "node-deep-014",
    "category": "node",
    "question": "How does error-handling middleware work in Express?",
    "answer": "Error-handling middleware has four parameters: err, req, res, and next. Express uses it when an error is passed with next(error) or thrown in supported async flows. It is used to return consistent error responses and avoid duplicating try/catch logic everywhere.",
    "keywords": [
      "four parameters",
      "err",
      "next(error)",
      "consistent error responses",
      "try/catch"
    ],
    "aliases": {
      "four parameters": [
        "err req res next",
        "4 parameters"
      ],
      "err": [
        "error"
      ],
      "next(error)": [
        "next err"
      ],
      "consistent error responses": [
        "standard error response"
      ],
      "try/catch": [
        "try catch"
      ]
    },
    "source": "Interview-ready Node/Express/Auth theory"
  },
  {
    "id": "node-deep-015",
    "category": "node",
    "question": "Why is request validation important in backend APIs?",
    "answer": "Request validation checks that incoming data has the expected shape, types, and allowed values before the app uses it. It prevents bad data, improves error messages, protects database operations, and reduces security risks.",
    "keywords": [
      "incoming data",
      "expected shape",
      "types",
      "bad data",
      "security risks"
    ],
    "aliases": {
      "incoming data": [
        "request data"
      ],
      "expected shape": [
        "data shape"
      ],
      "types": [
        "type"
      ],
      "bad data": [
        "invalid data"
      ],
      "security risks": [
        "security"
      ]
    },
    "source": "Interview-ready Node/Express/Auth theory"
  },
  {
    "id": "node-deep-016",
    "category": "node",
    "question": "What is the difference between authentication and authorization?",
    "answer": "Authentication checks who the user is, for example by login, password, token, or session. Authorization checks what that authenticated user is allowed to do, such as whether they can edit a resource or access an admin route.",
    "keywords": [
      "authentication",
      "who user is",
      "authorization",
      "allowed to do",
      "admin route"
    ],
    "aliases": {
      "authentication": [
        "authn",
        "login"
      ],
      "who user is": [
        "identity"
      ],
      "authorization": [
        "authz",
        "permissions"
      ],
      "allowed to do": [
        "permission",
        "access"
      ],
      "admin route": [
        "protected route"
      ]
    },
    "source": "Interview-ready Node/Express/Auth theory"
  },
  {
    "id": "node-deep-017",
    "category": "node",
    "question": "What is JWT authentication?",
    "answer": "JWT authentication uses a signed JSON Web Token to represent user identity or claims. After login, the server sends a token to the client. The client sends it with later requests, and the server verifies the signature before trusting the claims.",
    "keywords": [
      "signed token",
      "JSON Web Token",
      "login",
      "client sends",
      "server verifies",
      "claims"
    ],
    "aliases": {
      "signed token": [
        "signature"
      ],
      "JSON Web Token": [
        "jwt"
      ],
      "login": [
        "after login"
      ],
      "client sends": [
        "sent with requests"
      ],
      "server verifies": [
        "verify token"
      ],
      "claims": [
        "payload"
      ]
    },
    "source": "Interview-ready Node/Express/Auth theory"
  },
  {
    "id": "node-deep-018",
    "category": "node",
    "question": "What should and should not be stored in a JWT?",
    "answer": "A JWT can store small non-sensitive claims like user id, role, or expiration time. It should not store passwords, secrets, or large private data because the payload can usually be decoded by the client even if the token is signed.",
    "keywords": [
      "user id",
      "role",
      "expiration",
      "not passwords",
      "decoded by client",
      "signed"
    ],
    "aliases": {
      "user id": [
        "id",
        "sub"
      ],
      "role": [
        "permissions"
      ],
      "expiration": [
        "expires",
        "exp"
      ],
      "not passwords": [
        "no password",
        "no secrets"
      ],
      "decoded by client": [
        "readable payload"
      ],
      "signed": [
        "signature"
      ]
    },
    "source": "Interview-ready Node/Express/Auth theory"
  },
  {
    "id": "node-deep-019",
    "category": "node",
    "question": "What is the difference between cookies, sessions, and tokens?",
    "answer": "Cookies are a browser storage mechanism sent with HTTP requests to matching domains. A session usually stores login state on the server and keeps a session id in a cookie. A token stores claims and is often sent in an Authorization header or stored in a cookie depending on the app.",
    "keywords": [
      "cookies",
      "browser storage",
      "HTTP requests",
      "session id",
      "server",
      "Authorization header"
    ],
    "aliases": {
      "cookies": [
        "cookie"
      ],
      "browser storage": [
        "stored by browser"
      ],
      "HTTP requests": [
        "sent with requests"
      ],
      "session id": [
        "session cookie"
      ],
      "server": [
        "server-side session"
      ],
      "Authorization header": [
        "bearer token"
      ]
    },
    "source": "Interview-ready Node/Express/Auth theory"
  },
  {
    "id": "node-deep-020",
    "category": "node",
    "question": "Why should passwords be hashed instead of encrypted or stored as plain text?",
    "answer": "Passwords should be hashed because the server should not need to recover the original password. A password hash is one-way, and during login the submitted password is hashed and compared. Plain text passwords are extremely dangerous if the database leaks.",
    "keywords": [
      "hashed",
      "one-way",
      "login",
      "compared",
      "plain text",
      "database leaks"
    ],
    "aliases": {
      "hashed": [
        "password hash"
      ],
      "one-way": [
        "cannot reverse"
      ],
      "login": [
        "sign in"
      ],
      "compared": [
        "compare hash"
      ],
      "plain text": [
        "plaintext"
      ],
      "database leaks": [
        "db leak"
      ]
    },
    "source": "Interview-ready Node/Express/Auth theory"
  },
  {
    "id": "node-deep-021",
    "category": "node",
    "question": "What is bcrypt and why is it used?",
    "answer": "bcrypt is a password hashing algorithm designed to be slow and salted. The salt helps prevent attackers from using precomputed hash tables, and the cost factor makes brute-force attacks more expensive.",
    "keywords": [
      "password hashing",
      "slow",
      "salted",
      "precomputed",
      "cost factor",
      "brute-force"
    ],
    "aliases": {
      "password hashing": [
        "hash passwords"
      ],
      "slow": [
        "intentionally slow"
      ],
      "salted": [
        "salt"
      ],
      "precomputed": [
        "rainbow table"
      ],
      "cost factor": [
        "work factor"
      ],
      "brute-force": [
        "bruteforce"
      ]
    },
    "source": "Interview-ready Node/Express/Auth theory"
  },
  {
    "id": "node-deep-022",
    "category": "node",
    "question": "What is CORS and why does backend configuration matter?",
    "answer": "CORS is a browser security mechanism that controls whether a frontend from one origin can read responses from another origin. The backend must send the right CORS headers to allow trusted origins, methods, and credentials when needed.",
    "keywords": [
      "browser security",
      "origin",
      "read responses",
      "CORS headers",
      "trusted origins",
      "credentials"
    ],
    "aliases": {
      "browser security": [
        "security mechanism"
      ],
      "origin": [
        "cross origin"
      ],
      "read responses": [
        "access response"
      ],
      "CORS headers": [
        "access-control headers"
      ],
      "trusted origins": [
        "allowed origins"
      ],
      "credentials": [
        "cookies",
        "withCredentials"
      ]
    },
    "source": "Interview-ready Node/Express/Auth theory"
  },
  {
    "id": "node-deep-023",
    "category": "node",
    "question": "What is rate limiting and why is it useful?",
    "answer": "Rate limiting restricts how many requests a client can make in a period of time. It helps protect APIs from brute-force attacks, abuse, accidental loops, and traffic spikes. It is especially useful for login routes and expensive endpoints.",
    "keywords": [
      "restricts requests",
      "period of time",
      "brute-force",
      "abuse",
      "login routes"
    ],
    "aliases": {
      "restricts requests": [
        "limits requests"
      ],
      "period of time": [
        "time window"
      ],
      "brute-force": [
        "bruteforce"
      ],
      "abuse": [
        "spam"
      ],
      "login routes": [
        "login endpoint"
      ]
    },
    "source": "Interview-ready Node/Express/Auth theory"
  },
  {
    "id": "node-deep-024",
    "category": "node",
    "question": "What are common security risks in Express APIs?",
    "answer": "Common risks include trusting unvalidated input, leaking detailed error messages, weak password handling, missing authentication or authorization checks, overly open CORS, missing rate limits, and exposing secrets through environment variables or logs.",
    "keywords": [
      "unvalidated input",
      "error messages",
      "password handling",
      "authorization",
      "CORS",
      "secrets"
    ],
    "aliases": {
      "unvalidated input": [
        "no validation"
      ],
      "error messages": [
        "detailed errors"
      ],
      "password handling": [
        "passwords"
      ],
      "authorization": [
        "permissions"
      ],
      "CORS": [
        "open cors"
      ],
      "secrets": [
        "env secrets",
        "api keys"
      ]
    },
    "source": "Interview-ready Node/Express/Auth theory"
  },
  {
    "id": "node-deep-025",
    "category": "node",
    "question": "What is a typical request-response flow in an Express API?",
    "answer": "A typical flow starts when the server receives an HTTP request. Global middleware may parse JSON, handle CORS, log the request, or check auth. Then the matching route handler or controller runs, calls service or database logic, and sends a response with a status code and data. Errors should go to error-handling middleware.",
    "keywords": [
      "HTTP request",
      "middleware",
      "route handler",
      "service",
      "database",
      "status code",
      "error middleware"
    ],
    "aliases": {
      "HTTP request": [
        "request"
      ],
      "middleware": [
        "middlewares"
      ],
      "route handler": [
        "controller"
      ],
      "service": [
        "service layer"
      ],
      "database": [
        "db"
      ],
      "status code": [
        "http status"
      ],
      "error middleware": [
        "error-handling middleware"
      ]
    },
    "source": "Interview-ready Node/Express/Auth theory"
  },
  {
    "id": "htmlcss-deep-001",
    "category": "html-css",
    "question": "What is accessibility in web development?",
    "answer": "Accessibility means building websites so people with different abilities can use them, including users with screen readers, keyboard navigation, low vision, motor disabilities, or cognitive differences. It includes semantic HTML, labels, focus states, color contrast, keyboard support, and meaningful text alternatives.",
    "keywords": [
      "different abilities",
      "screen readers",
      "keyboard navigation",
      "semantic HTML",
      "color contrast",
      "text alternatives"
    ],
    "aliases": {
      "different abilities": [
        "disabilities",
        "disabled users"
      ],
      "screen readers": [
        "assistive technology"
      ],
      "keyboard navigation": [
        "keyboard support"
      ],
      "semantic HTML": [
        "semantic tags"
      ],
      "color contrast": [
        "contrast"
      ],
      "text alternatives": [
        "alt text"
      ]
    },
    "source": "Interview-ready HTML/CSS theory"
  },
  {
    "id": "htmlcss-deep-002",
    "category": "html-css",
    "question": "Why are labels important for form inputs?",
    "answer": "Labels connect visible text to form controls so users know what each input is for. They help screen readers announce the input correctly and improve usability because clicking the label can focus or activate the related control.",
    "keywords": [
      "form controls",
      "screen readers",
      "announce",
      "clicking label",
      "focus"
    ],
    "aliases": {
      "form controls": [
        "inputs",
        "form inputs"
      ],
      "screen readers": [
        "assistive technology"
      ],
      "announce": [
        "read out"
      ],
      "clicking label": [
        "click label"
      ],
      "focus": [
        "focus input"
      ]
    },
    "source": "Interview-ready HTML/CSS theory"
  },
  {
    "id": "htmlcss-deep-003",
    "category": "html-css",
    "question": "What is the difference between label nesting and using for/id?",
    "answer": "A label can be connected to an input by wrapping the input inside the label or by using the label's for attribute with the input's id. The for/id approach is common because it clearly connects the label and control even when they are not next to each other in the markup.",
    "keywords": [
      "label",
      "input",
      "for attribute",
      "id",
      "connect"
    ],
    "aliases": {
      "label": [
        "label tag"
      ],
      "input": [
        "form control"
      ],
      "for attribute": [
        "htmlFor",
        "for"
      ],
      "id": [
        "input id"
      ],
      "connect": [
        "associate",
        "link"
      ]
    },
    "source": "Interview-ready HTML/CSS theory"
  },
  {
    "id": "htmlcss-deep-004",
    "category": "html-css",
    "question": "What is ARIA and when should you use it?",
    "answer": "ARIA is a set of attributes that can add accessibility information when native HTML is not enough. It can describe roles, states, and relationships for assistive technologies. The first rule is to prefer semantic HTML before adding ARIA, because incorrect ARIA can make accessibility worse.",
    "keywords": [
      "accessibility attributes",
      "roles",
      "states",
      "relationships",
      "semantic HTML",
      "incorrect ARIA"
    ],
    "aliases": {
      "accessibility attributes": [
        "aria attributes"
      ],
      "roles": [
        "role"
      ],
      "states": [
        "aria-expanded",
        "aria-checked"
      ],
      "relationships": [
        "aria-describedby",
        "aria-labelledby"
      ],
      "semantic HTML": [
        "native HTML"
      ],
      "incorrect ARIA": [
        "bad aria"
      ]
    },
    "source": "Interview-ready HTML/CSS theory"
  },
  {
    "id": "htmlcss-deep-005",
    "category": "html-css",
    "question": "What is focus management and why does it matter?",
    "answer": "Focus management means controlling where keyboard focus goes as users interact with the page. It matters for keyboard and screen reader users, especially in modals, menus, forms, and route changes. Good focus management keeps users oriented and prevents them from getting trapped or lost.",
    "keywords": [
      "keyboard focus",
      "keyboard users",
      "screen reader",
      "modals",
      "menus",
      "oriented"
    ],
    "aliases": {
      "keyboard focus": [
        "focus"
      ],
      "keyboard users": [
        "keyboard navigation"
      ],
      "screen reader": [
        "screen readers"
      ],
      "modals": [
        "dialog"
      ],
      "menus": [
        "dropdowns"
      ],
      "oriented": [
        "not lost"
      ]
    },
    "source": "Interview-ready HTML/CSS theory"
  },
  {
    "id": "htmlcss-deep-006",
    "category": "html-css",
    "question": "What makes a good alt attribute for an image?",
    "answer": "A good alt attribute describes the purpose or meaning of the image in context, not every visual detail. Decorative images should usually have an empty alt attribute so screen readers can skip them. Informative images need useful text that gives the same important information.",
    "keywords": [
      "purpose",
      "context",
      "decorative images",
      "empty alt",
      "screen readers",
      "informative"
    ],
    "aliases": {
      "purpose": [
        "meaning"
      ],
      "context": [
        "in context"
      ],
      "decorative images": [
        "decorative"
      ],
      "empty alt": [
        "alt empty",
        "alt=\"\""
      ],
      "screen readers": [
        "assistive tech"
      ],
      "informative": [
        "important image"
      ]
    },
    "source": "Interview-ready HTML/CSS theory"
  },
  {
    "id": "htmlcss-deep-007",
    "category": "html-css",
    "question": "What is mobile-first CSS?",
    "answer": "Mobile-first CSS means writing base styles for small screens first, then using media queries to enhance the layout for larger screens. It usually leads to simpler responsive styles because the default experience works on small devices and extra complexity is added only when there is more space.",
    "keywords": [
      "small screens first",
      "base styles",
      "media queries",
      "larger screens",
      "responsive"
    ],
    "aliases": {
      "small screens first": [
        "mobile first"
      ],
      "base styles": [
        "default styles"
      ],
      "media queries": [
        "breakpoints"
      ],
      "larger screens": [
        "desktop"
      ],
      "responsive": [
        "responsive design"
      ]
    },
    "source": "Interview-ready HTML/CSS theory"
  },
  {
    "id": "htmlcss-deep-008",
    "category": "html-css",
    "question": "What is the difference between responsive and adaptive design?",
    "answer": "Responsive design uses flexible layouts that fluidly adjust to different screen sizes, often with percentages, flexible grids, and media queries. Adaptive design uses more fixed layouts or specific designs for selected breakpoints or device ranges.",
    "keywords": [
      "responsive",
      "flexible layouts",
      "fluidly adjust",
      "media queries",
      "adaptive",
      "fixed layouts"
    ],
    "aliases": {
      "responsive": [
        "responsive design"
      ],
      "flexible layouts": [
        "fluid layout"
      ],
      "fluidly adjust": [
        "fluid"
      ],
      "media queries": [
        "breakpoints"
      ],
      "adaptive": [
        "adaptive design"
      ],
      "fixed layouts": [
        "specific layouts"
      ]
    },
    "source": "Interview-ready HTML/CSS theory"
  },
  {
    "id": "htmlcss-deep-009",
    "category": "html-css",
    "question": "What are CSS media queries used for?",
    "answer": "Media queries apply CSS only when certain conditions are true, such as screen width, height, orientation, pointer type, or user preferences. They are commonly used for responsive layouts and for respecting preferences like reduced motion or dark mode.",
    "keywords": [
      "conditions",
      "screen width",
      "orientation",
      "responsive layouts",
      "reduced motion",
      "dark mode"
    ],
    "aliases": {
      "conditions": [
        "if condition"
      ],
      "screen width": [
        "viewport width"
      ],
      "orientation": [
        "portrait",
        "landscape"
      ],
      "responsive layouts": [
        "responsive design"
      ],
      "reduced motion": [
        "prefers-reduced-motion"
      ],
      "dark mode": [
        "prefers-color-scheme"
      ]
    },
    "source": "Interview-ready HTML/CSS theory"
  },
  {
    "id": "htmlcss-deep-010",
    "category": "html-css",
    "question": "What is the difference between em, rem, %, vw, and px?",
    "answer": "px is an absolute CSS unit. em is relative to the current element's font size, while rem is relative to the root font size. % is relative to the parent or containing context depending on the property. vw is relative to the viewport width.",
    "keywords": [
      "px",
      "em",
      "rem",
      "%",
      "vw",
      "relative"
    ],
    "aliases": {
      "px": [
        "pixels"
      ],
      "em": [
        "current font size"
      ],
      "rem": [
        "root font size"
      ],
      "%": [
        "percent",
        "percentage"
      ],
      "vw": [
        "viewport width"
      ],
      "relative": [
        "relative unit"
      ]
    },
    "source": "Interview-ready HTML/CSS theory"
  },
  {
    "id": "htmlcss-deep-011",
    "category": "html-css",
    "question": "When would you use Flexbox and when would you use CSS Grid?",
    "answer": "Flexbox is best for one-dimensional layouts, either a row or a column, such as nav bars, button groups, and alignment inside components. CSS Grid is best for two-dimensional layouts with rows and columns, such as page layouts, dashboards, galleries, or complex card grids.",
    "keywords": [
      "Flexbox",
      "one-dimensional",
      "row or column",
      "CSS Grid",
      "two-dimensional",
      "rows and columns"
    ],
    "aliases": {
      "Flexbox": [
        "flex"
      ],
      "one-dimensional": [
        "1d layout"
      ],
      "row or column": [
        "single axis"
      ],
      "CSS Grid": [
        "grid"
      ],
      "two-dimensional": [
        "2d layout"
      ],
      "rows and columns": [
        "row and column"
      ]
    },
    "source": "Interview-ready HTML/CSS theory"
  },
  {
    "id": "htmlcss-deep-012",
    "category": "html-css",
    "question": "What are CSS custom properties and why are they useful?",
    "answer": "CSS custom properties, often called CSS variables, let you define reusable values with names like --accent-color. They are useful for themes, design tokens, reducing repetition, and changing values at different scopes or media queries.",
    "keywords": [
      "custom properties",
      "CSS variables",
      "reusable values",
      "themes",
      "design tokens",
      "scopes"
    ],
    "aliases": {
      "custom properties": [
        "css custom properties"
      ],
      "CSS variables": [
        "variables"
      ],
      "reusable values": [
        "reuse values"
      ],
      "themes": [
        "theme"
      ],
      "design tokens": [
        "tokens"
      ],
      "scopes": [
        "scope"
      ]
    },
    "source": "Interview-ready HTML/CSS theory"
  },
  {
    "id": "htmlcss-deep-013",
    "category": "html-css",
    "question": "What is CSS inheritance?",
    "answer": "CSS inheritance is when some property values are passed from a parent element to its children. Text-related properties like color and font-family often inherit, while layout properties like margin, padding, and border usually do not. The inherit keyword can force inheritance.",
    "keywords": [
      "parent",
      "children",
      "color",
      "font-family",
      "layout properties",
      "inherit keyword"
    ],
    "aliases": {
      "parent": [
        "parent element"
      ],
      "children": [
        "child elements"
      ],
      "color": [
        "text color"
      ],
      "font-family": [
        "font"
      ],
      "layout properties": [
        "margin",
        "padding",
        "border"
      ],
      "inherit keyword": [
        "inherit"
      ]
    },
    "source": "Interview-ready HTML/CSS theory"
  },
  {
    "id": "htmlcss-deep-014",
    "category": "html-css",
    "question": "What is the cascade in CSS?",
    "answer": "The cascade is the algorithm CSS uses to decide which rule wins when multiple rules apply to the same element. It considers origin, importance, cascade layers, specificity, source order, and inheritance. Specificity is only one part of the cascade.",
    "keywords": [
      "which rule wins",
      "importance",
      "specificity",
      "source order",
      "inheritance",
      "cascade layers"
    ],
    "aliases": {
      "which rule wins": [
        "winning rule"
      ],
      "importance": [
        "!important"
      ],
      "specificity": [
        "selector specificity"
      ],
      "source order": [
        "later rule"
      ],
      "inheritance": [
        "inherited styles"
      ],
      "cascade layers": [
        "layers"
      ]
    },
    "source": "Interview-ready HTML/CSS theory"
  },
  {
    "id": "htmlcss-deep-015",
    "category": "html-css",
    "question": "What creates a stacking context in CSS?",
    "answer": "A stacking context is a local stacking system for z-index and layering. It can be created by positioned elements with z-index, opacity less than 1, transform, filter, isolation, certain flex or grid items, and other properties. Elements inside one stacking context cannot always appear above elements outside it just by using a larger z-index.",
    "keywords": [
      "local stacking",
      "z-index",
      "opacity",
      "transform",
      "isolation",
      "larger z-index"
    ],
    "aliases": {
      "local stacking": [
        "stacking context"
      ],
      "z-index": [
        "z index"
      ],
      "opacity": [
        "opacity less than 1"
      ],
      "transform": [
        "transformed element"
      ],
      "isolation": [
        "isolation isolate"
      ],
      "larger z-index": [
        "higher z-index"
      ]
    },
    "source": "Interview-ready HTML/CSS theory"
  },
  {
    "id": "htmlcss-deep-016",
    "category": "html-css",
    "question": "What is the difference between display: none, visibility: hidden, and opacity: 0?",
    "answer": "display: none removes the element from layout and accessibility tree. visibility: hidden keeps the element's layout space but hides it visually. opacity: 0 makes the element transparent but it still takes space and can still receive events unless pointer-events or other behavior is changed.",
    "keywords": [
      "display none",
      "removes from layout",
      "visibility hidden",
      "keeps space",
      "opacity 0",
      "transparent"
    ],
    "aliases": {
      "display none": [
        "display: none"
      ],
      "removes from layout": [
        "no layout space"
      ],
      "visibility hidden": [
        "visibility: hidden"
      ],
      "keeps space": [
        "takes space"
      ],
      "opacity 0": [
        "opacity: 0"
      ],
      "transparent": [
        "invisible"
      ]
    },
    "source": "Interview-ready HTML/CSS theory"
  },
  {
    "id": "htmlcss-deep-017",
    "category": "html-css",
    "question": "What is the difference between min-width, max-width, width, and clamp()?",
    "answer": "width sets a preferred size. min-width prevents an element from becoming smaller than a value. max-width prevents it from becoming larger than a value. clamp() lets you set a minimum, preferred, and maximum value in one expression, which is useful for fluid responsive sizing.",
    "keywords": [
      "width",
      "min-width",
      "max-width",
      "clamp",
      "minimum",
      "maximum",
      "responsive sizing"
    ],
    "aliases": {
      "width": [
        "preferred size"
      ],
      "min-width": [
        "minimum width"
      ],
      "max-width": [
        "maximum width"
      ],
      "clamp": [
        "clamp()"
      ],
      "minimum": [
        "min"
      ],
      "maximum": [
        "max"
      ],
      "responsive sizing": [
        "fluid sizing"
      ]
    },
    "source": "Interview-ready HTML/CSS theory"
  },
  {
    "id": "htmlcss-deep-018",
    "category": "html-css",
    "question": "What are responsive images and why do they matter?",
    "answer": "Responsive images let the browser choose the best image source for the user's screen size, resolution, or layout. Techniques include srcset, sizes, and the picture element. They matter because sending huge images to small screens hurts performance and user experience.",
    "keywords": [
      "best image source",
      "screen size",
      "resolution",
      "srcset",
      "sizes",
      "picture",
      "performance"
    ],
    "aliases": {
      "best image source": [
        "right image"
      ],
      "screen size": [
        "viewport"
      ],
      "resolution": [
        "device pixel ratio"
      ],
      "srcset": [
        "src set"
      ],
      "sizes": [
        "sizes attribute"
      ],
      "picture": [
        "picture element"
      ],
      "performance": [
        "page speed"
      ]
    },
    "source": "Interview-ready HTML/CSS theory"
  },
  {
    "id": "htmlcss-deep-019",
    "category": "html-css",
    "question": "What is the difference between semantic and presentational markup?",
    "answer": "Semantic markup describes the meaning and structure of content, such as header, nav, main, article, and button. Presentational markup or styling-focused markup is mainly about appearance. Semantic markup improves accessibility, SEO, maintainability, and browser understanding.",
    "keywords": [
      "meaning",
      "structure",
      "header",
      "button",
      "accessibility",
      "SEO"
    ],
    "aliases": {
      "meaning": [
        "semantic meaning"
      ],
      "structure": [
        "document structure"
      ],
      "header": [
        "nav",
        "main",
        "article"
      ],
      "button": [
        "semantic button"
      ],
      "accessibility": [
        "a11y"
      ],
      "SEO": [
        "search engines"
      ]
    },
    "source": "Interview-ready HTML/CSS theory"
  },
  {
    "id": "htmlcss-deep-020",
    "category": "html-css",
    "question": "Why should clickable elements usually be buttons instead of divs?",
    "answer": "A button has built-in semantics, keyboard support, focus behavior, and accessibility behavior. A clickable div does not automatically behave like a button for keyboard users or assistive technologies, so it requires extra ARIA, tabindex, and keyboard event handling to be accessible.",
    "keywords": [
      "button",
      "semantics",
      "keyboard support",
      "focus",
      "accessibility",
      "clickable div"
    ],
    "aliases": {
      "button": [
        "button element"
      ],
      "semantics": [
        "semantic"
      ],
      "keyboard support": [
        "keyboard behavior"
      ],
      "focus": [
        "focusable"
      ],
      "accessibility": [
        "a11y"
      ],
      "clickable div": [
        "div button"
      ]
    },
    "source": "Interview-ready HTML/CSS theory"
  },
  {
    "id": "htmlcss-deep-021",
    "category": "html-css",
    "question": "What are CSS transitions and animations used for?",
    "answer": "Transitions animate changes between two CSS states, such as hover or focus changes. Animations use keyframes to define multiple steps over time. Both can improve UX, but they should be purposeful, performant, and respect reduced-motion preferences.",
    "keywords": [
      "transitions",
      "two states",
      "animations",
      "keyframes",
      "UX",
      "reduced motion"
    ],
    "aliases": {
      "transitions": [
        "transition"
      ],
      "two states": [
        "state change"
      ],
      "animations": [
        "animation"
      ],
      "keyframes": [
        "@keyframes"
      ],
      "UX": [
        "user experience"
      ],
      "reduced motion": [
        "prefers-reduced-motion"
      ]
    },
    "source": "Interview-ready HTML/CSS theory"
  },
  {
    "id": "htmlcss-deep-022",
    "category": "html-css",
    "question": "What CSS properties are usually better for performant animations?",
    "answer": "transform and opacity are usually better for performant animations because browsers can often animate them on the compositor without recalculating layout. Animating layout-affecting properties like width, height, top, or left can cause layout and paint work, which may be slower.",
    "keywords": [
      "transform",
      "opacity",
      "compositor",
      "layout",
      "paint",
      "width"
    ],
    "aliases": {
      "transform": [
        "translate",
        "scale"
      ],
      "opacity": [
        "fade"
      ],
      "compositor": [
        "composited"
      ],
      "layout": [
        "reflow"
      ],
      "paint": [
        "repaint"
      ],
      "width": [
        "height",
        "top",
        "left"
      ]
    },
    "source": "Interview-ready HTML/CSS theory"
  },
  {
    "id": "htmlcss-deep-023",
    "category": "html-css",
    "question": "What is a CSS reset or normalize file trying to solve?",
    "answer": "Browsers have default styles for elements, and those defaults can differ between browsers. A reset removes many defaults, while normalize keeps useful defaults but makes them more consistent. The goal is to start from a predictable styling baseline.",
    "keywords": [
      "browser defaults",
      "differ",
      "reset",
      "normalize",
      "consistent",
      "baseline"
    ],
    "aliases": {
      "browser defaults": [
        "default styles"
      ],
      "differ": [
        "different browsers"
      ],
      "reset": [
        "css reset"
      ],
      "normalize": [
        "normalize css"
      ],
      "consistent": [
        "cross-browser"
      ],
      "baseline": [
        "starting point"
      ]
    },
    "source": "Interview-ready HTML/CSS theory"
  },
  {
    "id": "htmlcss-deep-024",
    "category": "html-css",
    "question": "What is the purpose of the viewport meta tag?",
    "answer": "The viewport meta tag controls how a page is scaled and sized on mobile browsers. A common value, width=device-width, initial-scale=1, tells the browser to match the layout viewport to the device width, which is necessary for normal responsive design.",
    "keywords": [
      "mobile browsers",
      "scaled",
      "width=device-width",
      "initial-scale",
      "responsive design"
    ],
    "aliases": {
      "mobile browsers": [
        "mobile"
      ],
      "scaled": [
        "scaling"
      ],
      "width=device-width": [
        "device width"
      ],
      "initial-scale": [
        "initial scale"
      ],
      "responsive design": [
        "responsive layout"
      ]
    },
    "source": "Interview-ready HTML/CSS theory"
  },
  {
    "id": "htmlcss-deep-025",
    "category": "html-css",
    "question": "What is layout shift and why is it bad?",
    "answer": "Layout shift happens when visible content moves unexpectedly while the page is loading or updating. It is bad because users may lose their place or accidentally click the wrong thing. Common causes include images without dimensions, late-loading ads, fonts, or injected content.",
    "keywords": [
      "content moves",
      "unexpectedly",
      "loading",
      "wrong click",
      "images without dimensions",
      "fonts"
    ],
    "aliases": {
      "content moves": [
        "layout shift"
      ],
      "unexpectedly": [
        "unexpected"
      ],
      "loading": [
        "page loading"
      ],
      "wrong click": [
        "accidental click"
      ],
      "images without dimensions": [
        "missing image size"
      ],
      "fonts": [
        "web fonts"
      ]
    },
    "source": "Interview-ready HTML/CSS theory"
  },
  {
    "id": "webapi-001",
    "category": "web-api",
    "question": "What is the DOM?",
    "answer": "The DOM, or Document Object Model, is the browser's programming representation of an HTML document. It turns page markup into a tree of nodes that JavaScript can read, change, add to, or remove from.",
    "keywords": [
      "Document Object Model",
      "browser",
      "HTML document",
      "tree",
      "nodes",
      "JavaScript"
    ],
    "aliases": {
      "Document Object Model": [
        "dom"
      ],
      "browser": [
        "web browser"
      ],
      "HTML document": [
        "html page",
        "document"
      ],
      "tree": [
        "node tree"
      ],
      "nodes": [
        "elements"
      ],
      "JavaScript": [
        "js"
      ]
    },
    "source": "Interview-ready Web/API theory"
  },
  {
    "id": "webapi-002",
    "category": "web-api",
    "question": "What is the BOM?",
    "answer": "The BOM, or Browser Object Model, is the set of browser-provided objects outside the document itself. It includes things like window, navigator, location, history, screen, and timers. The BOM lets JavaScript interact with the browser environment.",
    "keywords": [
      "Browser Object Model",
      "window",
      "navigator",
      "location",
      "history",
      "browser environment"
    ],
    "aliases": {
      "Browser Object Model": [
        "bom"
      ],
      "window": [
        "window object"
      ],
      "navigator": [
        "navigator object"
      ],
      "location": [
        "url location"
      ],
      "history": [
        "browser history"
      ],
      "browser environment": [
        "browser api"
      ]
    },
    "source": "Interview-ready Web/API theory"
  },
  {
    "id": "webapi-003",
    "category": "web-api",
    "question": "What is event bubbling?",
    "answer": "Event bubbling is when an event starts on the target element and then moves upward through its parent elements. For example, a click on a button can also be handled by its parent div or the document unless propagation is stopped.",
    "keywords": [
      "event",
      "target element",
      "moves upward",
      "parent elements",
      "propagation"
    ],
    "aliases": {
      "event": [
        "browser event"
      ],
      "target element": [
        "event target"
      ],
      "moves upward": [
        "bubbles up"
      ],
      "parent elements": [
        "ancestors"
      ],
      "propagation": [
        "event propagation"
      ]
    },
    "source": "Interview-ready Web/API theory"
  },
  {
    "id": "webapi-004",
    "category": "web-api",
    "question": "What is event capturing?",
    "answer": "Event capturing is the phase where an event travels from the window or document down toward the target element before the bubbling phase. It is less commonly used, but you can listen during capture by passing the capture option to addEventListener.",
    "keywords": [
      "window",
      "document",
      "down toward target",
      "before bubbling",
      "capture option"
    ],
    "aliases": {
      "window": [
        "browser window"
      ],
      "document": [
        "document object"
      ],
      "down toward target": [
        "capturing phase"
      ],
      "before bubbling": [
        "before bubble phase"
      ],
      "capture option": [
        "useCapture",
        "capture true"
      ]
    },
    "source": "Interview-ready Web/API theory"
  },
  {
    "id": "webapi-005",
    "category": "web-api",
    "question": "What is the difference between preventDefault and stopPropagation?",
    "answer": "preventDefault stops the browser's default behavior, such as submitting a form or following a link. stopPropagation stops the event from continuing through the capturing or bubbling phases. They solve different problems and are often confused.",
    "keywords": [
      "preventDefault",
      "default behavior",
      "stopPropagation",
      "event propagation",
      "bubbling"
    ],
    "aliases": {
      "preventDefault": [
        "prevent default"
      ],
      "default behavior": [
        "browser default"
      ],
      "stopPropagation": [
        "stop propagation"
      ],
      "event propagation": [
        "propagation"
      ],
      "bubbling": [
        "bubble"
      ]
    },
    "source": "Interview-ready Web/API theory"
  },
  {
    "id": "webapi-006",
    "category": "web-api",
    "question": "What is event delegation?",
    "answer": "Event delegation is a pattern where you attach one event listener to a parent element instead of many listeners to child elements. Because events bubble, the parent can inspect the event target and respond to clicks or changes from its children.",
    "keywords": [
      "one listener",
      "parent element",
      "child elements",
      "bubbling",
      "event target"
    ],
    "aliases": {
      "one listener": [
        "single listener"
      ],
      "parent element": [
        "parent"
      ],
      "child elements": [
        "children"
      ],
      "bubbling": [
        "event bubbling"
      ],
      "event target": [
        "target"
      ]
    },
    "source": "Interview-ready Web/API theory"
  },
  {
    "id": "webapi-007",
    "category": "web-api",
    "question": "What is the difference between localStorage, sessionStorage, and cookies?",
    "answer": "localStorage stores data in the browser with no automatic expiration. sessionStorage stores data only for the current tab session. Cookies are small pieces of data sent with HTTP requests to matching domains and can have options like expiration, HttpOnly, Secure, and SameSite.",
    "keywords": [
      "localStorage",
      "sessionStorage",
      "cookies",
      "HTTP requests",
      "expiration",
      "HttpOnly"
    ],
    "aliases": {
      "localStorage": [
        "local storage"
      ],
      "sessionStorage": [
        "session storage"
      ],
      "cookies": [
        "cookie"
      ],
      "HTTP requests": [
        "sent with requests"
      ],
      "expiration": [
        "expires"
      ],
      "HttpOnly": [
        "http only"
      ]
    },
    "source": "Interview-ready Web/API theory"
  },
  {
    "id": "webapi-008",
    "category": "web-api",
    "question": "What is the difference between HTTP and HTTPS?",
    "answer": "HTTP is the protocol used for communication between clients and servers. HTTPS is HTTP over TLS, which encrypts the connection and helps protect data from being read or modified in transit. HTTPS also helps verify that the client is talking to the expected server.",
    "keywords": [
      "HTTP",
      "HTTPS",
      "TLS",
      "encrypts",
      "in transit",
      "verify server"
    ],
    "aliases": {
      "HTTP": [
        "http protocol"
      ],
      "HTTPS": [
        "secure http"
      ],
      "TLS": [
        "ssl",
        "transport layer security"
      ],
      "encrypts": [
        "encryption"
      ],
      "in transit": [
        "during transfer"
      ],
      "verify server": [
        "certificate"
      ]
    },
    "source": "Interview-ready Web/API theory"
  },
  {
    "id": "webapi-009",
    "category": "web-api",
    "question": "What are common HTTP methods and what are they used for?",
    "answer": "GET usually reads data. POST usually creates data or starts an action. PUT usually replaces a resource. PATCH usually updates part of a resource. DELETE removes a resource. The exact behavior depends on the API design, but these are common REST conventions.",
    "keywords": [
      "GET",
      "POST",
      "PUT",
      "PATCH",
      "DELETE",
      "REST"
    ],
    "aliases": {
      "GET": [
        "read"
      ],
      "POST": [
        "create"
      ],
      "PUT": [
        "replace"
      ],
      "PATCH": [
        "partial update"
      ],
      "DELETE": [
        "remove"
      ],
      "REST": [
        "rest convention"
      ]
    },
    "source": "Interview-ready Web/API theory"
  },
  {
    "id": "webapi-010",
    "category": "web-api",
    "question": "What are common HTTP status code groups?",
    "answer": "2xx status codes mean success. 3xx means redirection. 4xx means the client likely made a bad request or lacks permission. 5xx means a server-side error happened. Common examples are 200 OK, 201 Created, 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, and 500 Server Error.",
    "keywords": [
      "2xx",
      "3xx",
      "4xx",
      "5xx",
      "401",
      "404",
      "500"
    ],
    "aliases": {
      "2xx": [
        "success"
      ],
      "3xx": [
        "redirect"
      ],
      "4xx": [
        "client error"
      ],
      "5xx": [
        "server error"
      ],
      "401": [
        "unauthorized"
      ],
      "404": [
        "not found"
      ],
      "500": [
        "internal server error"
      ]
    },
    "source": "Interview-ready Web/API theory"
  },
  {
    "id": "webapi-011",
    "category": "web-api",
    "question": "What happens in a basic request-response cycle?",
    "answer": "The client sends an HTTP request with a method, URL, headers, and sometimes a body. The server receives it, runs routing and application logic, then sends back an HTTP response with a status code, headers, and often a response body.",
    "keywords": [
      "client",
      "HTTP request",
      "method",
      "headers",
      "server",
      "response",
      "status code"
    ],
    "aliases": {
      "client": [
        "browser",
        "frontend"
      ],
      "HTTP request": [
        "request"
      ],
      "method": [
        "GET",
        "POST"
      ],
      "headers": [
        "http headers"
      ],
      "server": [
        "backend"
      ],
      "response": [
        "http response"
      ],
      "status code": [
        "status"
      ]
    },
    "source": "Interview-ready Web/API theory"
  },
  {
    "id": "webapi-012",
    "category": "web-api",
    "question": "What are HTTP headers?",
    "answer": "HTTP headers are key-value metadata sent with requests and responses. They can describe content type, authorization, caching, cookies, accepted formats, CORS rules, and other information that controls how the client and server communicate.",
    "keywords": [
      "key-value",
      "metadata",
      "requests",
      "responses",
      "content type",
      "authorization",
      "caching"
    ],
    "aliases": {
      "key-value": [
        "key value pairs"
      ],
      "metadata": [
        "meta information"
      ],
      "requests": [
        "request headers"
      ],
      "responses": [
        "response headers"
      ],
      "content type": [
        "Content-Type"
      ],
      "authorization": [
        "Authorization header"
      ],
      "caching": [
        "cache-control"
      ]
    },
    "source": "Interview-ready Web/API theory"
  },
  {
    "id": "webapi-013",
    "category": "web-api",
    "question": "What is JSON and why is it common in web APIs?",
    "answer": "JSON, or JavaScript Object Notation, is a text format for structured data. It is common in web APIs because it is readable, language-independent, easy to parse, and maps naturally to objects and arrays used in JavaScript applications.",
    "keywords": [
      "JavaScript Object Notation",
      "text format",
      "structured data",
      "web APIs",
      "parse",
      "objects"
    ],
    "aliases": {
      "JavaScript Object Notation": [
        "json"
      ],
      "text format": [
        "string format"
      ],
      "structured data": [
        "data"
      ],
      "web APIs": [
        "api"
      ],
      "parse": [
        "JSON.parse"
      ],
      "objects": [
        "arrays"
      ]
    },
    "source": "Interview-ready Web/API theory"
  },
  {
    "id": "webapi-014",
    "category": "web-api",
    "question": "What is REST?",
    "answer": "REST is an architectural style for designing APIs around resources. In a REST-style API, URLs usually represent resources, HTTP methods describe actions, status codes describe results, and data is often exchanged as JSON.",
    "keywords": [
      "architectural style",
      "resources",
      "URLs",
      "HTTP methods",
      "status codes",
      "JSON"
    ],
    "aliases": {
      "architectural style": [
        "api style"
      ],
      "resources": [
        "resource"
      ],
      "URLs": [
        "endpoints"
      ],
      "HTTP methods": [
        "GET",
        "POST",
        "PUT",
        "DELETE"
      ],
      "status codes": [
        "http status"
      ],
      "JSON": [
        "json data"
      ]
    },
    "source": "Interview-ready Web/API theory"
  },
  {
    "id": "webapi-015",
    "category": "web-api",
    "question": "What is an endpoint?",
    "answer": "An endpoint is a specific URL in an API that a client can request. It usually represents a resource or an action, such as GET /users, POST /login, or DELETE /posts/:id. The endpoint plus the HTTP method tells the server what the client wants.",
    "keywords": [
      "URL",
      "API",
      "resource",
      "action",
      "HTTP method",
      "server"
    ],
    "aliases": {
      "URL": [
        "route",
        "path"
      ],
      "API": [
        "backend api"
      ],
      "resource": [
        "data resource"
      ],
      "action": [
        "operation"
      ],
      "HTTP method": [
        "method"
      ],
      "server": [
        "backend"
      ]
    },
    "source": "Interview-ready Web/API theory"
  },
  {
    "id": "webapi-016",
    "category": "web-api",
    "question": "What is CORS?",
    "answer": "CORS, or Cross-Origin Resource Sharing, is a browser security mechanism that controls whether a frontend from one origin can read responses from another origin. The server must send the right headers to allow trusted origins, methods, and credentials.",
    "keywords": [
      "Cross-Origin Resource Sharing",
      "browser security",
      "origin",
      "read responses",
      "server headers",
      "credentials"
    ],
    "aliases": {
      "Cross-Origin Resource Sharing": [
        "cors"
      ],
      "browser security": [
        "security mechanism"
      ],
      "origin": [
        "cross origin"
      ],
      "read responses": [
        "access response"
      ],
      "server headers": [
        "cors headers"
      ],
      "credentials": [
        "cookies",
        "withCredentials"
      ]
    },
    "source": "Interview-ready Web/API theory"
  },
  {
    "id": "webapi-017",
    "category": "web-api",
    "question": "What is a CORS preflight request?",
    "answer": "A CORS preflight is an OPTIONS request the browser sends before some cross-origin requests. It asks the server whether the actual request is allowed. Preflight often happens with non-simple methods, custom headers, or certain content types.",
    "keywords": [
      "OPTIONS request",
      "browser",
      "cross-origin",
      "allowed",
      "custom headers",
      "content types"
    ],
    "aliases": {
      "OPTIONS request": [
        "options method"
      ],
      "browser": [
        "web browser"
      ],
      "cross-origin": [
        "cors"
      ],
      "allowed": [
        "permission"
      ],
      "custom headers": [
        "non simple headers"
      ],
      "content types": [
        "Content-Type"
      ]
    },
    "source": "Interview-ready Web/API theory"
  },
  {
    "id": "webapi-018",
    "category": "web-api",
    "question": "What is the difference between fetch and Axios?",
    "answer": "fetch is a built-in browser API for making HTTP requests. Axios is a third-party library that wraps request handling with features like automatic JSON transformation, interceptors, request cancellation helpers, and easier error handling in some cases. Both can be used to call APIs.",
    "keywords": [
      "fetch",
      "built-in",
      "Axios",
      "third-party",
      "interceptors",
      "error handling"
    ],
    "aliases": {
      "fetch": [
        "fetch api"
      ],
      "built-in": [
        "browser api"
      ],
      "Axios": [
        "axios library"
      ],
      "third-party": [
        "external library"
      ],
      "interceptors": [
        "request interceptors"
      ],
      "error handling": [
        "errors"
      ]
    },
    "source": "Interview-ready Web/API theory"
  },
  {
    "id": "webapi-019",
    "category": "web-api",
    "question": "What is the difference between query parameters and route parameters?",
    "answer": "Route parameters are part of the path and usually identify a specific resource, like /users/123. Query parameters come after the question mark and usually modify the request, such as ?page=2 or ?sort=name. APIs use both for different kinds of information.",
    "keywords": [
      "route parameters",
      "path",
      "specific resource",
      "query parameters",
      "question mark",
      "modify request"
    ],
    "aliases": {
      "route parameters": [
        "path params",
        "url params"
      ],
      "path": [
        "url path"
      ],
      "specific resource": [
        "resource id"
      ],
      "query parameters": [
        "query params"
      ],
      "question mark": [
        "?"
      ],
      "modify request": [
        "filter",
        "sort",
        "pagination"
      ]
    },
    "source": "Interview-ready Web/API theory"
  },
  {
    "id": "webapi-020",
    "category": "web-api",
    "question": "What is browser caching?",
    "answer": "Browser caching stores downloaded resources or responses so the browser can reuse them instead of requesting them again. It improves performance and reduces network traffic. Caching behavior can be controlled with headers such as Cache-Control, ETag, and Expires.",
    "keywords": [
      "stores resources",
      "reuse",
      "performance",
      "network traffic",
      "Cache-Control",
      "ETag"
    ],
    "aliases": {
      "stores resources": [
        "cache resources"
      ],
      "reuse": [
        "use again"
      ],
      "performance": [
        "faster"
      ],
      "network traffic": [
        "less network"
      ],
      "Cache-Control": [
        "cache control"
      ],
      "ETag": [
        "entity tag"
      ]
    },
    "source": "Interview-ready Web/API theory"
  },
  {
    "id": "webapi-021",
    "category": "web-api",
    "question": "What is the browser rendering process at a high level?",
    "answer": "At a high level, the browser parses HTML into the DOM, parses CSS into the CSSOM, combines them into a render tree, calculates layout, paints pixels, and composites layers. JavaScript can affect this process by changing the DOM or styles.",
    "keywords": [
      "DOM",
      "CSSOM",
      "render tree",
      "layout",
      "paint",
      "composite"
    ],
    "aliases": {
      "DOM": [
        "document object model"
      ],
      "CSSOM": [
        "css object model"
      ],
      "render tree": [
        "rendering tree"
      ],
      "layout": [
        "reflow"
      ],
      "paint": [
        "repaint"
      ],
      "composite": [
        "compositing"
      ]
    },
    "source": "Interview-ready Web/API theory"
  },
  {
    "id": "webapi-022",
    "category": "web-api",
    "question": "What is the critical rendering path?",
    "answer": "The critical rendering path is the sequence of steps the browser must complete to turn HTML, CSS, and JavaScript into pixels on the screen. Optimizing it means reducing render-blocking resources, loading important CSS early, and avoiding unnecessary blocking JavaScript.",
    "keywords": [
      "HTML",
      "CSS",
      "JavaScript",
      "pixels",
      "render-blocking",
      "important CSS"
    ],
    "aliases": {
      "HTML": [
        "html document"
      ],
      "CSS": [
        "styles"
      ],
      "JavaScript": [
        "js"
      ],
      "pixels": [
        "screen"
      ],
      "render-blocking": [
        "blocking resources"
      ],
      "important CSS": [
        "critical css"
      ]
    },
    "source": "Interview-ready Web/API theory"
  },
  {
    "id": "webapi-023",
    "category": "web-api",
    "question": "What is a CDN and why is it useful?",
    "answer": "A CDN, or Content Delivery Network, is a network of servers that deliver assets from locations closer to users. It can reduce latency, improve load speed, handle traffic better, and cache static assets such as images, CSS, JavaScript, and fonts.",
    "keywords": [
      "Content Delivery Network",
      "closer to users",
      "latency",
      "load speed",
      "cache",
      "static assets"
    ],
    "aliases": {
      "Content Delivery Network": [
        "cdn"
      ],
      "closer to users": [
        "near users"
      ],
      "latency": [
        "delay"
      ],
      "load speed": [
        "performance"
      ],
      "cache": [
        "caching"
      ],
      "static assets": [
        "images",
        "css",
        "javascript",
        "fonts"
      ]
    },
    "source": "Interview-ready Web/API theory"
  },
  {
    "id": "webapi-024",
    "category": "web-api",
    "question": "What is the difference between a SPA and a multi-page application?",
    "answer": "A SPA, or Single Page Application, loads one main HTML page and updates the UI with JavaScript as users navigate. A multi-page application loads a new HTML document from the server for many navigations. SPAs can feel fast after initial load, but need careful routing, loading, SEO, and performance handling.",
    "keywords": [
      "Single Page Application",
      "one HTML page",
      "JavaScript navigation",
      "multi-page",
      "new HTML document",
      "SEO"
    ],
    "aliases": {
      "Single Page Application": [
        "spa"
      ],
      "one HTML page": [
        "single page"
      ],
      "JavaScript navigation": [
        "client-side routing"
      ],
      "multi-page": [
        "mpa"
      ],
      "new HTML document": [
        "full page load"
      ],
      "SEO": [
        "search engines"
      ]
    },
    "source": "Interview-ready Web/API theory"
  },
  {
    "id": "webapi-025",
    "category": "web-api",
    "question": "What is URL anatomy?",
    "answer": "A URL can include a protocol, domain, port, path, query string, and fragment. For example, https is the protocol, example.com is the domain, /products/1 is the path, ?tab=reviews is the query string, and #details is the fragment.",
    "keywords": [
      "protocol",
      "domain",
      "port",
      "path",
      "query string",
      "fragment"
    ],
    "aliases": {
      "protocol": [
        "scheme",
        "https"
      ],
      "domain": [
        "host"
      ],
      "port": [
        "port number"
      ],
      "path": [
        "pathname"
      ],
      "query string": [
        "query params"
      ],
      "fragment": [
        "hash",
        "anchor"
      ]
    },
    "source": "Interview-ready Web/API theory"
  },
  {
    "id": "database-001",
    "category": "database",
    "question": "What is the difference between SQL and NoSQL databases?",
    "answer": "SQL databases are usually relational, table-based, and use structured schemas with SQL queries. NoSQL databases are a broader group that can store data as documents, key-value pairs, graphs, or wide columns. MongoDB is a document NoSQL database. The choice depends on data shape, relationships, consistency needs, and query patterns.",
    "keywords": [
      "SQL",
      "relational",
      "tables",
      "NoSQL",
      "documents",
      "MongoDB"
    ],
    "aliases": {
      "SQL": [
        "sql database"
      ],
      "relational": [
        "relations"
      ],
      "tables": [
        "table based"
      ],
      "NoSQL": [
        "non relational"
      ],
      "documents": [
        "document database"
      ],
      "MongoDB": [
        "mongo"
      ]
    },
    "source": "Interview-ready Database/MongoDB theory"
  },
  {
    "id": "database-002",
    "category": "database",
    "question": "What is a document database?",
    "answer": "A document database stores data as document-like records, often similar to JSON. In MongoDB, documents are BSON objects with fields and values. This structure works well when related data can naturally live together inside one document.",
    "keywords": [
      "document database",
      "records",
      "JSON",
      "BSON",
      "fields",
      "related data"
    ],
    "aliases": {
      "document database": [
        "document db"
      ],
      "records": [
        "documents"
      ],
      "JSON": [
        "json-like"
      ],
      "BSON": [
        "binary json"
      ],
      "fields": [
        "properties"
      ],
      "related data": [
        "nested data"
      ]
    },
    "source": "Interview-ready Database/MongoDB theory"
  },
  {
    "id": "database-003",
    "category": "database",
    "question": "What is the difference between a collection and a document in MongoDB?",
    "answer": "A collection is a group of MongoDB documents, similar to a table in a relational database. A document is a single record inside a collection, similar to a row but more flexible because it can contain nested objects and arrays.",
    "keywords": [
      "collection",
      "group",
      "documents",
      "single record",
      "nested objects",
      "arrays"
    ],
    "aliases": {
      "collection": [
        "mongo collection"
      ],
      "group": [
        "group of documents"
      ],
      "documents": [
        "mongo documents"
      ],
      "single record": [
        "record"
      ],
      "nested objects": [
        "nested data"
      ],
      "arrays": [
        "array fields"
      ]
    },
    "source": "Interview-ready Database/MongoDB theory"
  },
  {
    "id": "database-004",
    "category": "database",
    "question": "What is ObjectId in MongoDB?",
    "answer": "ObjectId is the default unique identifier type MongoDB uses for the _id field. It is usually generated automatically when a document is created. ObjectId values are unique enough for distributed systems and include timestamp information.",
    "keywords": [
      "ObjectId",
      "_id",
      "unique identifier",
      "generated automatically",
      "timestamp"
    ],
    "aliases": {
      "ObjectId": [
        "object id"
      ],
      "_id": [
        "id field"
      ],
      "unique identifier": [
        "unique id"
      ],
      "generated automatically": [
        "auto generated"
      ],
      "timestamp": [
        "created time"
      ]
    },
    "source": "Interview-ready Database/MongoDB theory"
  },
  {
    "id": "database-005",
    "category": "database",
    "question": "What is CRUD?",
    "answer": "CRUD stands for Create, Read, Update, and Delete. These are the basic operations most apps perform on stored data. In an API, they often map to POST, GET, PUT or PATCH, and DELETE, though exact design can vary.",
    "keywords": [
      "Create",
      "Read",
      "Update",
      "Delete",
      "stored data",
      "API"
    ],
    "aliases": {
      "Create": [
        "insert",
        "add"
      ],
      "Read": [
        "get",
        "find"
      ],
      "Update": [
        "edit",
        "modify"
      ],
      "Delete": [
        "remove"
      ],
      "stored data": [
        "database data"
      ],
      "API": [
        "REST API"
      ]
    },
    "source": "Interview-ready Database/MongoDB theory"
  },
  {
    "id": "database-006",
    "category": "database",
    "question": "What is Mongoose?",
    "answer": "Mongoose is an ODM, or Object Data Modeling library, for MongoDB and Node.js. It lets you define schemas and models, validate data, run queries, and work with MongoDB documents in a more structured way from JavaScript or TypeScript.",
    "keywords": [
      "ODM",
      "MongoDB",
      "Node.js",
      "schemas",
      "models",
      "validate"
    ],
    "aliases": {
      "ODM": [
        "object data modeling"
      ],
      "MongoDB": [
        "mongo"
      ],
      "Node.js": [
        "node"
      ],
      "schemas": [
        "schema"
      ],
      "models": [
        "model"
      ],
      "validate": [
        "validation"
      ]
    },
    "source": "Interview-ready Database/MongoDB theory"
  },
  {
    "id": "database-007",
    "category": "database",
    "question": "What is a Mongoose schema?",
    "answer": "A Mongoose schema defines the shape of documents in a collection. It can specify field names, types, required fields, defaults, validation rules, indexes, and relationships. The schema becomes the blueprint for a Mongoose model.",
    "keywords": [
      "shape",
      "documents",
      "field names",
      "types",
      "validation",
      "model"
    ],
    "aliases": {
      "shape": [
        "structure"
      ],
      "documents": [
        "mongo documents"
      ],
      "field names": [
        "fields"
      ],
      "types": [
        "data types"
      ],
      "validation": [
        "validation rules"
      ],
      "model": [
        "mongoose model"
      ]
    },
    "source": "Interview-ready Database/MongoDB theory"
  },
  {
    "id": "database-008",
    "category": "database",
    "question": "What is a Mongoose model?",
    "answer": "A Mongoose model is created from a schema and represents a MongoDB collection. It provides methods to create, find, update, and delete documents. The model is what the app usually uses to interact with the database.",
    "keywords": [
      "created from schema",
      "collection",
      "create",
      "find",
      "update",
      "delete"
    ],
    "aliases": {
      "created from schema": [
        "based on schema"
      ],
      "collection": [
        "mongo collection"
      ],
      "create": [
        "insert"
      ],
      "find": [
        "read",
        "query"
      ],
      "update": [
        "edit"
      ],
      "delete": [
        "remove"
      ]
    },
    "source": "Interview-ready Database/MongoDB theory"
  },
  {
    "id": "database-009",
    "category": "database",
    "question": "What is the difference between embedding and referencing data in MongoDB?",
    "answer": "Embedding stores related data inside the same document. Referencing stores an id to another document and keeps the data separate. Embedding can be simpler and faster for data read together, while referencing is better for large, shared, or frequently changing related data.",
    "keywords": [
      "embedding",
      "same document",
      "referencing",
      "id",
      "separate",
      "shared data"
    ],
    "aliases": {
      "embedding": [
        "embed"
      ],
      "same document": [
        "inside document"
      ],
      "referencing": [
        "reference"
      ],
      "id": [
        "ObjectId"
      ],
      "separate": [
        "separate document"
      ],
      "shared data": [
        "reused data"
      ]
    },
    "source": "Interview-ready Database/MongoDB theory"
  },
  {
    "id": "database-010",
    "category": "database",
    "question": "What does populate do in Mongoose?",
    "answer": "populate replaces referenced ObjectId values with the actual related documents from another collection. It is useful when one document stores references to another, but it can add extra database work, so it should be used thoughtfully.",
    "keywords": [
      "populate",
      "referenced ObjectId",
      "related documents",
      "another collection",
      "extra database work"
    ],
    "aliases": {
      "populate": [
        "mongoose populate"
      ],
      "referenced ObjectId": [
        "reference id"
      ],
      "related documents": [
        "linked documents"
      ],
      "another collection": [
        "other collection"
      ],
      "extra database work": [
        "extra query",
        "performance cost"
      ]
    },
    "source": "Interview-ready Database/MongoDB theory"
  },
  {
    "id": "database-011",
    "category": "database",
    "question": "What is an index in a database?",
    "answer": "An index is a data structure that helps the database find records faster for certain queries. It improves read performance for indexed fields, but it costs extra storage and can make writes slower because the index also has to be updated.",
    "keywords": [
      "data structure",
      "find records faster",
      "queries",
      "read performance",
      "extra storage",
      "writes slower"
    ],
    "aliases": {
      "data structure": [
        "index structure"
      ],
      "find records faster": [
        "faster lookup"
      ],
      "queries": [
        "database queries"
      ],
      "read performance": [
        "faster reads"
      ],
      "extra storage": [
        "storage cost"
      ],
      "writes slower": [
        "slower writes"
      ]
    },
    "source": "Interview-ready Database/MongoDB theory"
  },
  {
    "id": "database-012",
    "category": "database",
    "question": "When should you add an index?",
    "answer": "You should consider an index for fields that are frequently used in filtering, sorting, joining-like lookups, or uniqueness checks. You should not index every field because indexes take space and add write overhead. Good indexes match real query patterns.",
    "keywords": [
      "filtering",
      "sorting",
      "uniqueness",
      "not every field",
      "write overhead",
      "query patterns"
    ],
    "aliases": {
      "filtering": [
        "filter"
      ],
      "sorting": [
        "sort"
      ],
      "uniqueness": [
        "unique"
      ],
      "not every field": [
        "do not index everything"
      ],
      "write overhead": [
        "slower writes"
      ],
      "query patterns": [
        "common queries"
      ]
    },
    "source": "Interview-ready Database/MongoDB theory"
  },
  {
    "id": "database-013",
    "category": "database",
    "question": "What is database validation and why is it important?",
    "answer": "Database validation checks that data matches expected rules before it is saved. It can check required fields, data types, lengths, allowed values, and custom rules. Validation protects data quality, but API-level validation is still important too.",
    "keywords": [
      "expected rules",
      "required fields",
      "data types",
      "allowed values",
      "data quality",
      "API validation"
    ],
    "aliases": {
      "expected rules": [
        "validation rules"
      ],
      "required fields": [
        "required"
      ],
      "data types": [
        "types"
      ],
      "allowed values": [
        "enum"
      ],
      "data quality": [
        "valid data"
      ],
      "API validation": [
        "request validation"
      ]
    },
    "source": "Interview-ready Database/MongoDB theory"
  },
  {
    "id": "database-014",
    "category": "database",
    "question": "What is pagination in database queries?",
    "answer": "Pagination means returning data in smaller chunks instead of loading everything at once. Common approaches use page and limit, skip and limit, or cursor-based pagination. Pagination improves performance and makes API responses more manageable.",
    "keywords": [
      "smaller chunks",
      "not everything",
      "page",
      "limit",
      "cursor",
      "performance"
    ],
    "aliases": {
      "smaller chunks": [
        "chunks",
        "pages"
      ],
      "not everything": [
        "not all records"
      ],
      "page": [
        "page number"
      ],
      "limit": [
        "page size"
      ],
      "cursor": [
        "cursor-based"
      ],
      "performance": [
        "faster",
        "manageable"
      ]
    },
    "source": "Interview-ready Database/MongoDB theory"
  },
  {
    "id": "database-015",
    "category": "database",
    "question": "What is filtering and sorting in database-backed APIs?",
    "answer": "Filtering limits results based on conditions, such as category, owner, status, or search text. Sorting controls the order of results, such as newest first or price ascending. APIs often expose filters and sort options through query parameters.",
    "keywords": [
      "filtering",
      "conditions",
      "sorting",
      "order",
      "query parameters"
    ],
    "aliases": {
      "filtering": [
        "filter"
      ],
      "conditions": [
        "criteria"
      ],
      "sorting": [
        "sort"
      ],
      "order": [
        "ordering"
      ],
      "query parameters": [
        "query params"
      ]
    },
    "source": "Interview-ready Database/MongoDB theory"
  },
  {
    "id": "database-016",
    "category": "database",
    "question": "What is aggregation in MongoDB?",
    "answer": "Aggregation is a way to process documents through a pipeline of stages, such as matching, grouping, sorting, projecting, and calculating values. It is used for reports, statistics, transformations, and more complex queries than a simple find.",
    "keywords": [
      "pipeline",
      "stages",
      "match",
      "group",
      "sort",
      "statistics"
    ],
    "aliases": {
      "pipeline": [
        "aggregation pipeline"
      ],
      "stages": [
        "pipeline stages"
      ],
      "match": [
        "$match"
      ],
      "group": [
        "$group"
      ],
      "sort": [
        "$sort"
      ],
      "statistics": [
        "reports",
        "analytics"
      ]
    },
    "source": "Interview-ready Database/MongoDB theory"
  },
  {
    "id": "database-017",
    "category": "database",
    "question": "What is the N+1 query problem?",
    "answer": "The N+1 query problem happens when code makes one query to get a list and then makes one additional query for each item in that list. It can become very slow as the list grows. Better approaches include batching, population carefully, joins where available, or redesigning the query.",
    "keywords": [
      "one query",
      "list",
      "additional query",
      "each item",
      "slow",
      "batching"
    ],
    "aliases": {
      "one query": [
        "initial query"
      ],
      "list": [
        "records"
      ],
      "additional query": [
        "extra query"
      ],
      "each item": [
        "per item"
      ],
      "slow": [
        "performance problem"
      ],
      "batching": [
        "batch"
      ]
    },
    "source": "Interview-ready Database/MongoDB theory"
  },
  {
    "id": "database-018",
    "category": "database",
    "question": "Why should database credentials not be hardcoded?",
    "answer": "Database credentials should not be hardcoded because they are secrets. If committed to Git or exposed in frontend code, attackers can access the database. Credentials should be stored in environment variables or secret managers and only used on the server.",
    "keywords": [
      "credentials",
      "secrets",
      "Git",
      "frontend code",
      "environment variables",
      "server"
    ],
    "aliases": {
      "credentials": [
        "database url",
        "password"
      ],
      "secrets": [
        "secret values"
      ],
      "Git": [
        "repository"
      ],
      "frontend code": [
        "client code"
      ],
      "environment variables": [
        "env vars"
      ],
      "server": [
        "backend"
      ]
    },
    "source": "Interview-ready Database/MongoDB theory"
  },
  {
    "id": "database-019",
    "category": "database",
    "question": "What is a database connection string?",
    "answer": "A database connection string is a URL-like value that tells the app how to connect to a database. It usually includes the database host, credentials, database name, and connection options. It should be treated as a secret when it contains username or password information.",
    "keywords": [
      "URL-like",
      "connect",
      "host",
      "credentials",
      "database name",
      "secret"
    ],
    "aliases": {
      "URL-like": [
        "url"
      ],
      "connect": [
        "connection"
      ],
      "host": [
        "server address"
      ],
      "credentials": [
        "username",
        "password"
      ],
      "database name": [
        "db name"
      ],
      "secret": [
        "sensitive"
      ]
    },
    "source": "Interview-ready Database/MongoDB theory"
  },
  {
    "id": "database-020",
    "category": "database",
    "question": "What is the difference between findOne, find, create, updateOne, and deleteOne in Mongoose?",
    "answer": "findOne returns one matching document or null. find returns an array of matching documents. create inserts a new document. updateOne updates the first matching document. deleteOne deletes the first matching document. These methods map to common CRUD operations.",
    "keywords": [
      "findOne",
      "one document",
      "find",
      "array",
      "create",
      "updateOne",
      "deleteOne"
    ],
    "aliases": {
      "findOne": [
        "find one"
      ],
      "one document": [
        "single document"
      ],
      "find": [
        "find many"
      ],
      "array": [
        "documents array"
      ],
      "create": [
        "insert"
      ],
      "updateOne": [
        "update one"
      ],
      "deleteOne": [
        "delete one"
      ]
    },
    "source": "Interview-ready Database/MongoDB theory"
  },
  {
    "id": "general-dev-001",
    "category": "general-dev",
    "question": "What is Git used for?",
    "answer": "Git is a version control system used to track changes in code over time. It lets developers create commits, use branches, compare changes, revert mistakes, and collaborate without overwriting each other's work.",
    "keywords": [
      "version control",
      "track changes",
      "commits",
      "branches",
      "collaborate"
    ],
    "aliases": {
      "version control": [
        "vcs"
      ],
      "track changes": [
        "history"
      ],
      "commits": [
        "commit history"
      ],
      "branches": [
        "branching"
      ],
      "collaborate": [
        "team work"
      ]
    },
    "source": "Interview-ready General Dev theory"
  },
  {
    "id": "general-dev-002",
    "category": "general-dev",
    "question": "What is the difference between git fetch and git pull?",
    "answer": "git fetch downloads updates from the remote repository but does not merge them into your current branch. git pull does fetch plus merge or rebase, depending on configuration. Fetch is useful when you want to inspect changes before applying them.",
    "keywords": [
      "git fetch",
      "downloads updates",
      "does not merge",
      "git pull",
      "merge",
      "inspect"
    ],
    "aliases": {
      "git fetch": [
        "fetch"
      ],
      "downloads updates": [
        "gets remote changes"
      ],
      "does not merge": [
        "does not apply"
      ],
      "git pull": [
        "pull"
      ],
      "merge": [
        "apply changes"
      ],
      "inspect": [
        "review first"
      ]
    },
    "source": "Interview-ready General Dev theory"
  },
  {
    "id": "general-dev-003",
    "category": "general-dev",
    "question": "What is the difference between merge and rebase in Git?",
    "answer": "Merge combines histories by creating a merge commit when needed, preserving the branch structure. Rebase moves your commits on top of another branch, creating a cleaner linear history. Rebase rewrites commit history, so it should be used carefully on shared branches.",
    "keywords": [
      "merge",
      "merge commit",
      "preserving history",
      "rebase",
      "linear history",
      "rewrites"
    ],
    "aliases": {
      "merge": [
        "git merge"
      ],
      "merge commit": [
        "merge commit"
      ],
      "preserving history": [
        "branch history"
      ],
      "rebase": [
        "git rebase"
      ],
      "linear history": [
        "clean history"
      ],
      "rewrites": [
        "rewrites history"
      ]
    },
    "source": "Interview-ready General Dev theory"
  },
  {
    "id": "general-dev-004",
    "category": "general-dev",
    "question": "What is a merge conflict?",
    "answer": "A merge conflict happens when Git cannot automatically combine changes from different branches. This usually happens when the same lines or nearby parts of a file were changed differently. A developer must choose or edit the final version, then commit the resolution.",
    "keywords": [
      "cannot automatically combine",
      "different branches",
      "same lines",
      "choose",
      "commit resolution"
    ],
    "aliases": {
      "cannot automatically combine": [
        "conflict"
      ],
      "different branches": [
        "branches"
      ],
      "same lines": [
        "same file"
      ],
      "choose": [
        "resolve"
      ],
      "commit resolution": [
        "commit resolved conflict"
      ]
    },
    "source": "Interview-ready General Dev theory"
  },
  {
    "id": "general-dev-005",
    "category": "general-dev",
    "question": "What is a pull request?",
    "answer": "A pull request is a request to merge changes from one branch into another. It gives the team a place to review code, discuss changes, run automated checks, request fixes, and approve the work before merging.",
    "keywords": [
      "merge changes",
      "branch",
      "review code",
      "automated checks",
      "approve"
    ],
    "aliases": {
      "merge changes": [
        "merge"
      ],
      "branch": [
        "source branch",
        "target branch"
      ],
      "review code": [
        "code review"
      ],
      "automated checks": [
        "ci checks"
      ],
      "approve": [
        "approval"
      ]
    },
    "source": "Interview-ready General Dev theory"
  },
  {
    "id": "general-dev-006",
    "category": "general-dev",
    "question": "What makes a good commit message?",
    "answer": "A good commit message clearly explains what changed and, when useful, why it changed. It should be specific enough to understand the purpose later. Good messages help code review, debugging, and project history.",
    "keywords": [
      "what changed",
      "why",
      "specific",
      "code review",
      "project history"
    ],
    "aliases": {
      "what changed": [
        "change"
      ],
      "why": [
        "reason"
      ],
      "specific": [
        "clear"
      ],
      "code review": [
        "review"
      ],
      "project history": [
        "git history"
      ]
    },
    "source": "Interview-ready General Dev theory"
  },
  {
    "id": "general-dev-007",
    "category": "general-dev",
    "question": "What is code review for?",
    "answer": "Code review is used to catch bugs, improve readability, check maintainability, share knowledge, and make sure changes fit project standards. It is not just for finding mistakes; it also helps the team keep code consistent.",
    "keywords": [
      "catch bugs",
      "readability",
      "maintainability",
      "share knowledge",
      "standards"
    ],
    "aliases": {
      "catch bugs": [
        "find bugs"
      ],
      "readability": [
        "readable code"
      ],
      "maintainability": [
        "maintainable"
      ],
      "share knowledge": [
        "knowledge sharing"
      ],
      "standards": [
        "code standards"
      ]
    },
    "source": "Interview-ready General Dev theory"
  },
  {
    "id": "general-dev-008",
    "category": "general-dev",
    "question": "What is the difference between unit, integration, and end-to-end tests?",
    "answer": "Unit tests check small isolated pieces of code. Integration tests check how multiple pieces work together. End-to-end tests simulate real user flows through the app, often in a browser. They cover different levels of confidence and cost.",
    "keywords": [
      "unit tests",
      "isolated",
      "integration tests",
      "work together",
      "end-to-end",
      "user flows"
    ],
    "aliases": {
      "unit tests": [
        "unit test"
      ],
      "isolated": [
        "single function"
      ],
      "integration tests": [
        "integration test"
      ],
      "work together": [
        "multiple pieces"
      ],
      "end-to-end": [
        "e2e"
      ],
      "user flows": [
        "real user flow"
      ]
    },
    "source": "Interview-ready General Dev theory"
  },
  {
    "id": "general-dev-009",
    "category": "general-dev",
    "question": "What should you usually test in a React component?",
    "answer": "You usually test what the user can see and do: rendered text, buttons, form behavior, loading states, error states, and important interactions. Tests should avoid depending too much on internal implementation details.",
    "keywords": [
      "user can see",
      "interactions",
      "forms",
      "loading states",
      "error states",
      "implementation details"
    ],
    "aliases": {
      "user can see": [
        "visible output"
      ],
      "interactions": [
        "user actions"
      ],
      "forms": [
        "form behavior"
      ],
      "loading states": [
        "loading"
      ],
      "error states": [
        "errors"
      ],
      "implementation details": [
        "internal details"
      ]
    },
    "source": "Interview-ready General Dev theory"
  },
  {
    "id": "general-dev-010",
    "category": "general-dev",
    "question": "What is mocking in tests?",
    "answer": "Mocking means replacing a real dependency with a fake controlled version during a test. It is used to avoid real network calls, database writes, timers, or third-party services, and to test how code behaves in specific situations.",
    "keywords": [
      "fake dependency",
      "controlled",
      "network calls",
      "database",
      "third-party services"
    ],
    "aliases": {
      "fake dependency": [
        "mock"
      ],
      "controlled": [
        "controlled fake"
      ],
      "network calls": [
        "api calls"
      ],
      "database": [
        "db"
      ],
      "third-party services": [
        "external services"
      ]
    },
    "source": "Interview-ready General Dev theory"
  },
  {
    "id": "general-dev-011",
    "category": "general-dev",
    "question": "What is CI/CD?",
    "answer": "CI/CD means continuous integration and continuous delivery or deployment. CI automatically runs checks like tests, linting, and builds when code changes. CD automates preparing or deploying the app after those checks pass.",
    "keywords": [
      "continuous integration",
      "continuous delivery",
      "tests",
      "linting",
      "builds",
      "deployment"
    ],
    "aliases": {
      "continuous integration": [
        "ci"
      ],
      "continuous delivery": [
        "cd",
        "continuous deployment"
      ],
      "tests": [
        "automated tests"
      ],
      "linting": [
        "lint"
      ],
      "builds": [
        "build"
      ],
      "deployment": [
        "deploy"
      ]
    },
    "source": "Interview-ready General Dev theory"
  },
  {
    "id": "general-dev-012",
    "category": "general-dev",
    "question": "What is the difference between development, staging, and production environments?",
    "answer": "Development is where developers build and test changes locally or in a dev environment. Staging is a production-like environment used to test before release. Production is the live environment used by real users. Each environment usually has different config and data.",
    "keywords": [
      "development",
      "staging",
      "production",
      "production-like",
      "real users",
      "config"
    ],
    "aliases": {
      "development": [
        "dev"
      ],
      "staging": [
        "stage"
      ],
      "production": [
        "prod",
        "live"
      ],
      "production-like": [
        "like production"
      ],
      "real users": [
        "users"
      ],
      "config": [
        "configuration"
      ]
    },
    "source": "Interview-ready General Dev theory"
  },
  {
    "id": "general-dev-013",
    "category": "general-dev",
    "question": "What is the difference between npm run dev and npm run build?",
    "answer": "npm run dev usually starts a development server with fast rebuilds, hot reload, and debugging-friendly behavior. npm run build creates an optimized production build that can be deployed. The dev server is not the same thing as the production output.",
    "keywords": [
      "development server",
      "hot reload",
      "debugging",
      "production build",
      "optimized",
      "deployed"
    ],
    "aliases": {
      "development server": [
        "dev server"
      ],
      "hot reload": [
        "hmr"
      ],
      "debugging": [
        "debug"
      ],
      "production build": [
        "build"
      ],
      "optimized": [
        "minified"
      ],
      "deployed": [
        "deploy"
      ]
    },
    "source": "Interview-ready General Dev theory"
  },
  {
    "id": "general-dev-014",
    "category": "general-dev",
    "question": "What is linting?",
    "answer": "Linting is static analysis that checks code for possible bugs, style issues, bad patterns, or rule violations before the code runs. Tools like ESLint help teams keep code consistent and catch problems early.",
    "keywords": [
      "static analysis",
      "bugs",
      "style issues",
      "bad patterns",
      "ESLint",
      "consistent"
    ],
    "aliases": {
      "static analysis": [
        "checks code"
      ],
      "bugs": [
        "possible bugs"
      ],
      "style issues": [
        "style"
      ],
      "bad patterns": [
        "anti patterns"
      ],
      "ESLint": [
        "eslint"
      ],
      "consistent": [
        "consistency"
      ]
    },
    "source": "Interview-ready General Dev theory"
  },
  {
    "id": "general-dev-015",
    "category": "general-dev",
    "question": "What is formatting and how is it different from linting?",
    "answer": "Formatting controls how code looks, such as indentation, quotes, spacing, and line breaks. Linting checks code quality rules and possible problems. Formatters like Prettier focus on style, while linters like ESLint can catch patterns that may cause bugs.",
    "keywords": [
      "how code looks",
      "indentation",
      "Prettier",
      "linting",
      "code quality",
      "bugs"
    ],
    "aliases": {
      "how code looks": [
        "format"
      ],
      "indentation": [
        "spacing"
      ],
      "Prettier": [
        "formatter"
      ],
      "linting": [
        "lint"
      ],
      "code quality": [
        "quality rules"
      ],
      "bugs": [
        "possible bugs"
      ]
    },
    "source": "Interview-ready General Dev theory"
  },
  {
    "id": "general-dev-016",
    "category": "general-dev",
    "question": "What is XSS?",
    "answer": "XSS, or Cross-Site Scripting, is a security vulnerability where attacker-controlled script runs in another user's browser. It can happen when an app renders untrusted input as HTML or script. Defenses include escaping output, sanitizing HTML, avoiding dangerous HTML APIs, and using security headers.",
    "keywords": [
      "Cross-Site Scripting",
      "attacker script",
      "browser",
      "untrusted input",
      "escaping",
      "sanitizing"
    ],
    "aliases": {
      "Cross-Site Scripting": [
        "xss"
      ],
      "attacker script": [
        "malicious script"
      ],
      "browser": [
        "user browser"
      ],
      "untrusted input": [
        "user input"
      ],
      "escaping": [
        "escape output"
      ],
      "sanitizing": [
        "sanitize"
      ]
    },
    "source": "Interview-ready General Dev theory"
  },
  {
    "id": "general-dev-017",
    "category": "general-dev",
    "question": "What is CSRF?",
    "answer": "CSRF, or Cross-Site Request Forgery, is an attack where a malicious site tricks a user's browser into sending an unwanted request to another site where the user is already authenticated. Defenses include SameSite cookies, CSRF tokens, and checking request origin.",
    "keywords": [
      "Cross-Site Request Forgery",
      "malicious site",
      "authenticated",
      "unwanted request",
      "SameSite",
      "CSRF token"
    ],
    "aliases": {
      "Cross-Site Request Forgery": [
        "csrf"
      ],
      "malicious site": [
        "attacker site"
      ],
      "authenticated": [
        "logged in"
      ],
      "unwanted request": [
        "forged request"
      ],
      "SameSite": [
        "same site cookies"
      ],
      "CSRF token": [
        "csrf tokens"
      ]
    },
    "source": "Interview-ready General Dev theory"
  },
  {
    "id": "general-dev-018",
    "category": "general-dev",
    "question": "What is injection in web security?",
    "answer": "Injection happens when untrusted input is treated as code or a command by a system. SQL injection is the classic example, but NoSQL injection and command injection also exist. Defenses include validation, parameterized queries, escaping, and avoiding direct string-building for queries.",
    "keywords": [
      "untrusted input",
      "code",
      "SQL injection",
      "NoSQL injection",
      "validation",
      "parameterized queries"
    ],
    "aliases": {
      "untrusted input": [
        "user input"
      ],
      "code": [
        "command"
      ],
      "SQL injection": [
        "sqli"
      ],
      "NoSQL injection": [
        "nosql injection"
      ],
      "validation": [
        "validate input"
      ],
      "parameterized queries": [
        "prepared statements"
      ]
    },
    "source": "Interview-ready General Dev theory"
  },
  {
    "id": "general-dev-019",
    "category": "general-dev",
    "question": "Why should secrets never be committed to Git?",
    "answer": "Secrets like API keys, tokens, database URLs, and private credentials can be stolen if committed to Git, especially in public repositories. Even if removed later, they may remain in Git history. Secrets should be stored in environment variables or secret managers and rotated if leaked.",
    "keywords": [
      "API keys",
      "tokens",
      "database URLs",
      "public repositories",
      "Git history",
      "environment variables"
    ],
    "aliases": {
      "API keys": [
        "api key"
      ],
      "tokens": [
        "access tokens"
      ],
      "database URLs": [
        "connection strings"
      ],
      "public repositories": [
        "public repo"
      ],
      "Git history": [
        "commit history"
      ],
      "environment variables": [
        "env vars"
      ]
    },
    "source": "Interview-ready General Dev theory"
  },
  {
    "id": "general-dev-020",
    "category": "general-dev",
    "question": "What is the principle of least privilege?",
    "answer": "The principle of least privilege means giving users, services, or tokens only the permissions they need to do their job and nothing extra. It limits damage if an account, token, or service is compromised.",
    "keywords": [
      "only permissions needed",
      "nothing extra",
      "users",
      "services",
      "tokens",
      "limits damage"
    ],
    "aliases": {
      "only permissions needed": [
        "minimum permissions"
      ],
      "nothing extra": [
        "least privilege"
      ],
      "users": [
        "user accounts"
      ],
      "services": [
        "service account"
      ],
      "tokens": [
        "api tokens"
      ],
      "limits damage": [
        "reduce impact"
      ]
    },
    "source": "Interview-ready General Dev theory"
  },
  {
    "id": "general-dev-021",
    "category": "general-dev",
    "question": "What is logging used for in applications?",
    "answer": "Logging records useful information about what the app is doing, such as errors, warnings, requests, important actions, and debugging details. Good logs help with debugging and monitoring, but they should not expose sensitive data like passwords or tokens.",
    "keywords": [
      "errors",
      "warnings",
      "requests",
      "debugging",
      "monitoring",
      "sensitive data"
    ],
    "aliases": {
      "errors": [
        "error logs"
      ],
      "warnings": [
        "warn logs"
      ],
      "requests": [
        "request logs"
      ],
      "debugging": [
        "debug"
      ],
      "monitoring": [
        "observability"
      ],
      "sensitive data": [
        "secrets",
        "passwords",
        "tokens"
      ]
    },
    "source": "Interview-ready General Dev theory"
  },
  {
    "id": "general-dev-022",
    "category": "general-dev",
    "question": "What is monitoring?",
    "answer": "Monitoring means tracking an application's health and behavior in real time or over time. It can include uptime, errors, performance, logs, resource usage, and alerts. Monitoring helps teams notice problems before or soon after users are affected.",
    "keywords": [
      "health",
      "uptime",
      "errors",
      "performance",
      "alerts",
      "users affected"
    ],
    "aliases": {
      "health": [
        "app health"
      ],
      "uptime": [
        "availability"
      ],
      "errors": [
        "error rate"
      ],
      "performance": [
        "speed"
      ],
      "alerts": [
        "notifications"
      ],
      "users affected": [
        "impact"
      ]
    },
    "source": "Interview-ready General Dev theory"
  },
  {
    "id": "general-dev-023",
    "category": "general-dev",
    "question": "What is technical debt?",
    "answer": "Technical debt is the future cost created by shortcuts, messy code, missing tests, poor architecture, or rushed decisions. Some debt is intentional and acceptable short term, but unmanaged debt slows development and makes bugs more likely.",
    "keywords": [
      "future cost",
      "shortcuts",
      "messy code",
      "missing tests",
      "rushed decisions",
      "slows development"
    ],
    "aliases": {
      "future cost": [
        "cost later"
      ],
      "shortcuts": [
        "quick fix"
      ],
      "messy code": [
        "bad code"
      ],
      "missing tests": [
        "no tests"
      ],
      "rushed decisions": [
        "rush"
      ],
      "slows development": [
        "slower work"
      ]
    },
    "source": "Interview-ready General Dev theory"
  },
  {
    "id": "general-dev-024",
    "category": "general-dev",
    "question": "What is the difference between refactoring and rewriting?",
    "answer": "Refactoring means improving the internal structure of code without changing its external behavior. Rewriting means replacing a larger part of the system with a new implementation. Refactoring is usually smaller and safer, while rewriting can be riskier and more expensive.",
    "keywords": [
      "internal structure",
      "same behavior",
      "rewriting",
      "new implementation",
      "riskier"
    ],
    "aliases": {
      "internal structure": [
        "code structure"
      ],
      "same behavior": [
        "external behavior unchanged"
      ],
      "rewriting": [
        "rewrite"
      ],
      "new implementation": [
        "new version"
      ],
      "riskier": [
        "more risk"
      ]
    },
    "source": "Interview-ready General Dev theory"
  },
  {
    "id": "general-dev-025",
    "category": "general-dev",
    "question": "What does maintainable code mean?",
    "answer": "Maintainable code is code that is understandable, organized, testable, and easy to change without breaking unrelated behavior. It usually has clear names, reasonable structure, small focused functions or components, useful tests, and avoids unnecessary complexity.",
    "keywords": [
      "understandable",
      "organized",
      "testable",
      "easy to change",
      "clear names",
      "small focused"
    ],
    "aliases": {
      "understandable": [
        "readable"
      ],
      "organized": [
        "structured"
      ],
      "testable": [
        "easy to test"
      ],
      "easy to change": [
        "modifiable"
      ],
      "clear names": [
        "naming"
      ],
      "small focused": [
        "small functions",
        "focused components"
      ]
    },
    "source": "Interview-ready General Dev theory"
  },
];

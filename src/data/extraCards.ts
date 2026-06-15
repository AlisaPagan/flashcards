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
];

import type { Flashcard } from '../types';

export const cards: Flashcard[] = [
  {
    "id": "htmlcss-001",
    "category": "html-css",
    "question": "What is <!DOCTYPE html> and why do we declare it? What happens if we skip it?",
    "answer": "The doctype tells the browser which HTML standard to use. In modern HTML, <!DOCTYPE html> puts the page into standards mode. If it is missing, some browsers may use quirks mode, which can make layout and CSS behave inconsistently.",
    "keywords": [
      "doctype",
      "browser",
      "standards mode",
      "quirks mode"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "doctype": [
        "document type"
      ],
      "standards mode": [
        "standard mode"
      ],
      "quirks mode": [
        "quirk mode"
      ]
    }
  },
  {
    "id": "htmlcss-002",
    "category": "html-css",
    "question": "Why do we use meta tags in an HTML document?",
    "answer": "Meta tags provide metadata about the page, such as character encoding, viewport settings, description, author, and indexing hints for search engines. They go inside the head and are not displayed as visible page content.",
    "keywords": [
      "metadata",
      "head",
      "charset",
      "viewport",
      "description"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "metadata": [
        "meta information"
      ],
      "charset": [
        "encoding",
        "utf-8"
      ],
      "viewport": [
        "responsive viewport"
      ]
    }
  },
  {
    "id": "htmlcss-003",
    "category": "html-css",
    "question": "What is the difference between block and inline HTML elements? Give examples.",
    "answer": "Block elements usually start on a new line and take the full available width, for example div, p, section, and h1. Inline elements stay inside the line of text and take only the needed width, for example span, a, strong, and img.",
    "keywords": [
      "block",
      "inline",
      "new line",
      "full width",
      "content width"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "new line": [
        "new row"
      ],
      "full width": [
        "available width"
      ],
      "content width": [
        "needed width",
        "own content"
      ]
    }
  },
  {
    "id": "htmlcss-004",
    "category": "html-css",
    "question": "Why can some characters appear as squares or question marks on a page?",
    "answer": "This usually happens when the character encoding is wrong or the font does not contain the needed glyph. Setting the correct charset, usually UTF-8, and using a font that supports the language fixes it.",
    "keywords": [
      "encoding",
      "charset",
      "utf-8",
      "font",
      "glyph"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "encoding": [
        "character encoding"
      ],
      "glyph": [
        "symbol",
        "character"
      ]
    }
  },
  {
    "id": "htmlcss-005",
    "category": "html-css",
    "question": "What is semantic HTML and why is it useful? Name semantic tags.",
    "answer": "Semantic HTML uses tags that describe the meaning of the content, not just its look. Tags like header, nav, main, section, article, aside, and footer help accessibility, SEO, and code readability.",
    "keywords": [
      "meaning",
      "accessibility",
      "seo",
      "header",
      "main",
      "article"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "meaning": [
        "semantic meaning"
      ],
      "accessibility": [
        "screen readers",
        "a11y"
      ],
      "seo": [
        "search engines"
      ]
    }
  },
  {
    "id": "htmlcss-006",
    "category": "html-css",
    "question": "What heading tags exist in HTML and what are they used for?",
    "answer": "HTML has h1 through h6 headings. They create a content hierarchy: h1 is the main page heading, and lower levels divide content into sections. They should be used for structure, not just font size.",
    "keywords": [
      "h1",
      "h6",
      "hierarchy",
      "structure"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "hierarchy": [
        "content hierarchy",
        "outline"
      ],
      "structure": [
        "document structure"
      ]
    }
  },
  {
    "id": "htmlcss-007",
    "category": "html-css",
    "question": "What is document flow in HTML and CSS? Can we affect it?",
    "answer": "Document flow is the normal order in which elements are placed on the page. Block and inline elements flow differently. We can affect it with display, position, float, flexbox, grid, margins, and transforms.",
    "keywords": [
      "normal flow",
      "order",
      "display",
      "position",
      "flexbox",
      "grid"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "normal flow": [
        "document flow"
      ],
      "order": [
        "layout order"
      ]
    }
  },
  {
    "id": "htmlcss-008",
    "category": "html-css",
    "question": "How can JavaScript be connected to an HTML page?",
    "answer": "JavaScript can be added inline with event attributes, inside a script tag, or from an external file with script src. External files are preferred because they keep structure and behavior separate and are reusable.",
    "keywords": [
      "inline",
      "script tag",
      "external file",
      "src",
      "separation"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "external file": [
        "script src"
      ],
      "separation": [
        "separate html and js"
      ]
    }
  },
  {
    "id": "htmlcss-009",
    "category": "html-css",
    "question": "How can CSS be added to an HTML page?",
    "answer": "CSS can be added inline with the style attribute, inside a style tag, or through an external stylesheet with link rel=\"stylesheet\". External CSS is usually best for maintainability and caching.",
    "keywords": [
      "inline",
      "style tag",
      "external stylesheet",
      "link",
      "maintainability"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "external stylesheet": [
        "css file"
      ],
      "link": [
        "link tag"
      ]
    }
  },
  {
    "id": "htmlcss-010",
    "category": "html-css",
    "question": "What is the difference between reset.css and normalize.css?",
    "answer": "A reset removes many browser default styles so you start from a blank slate. Normalize keeps useful defaults but makes them more consistent between browsers. Reset is more aggressive; normalize is more conservative.",
    "keywords": [
      "reset",
      "normalize",
      "browser defaults",
      "consistent"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "browser defaults": [
        "default styles"
      ],
      "consistent": [
        "cross-browser"
      ]
    }
  },
  {
    "id": "htmlcss-011",
    "category": "html-css",
    "question": "What is the difference between margin and padding?",
    "answer": "Padding is the space inside the element between content and border. Margin is the space outside the element between it and other elements. Padding can affect the element box size depending on box-sizing.",
    "keywords": [
      "padding",
      "inside",
      "margin",
      "outside",
      "box size"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "inside": [
        "inner space"
      ],
      "outside": [
        "outer space"
      ],
      "box size": [
        "element size"
      ]
    }
  },
  {
    "id": "htmlcss-012",
    "category": "html-css",
    "question": "What is CSS selector specificity?",
    "answer": "Specificity decides which CSS rule wins when multiple rules target the same element. Inline styles beat IDs, IDs beat classes/attributes/pseudo-classes, and those beat element selectors. Later rules only win when specificity is equal.",
    "keywords": [
      "specificity",
      "inline",
      "id",
      "class",
      "element selector"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "element selector": [
        "tag selector"
      ],
      "class": [
        "classes"
      ]
    }
  },
  {
    "id": "htmlcss-013",
    "category": "html-css",
    "question": "What is the difference between a pseudo-class and a pseudo-element?",
    "answer": "A pseudo-class selects an element in a certain state, like :hover, :focus, or :first-child. A pseudo-element selects or creates a part of an element, like ::before, ::after, or ::first-line.",
    "keywords": [
      "pseudo-class",
      "state",
      "pseudo-element",
      "part",
      "before"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "state": [
        "condition"
      ],
      "part": [
        "portion"
      ]
    }
  },
  {
    "id": "htmlcss-014",
    "category": "html-css",
    "question": "What is the CSS box model?",
    "answer": "The box model describes how an element is sized and spaced. It consists of content, padding, border, and margin. Width and height normally apply to content unless box-sizing changes that behavior.",
    "keywords": [
      "content",
      "padding",
      "border",
      "margin",
      "box-sizing"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "content": [
        "content box"
      ]
    }
  },
  {
    "id": "htmlcss-015",
    "category": "html-css",
    "question": "What does box-sizing do?",
    "answer": "box-sizing controls how width and height are calculated. content-box means width includes only content. border-box means width includes content, padding, and border, which makes layout sizing easier.",
    "keywords": [
      "box-sizing",
      "content-box",
      "border-box",
      "padding",
      "border"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "border-box": [
        "includes padding and border"
      ],
      "content-box": [
        "content only"
      ]
    }
  },
  {
    "id": "htmlcss-016",
    "category": "html-css",
    "question": "What positioning types exist in CSS?",
    "answer": "Common position values are static, relative, absolute, fixed, and sticky. Static follows normal flow. Relative moves from its normal place. Absolute is positioned relative to the nearest positioned ancestor. Fixed is relative to the viewport. Sticky switches between relative and fixed behavior.",
    "keywords": [
      "static",
      "relative",
      "absolute",
      "fixed",
      "sticky"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "positioning": [
        "position"
      ]
    }
  },
  {
    "id": "htmlcss-017",
    "category": "html-css",
    "question": "What is z-index and when does it work?",
    "answer": "z-index controls stacking order on the z axis. It works on positioned elements and also in some layout contexts like flex or grid items. It is affected by stacking contexts, so a high z-index does not always escape its parent context.",
    "keywords": [
      "z-index",
      "stacking order",
      "positioned",
      "stacking context"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "stacking order": [
        "layer order"
      ],
      "positioned": [
        "position"
      ]
    }
  },
  {
    "id": "htmlcss-018",
    "category": "html-css",
    "question": "How does position: absolute work?",
    "answer": "An absolutely positioned element is removed from normal flow and positioned using top, right, bottom, or left. Its containing block is usually the nearest ancestor with a position other than static, otherwise the initial containing block.",
    "keywords": [
      "removed from flow",
      "top",
      "left",
      "positioned ancestor",
      "containing block"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "removed from flow": [
        "out of normal flow"
      ],
      "positioned ancestor": [
        "nearest positioned parent"
      ]
    }
  },
  {
    "id": "htmlcss-019",
    "category": "html-css",
    "question": "What is the difference between fluid, adaptive, and responsive layout?",
    "answer": "Fluid layout scales smoothly with relative units like percentages. Adaptive layout switches between fixed layouts at certain breakpoints. Responsive layout combines flexible sizing, media queries, and layout changes to work across devices.",
    "keywords": [
      "fluid",
      "adaptive",
      "responsive",
      "breakpoints",
      "media queries"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "fluid": [
        "flexible"
      ],
      "breakpoints": [
        "breakpoint"
      ]
    }
  },
  {
    "id": "htmlcss-020",
    "category": "html-css",
    "question": "What is the difference between visibility: hidden and display: none?",
    "answer": "display: none removes the element from layout, so it takes no space. visibility: hidden hides the element visually but keeps its layout space.",
    "keywords": [
      "display none",
      "removed from layout",
      "visibility hidden",
      "keeps space"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "display none": [
        "display: none"
      ],
      "visibility hidden": [
        "visibility: hidden"
      ],
      "keeps space": [
        "takes space"
      ]
    }
  },
  {
    "id": "htmlcss-021",
    "category": "html-css",
    "question": "What is CSS transition?",
    "answer": "transition animates a change between property values over time. You usually define the property, duration, timing function, and delay, for example transition: opacity 200ms ease.",
    "keywords": [
      "transition",
      "property",
      "duration",
      "timing function",
      "delay"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "duration": [
        "time"
      ],
      "timing function": [
        "ease",
        "linear"
      ]
    }
  },
  {
    "id": "htmlcss-022",
    "category": "html-css",
    "question": "What is the difference between a relative and absolute URL?",
    "answer": "A relative URL is resolved from the current document or base URL, like ./img/logo.png. An absolute URL includes the full address, usually protocol and domain, like https://example.com/img/logo.png.",
    "keywords": [
      "relative url",
      "current document",
      "absolute url",
      "full address",
      "domain"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "relative url": [
        "relative path"
      ],
      "absolute url": [
        "absolute path"
      ]
    }
  },
  {
    "id": "htmlcss-023",
    "category": "html-css",
    "question": "What is the difference between a tag and an element in HTML?",
    "answer": "A tag is the markup syntax, like <p> or </p>. An element is the complete node created by the opening tag, content, closing tag, and attributes if present.",
    "keywords": [
      "tag",
      "element",
      "opening tag",
      "content",
      "attributes"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "opening tag": [
        "start tag"
      ]
    }
  },
  {
    "id": "htmlcss-024",
    "category": "html-css",
    "question": "When should you use button and when should you use a link?",
    "answer": "Use a button for an action on the page, such as submit, open modal, or save. Use an anchor link for navigation to another page, section, file, or URL.",
    "keywords": [
      "button",
      "action",
      "link",
      "navigation",
      "url"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "link": [
        "anchor",
        "a tag"
      ],
      "navigation": [
        "navigate"
      ]
    }
  },
  {
    "id": "htmlcss-025",
    "category": "html-css",
    "question": "Why does button have a type attribute?",
    "answer": "The type attribute defines the button behavior. submit submits a form, reset resets a form, and button has no default form action. Setting type=\"button\" prevents accidental form submission.",
    "keywords": [
      "type",
      "submit",
      "reset",
      "button",
      "form"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "button": [
        "type button"
      ],
      "submit": [
        "form submit"
      ]
    }
  },
  {
    "id": "htmlcss-026",
    "category": "html-css",
    "question": "What is the difference between checkbox and radio inputs?",
    "answer": "Checkboxes allow multiple independent choices. Radio buttons are used when the user must choose one option from a group with the same name.",
    "keywords": [
      "checkbox",
      "multiple",
      "radio",
      "one option",
      "same name"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "multiple": [
        "many choices"
      ],
      "one option": [
        "single choice"
      ]
    }
  },
  {
    "id": "htmlcss-027",
    "category": "html-css",
    "question": "What is CSS inheritance and what is the cascade?",
    "answer": "Inheritance means some CSS properties pass from parent to child, such as color or font-family. The cascade is the algorithm that decides which rule wins based on origin, importance, specificity, order, and inheritance.",
    "keywords": [
      "inheritance",
      "parent",
      "child",
      "cascade",
      "specificity"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "parent": [
        "parent element"
      ],
      "child": [
        "child element"
      ]
    }
  },
  {
    "id": "htmlcss-028",
    "category": "html-css",
    "question": "When should you use img and when should you use background-image?",
    "answer": "Use img for meaningful content images that need alt text, SEO, or interaction. Use background-image for decorative images that are part of visual styling.",
    "keywords": [
      "img",
      "content image",
      "alt text",
      "background-image",
      "decorative"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "background-image": [
        "background image"
      ],
      "content image": [
        "meaningful image"
      ]
    }
  },
  {
    "id": "htmlcss-029",
    "category": "html-css",
    "question": "Why do img and input not support ::before and ::after pseudo-elements?",
    "answer": "img and input are replaced elements. Their rendered content comes from outside the document structure, so browsers do not create normal generated content inside them for ::before or ::after.",
    "keywords": [
      "replaced elements",
      "generated content",
      "before",
      "after"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "replaced elements": [
        "replaced element"
      ],
      "generated content": [
        "pseudo-element content"
      ]
    }
  },
  {
    "id": "htmlcss-030",
    "category": "html-css",
    "question": "What is calc() in CSS useful for?",
    "answer": "calc() lets CSS calculate values using different units, like width: calc(100% - 2rem). It is useful when pure percentages or fixed values are not enough.",
    "keywords": [
      "calc",
      "calculate",
      "different units",
      "percentage",
      "fixed value"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "different units": [
        "mixed units"
      ]
    }
  },
  {
    "id": "htmlcss-031",
    "category": "html-css",
    "question": "What are a flex container and flex items?",
    "answer": "A flex container is an element with display: flex or inline-flex. Its direct children become flex items and can be arranged along the main and cross axes using flexbox properties.",
    "keywords": [
      "display flex",
      "flex container",
      "flex items",
      "direct children",
      "main axis"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "display flex": [
        "flex"
      ],
      "direct children": [
        "children"
      ]
    }
  },
  {
    "id": "htmlcss-032",
    "category": "html-css",
    "question": "What are flex axes in CSS Flexbox?",
    "answer": "Flexbox has a main axis and a cross axis. flex-direction decides the main axis. justify-content works along the main axis, while align-items usually works along the cross axis.",
    "keywords": [
      "main axis",
      "cross axis",
      "flex-direction",
      "justify-content",
      "align-items"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "cross axis": [
        "perpendicular axis"
      ]
    }
  },
  {
    "id": "htmlcss-033",
    "category": "html-css",
    "question": "What is the difference between mobile-first and desktop-first?",
    "answer": "Mobile-first starts with small-screen styles and adds larger layouts using min-width media queries. Desktop-first starts with desktop styles and adapts down using max-width queries. Mobile-first is usually more modern because responsive design often starts from the simplest layout.",
    "keywords": [
      "mobile-first",
      "desktop-first",
      "min-width",
      "max-width",
      "media queries"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "mobile-first": [
        "mobile first"
      ],
      "desktop-first": [
        "desktop first"
      ]
    }
  },
  {
    "id": "htmlcss-034",
    "category": "html-css",
    "question": "When is SVG better than PNG or JPEG?",
    "answer": "SVG is vector-based, so it scales without losing quality and is often ideal for icons, logos, simple illustrations, and UI graphics. PNG/JPEG are raster formats and are better for photos or complex images.",
    "keywords": [
      "svg",
      "vector",
      "scales",
      "icons",
      "logos"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "vector": [
        "vector image"
      ],
      "scales": [
        "scalable"
      ]
    }
  },
  {
    "id": "htmlcss-035",
    "category": "html-css",
    "question": "What is the difference between rgb, rgba, and hex colors?",
    "answer": "hex and rgb both define colors. rgba also includes an alpha channel for transparency. Modern CSS also supports hex with alpha, but rgba is still readable for transparent colors.",
    "keywords": [
      "rgb",
      "rgba",
      "hex",
      "alpha",
      "transparency"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "alpha": [
        "opacity"
      ],
      "transparency": [
        "transparent"
      ]
    }
  },
  {
    "id": "htmlcss-036",
    "category": "html-css",
    "question": "What are media queries?",
    "answer": "Media queries apply CSS only when certain conditions match, such as viewport width, orientation, or user preferences. They are a core tool for responsive design.",
    "keywords": [
      "media queries",
      "conditions",
      "viewport",
      "responsive"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "conditions": [
        "condition"
      ],
      "viewport": [
        "screen width"
      ]
    }
  },
  {
    "id": "js-001",
    "category": "javascript",
    "question": "What data types exist in JavaScript?",
    "answer": "JavaScript has primitive types string, number, bigint, boolean, undefined, symbol, and null. It also has objects, including arrays, functions, dates, and plain objects.",
    "keywords": [
      "string",
      "number",
      "boolean",
      "undefined",
      "null",
      "object"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "object": [
        "objects"
      ],
      "boolean": [
        "bool"
      ]
    }
  },
  {
    "id": "js-002",
    "category": "javascript",
    "question": "What is NaN and when does it appear?",
    "answer": "NaN means Not-a-Number. It appears when a numeric operation cannot produce a valid number, for example Number(\"abc\") or 0 / 0. NaN is special because NaN === NaN is false; use Number.isNaN.",
    "keywords": [
      "not a number",
      "numeric operation",
      "Number.isNaN",
      "NaN"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "not a number": [
        "not-a-number"
      ]
    }
  },
  {
    "id": "js-003",
    "category": "javascript",
    "question": "What is the difference between == and ===?",
    "answer": "== compares values after type coercion. === compares both value and type without coercion. In real code, === is preferred because it is more predictable.",
    "keywords": [
      "coercion",
      "type",
      "value",
      "strict equality"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "strict equality": [
        "==="
      ],
      "coercion": [
        "type conversion"
      ]
    }
  },
  {
    "id": "js-004",
    "category": "javascript",
    "question": "What is the difference between null and undefined?",
    "answer": "undefined usually means a variable or property has not been assigned a value. null is an intentional empty value set by the developer. Both represent absence, but they are not the same type.",
    "keywords": [
      "undefined",
      "not assigned",
      "null",
      "intentional",
      "absence"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "not assigned": [
        "missing value"
      ],
      "intentional": [
        "explicit"
      ]
    }
  },
  {
    "id": "js-005",
    "category": "javascript",
    "question": "How do logical operators !, &&, and || work?",
    "answer": "! negates a value after converting it to boolean. && returns the first falsy value or the last truthy value. || returns the first truthy value or the last falsy value. They short-circuit.",
    "keywords": [
      "not",
      "and",
      "or",
      "truthy",
      "falsy",
      "short-circuit"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "not": [
        "negates",
        "!"
      ],
      "and": [
        "&&"
      ],
      "or": [
        "||"
      ],
      "short-circuit": [
        "short circuit"
      ]
    }
  },
  {
    "id": "js-006",
    "category": "javascript",
    "question": "What is use strict in JavaScript?",
    "answer": "use strict enables strict mode, which catches some silent errors, prevents accidental globals, changes some this behavior, and makes JavaScript safer and more predictable.",
    "keywords": [
      "strict mode",
      "silent errors",
      "accidental globals",
      "this"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "strict mode": [
        "use strict"
      ],
      "accidental globals": [
        "global variables"
      ]
    }
  },
  {
    "id": "js-007",
    "category": "javascript",
    "question": "What is the difference between script, script async, and script defer?",
    "answer": "A normal script blocks HTML parsing while it downloads and runs. async downloads in parallel and runs as soon as ready, possibly before parsing ends. defer downloads in parallel but runs after HTML parsing, in document order.",
    "keywords": [
      "blocks parsing",
      "async",
      "defer",
      "parallel",
      "document order"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "blocks parsing": [
        "blocking"
      ],
      "document order": [
        "order"
      ]
    }
  },
  {
    "id": "js-008",
    "category": "javascript",
    "question": "Why do two identical-looking objects compare as false?",
    "answer": "Objects are compared by reference, not by structure. Two object literals may have the same properties but live at different memory references, so obj1 === obj2 is false unless both variables point to the same object.",
    "keywords": [
      "reference",
      "same object",
      "memory",
      "structure"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "reference": [
        "by reference"
      ],
      "structure": [
        "same properties"
      ]
    }
  },
  {
    "id": "js-009",
    "category": "javascript",
    "question": "How does Array.filter work?",
    "answer": "filter creates a new array with only the elements for which the callback returns a truthy value. It does not mutate the original array.",
    "keywords": [
      "filter",
      "new array",
      "callback",
      "truthy",
      "does not mutate"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "does not mutate": [
        "immutable",
        "original array unchanged"
      ]
    }
  },
  {
    "id": "js-010",
    "category": "javascript",
    "question": "What is an event listener and how do you add one?",
    "answer": "An event listener is a function that runs when an event happens, such as click or input. You add one with element.addEventListener(\"click\", handler).",
    "keywords": [
      "event",
      "listener",
      "addEventListener",
      "handler"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "handler": [
        "callback"
      ]
    }
  },
  {
    "id": "js-011",
    "category": "javascript",
    "question": "What is the difference between var, let, and const?",
    "answer": "var is function-scoped and hoisted with undefined. let and const are block-scoped and are in the temporal dead zone before declaration. const prevents reassignment, but objects declared with const can still be mutated.",
    "keywords": [
      "var",
      "function scope",
      "let",
      "const",
      "block scope",
      "temporal dead zone"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "function scope": [
        "function-scoped"
      ],
      "block scope": [
        "block-scoped"
      ],
      "temporal dead zone": [
        "tdz"
      ]
    }
  },
  {
    "id": "js-012",
    "category": "javascript",
    "question": "How can you check whether data is an array?",
    "answer": "Use Array.isArray(value). typeof is not enough because arrays are objects, so typeof [] returns \"object\".",
    "keywords": [
      "Array.isArray",
      "typeof",
      "object"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "Array.isArray": [
        "array is array"
      ]
    }
  },
  {
    "id": "js-013",
    "category": "javascript",
    "question": "What array iteration methods do you know?",
    "answer": "Common array methods are forEach, map, filter, reduce, find, some, every, sort, includes, and flatMap. They help process arrays without manually writing loops every time.",
    "keywords": [
      "forEach",
      "map",
      "filter",
      "reduce",
      "find",
      "some",
      "every"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "forEach": [
        "foreach"
      ]
    }
  },
  {
    "id": "js-014",
    "category": "javascript",
    "question": "How can you merge arrays?",
    "answer": "You can merge arrays with the spread operator, concat, or push with spread. For example [...a, ...b] creates a new merged array.",
    "keywords": [
      "spread",
      "concat",
      "new array"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "spread": [
        "..."
      ],
      "new array": [
        "merge"
      ]
    }
  },
  {
    "id": "js-015",
    "category": "javascript",
    "question": "How do you check if an array contains a certain element?",
    "answer": "Use includes for direct value checks. For object or condition checks, use some or find with a callback.",
    "keywords": [
      "includes",
      "some",
      "find",
      "callback"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "includes": [
        "array includes"
      ]
    }
  },
  {
    "id": "js-016",
    "category": "javascript",
    "question": "Can you use for...in for arrays? Why is it usually bad?",
    "answer": "for...in loops over enumerable keys, not array values. It can include inherited keys and does not guarantee the clean value iteration you usually want. Use for...of, forEach, or array methods instead.",
    "keywords": [
      "enumerable keys",
      "not values",
      "inherited keys",
      "for...of"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "enumerable keys": [
        "keys"
      ],
      "not values": [
        "indexes"
      ],
      "inherited keys": [
        "prototype keys"
      ]
    }
  },
  {
    "id": "js-017",
    "category": "javascript",
    "question": "What is hoisting?",
    "answer": "Hoisting is JavaScript behavior where declarations are processed before code runs. Function declarations can be called before they appear. var is hoisted and initialized as undefined. let and const are hoisted but unavailable in the temporal dead zone.",
    "keywords": [
      "declarations",
      "function declaration",
      "var",
      "undefined",
      "temporal dead zone"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "declarations": [
        "declaration"
      ],
      "function declaration": [
        "function declarations"
      ],
      "temporal dead zone": [
        "tdz"
      ]
    }
  },
  {
    "id": "js-018",
    "category": "javascript",
    "question": "What value does a var variable have if accessed before declaration?",
    "answer": "A var variable accessed before its declaration has the value undefined because the declaration is hoisted and initialized with undefined.",
    "keywords": [
      "var",
      "undefined",
      "hoisted"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "hoisted": [
        "hoisting"
      ]
    }
  },
  {
    "id": "js-019",
    "category": "javascript",
    "question": "What happens if you access let or const before declaration?",
    "answer": "Accessing let or const before declaration throws a ReferenceError because they are in the temporal dead zone until the declaration line is executed.",
    "keywords": [
      "ReferenceError",
      "temporal dead zone",
      "let",
      "const"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "temporal dead zone": [
        "tdz"
      ]
    }
  },
  {
    "id": "js-020",
    "category": "javascript",
    "question": "What is scope and what kinds of scope exist in JavaScript?",
    "answer": "Scope defines where variables are available. JavaScript has global scope, function scope, block scope, and lexical scope. Scope is determined mostly by where code is written.",
    "keywords": [
      "scope",
      "global",
      "function scope",
      "block scope",
      "lexical"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "lexical": [
        "lexical scope"
      ]
    }
  },
  {
    "id": "js-021",
    "category": "javascript",
    "question": "What is the difference between Function Declaration and Function Expression?",
    "answer": "A function declaration is hoisted and can be called before its definition. A function expression is assigned to a variable, so it behaves like that variable and is not callable before initialization.",
    "keywords": [
      "function declaration",
      "function expression",
      "hoisted",
      "variable"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "function declaration": [
        "declaration"
      ],
      "function expression": [
        "expression"
      ]
    }
  },
  {
    "id": "js-022",
    "category": "javascript",
    "question": "What is a callback function?",
    "answer": "A callback is a function passed as an argument to another function and called later. It is used for events, array methods, async code, and reusable behavior.",
    "keywords": [
      "function",
      "argument",
      "called later",
      "events",
      "async"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "called later": [
        "later"
      ],
      "argument": [
        "parameter"
      ]
    }
  },
  {
    "id": "js-023",
    "category": "javascript",
    "question": "What is the difference between an arrow function and a regular function?",
    "answer": "Arrow functions do not have their own this, arguments, super, or new.target. They use lexical this from the surrounding scope and cannot be used as constructors.",
    "keywords": [
      "arrow function",
      "regular function",
      "lexical this",
      "arguments",
      "constructor"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "regular function": [
        "normal function"
      ],
      "constructor": [
        "new"
      ]
    }
  },
  {
    "id": "js-024",
    "category": "javascript",
    "question": "Do arrow functions have access to arguments? What is the alternative?",
    "answer": "Arrow functions do not have their own arguments object. Use rest parameters, like (...args), when you need a list of arguments.",
    "keywords": [
      "arguments",
      "rest parameters",
      "args"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "rest parameters": [
        "rest",
        "...args"
      ]
    }
  },
  {
    "id": "js-025",
    "category": "javascript",
    "question": "How can you call a function after 10 seconds?",
    "answer": "Use setTimeout and pass the delay in milliseconds: setTimeout(callback, 10000).",
    "keywords": [
      "setTimeout",
      "callback",
      "10000",
      "milliseconds"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "10000": [
        "10 seconds"
      ],
      "milliseconds": [
        "ms"
      ]
    }
  },
  {
    "id": "js-026",
    "category": "javascript",
    "question": "What is a closure and why is it useful?",
    "answer": "A closure is when a function keeps access to variables from its lexical or outer scope even after that outer function has finished. Closures are useful for private state, callbacks, and function factories.",
    "keywords": [
      "function",
      "lexical scope",
      "outer scope",
      "keeps access",
      "private state"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "lexical scope": [
        "scope"
      ],
      "outer scope": [
        "parent scope"
      ],
      "keeps access": [
        "remembers",
        "captures"
      ]
    }
  },
  {
    "id": "js-027",
    "category": "javascript",
    "question": "What are the main principles of OOP?",
    "answer": "The common OOP principles are encapsulation, abstraction, inheritance, and polymorphism. They help organize code around objects, responsibilities, reusable behavior, and clear interfaces.",
    "keywords": [
      "encapsulation",
      "abstraction",
      "inheritance",
      "polymorphism"
    ],
    "source": "Uploaded spreadsheet"
  },
  {
    "id": "js-028",
    "category": "javascript",
    "question": "What is this and how is its value determined?",
    "answer": "this is a value created for a function call. In regular functions it depends on how the function is called: as a method, plain function, constructor, or with call/apply/bind. Arrow functions use lexical this.",
    "keywords": [
      "this",
      "function call",
      "method",
      "call apply bind",
      "arrow functions"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "call apply bind": [
        "call",
        "apply",
        "bind"
      ],
      "function call": [
        "called"
      ]
    }
  },
  {
    "id": "js-029",
    "category": "javascript",
    "question": "How can you change this when calling a function?",
    "answer": "For regular functions, you can set this with call, apply, or bind. call and apply invoke immediately; bind returns a new function with this fixed.",
    "keywords": [
      "call",
      "apply",
      "bind",
      "regular functions",
      "new function"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "new function": [
        "returns function"
      ]
    }
  },
  {
    "id": "js-030",
    "category": "javascript",
    "question": "Can you change this inside an arrow function?",
    "answer": "No. Arrow functions do not have their own this. They capture this from the surrounding lexical scope, so call, apply, and bind cannot change it.",
    "keywords": [
      "arrow functions",
      "lexical this",
      "call",
      "apply",
      "bind"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "lexical this": [
        "lexical scope"
      ]
    }
  },
  {
    "id": "js-031",
    "category": "javascript",
    "question": "What is an object prototype?",
    "answer": "A prototype is another object that an object can inherit properties and methods from. JavaScript looks up missing properties through the prototype chain.",
    "keywords": [
      "prototype",
      "inherit",
      "properties",
      "prototype chain"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "inherit": [
        "inheritance"
      ],
      "prototype chain": [
        "chain"
      ]
    }
  },
  {
    "id": "js-032",
    "category": "javascript",
    "question": "How does prototypal inheritance work?",
    "answer": "If a property is not found directly on an object, JavaScript checks the object prototype, then the prototype of that prototype, until it finds the property or reaches null.",
    "keywords": [
      "object",
      "property lookup",
      "prototype",
      "chain",
      "null"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "property lookup": [
        "lookup"
      ]
    }
  },
  {
    "id": "js-033",
    "category": "javascript",
    "question": "How can you create an object without a prototype?",
    "answer": "Use Object.create(null). The created object has no prototype, so it does not inherit Object.prototype methods like toString.",
    "keywords": [
      "Object.create(null)",
      "no prototype",
      "Object.prototype"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "no prototype": [
        "without prototype"
      ]
    }
  },
  {
    "id": "js-034",
    "category": "javascript",
    "question": "How do you check if a property is own and not inherited?",
    "answer": "Use Object.hasOwn(object, property) or object.hasOwnProperty(property). Object.hasOwn is safer for objects that may not inherit from Object.prototype.",
    "keywords": [
      "Object.hasOwn",
      "hasOwnProperty",
      "own property",
      "inherited"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "own property": [
        "own"
      ],
      "inherited": [
        "prototype"
      ]
    }
  },
  {
    "id": "js-035",
    "category": "javascript",
    "question": "What are JavaScript modules and how do export/import help?",
    "answer": "Modules split code into separate files with explicit dependencies. export exposes values from one file, and import brings them into another. This improves organization, reuse, and maintainability.",
    "keywords": [
      "modules",
      "export",
      "import",
      "dependencies",
      "reuse"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "modules": [
        "modularity"
      ]
    }
  },
  {
    "id": "js-036",
    "category": "javascript",
    "question": "How can a class method be placed directly on an instance instead of the prototype?",
    "answer": "Define it as an instance field, usually with an arrow function: method = () => {}. That creates the function on every instance instead of sharing one method on the prototype.",
    "keywords": [
      "instance field",
      "arrow function",
      "instance",
      "prototype"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "instance field": [
        "class field"
      ]
    }
  },
  {
    "id": "js-037",
    "category": "javascript",
    "question": "What is the difference between sessionStorage and localStorage?",
    "answer": "Both store strings in the browser. localStorage persists until manually cleared. sessionStorage lasts only for the current tab session. They are synchronous and should not store sensitive data.",
    "keywords": [
      "localStorage",
      "sessionStorage",
      "current tab",
      "persists",
      "synchronous"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "current tab": [
        "tab session"
      ],
      "persists": [
        "persistent"
      ]
    }
  },
  {
    "id": "js-038",
    "category": "javascript",
    "question": "What is a Promise?",
    "answer": "A Promise represents the eventual result of an asynchronous operation. It can be pending, fulfilled, or rejected, and you handle it with then/catch/finally or async/await.",
    "keywords": [
      "asynchronous",
      "pending",
      "fulfilled",
      "rejected",
      "then",
      "catch"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "asynchronous": [
        "async"
      ],
      "fulfilled": [
        "resolved"
      ]
    }
  },
  {
    "id": "js-039",
    "category": "javascript",
    "question": "What is the difference between Promise.all and Promise.race?",
    "answer": "Promise.all waits for all promises to fulfill and rejects if one rejects. Promise.race settles as soon as the first promise settles, whether fulfilled or rejected.",
    "keywords": [
      "Promise.all",
      "all promises",
      "rejects",
      "Promise.race",
      "first promise"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "all promises": [
        "waits for all"
      ],
      "first promise": [
        "first settled"
      ]
    }
  },
  {
    "id": "js-040",
    "category": "javascript",
    "question": "What is async/await?",
    "answer": "async/await is syntax for working with promises in a more readable way. An async function always returns a promise. await pauses inside that async function until the promise settles.",
    "keywords": [
      "async function",
      "promise",
      "await",
      "settles"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "settles": [
        "resolved",
        "rejected"
      ]
    }
  },
  {
    "id": "js-041",
    "category": "javascript",
    "question": "How do you handle errors with async/await?",
    "answer": "Use try/catch around awaited code. You can also let the error reject the async function promise and handle it with catch where the function is called.",
    "keywords": [
      "try",
      "catch",
      "await",
      "reject"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "reject": [
        "rejected promise"
      ]
    }
  },
  {
    "id": "js-042",
    "category": "javascript",
    "question": "What is the event loop in JavaScript?",
    "answer": "The event loop coordinates the call stack, task queue, and microtask queue so asynchronous callbacks can run after synchronous code finishes. Promises use microtasks, while timers use tasks.",
    "keywords": [
      "call stack",
      "task queue",
      "microtask queue",
      "asynchronous",
      "promises",
      "timers"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "task queue": [
        "macrotask queue"
      ],
      "asynchronous": [
        "async"
      ]
    }
  },
  {
    "id": "js-043",
    "category": "javascript",
    "question": "What states can a Promise have?",
    "answer": "A promise can be pending, fulfilled, or rejected. Once it is fulfilled or rejected, it is settled and cannot change state again.",
    "keywords": [
      "pending",
      "fulfilled",
      "rejected",
      "settled"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "fulfilled": [
        "resolved"
      ]
    }
  },
  {
    "id": "js-044",
    "category": "javascript",
    "question": "Which HTTP methods do you know?",
    "answer": "Common HTTP methods are GET, POST, PUT, PATCH, DELETE, OPTIONS, and HEAD. GET reads data, POST creates or submits data, PUT replaces, PATCH partially updates, and DELETE removes.",
    "keywords": [
      "GET",
      "POST",
      "PUT",
      "PATCH",
      "DELETE",
      "OPTIONS"
    ],
    "source": "Uploaded spreadsheet"
  },
  {
    "id": "react-001",
    "category": "react",
    "question": "What is JSX and how does it become regular JavaScript?",
    "answer": "JSX is syntax that lets you write markup-like code inside JavaScript. A build tool transforms JSX into JavaScript function calls that create React elements.",
    "keywords": [
      "jsx",
      "syntax",
      "build tool",
      "react elements"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "build tool": [
        "transpiler",
        "babel"
      ]
    }
  },
  {
    "id": "react-002",
    "category": "react",
    "question": "What is the difference between state and props?",
    "answer": "Props are data passed from a parent component and should be treated as read-only by the child. State is data owned by a component that can change over time and cause re-rendering.",
    "keywords": [
      "props",
      "parent",
      "read-only",
      "state",
      "changes",
      "re-render"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "read-only": [
        "readonly"
      ],
      "re-render": [
        "rerender"
      ]
    }
  },
  {
    "id": "react-003",
    "category": "react",
    "question": "Why is key needed in React lists?",
    "answer": "key gives React a stable identity for each list item. It helps React match items between renders and update, move, or remove the right elements efficiently.",
    "keywords": [
      "key",
      "stable identity",
      "list",
      "renders",
      "efficiently"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "stable identity": [
        "identity"
      ]
    }
  },
  {
    "id": "react-004",
    "category": "react",
    "question": "What is lifting state up?",
    "answer": "Lifting state up means moving shared state to the closest common parent so multiple child components can use and update the same data through props and callbacks.",
    "keywords": [
      "shared state",
      "common parent",
      "props",
      "callbacks"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "common parent": [
        "closest parent"
      ]
    }
  },
  {
    "id": "react-005",
    "category": "react",
    "question": "What are React portals?",
    "answer": "Portals let you render a component into a different DOM node outside the normal parent DOM hierarchy while keeping it in the same React tree. They are useful for modals, tooltips, and overlays.",
    "keywords": [
      "portal",
      "different DOM node",
      "React tree",
      "modal",
      "overlay"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "different DOM node": [
        "outside parent"
      ]
    }
  },
  {
    "id": "react-006",
    "category": "react",
    "question": "What are refs and when should you use them?",
    "answer": "Refs store a mutable reference that does not cause re-rendering. They are used for DOM access, focusing inputs, measuring elements, timers, or storing mutable values between renders.",
    "keywords": [
      "refs",
      "mutable",
      "does not cause re-render",
      "DOM access",
      "focus"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "does not cause re-render": [
        "no rerender"
      ]
    }
  },
  {
    "id": "react-007",
    "category": "react",
    "question": "What is Context API and can a project have multiple contexts?",
    "answer": "Context lets you pass data through the component tree without prop drilling. A project can have multiple contexts, for example auth, theme, language, or settings.",
    "keywords": [
      "context",
      "component tree",
      "prop drilling",
      "multiple contexts"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "component tree": [
        "tree"
      ]
    }
  },
  {
    "id": "react-008",
    "category": "react",
    "question": "What do hooks allow you to do? Name common hooks.",
    "answer": "Hooks let function components use state, lifecycle-like effects, refs, context, memoization, and reusable logic. Common hooks are useState, useEffect, useRef, useContext, useMemo, useCallback, and custom hooks.",
    "keywords": [
      "function components",
      "state",
      "effects",
      "reusable logic",
      "useState",
      "useEffect"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "effects": [
        "side effects"
      ],
      "reusable logic": [
        "custom hooks"
      ]
    }
  },
  {
    "id": "react-009",
    "category": "react",
    "question": "What are the rules of hooks?",
    "answer": "Call hooks only at the top level of a React function component or custom hook. Do not call them inside loops, conditions, nested functions, or regular JavaScript functions.",
    "keywords": [
      "top level",
      "function component",
      "custom hook",
      "loops",
      "conditions"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "top level": [
        "top-level"
      ]
    }
  },
  {
    "id": "react-010",
    "category": "react",
    "question": "What is useEffect and how do you avoid unnecessary calls?",
    "answer": "useEffect runs side effects after render. The dependency array controls when it runs. Avoid unnecessary calls by listing correct dependencies, moving derived values out of effects, and cleaning up subscriptions or timers.",
    "keywords": [
      "side effects",
      "after render",
      "dependency array",
      "cleanup"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "dependency array": [
        "dependencies"
      ],
      "cleanup": [
        "clean up"
      ]
    }
  },
  {
    "id": "react-011",
    "category": "react",
    "question": "When does a React component update?",
    "answer": "A component updates when its state changes, its props change, its parent re-renders, or a consumed context value changes. React may skip some work with memoization.",
    "keywords": [
      "state changes",
      "props change",
      "parent re-renders",
      "context",
      "memoization"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "parent re-renders": [
        "parent rerenders"
      ]
    }
  },
  {
    "id": "react-012",
    "category": "react",
    "question": "What is one-way data flow in React?",
    "answer": "Data normally flows from parent to child through props. Children cannot directly change parent state; they call functions passed from the parent to request changes.",
    "keywords": [
      "parent to child",
      "props",
      "callbacks",
      "state"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "callbacks": [
        "functions"
      ]
    }
  },
  {
    "id": "react-013",
    "category": "react",
    "question": "What are controlled components?",
    "answer": "A controlled form element has its value controlled by React state. The input displays the state value, and onChange updates the state.",
    "keywords": [
      "form element",
      "value",
      "React state",
      "onChange"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "form element": [
        "input"
      ],
      "React state": [
        "state"
      ]
    }
  },
  {
    "id": "react-014",
    "category": "react",
    "question": "When should you use Context API?",
    "answer": "Use Context for data needed by many components at different levels, such as theme, auth user, or locale. Avoid using it for every piece of state because context updates can re-render many consumers.",
    "keywords": [
      "many components",
      "theme",
      "auth",
      "prop drilling",
      "re-render"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "re-render": [
        "rerender"
      ]
    }
  },
  {
    "id": "react-015",
    "category": "react",
    "question": "What is React.StrictMode?",
    "answer": "StrictMode is a development-only tool that helps find unsafe patterns. It can intentionally run some functions or effects twice in development to expose side-effect bugs.",
    "keywords": [
      "development",
      "unsafe patterns",
      "effects twice",
      "side effects"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "development": [
        "dev"
      ],
      "effects twice": [
        "double render"
      ]
    }
  },
  {
    "id": "react-016",
    "category": "react",
    "question": "What is TanStack Query used for?",
    "answer": "TanStack Query manages server state: fetching, caching, loading states, errors, retries, background refetching, and cache invalidation. It reduces manual API state handling in React apps.",
    "keywords": [
      "server state",
      "fetching",
      "caching",
      "loading",
      "errors",
      "invalidation"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "invalidation": [
        "cache invalidation"
      ]
    }
  },
  {
    "id": "react-017",
    "category": "react",
    "question": "What is the difference between useQuery and useMutation?",
    "answer": "useQuery is for reading server data and caching it. useMutation is for creating, updating, or deleting data and then usually invalidating related queries.",
    "keywords": [
      "useQuery",
      "read",
      "cache",
      "useMutation",
      "create",
      "update",
      "delete"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "read": [
        "fetch"
      ],
      "cache": [
        "caching"
      ]
    }
  },
  {
    "id": "react-018",
    "category": "react",
    "question": "What is memoization in React with useMemo?",
    "answer": "useMemo caches the result of an expensive calculation between renders until its dependencies change. It should be used when recalculation is actually costly or when referential stability matters.",
    "keywords": [
      "useMemo",
      "caches result",
      "expensive calculation",
      "dependencies"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "caches result": [
        "memoization"
      ],
      "dependencies": [
        "dependency array"
      ]
    }
  },
  {
    "id": "react-019",
    "category": "react",
    "question": "What are React fragments?",
    "answer": "Fragments let a component return multiple elements without adding an extra DOM node. You can use <React.Fragment> or the short syntax <>...</>.",
    "keywords": [
      "multiple elements",
      "no extra DOM node",
      "React.Fragment"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "no extra DOM node": [
        "without wrapper"
      ]
    }
  },
  {
    "id": "react-020",
    "category": "react",
    "question": "How does async work in React and how do you handle side effects?",
    "answer": "React rendering should stay pure. Async work like fetching belongs in effects, event handlers, or libraries like TanStack Query. You handle cleanup with effect cleanup functions and avoid setting state after unmount.",
    "keywords": [
      "pure rendering",
      "async work",
      "effects",
      "event handlers",
      "cleanup"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "effects": [
        "useEffect"
      ]
    }
  },
  {
    "id": "react-021",
    "category": "react",
    "question": "How do rendering, Virtual DOM, diffing, and reconciliation work in React?",
    "answer": "React renders components to React elements, compares the new tree with the previous one during diffing, and reconciles the changes by updating only the needed parts of the real DOM.",
    "keywords": [
      "React elements",
      "new tree",
      "previous tree",
      "diffing",
      "reconciliation",
      "DOM"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "new tree": [
        "virtual dom"
      ],
      "previous tree": [
        "old tree"
      ]
    }
  },
  {
    "id": "react-022",
    "category": "react",
    "question": "How can data be passed between React components?",
    "answer": "Common ways are props from parent to child, callbacks from child to parent, lifting state up, Context API for wider sharing, state managers, URL params, and server/cache state tools.",
    "keywords": [
      "props",
      "callbacks",
      "lifting state",
      "context",
      "state manager"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "state manager": [
        "state management"
      ]
    }
  },
  {
    "id": "react-023",
    "category": "react",
    "question": "What problem did hooks solve in React?",
    "answer": "Hooks made it possible to use stateful and reusable logic in function components without class components, render props, or HOCs. Custom hooks let you extract and share logic between components.",
    "keywords": [
      "function components",
      "reusable logic",
      "custom hooks",
      "class components"
    ],
    "source": "Devs Hive",
    "aliases": {
      "reusable logic": [
        "shared logic"
      ],
      "class components": [
        "classes"
      ]
    }
  },
  {
    "id": "react-024",
    "category": "react",
    "question": "What is the difference between useCallback and useMemo?",
    "answer": "useMemo memoizes a calculated value. useCallback memoizes a function reference. useCallback(fn, deps) is basically useMemo(() => fn, deps).",
    "keywords": [
      "useMemo",
      "value",
      "useCallback",
      "function reference",
      "dependencies"
    ],
    "source": "ITLEAD",
    "aliases": {
      "function reference": [
        "function"
      ]
    }
  },
  {
    "id": "node-001",
    "category": "node",
    "question": "What is Node.js and what is it used for?",
    "answer": "Node.js is a JavaScript runtime built on the V8 engine. It lets JavaScript run outside the browser and is often used for servers, APIs, scripts, CLIs, and real-time apps.",
    "keywords": [
      "javascript runtime",
      "v8",
      "outside browser",
      "server",
      "api"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "server": [
        "backend"
      ]
    }
  },
  {
    "id": "node-002",
    "category": "node",
    "question": "What is middleware in Express?",
    "answer": "Middleware is a function that runs during the request-response cycle. It receives req, res, and next, can read or modify the request/response, end the response, or call next to continue.",
    "keywords": [
      "middleware",
      "request",
      "response",
      "next",
      "req",
      "res"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "request": [
        "req"
      ],
      "response": [
        "res"
      ]
    }
  },
  {
    "id": "node-003",
    "category": "node",
    "question": "What is Mongoose?",
    "answer": "Mongoose is an ODM for MongoDB. It lets you define schemas and models, validate data, create queries, and work with MongoDB documents in a more structured way.",
    "keywords": [
      "ODM",
      "MongoDB",
      "schema",
      "model",
      "validation"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "ODM": [
        "object document mapper"
      ]
    }
  },
  {
    "id": "node-004",
    "category": "node",
    "question": "What is CORS and how do you configure it in Express?",
    "answer": "CORS is a browser security mechanism that controls whether another origin can access your API. In Express, you usually configure it with the cors middleware, setting allowed origins, methods, and credentials.",
    "keywords": [
      "cors",
      "browser security",
      "origin",
      "cors middleware",
      "credentials"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "origin": [
        "cross origin"
      ],
      "cors middleware": [
        "cors package"
      ]
    }
  },
  {
    "id": "node-005",
    "category": "node",
    "question": "How do route params and query params work in Express?",
    "answer": "Route params are parts of the path, like /users/:id, and are read from req.params. Query params come after ? in the URL, like ?page=2, and are read from req.query.",
    "keywords": [
      "route params",
      "req.params",
      "query params",
      "req.query"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "route params": [
        "path params"
      ]
    }
  },
  {
    "id": "node-006",
    "category": "node",
    "question": "How do you implement pagination in MongoDB queries?",
    "answer": "A common approach is limit and skip: calculate skip from page and limit, then query with .skip(skip).limit(limit). For large collections, cursor-based pagination can be better.",
    "keywords": [
      "limit",
      "skip",
      "page",
      "cursor-based pagination"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "cursor-based pagination": [
        "cursor pagination"
      ]
    }
  },
  {
    "id": "node-007",
    "category": "node",
    "question": "How do you read and write cookies in Express?",
    "answer": "Use cookie-parser to read cookies from req.cookies. To set a cookie, use res.cookie(name, value, options). Important options include httpOnly, secure, sameSite, and maxAge.",
    "keywords": [
      "cookie-parser",
      "req.cookies",
      "res.cookie",
      "httpOnly",
      "sameSite"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "cookie-parser": [
        "cookies parser"
      ]
    }
  },
  {
    "id": "node-008",
    "category": "node",
    "question": "How do you use environment variables in Node.js?",
    "answer": "Environment variables store configuration outside the code, such as ports, database URLs, and secrets. In Node, read them from process.env. In local development, dotenv can load them from a .env file.",
    "keywords": [
      "environment variables",
      "process.env",
      "dotenv",
      "secrets",
      "configuration"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "environment variables": [
        "env variables"
      ],
      "configuration": [
        "config"
      ]
    }
  },
  {
    "id": "node-009",
    "category": "node",
    "question": "What is REST API and how can you implement it in Express?",
    "answer": "A REST API exposes resources through URLs and uses HTTP methods like GET, POST, PUT, PATCH, and DELETE. In Express, you define routes and controllers for each resource action.",
    "keywords": [
      "resources",
      "HTTP methods",
      "routes",
      "controllers",
      "Express"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "HTTP methods": [
        "GET",
        "POST",
        "DELETE"
      ]
    }
  },
  {
    "id": "node-010",
    "category": "node",
    "question": "How do you create a REST route to get a list of resources?",
    "answer": "Create a GET route for the collection, for example router.get(\"/users\", controller). The controller queries the database and returns JSON, often with pagination and filters.",
    "keywords": [
      "GET",
      "collection",
      "controller",
      "database",
      "JSON"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "collection": [
        "list"
      ]
    }
  },
  {
    "id": "node-011",
    "category": "node",
    "question": "How does routing work in Express and how do you split routers into modules?",
    "answer": "Express matches requests to routes by method and path. You can create router modules with express.Router(), define related routes there, export the router, and mount it in app.js with app.use.",
    "keywords": [
      "method",
      "path",
      "express.Router",
      "export",
      "app.use"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "express.Router": [
        "router"
      ]
    }
  },
  {
    "id": "node-012",
    "category": "node",
    "question": "How do you handle uploaded files in Express?",
    "answer": "You usually use middleware like multer to parse multipart/form-data. It can store files in memory or on disk, then your controller validates and saves file info.",
    "keywords": [
      "multer",
      "multipart/form-data",
      "middleware",
      "validate",
      "store"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "multipart/form-data": [
        "multipart"
      ]
    }
  },
  {
    "id": "node-013",
    "category": "node",
    "question": "How do you implement centralized error handling in Express?",
    "answer": "Create an error-handling middleware with four parameters: err, req, res, next. Put it after routes. Controllers pass errors with next(error), and the middleware sends a consistent response.",
    "keywords": [
      "error middleware",
      "err",
      "next",
      "after routes",
      "consistent response"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "error middleware": [
        "error-handling middleware"
      ]
    }
  },
  {
    "id": "node-014",
    "category": "node",
    "question": "How do you create a Mongoose schema and model?",
    "answer": "Define a schema with new mongoose.Schema({ fields }), then create a model with mongoose.model(\"Name\", schema). Use the model to create, read, update, and delete documents.",
    "keywords": [
      "mongoose.Schema",
      "schema",
      "mongoose.model",
      "model",
      "documents"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "documents": [
        "mongodb documents"
      ]
    }
  },
  {
    "id": "node-015",
    "category": "node",
    "question": "How does validation work in Mongoose and where is it better to validate?",
    "answer": "Mongoose validates data based on schema rules before saving. You can use required, minlength, enum, custom validators, and more. Still, validate request input before the database too, because API validation gives clearer errors and protects business rules.",
    "keywords": [
      "schema rules",
      "before saving",
      "required",
      "custom validators",
      "request input"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "request input": [
        "api validation"
      ]
    }
  },
  {
    "id": "node-016",
    "category": "node",
    "question": "How do you implement authentication in a REST API?",
    "answer": "A common flow is register or login, validate credentials, hash passwords, issue a session or JWT, store it in an httpOnly cookie or authorization header, and protect routes with auth middleware.",
    "keywords": [
      "credentials",
      "hash passwords",
      "JWT",
      "httpOnly cookie",
      "auth middleware"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "JWT": [
        "token"
      ],
      "auth middleware": [
        "middleware"
      ]
    }
  },
  {
    "id": "node-017",
    "category": "node",
    "question": "How do you protect Express routes for authenticated users only?",
    "answer": "Add middleware before protected routes. It checks the session or token, verifies the user, attaches user data to req, and calls next only if authentication is valid.",
    "keywords": [
      "middleware",
      "session",
      "token",
      "verify",
      "req.user"
    ],
    "source": "Uploaded spreadsheet",
    "aliases": {
      "verify": [
        "validate"
      ]
    }
  },
  {
    "id": "node-018",
    "category": "node",
    "question": "What is the difference between a process and a thread in Node.js?",
    "answer": "A process has its own memory and isolated lifecycle. Threads run inside a process and can share memory. Node can use processes with cluster/child_process and threads with worker_threads for CPU-heavy work.",
    "keywords": [
      "process",
      "own memory",
      "thread",
      "share memory",
      "worker_threads"
    ],
    "source": "Devs Hive",
    "aliases": {
      "own memory": [
        "isolated memory"
      ],
      "share memory": [
        "shared memory"
      ]
    }
  },
  {
    "id": "node-019",
    "category": "node",
    "question": "What are public and private keys used for?",
    "answer": "A public key can be shared and is used to verify signatures or encrypt data. A private key must stay secret and is used to sign data or decrypt data. They are common in HTTPS, SSH, and JWT signing.",
    "keywords": [
      "public key",
      "private key",
      "verify",
      "sign",
      "encrypt",
      "decrypt"
    ],
    "source": "Devs Hive"
  },
  {
    "id": "ts-001",
    "category": "typescript",
    "question": "What is TypeScript and why use it?",
    "answer": "TypeScript is JavaScript with static type checking. It helps catch mistakes before runtime, improves autocomplete, documents data shapes, and makes refactoring safer. It compiles to JavaScript.",
    "keywords": [
      "static type checking",
      "javascript",
      "before runtime",
      "autocomplete",
      "compiles"
    ],
    "source": "General/ITLEAD",
    "aliases": {
      "before runtime": [
        "compile time"
      ]
    }
  },
  {
    "id": "ts-002",
    "category": "typescript",
    "question": "What is the difference between type and interface in TypeScript?",
    "answer": "Both can describe object shapes. Interfaces can be merged by declaration merging and are often good for object/class contracts. Type aliases are better for unions, intersections, utility types, primitives, tuples, and function signatures.",
    "keywords": [
      "interface",
      "type alias",
      "declaration merging",
      "union",
      "object shape"
    ],
    "source": "Devs Hive",
    "aliases": {
      "type alias": [
        "type"
      ],
      "declaration merging": [
        "merge"
      ]
    }
  },
  {
    "id": "ts-003",
    "category": "typescript",
    "question": "What are union types?",
    "answer": "A union type means a value can be one of several types, for example string | number. You usually narrow the value before using type-specific methods.",
    "keywords": [
      "union",
      "one of several types",
      "narrow"
    ],
    "source": "General/ITLEAD",
    "aliases": {
      "narrow": [
        "type narrowing"
      ]
    }
  },
  {
    "id": "ts-004",
    "category": "typescript",
    "question": "What are intersection types?",
    "answer": "An intersection combines multiple types into one. A value of A & B must satisfy both A and B, so it has members from both types.",
    "keywords": [
      "intersection",
      "combines",
      "both types",
      "members"
    ],
    "source": "ITLEAD",
    "aliases": {
      "both types": [
        "A and B"
      ]
    }
  },
  {
    "id": "ts-005",
    "category": "typescript",
    "question": "What are literal types?",
    "answer": "Literal types restrict a value to exact values, like \"loading\" | \"success\" | \"error\" instead of any string. They help model allowed states precisely.",
    "keywords": [
      "exact values",
      "string literal",
      "allowed states",
      "restrict"
    ],
    "source": "ITLEAD",
    "aliases": {
      "exact values": [
        "literal value"
      ]
    }
  },
  {
    "id": "ts-006",
    "category": "typescript",
    "question": "What is type narrowing?",
    "answer": "Type narrowing is when TypeScript reduces a broad type to a more specific type using checks like typeof, instanceof, in, equality checks, or custom type guards.",
    "keywords": [
      "narrowing",
      "typeof",
      "instanceof",
      "in operator",
      "type guards"
    ],
    "source": "General",
    "aliases": {
      "narrowing": [
        "type narrowing"
      ]
    }
  },
  {
    "id": "ts-007",
    "category": "typescript",
    "question": "What are generics in TypeScript?",
    "answer": "Generics let you write reusable typed code by passing types as parameters. For example, function identity<T>(value: T): T keeps the input and output type connected.",
    "keywords": [
      "generics",
      "type parameters",
      "reusable",
      "T"
    ],
    "source": "General",
    "aliases": {
      "type parameters": [
        "type parameter"
      ]
    }
  },
  {
    "id": "ts-008",
    "category": "typescript",
    "question": "What is the difference between any and unknown?",
    "answer": "any disables type checking for that value. unknown is safer because you must narrow or check it before using it. Prefer unknown when the type is truly not known yet.",
    "keywords": [
      "any",
      "disables type checking",
      "unknown",
      "narrow"
    ],
    "source": "General",
    "aliases": {
      "narrow": [
        "type check"
      ]
    }
  },
  {
    "id": "ts-009",
    "category": "typescript",
    "question": "What does readonly mean in TypeScript?",
    "answer": "readonly prevents reassignment of a property through that type. It helps express immutable intent, but it does not deeply freeze runtime objects by itself.",
    "keywords": [
      "readonly",
      "prevents reassignment",
      "property",
      "immutable intent"
    ],
    "source": "ITLEAD",
    "aliases": {
      "prevents reassignment": [
        "cannot assign"
      ]
    }
  },
  {
    "id": "ts-010",
    "category": "typescript",
    "question": "What are access modifiers public, private, protected?",
    "answer": "public members are accessible everywhere. private members are accessible only inside the class. protected members are accessible inside the class and subclasses.",
    "keywords": [
      "public",
      "private",
      "protected",
      "class",
      "subclass"
    ],
    "source": "ITLEAD"
  },
  {
    "id": "ts-011",
    "category": "typescript",
    "question": "What does as const do?",
    "answer": "as const makes TypeScript infer the most specific literal types and marks object properties or array elements as readonly. It is useful for fixed config values and discriminated unions.",
    "keywords": [
      "as const",
      "literal types",
      "readonly",
      "specific"
    ],
    "source": "ITLEAD",
    "aliases": {
      "specific": [
        "narrow"
      ]
    }
  },
  {
    "id": "ts-012",
    "category": "typescript",
    "question": "What are utility types?",
    "answer": "Utility types are built-in helpers that transform types, such as Partial, Required, Pick, Omit, Record, ReturnType, Parameters, and Readonly.",
    "keywords": [
      "Partial",
      "Required",
      "Pick",
      "Omit",
      "Record",
      "ReturnType"
    ],
    "source": "ITLEAD"
  },
  {
    "id": "ts-013",
    "category": "typescript",
    "question": "What is a discriminated union?",
    "answer": "A discriminated union is a union of object types that share a common literal property, often called kind or type. Checking that property narrows the whole object safely.",
    "keywords": [
      "union",
      "literal property",
      "kind",
      "narrow"
    ],
    "source": "General",
    "aliases": {
      "literal property": [
        "discriminator"
      ],
      "kind": [
        "type field"
      ]
    }
  },
  {
    "id": "ts-014",
    "category": "typescript",
    "question": "What is optional chaining?",
    "answer": "Optional chaining uses ?. to safely access nested properties or call functions when something may be null or undefined. If the left side is nullish, it returns undefined instead of throwing.",
    "keywords": [
      "optional chaining",
      "null",
      "undefined",
      "returns undefined"
    ],
    "source": "General",
    "aliases": {
      "optional chaining": [
        "?."
      ]
    }
  },
  {
    "id": "next-001",
    "category": "next",
    "question": "What is Next.js?",
    "answer": "Next.js is a React framework for building full-stack web apps. It provides routing, rendering options, server components, API routes or route handlers, image optimization, font optimization, and deployment conventions.",
    "keywords": [
      "React framework",
      "routing",
      "rendering",
      "server components",
      "route handlers"
    ],
    "source": "General/ITLEAD",
    "aliases": {
      "React framework": [
        "framework"
      ]
    }
  },
  {
    "id": "next-002",
    "category": "next",
    "question": "What is the App Router in Next.js?",
    "answer": "The App Router is the newer routing system based on the app directory. It uses nested folders, layouts, pages, loading UI, error UI, route handlers, and React Server Components.",
    "keywords": [
      "app directory",
      "layouts",
      "pages",
      "loading",
      "error",
      "server components"
    ],
    "source": "General",
    "aliases": {
      "app directory": [
        "app router"
      ]
    }
  },
  {
    "id": "next-003",
    "category": "next",
    "question": "What is the difference between a page and a layout in Next.js App Router?",
    "answer": "A page defines the UI for a specific route segment. A layout wraps pages and nested routes, preserves shared UI, and can keep state between navigation.",
    "keywords": [
      "page",
      "route",
      "layout",
      "wraps",
      "shared UI"
    ],
    "source": "General",
    "aliases": {
      "shared UI": [
        "shared layout"
      ]
    }
  },
  {
    "id": "next-004",
    "category": "next",
    "question": "What are Server Components?",
    "answer": "Server Components render on the server and can access server-side resources directly, like databases or secrets. They send serialized UI to the client and do not include client-side interactivity by default.",
    "keywords": [
      "server",
      "database",
      "secrets",
      "serialized UI",
      "no client interactivity"
    ],
    "source": "ITLEAD",
    "aliases": {
      "no client interactivity": [
        "not interactive"
      ]
    }
  },
  {
    "id": "next-005",
    "category": "next",
    "question": "What does use client mean?",
    "answer": "use client marks a file as a Client Component entry. It is needed for components that use state, effects, browser APIs, event handlers, or client-only libraries.",
    "keywords": [
      "use client",
      "client component",
      "state",
      "effects",
      "browser APIs",
      "event handlers"
    ],
    "source": "General",
    "aliases": {
      "browser APIs": [
        "window",
        "localStorage"
      ]
    }
  },
  {
    "id": "next-006",
    "category": "next",
    "question": "What is the difference between SSR, SSG, and CSR?",
    "answer": "SSR renders HTML on the server for each request. SSG prebuilds HTML at build time. CSR renders mostly in the browser after JavaScript loads.",
    "keywords": [
      "SSR",
      "server",
      "request",
      "SSG",
      "build time",
      "CSR",
      "browser"
    ],
    "source": "General/ITLEAD",
    "aliases": {
      "SSR": [
        "server side rendering"
      ],
      "SSG": [
        "static generation"
      ],
      "CSR": [
        "client side rendering"
      ]
    }
  },
  {
    "id": "next-007",
    "category": "next",
    "question": "How do dynamic routes work in Next.js?",
    "answer": "Dynamic route segments use square brackets, like app/products/[id]/page.tsx. The dynamic value is available through params in the page, layout, or route handler.",
    "keywords": [
      "square brackets",
      "dynamic segment",
      "params",
      "route"
    ],
    "source": "General",
    "aliases": {
      "square brackets": [
        "[id]"
      ]
    }
  },
  {
    "id": "next-008",
    "category": "next",
    "question": "How do environment variables work in Next.js?",
    "answer": "Next.js reads environment variables from process.env on the server. Variables exposed to the browser must be prefixed with NEXT_PUBLIC_. Secrets should never use the public prefix.",
    "keywords": [
      "process.env",
      "server",
      "NEXT_PUBLIC",
      "browser",
      "secrets"
    ],
    "source": "ITLEAD",
    "aliases": {
      "NEXT_PUBLIC": [
        "public prefix"
      ]
    }
  },
  {
    "id": "next-009",
    "category": "next",
    "question": "What are route handlers in Next.js?",
    "answer": "Route handlers define server endpoints inside the app directory using route.ts. They export functions like GET, POST, PATCH, and DELETE and can return Response or NextResponse.",
    "keywords": [
      "route.ts",
      "GET",
      "POST",
      "Response",
      "NextResponse"
    ],
    "source": "General",
    "aliases": {
      "route.ts": [
        "route handler"
      ]
    }
  },
  {
    "id": "next-010",
    "category": "next",
    "question": "What is next/image used for?",
    "answer": "next/image provides optimized image rendering. It can handle responsive sizes, lazy loading, resizing, and modern formats depending on configuration.",
    "keywords": [
      "next/image",
      "optimized images",
      "responsive",
      "lazy loading",
      "resizing"
    ],
    "source": "General/ITLEAD",
    "aliases": {
      "optimized images": [
        "image optimization"
      ]
    }
  },
  {
    "id": "next-011",
    "category": "next",
    "question": "What is next/font used for?",
    "answer": "next/font optimizes local or Google fonts by self-hosting, reducing layout shift, and avoiding extra external font requests when configured.",
    "keywords": [
      "next/font",
      "font optimization",
      "self-hosting",
      "layout shift"
    ],
    "source": "ITLEAD",
    "aliases": {
      "self-hosting": [
        "self host"
      ]
    }
  },
  {
    "id": "next-012",
    "category": "next",
    "question": "What is hydration in Next.js and React?",
    "answer": "Hydration is when client-side React attaches event handlers and state behavior to HTML that was rendered on the server. A hydration mismatch happens when server and client output differ.",
    "keywords": [
      "hydration",
      "client-side React",
      "event handlers",
      "server rendered",
      "mismatch"
    ],
    "source": "ITLEAD",
    "aliases": {
      "server rendered": [
        "server html"
      ]
    }
  }
];

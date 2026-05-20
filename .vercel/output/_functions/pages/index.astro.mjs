import { c as createComponent, m as maybeRenderHead, h as renderScript, a as renderTemplate, r as renderComponent, b as createAstro, e as addAttribute, s as spreadAttributes, f as renderSlot, d as renderHead } from '../chunks/astro/server_B5SraF0R.mjs';
/* empty css                                 */
import { c as content, b as $$Social, $ as $$MainHead, a as $$Footer } from '../chunks/MainHead_C4I1nMQR.mjs';
export { renderers } from '../renderers.mjs';

const $$AboutTimeZone = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<span class="tooltip" id="utm">Porto, Portugal.</span> ${renderScript($$result, "/Users/danilowoznica/project/danilowoz.com/src/components/AboutTimeZone.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/danilowoznica/project/danilowoz.com/src/components/AboutTimeZone.astro", void 0);

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="section grid" id="about-me" data-astro-cid-v2cbyr3p> <div class="about_img" data-astro-cid-v2cbyr3p> <img src="/images/cover.jpg" data-astro-cid-v2cbyr3p> </div> <article data-astro-cid-v2cbyr3p> <h2 class="text-large" data-astro-cid-v2cbyr3p>About me</h2> <div class="text-content color-1" data-astro-cid-v2cbyr3p> <p class="text-base" data-astro-cid-v2cbyr3p> <span class="text-medium color-0" data-astro-cid-v2cbyr3p>
A Brazilian living in ${renderComponent($$result, "AboutTimeZone", $$AboutTimeZone, { "data-astro-cid-v2cbyr3p": true })} </span>
I'm a front-end developer with a design background and more than ten years
        of experience creating digital products. Over the past few years, I've been
        enjoying building React web applications and empowering developers through
        my contributions to open-source projects.
</p> <ul data-astro-cid-v2cbyr3p> <li data-astro-cid-v2cbyr3p> <p data-astro-cid-v2cbyr3p> <span class="text-medium color-0" data-astro-cid-v2cbyr3p>I see code as a tool for design.</span>
What I build is meant to solve real users&#39; problems, and I
            strive for the best solution and the most polished experience.
            I&#39;m a coworker on the design team.
</p> </li> <li data-astro-cid-v2cbyr3p> <p data-astro-cid-v2cbyr3p> <span class="text-medium color-0" data-astro-cid-v2cbyr3p>I&#39;m obsessed with the problem.</span> I like engaging in activities that require me to dive deep into the
            uncertainty, from small details to big problems.
</p> </li> <li data-astro-cid-v2cbyr3p> <p data-astro-cid-v2cbyr3p> <span class="text-medium color-0" data-astro-cid-v2cbyr3p>I prioritize honest and pragmatic communication.</span> No ego, no assumptions. My words will always be well-intentioned, even
            if direct.
</p> </li> <li data-astro-cid-v2cbyr3p> <p data-astro-cid-v2cbyr3p> <span class="text-medium color-0" data-astro-cid-v2cbyr3p>I&#39;m a self-starter.</span> I can
            find my way through the uncertainty, set priorities, share learning,
            stay focused and make plans.
</p> </li> <li data-astro-cid-v2cbyr3p> <p data-astro-cid-v2cbyr3p> <span class="text-medium color-0" data-astro-cid-v2cbyr3p>I have an outstanding curiosity.</span> I'm always looking to learn more and understand the exotic, the undiscovered,
            or the unmapped.
</p> </li> <li data-astro-cid-v2cbyr3p> <p data-astro-cid-v2cbyr3p> <span class="text-medium color-0" data-astro-cid-v2cbyr3p>I&#39;m a fast-paced problem-solver.</span> In challenging moments, I can wear as many hats as needed. There are
            moments when the job needs to get done.
</p> </li> <li data-astro-cid-v2cbyr3p> <p data-astro-cid-v2cbyr3p> <span class="text-medium color-0" data-astro-cid-v2cbyr3p>I want you to be involved in my creation process</span>. While I can move quickly alone, we can achieve much more as a
            team.
</p> </li> </ul> </div> </article> </section> `;
}, "/Users/danilowoznica/project/danilowoz.com/src/components/About.astro", void 0);

const $$Astro$3 = createAstro("https://danilowoz");
const $$Cards = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Cards;
  const { data } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul class="cards" data-astro-cid-i5mwzbw6> ${data?.map((item) => {
    const external = /https/.test(item.frontmatter.link);
    const github = /github/.test(item.frontmatter.link);
    return renderTemplate`<li class="card-item" data-astro-cid-i5mwzbw6> <a${addAttribute(item.frontmatter.link ?? item.url, "href")}${spreadAttributes(external ? { target: `_blank`, rel: `noreferrer` } : {}, void 0, { "class": "astro-i5mwzbw6" })} data-astro-cid-i5mwzbw6> <article data-astro-cid-i5mwzbw6> ${item.frontmatter.image && renderTemplate`<div class="card-figure" data-astro-cid-i5mwzbw6> <div class="card-figure_header" data-astro-cid-i5mwzbw6> <span class="button" data-astro-cid-i5mwzbw6> <span data-astro-cid-i5mwzbw6></span> <span data-astro-cid-i5mwzbw6></span> <span data-astro-cid-i5mwzbw6></span> </span> </div> <div class="card-figure_holder" data-astro-cid-i5mwzbw6> <img${addAttribute(item.frontmatter.image, "src")} data-astro-cid-i5mwzbw6> </div> </div>`} <div class="card-content" data-astro-cid-i5mwzbw6> <h1${addAttribute(`text-medium`, "class")} data-astro-cid-i5mwzbw6> ${item.frontmatter.title}${" "} ${item.frontmatter.tag && renderTemplate`<span data-astro-cid-i5mwzbw6>${item.frontmatter.tag}</span>`} </h1> <p class="color-1" data-astro-cid-i5mwzbw6>${item.frontmatter.tagline}</p> <p class="text-highlight text-small" data-astro-cid-i5mwzbw6> <span data-astro-cid-i5mwzbw6>${github || external ? "Access" : "Read more"}</span> <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-i5mwzbw6> <path d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" data-astro-cid-i5mwzbw6></path> </svg> </p> </div> </article> </a> </li>`;
  })} <div class="card-item__hover" data-astro-cid-i5mwzbw6></div> </ul> `;
}, "/Users/danilowoznica/project/danilowoz.com/src/components/Cards.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="hero" data-astro-cid-bbe6dxrz> <div class="grid" data-astro-cid-bbe6dxrz> <h1 class="text-large" data-astro-cid-bbe6dxrz> <span class="icon" data-astro-cid-bbe6dxrz><span data-astro-cid-bbe6dxrz></span></span> ${content.hero.title} <span class="color-2" data-astro-cid-bbe6dxrz>${content.hero.headline}</span> </h1> <h2 class="text-base" data-astro-cid-bbe6dxrz><span data-astro-cid-bbe6dxrz>Danilo Woznica</span></h2> <div class="hero_social color-1" data-astro-cid-bbe6dxrz> ${renderComponent($$result, "Social", $$Social, { "data-astro-cid-bbe6dxrz": true })} </div> </div> </header> `;
}, "/Users/danilowoznica/project/danilowoz.com/src/components/Hero.astro", void 0);

const $$Astro$2 = createAstro("https://danilowoz");
const $$List = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$List;
  const { data } = Astro2.props;
  const formatDate = (string) => {
    const date = new Date(string);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric"
    });
  };
  return renderTemplate`${maybeRenderHead()}<ul${addAttribute(`list list__horizontal`, "class")} data-astro-cid-gt4yj4lj> ${data?.map((item) => {
    return renderTemplate`<li class="list-item" data-astro-cid-gt4yj4lj> <a${addAttribute(item.frontmatter.link ?? item.url, "href")} data-astro-cid-gt4yj4lj> <article class="list-article" data-astro-cid-gt4yj4lj> <h1 class="text-medium" data-astro-cid-gt4yj4lj>${item.frontmatter.title}</h1> <p class="color-1" data-astro-cid-gt4yj4lj>${item.frontmatter.tagline}</p> <p class="color-2 text-small" data-astro-cid-gt4yj4lj> ${formatDate(item.frontmatter.date)} </p> </article> </a> </li>`;
  })} </ul> `;
}, "/Users/danilowoznica/project/danilowoz.com/src/components/List.astro", void 0);

const $$Nav = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="nav" data-astro-cid-dmqpwcec> <h2 class="text-large" data-astro-cid-dmqpwcec> <div class="track" data-astro-cid-dmqpwcec> <div class="runner runner-icon" data-astro-cid-dmqpwcec> <div class="item" data-astro-cid-dmqpwcec><span class="icon writing" data-astro-cid-dmqpwcec></span></div> <div class="item" data-astro-cid-dmqpwcec><span class="icon garden" data-astro-cid-dmqpwcec></span></div> <div class="item" data-astro-cid-dmqpwcec><span class="icon projects" data-astro-cid-dmqpwcec></span></div> </div> </div> <div class="track" data-astro-cid-dmqpwcec> <div class="runner" data-astro-cid-dmqpwcec> <div class="item" data-astro-cid-dmqpwcec>Writing</div> <div class="item" data-astro-cid-dmqpwcec>UI garden</div> <div class="item" data-astro-cid-dmqpwcec>Projects</div> </div> </div> </h2> </div> `;
}, "/Users/danilowoznica/project/danilowoz.com/src/components/Nav.astro", void 0);

const $$Astro$1 = createAstro("https://danilowoz");
const $$Section = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Section;
  const { title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(`section grid ${title.toLowerCase()}`, "class")}${addAttribute(title.toLowerCase(), "id")} data-astro-cid-sh445jdo> <div class="section-content" data-astro-cid-sh445jdo> ${renderSlot($$result, $$slots["default"])} </div> </section> `;
}, "/Users/danilowoznica/project/danilowoz.com/src/components/Section.astro", void 0);

const sandboxes = {
  "s46fp8": {
    environment: "static",
    files: {
      "/index.html": '<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <meta http-equiv="X-UA-Compatible" content="ie=edge" />\n    <title>HTML + CSS</title>\n    <link rel="stylesheet" href="styles.css" />\n  </head>\n  <body>\n    <div class="wrapper">\n      <div class="rainbow-button" href="/blog/series-a">\n        <span>\n          Announcing our Series A\n          <svg\n            fill="none"\n            height="16"\n            viewBox="0 0 24 24"\n            width="16"\n            xmlns="http://www.w3.org/2000/svg"\n          >\n            <path\n              d="M10.75 8.75L14.25 12L10.75 15.25"\n              stroke="currentColor"\n              stroke-linecap="round"\n              stroke-linejoin="round"\n              stroke-width="1.5"\n            ></path>\n          </svg>\n        </span>\n      </div>\n    </div>\n  </body>\n</html>\n',
      "/package.json": '{\n  "name": "html-css",\n  "version": "1.0.0",\n  "description": "A template for HTML and CSS",\n  "main": "index.html",\n  "scripts": {\n    "start": "serve"\n  },\n  "keywords": [\n    "html",\n    "css"\n  ],\n  "author": "Ives van Hoorne",\n  "license": "MIT",\n  "devDependencies": {\n    "serve": "11.2.0"\n  }\n}\n',
      "/styles.css": '@import "https://s4wj97.csb.app/global.css";\n\nbody {\n  background: black;\n  color: white;\n  display: flex;\n  height: 100vh;\n  font-family: sans-serif;\n  color-scheme: dark;\n  margin: 0;\n}\n\n.wrapper {\n  margin: auto;\n  position: relative;\n  z-index: 10;\n}\n\n@property --angle {\n  syntax: "<angle>";\n  inherits: false;\n  initial-value: 0deg;\n}\n\n@keyframes rotate {\n  to {\n    --angle: 360deg;\n  }\n}\n\n:root {\n  --height: 34px;\n}\n\n.rainbow-button {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n\n  border-radius: 9999px;\n\n  position: relative;\n  height: var(--height);\n  font-size: 0.9rem;\n\n  animation: rotate 20s linear infinite;\n  background: linear-gradient(\n    var(--angle),\n    #02fcef70 0%,\n    #ffb52b70 50%,\n    #a02bfe70 100%\n  );\n\n  &:after {\n    content: "";\n    position: absolute;\n    inset: 0;\n\n    display: block;\n    z-index: -10;\n    border-radius: 9999px;\n\n    background: linear-gradient(\n      var(--angle),\n      #02fcef70 0%,\n      #ffb52b70 50%,\n      #a02bfe70 100%\n    );\n\n    transform: scale(0.95, 0.6);\n    filter: blur(20px);\n    transition: all 0.4s ease-out;\n    opacity: 1;\n\n    animation: rotate 20s linear infinite;\n  }\n\n  & span {\n    display: inline-flex;\n    align-items: center;\n    gap: 0.25rem;\n    white-space: nowrap;\n    padding: 0 1rem;\n    margin: 1px;\n    border-radius: 9999px;\n    width: calc(100% - 2px);\n    height: calc(var(--height) - 2px);\n    background-color: #0b0e14;\n    transition: all 0.2s ease-out;\n  }\n\n  &:hover {\n    cursor: pointer;\n\n    & span {\n      background-color: #0b0e14d1;\n      mix-blend-mode: darken;\n    }\n\n    &:after {\n      opacity: 0.8;\n      transform: scale(1.1, 0.9);\n    }\n  }\n}\n'
    }
  },
  "pztylm": {
    environment: "static",
    files: {
      "/index.html": '<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <link href="./styles.css" rel="stylesheet" />\n    <title>My amazing button</title>\n  </head>\n  <body>\n    <button class="btn">\n      <span class="btn__text">Get started now</span>\n      <span class="btn__icon">→</span>\n      <span class="btn__border"></span>\n    </button>\n  </body>\n</html>\n',
      "/package.json": '{\n  "name": "html-css",\n  "version": "1.0.0",\n  "description": "A template for HTML and CSS",\n  "main": "index.html",\n  "scripts": {\n    "start": "serve"\n  },\n  "keywords": [\n    "html",\n    "css"\n  ],\n  "author": "Ives van Hoorne",\n  "license": "MIT",\n  "devDependencies": {\n    "serve": "11.2.0"\n  }\n}\n',
      "/styles.css": '@import "https://s4wj97.csb.app/global.css";\n\n:root {\n  --color-brand: #003dee;\n  --color-brand-rgb: 0, 61, 255;\n  --transition-speed: 150ms;\n  --unit: 4px;\n}\n\n.btn {\n  position: relative;\n  display: flex;\n  align-items: center;\n\n  margin: auto;\n  padding: var(--unit);\n  padding-left: calc(var(--unit) * 5);\n\n  border-radius: 99999px;\n  background: rgba(var(--color-brand-rgb), 0.05);\n\n  backdrop-filter: blur(1px);\n  transition: background var(--transition-speed) ease;\n}\n\n.btn:hover {\n  background: rgba(var(--color-brand-rgb), 0.1);\n}\n\n.btn__text {\n  color: rgba(var(--color-brand-rgb), 0.9);\n}\n\n.btn__icon {\n  display: inline-flex;\n  padding: calc(var(--unit) * 1) calc(var(--unit) * 3);\n  margin-left: calc(var(--unit) * 3);\n  border-radius: 99999px;\n\n  transition: all var(--transition-speed) ease;\n  background: radial-gradient(\n      100px 100px at var(--icon-bg-x) calc(var(--unit) * 5),\n      rgba(var(--color-brand-rgb), 0.2) 0%,\n      rgba(var(--color-brand-rgb), 0) 100%\n    ),\n    rgba(var(--color-brand-rgb), 0.1) 100%;\n\n  animation: -0.64s icon-bg-x 6s linear infinite;\n}\n\n.btn:hover .btn__icon {\n  background: rgba(var(--color-brand-rgb), 0.5) 100%;\n}\n\n.btn__border {\n  position: absolute;\n  inset: 0;\n  border-radius: 99999px;\n  pointer-events: none;\n\n  -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);\n  -webkit-mask-composite: destination-out;\n  mask-composite: exclude;\n  border: 1px solid rgba(var(--color-brand-rgb), 0.2);\n\n  background: conic-gradient(\n      from calc(var(--border-rotation) - 80deg) at var(--border-x) 22px,\n      rgba(var(--color-brand-rgb), 0) 0%,\n      rgba(var(--color-brand-rgb), 0.8) 30%,\n      rgba(177, 177, 177, 0) 45%\n    )\n    border-box;\n\n  animation: -0.64s border-rotation 6s linear infinite,\n    -0.64s border-x 6s linear infinite;\n}\n\n/**\n * Thanks, @shuding_\n * https://twitter.com/shuding_/status/1655999450672660482\n */\n@property --border-x {\n  syntax: "<length>";\n  inherits: false;\n  initial-value: 0px;\n}\n\n@property --icon-bg-x {\n  syntax: "<length>";\n  inherits: false;\n  initial-value: -340px;\n}\n\n@property --border-rotation {\n  syntax: "<angle>";\n  inherits: false;\n  initial-value: 0deg;\n}\n\n:root {\n  --btn-size: 230px;\n  --offset: calc(var(--btn-size) / 10);\n}\n\n@keyframes border-x {\n  0% {\n    --border-x: var(--offset);\n  }\n  32.82275711% {\n    --border-x: var(--btn-size);\n  }\n  50% {\n    --border-x: var(--btn-size);\n  }\n  82.82275711% {\n    --border-x: var(--offset);\n  }\n  100% {\n    --border-x: var(--offset);\n  }\n}\n\n@keyframes border-rotation {\n  0% {\n    --border-rotation: 0deg;\n  }\n  32.82275711% {\n    --border-rotation: 0deg;\n  }\n  50% {\n    --border-rotation: 180deg;\n  }\n  82.82275711% {\n    --border-rotation: 180deg;\n  }\n  100% {\n    --border-rotation: 360deg;\n  }\n}\n\n@keyframes icon-bg-x {\n  0% {\n    --icon-bg-x: calc(var(--btn-size) * -1);\n  }\n  32.82275711% {\n    --icon-bg-x: 0px;\n  }\n  50% {\n    --icon-bg-x: 0px;\n  }\n  82.82275711% {\n    --icon-bg-x: calc(var(--btn-size) * -1);\n  }\n  100% {\n    --icon-bg-x: calc(var(--btn-size) * -1);\n  }\n}\n'
    }
  },
  "hmmmvf": {
    environment: "static",
    files: {
      "/index.html": '<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <meta http-equiv="X-UA-Compatible" content="ie=edge" />\n    <title>HTML + CSS</title>\n    <link rel="stylesheet" href="styles.css" />\n  </head>\n  <body>\n    <div class="center">\n      <h1 title="Awesome!">Awesome!</h1>\n    </div>\n\n    <script src="./main.js"><\/script>\n  </body>\n</html>\n',
      "/main.js": 'const { width, height } = document.body.getBoundingClientRect();\n\nwindow.addEventListener("mousemove", (event) => {\n  const { clientX, clientY } = event;\n\n  document.body.style.setProperty("--x", `${(clientX / width) * 100}%`);\n  document.body.style.setProperty("--y", `${(clientY / height) * 100}%`);\n});\n',
      "/package.json": '{\n  "name": "html-css",\n  "version": "1.0.0",\n  "description": "A template for HTML and CSS",\n  "main": "index.html",\n  "scripts": {\n    "start": "serve"\n  },\n  "keywords": [\n    "html",\n    "css"\n  ],\n  "author": "Ives van Hoorne",\n  "license": "MIT",\n  "devDependencies": {\n    "serve": "11.2.0"\n  }\n}\n',
      "/styles.css": '@import "https://s4wj97.csb.app/global.css";\n\n:root {\n  --color-brand: #003dee;\n  --color-brand-rgb: 0, 61, 255;\n  --transition-speed: 150ms;\n  --unit: 4px;\n}\n\n.center {\n  margin: auto;\n  position: relative;\n}\n\nh1 {\n  position: relative;\n  font-size: 10vw;\n  margin: 0;\n  line-height: 1;\n\n  background-image: radial-gradient(\n    circle at var(--x, 0) var(--y, 0),\n    rgba(var(--color-brand-rgb), 0.4),\n    rgba(var(--color-brand-rgb), 0.05) 40%\n  );\n  background-size: 100%;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n\n  &:after {\n    content: attr(title);\n    position: absolute;\n    inset: 0;\n    z-index: -1;\n\n    background-image: radial-gradient(\n      circle at var(--x, 0) var(--y, 0),\n      rgba(var(--color-brand-rgb), 1),\n      rgba(var(--color-brand-rgb), 0)\n    );\n    background-size: 100%;\n    color: white;\n\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: currentColor;\n    -webkit-text-stroke: 2px transparent;\n  }\n}\n'
    }
  },
  "n57fpk": {
    environment: "react",
    files: {
      "/package.json": '{\n  "name": "react-typescript",\n  "version": "1.0.0",\n  "description": "React and TypeScript example starter project",\n  "keywords": [\n    "typescript",\n    "react",\n    "starter"\n  ],\n  "main": "src/index.tsx",\n  "dependencies": {\n    "loader-utils": "3.2.1",\n    "react": "18.2.0",\n    "react-dom": "18.2.0",\n    "react-scripts": "5.0.1",\n    "framer-motion": "11.3.27"\n  },\n  "devDependencies": {\n    "@types/react": "18.2.38",\n    "@types/react-dom": "18.2.15",\n    "typescript": "4.4.4"\n  },\n  "scripts": {\n    "start": "react-scripts start",\n    "build": "react-scripts build",\n    "test": "react-scripts test --env=jsdom",\n    "eject": "react-scripts eject"\n  },\n  "browserslist": [\n    ">0.2%",\n    "not dead",\n    "not ie <= 11",\n    "not op_mini all"\n  ]\n}',
      "/public/index.html": '<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="utf-8" />\n    <meta\n      name="viewport"\n      content="width=device-width, initial-scale=1, shrink-to-fit=no"\n    />\n    <meta name="theme-color" content="#000000" />\n    <!--\n      manifest.json provides metadata used when your web app is added to the\n      homescreen on Android. See https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/\n    -->\n    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />\n    <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />\n    <!--\n      Notice the use of %PUBLIC_URL% in the tags above.\n      It will be replaced with the URL of the `public` folder during the build.\n      Only files inside the `public` folder can be referenced from the HTML.\n\n      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will\n      work correctly both with client-side routing and a non-root public URL.\n      Learn how to configure a non-root public URL by running `npm run build`.\n    -->\n    <title>React App</title>\n  </head>\n\n  <body>\n    <noscript> You need to enable JavaScript to run this app. </noscript>\n    <div id="root"></div>\n    <!--\n      This HTML file is a template.\n      If you open it directly in the browser, you will see an empty page.\n\n      You can add webfonts, meta tags, or analytics to this file.\n      The build step will place the bundled scripts into the <body> tag.\n\n      To begin the development, run `npm start` or `yarn start`.\n      To create a production bundle, use `npm run build` or `yarn build`.\n    -->\n  </body>\n</html>\n',
      "/src/App.tsx": 'import { CSSProperties, useState } from "react";\nimport "./styles.css";\nimport { LayoutGroup, motion } from "framer-motion";\n\nconst ITEMS = ["Playlist", "By you", "By Spotify", "Liked songs"];\n\nexport default function App() {\n  const [activeItems, setActiveItems] = useState<string[]>([ITEMS[0]]);\n\n  const sortedItems = [\n    ...activeItems,\n    ...ITEMS.filter((item) => !activeItems.includes(item)),\n  ];\n\n  const renderButton = (item: string, index: number) => (\n    <motion.button\n      layout\n      key={item}\n      onClick={() =>\n        setActiveItems((prev) =>\n          prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]\n        )\n      }\n      style={{ "--index": index } as CSSProperties}\n      className={"item" + (activeItems.includes(item) ? " active" : "")}\n      transition={{ duration: 0.3 }}\n      initial={{ paddingLeft: 12 }}\n      animate={{\n        paddingLeft: index > 0 && activeItems.includes(item) ? 32 : 12,\n      }}\n    >\n      <span>{item}</span>\n    </motion.button>\n  );\n\n  return (\n    <LayoutGroup>\n      <div className="stack">{sortedItems.map(renderButton)}</div>\n      <svg xmlns="http://www.w3.org/2000/svg" version="1.1">\n        <defs>\n          <filter id="melt">\n            <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />\n            <feColorMatrix\n              in="blur"\n              mode="matrix"\n              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"\n              result="goo"\n            />\n            <feComposite in="SourceGraphic" in2="goo" operator="atop" />\n          </filter>\n        </defs>\n      </svg>\n    </LayoutGroup>\n  );\n}\n',
      "/src/index.tsx": 'import React from "react";\nimport ReactDOM from "react-dom/client";\nimport App from "./App";\n\nconst rootElement = document.getElementById("root")!;\nconst root = ReactDOM.createRoot(rootElement);\n\nroot.render(\n  <React.StrictMode>\n    <App />\n  </React.StrictMode>\n);\n',
      "/src/styles.css": '/* \n  Global.css \n  https://s4wj97.csb.app/global.css\n*/\n\n@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap");\n@import url("https://cdn.jsdelivr.net/npm/@radix-ui/colors@latest/gray.css");\n\n* {\n  margin: 0;\n  outline: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  --color-brand: #003dee;\n  --color-brand-rgb: 0, 61, 255;\n  --transition-speed: 150ms;\n  --unit: 4px;\n}\n\nbody {\n  background-color: var(--gray-1);\n  background-image: radial-gradient(var(--gray-5) 1px, transparent 0);\n  background-size: 40px 40px;\n\n  font-size: 14px;\n  color: #fff;\n  font-family: "Inter", serif;\n  display: flex;\n  height: 100vh;\n  -webkit-font-smoothing: antialiased;\n}\n\nbutton {\n  appearance: none;\n  border: 0;\n  font: inherit;\n  color: inherit;\n  cursor: pointer;\n}\n\n:root {\n  --color-brand: #003dee;\n  --color-brand-rgb: 0, 61, 255;\n  --transition-speed: 150ms;\n  --unit: 4px;\n}\n\n/* Global.css */\n\nbody {\n  color: black;\n  display: flex;\n  height: 100vh;\n  width: 100vw;\n  justify-content: center;\n  align-items: center;\n}\n\n.stack {\n  display: flex;\n  gap: calc(var(--unit) * 2);\n  filter: url("#melt");\n}\n\nsvg {\n  display: none;\n}\n\n.item {\n  border: 0;\n  position: relative;\n  color: var(--color-brand);\n  padding: var(--unit) calc(var(--unit) * 3);\n  border-radius: 99999px;\n  overflow: hidden;\n  will-change: auto;\n  white-space: nowrap;\n\n  &:after {\n    content: "";\n    position: absolute;\n    inset: 0;\n    background: rgba(var(--color-brand-rgb), 0.05);\n    transition: background 200ms ease;\n    border-radius: 99999px;\n  }\n\n  &:hover:after {\n    background: rgba(var(--color-brand-rgb), 0.1);\n  }\n\n  span {\n    position: relative;\n    z-index: 1;\n  }\n\n  &.active {\n    z-index: calc(5 - var(--index));\n    color: var(--gray-2);\n\n    &:after {\n      background: var(--color-brand);\n      color: white;\n      opacity: calc(1 - var(--index) / 5);\n      border-right: 1px solid #ffffff60;\n    }\n\n    &:not(:first-child) {\n      margin-left: calc(var(--unit) * -8);\n     \n    }\n  }\n}\n',
      "/tsconfig.json": '{\n    "include": [\n        "./src/**/*"\n    ],\n    "compilerOptions": {\n        "strict": true,\n        "esModuleInterop": true,\n        "lib": [\n            "dom",\n            "es2016"\n        ],\n        "jsx": "react-jsx"\n    }\n}'
    }
  },
  "n9g694": {
    environment: "react",
    files: {
      "/package.json": '{\n  "name": "react",\n  "version": "1.0.0",\n  "description": "",\n  "keywords": [],\n  "main": "src/index.tsx",\n  "dependencies": {\n    "react": "^18.0.0",\n    "react-dom": "^18.0.0",\n    "react-scripts": "^5.0.0"\n  },\n  "devDependencies": {\n    "@types/react": "18.2.38",\n    "@types/react-dom": "18.2.15",\n    "loader-utils": "3.2.1",\n    "typescript": "4.4.4"\n  },\n  "scripts": {\n    "start": "react-scripts start",\n    "build": "react-scripts build",\n    "test": "react-scripts test --env=jsdom",\n    "eject": "react-scripts eject"\n  },\n  "browserslist": [\n    ">0.2%",\n    "not dead",\n    "not ie <= 11",\n    "not op_mini all"\n  ]\n}',
      "/public/index.html": '<!DOCTYPE html>\n<html lang="en">\n\n<head>\n	<meta charset="utf-8">\n	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">\n	<meta name="theme-color" content="#000000">\n	<!--\n      manifest.json provides metadata used when your web app is added to the\n      homescreen on Android. See https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/\n    -->\n	<link rel="manifest" href="%PUBLIC_URL%/manifest.json">\n	<link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">\n	<!--\n      Notice the use of %PUBLIC_URL% in the tags above.\n      It will be replaced with the URL of the `public` folder during the build.\n      Only files inside the `public` folder can be referenced from the HTML.\n\n      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will\n      work correctly both with client-side routing and a non-root public URL.\n      Learn how to configure a non-root public URL by running `npm run build`.\n    -->\n	<title>React App</title>\n</head>\n\n<body>\n	<noscript>\n		You need to enable JavaScript to run this app.\n	</noscript>\n	<div id="root"></div>\n	<!--\n      This HTML file is a template.\n      If you open it directly in the browser, you will see an empty page.\n\n      You can add webfonts, meta tags, or analytics to this file.\n      The build step will place the bundled scripts into the <body> tag.\n\n      To begin the development, run `npm start` or `yarn start`.\n      To create a production bundle, use `npm run build` or `yarn build`.\n    -->\n</body>\n\n</html>',
      "/src/App.js": 'import "./styles.css";\n\nimport ALBUMS from "./albums.json";\nconst reversedAlbums = ALBUMS.reverse();\n\nexport default function App() {\n  return (\n    <div className="scroller" style={{ "--total": reversedAlbums.length }}>\n      <h2 className="album-position"></h2>\n\n      {reversedAlbums.map((item, i) => (\n        <div key={i} className="album-item">\n          <div\n            className="album-wrapper"\n            style={{\n              "--index": i,\n              "--image-url": `url(${item.image})`,\n            }}\n          >\n            <div className="album-name">\n              <p>{item.album}</p>\n              <span>{item.artist}</span>\n            </div>\n\n            <div className="cover">\n              <div className="entry-exit entry-1">\n                <div className="entry-exit entry-2">\n                  <div className="entry-exit entry-3">\n                    <div className="entry-exit exit-1">\n                      <div className="entry-exit exit-2">\n                        <div className="entry-exit exit-3 cover-wrapper">\n                          <div className="cover-shine_front" />\n                          <img\n                            className="cover-image"\n                            src={item.image}\n                            alt=""\n                          />\n                          <div className="cover-shine_back" />\n                          <div className="cover-back cover-back_1" />\n                          <div className="cover-back cover-back_2" />\n                          <div className="cover-back cover-back_3" />\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      ))}\n    </div>\n  );\n}\n',
      "/src/albums.json": `[
  {
    "artist": "Led Zeppelin",
    "album": "Led Zeppelin IV",
    "image": "https://i.scdn.co/image/ab67616d0000b2734509204d0860cc0cc67e83dc"
  },

  {
    "artist": "Jorge Ben Jor",
    "album": "A Tabua De Esmeralda",
    "image": "https://i.scdn.co/image/ab67616d0000b2733bce213e564b833e4e4be01f"
  },

  {
    "artist": "Nirvana",
    "album": "Nevermind",
    "image": "https://i.scdn.co/image/ab67616d0000b273fbc71c99f9c1296c56dd51b6"
  },

  {
    "album": "Roots",
    "artist": "Sepultura",
    "image": "https://i.scdn.co/image/ab67616d0000b2730bd5e7cce9765c2ef519424e"
  },

  {
    "album": "Paranoid",
    "artist": "Black Sabbath",
    "image": "https://i.scdn.co/image/ab67616d0000b2739f0a9474c47a841c6f03e990"
  },

  {
    "artist": "Rage Against The Machine",
    "album": "Rage Against The Machine",
    "image": "https://i.scdn.co/image/ab67616d0000b27324f31a0a281320f0cec6f86f"
  },

  {
    "artist": "The Beathes",
    "album": "Abbey Road",
    "image": "https://i.scdn.co/image/ab67616d0000b273dc30583ba717007b00cceb25"
  },

  {
    "artist": "Jimi Hendrix",
    "album": "Are You Experienced",
    "image": "https://i.scdn.co/image/ab67616d0000b273c9adfbd773852e286faed040"
  },

  {
    "artist": "Racionais MC's",
    "album": "Sobrevivendo no Inferno",
    "image": "https://i.scdn.co/image/ab67616d0000b273dc04f429698834d0736ddb0a"
  },

  {
    "artist": "Caetano Veloso",
    "album": "Transa",
    "image": "https://i.scdn.co/image/ab67616d0000b27364c729c9de6ebccf252edbe9"
  }
]
`,
      "/src/index.js": 'import { StrictMode } from "react";\nimport { createRoot } from "react-dom/client";\n\nimport App from "./App";\n\nconst rootElement = document.getElementById("root");\nconst root = createRoot(rootElement);\n\nroot.render(\n  <StrictMode>\n    <App />\n  </StrictMode>\n);\n',
      "/src/styles.css": `body {
  overflow: hidden;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Apple Color Emoji", SF Pro, SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif;

  --scroll-distance: 100vh;
  --scroll-distance-offset: calc(var(--scroll-distance) * 1);
  --image-size: clamp(300px, 24vw, 800px);
  --image-radius: .3em;
  --x: 100vw;
  --y: 100vh;
  --album-stack-gap: 4em;
}

@media screen and (max-height: 600px) {
  body {
    --image-size: 130px;
  }
}

@property --position-absolute {
  initial-value: 1;
  syntax: '<integer>';
  inherits: true;
}

@property --position-relative {
  initial-value: 1;
  syntax: '<integer>';
  inherits: true;
}

@keyframes syncPosition {
  to {
    --position-absolute: var(--total);
    --position-relative: calc(var(--total) * 100);
  }
}

.scroller {
  overflow: scroll;
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-timeline: --controller y;

  animation: syncPosition linear reverse;
  animation-timeline: --controller;

  counter-reset: position var(--position-absolute);
  background: hsl(calc(var(--position-relative) / 2), 48%, 57%);
}

.album-position {
  position: fixed;
  left: 0;
  right: 0;
  top: 10vh;
  text-align: center;
  margin: 0;

  &:before {
    content: counter(position);
    font-variant: tabular-nums;
    font-size: clamp(72px, 20vw, 92px);

    /**
     * Totally stolen from Apple
     */
    line-height: 1;
    font-weight: 600;
    --gold-one: rgba(211, 159, 90, 1);
    --gold-two: rgba(149, 107, 53, 1);
    --gold-three: rgba(172, 125, 69, 1);
    --shadow-line-thickness: .5px;
    --shadow-line-thickness-2: 1px;
    --shadow-line-thickness-3: .0005em;
    -webkit-filter: drop-shadow(calc(-1 * var(--shadow-line-thickness-2)) calc(-1 * var(--shadow-line-thickness)) var(--shadow-line-thickness-3) var(--gold-one)) drop-shadow(var(--shadow-line-thickness) calc(-1 * var(--shadow-line-thickness)) var(--shadow-line-thickness-3) var(--gold-one)) drop-shadow(calc(-1 * var(--shadow-line-thickness)) var(--shadow-line-thickness-3) var(--shadow-line-thickness-3) var(--gold-one)) drop-shadow(var(--shadow-line-thickness) var(--shadow-line-thickness) var(--shadow-line-thickness-3) var(--gold-one)) drop-shadow(var(--shadow-line-thickness) var(--shadow-line-thickness) var(--shadow-line-thickness-3) var(--gold-two)) drop-shadow(0px var(--shadow-line-thickness-2) var(--shadow-line-thickness-3) var(--gold-three));
    filter: drop-shadow(calc(var(--shadow-line-thickness-2) * -1) calc(-1 * var(--shadow-line-thickness)) var(--shadow-line-thickness-3) var(--gold-one)) drop-shadow(var(--shadow-line-thickness) calc(-1 * var(--shadow-line-thickness)) var(--shadow-line-thickness-3) var(--gold-one)) drop-shadow(calc(-1 * var(--shadow-line-thickness)) var(--shadow-line-thickness-3) var(--shadow-line-thickness-3) var(--gold-one)) drop-shadow(var(--shadow-line-thickness) var(--shadow-line-thickness) var(--shadow-line-thickness-3) var(--gold-one)) drop-shadow(var(--shadow-line-thickness) var(--shadow-line-thickness) var(--shadow-line-thickness-3) var(--gold-two)) drop-shadow(0px var(--shadow-line-thickness-2) var(--shadow-line-thickness-3) var(--gold-three));
    background: linear-gradient(45deg, #956732, #d69443, #f2b96e, #fcdd84, #f2b96e, #d69443, #956732, #ca9044, #f2b963);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}

.album-item {
  scroll-snap-align: start;
  height: var(--scroll-distance);
  width: 100vw;
}

.album-wrapper {
  position: fixed;
  inset: 0;
  display: flex;
  pointer-events: none;
}

.cover {
  margin: auto;
  transform-origin: center;
  transform: scale(.5) translate3d(calc((var(--x) * -1) + var(--image-size) / 2),
      calc((var(--y)) - var(--image-size) * 1.5),
      0) skew(0, 15deg);

  animation-name: slide;
  animation-timeline: --controller;
  animation-fill-mode: forwards;
  will-change: transform;

  animation-range: calc((var(--index) * var(--scroll-distance)) - var(--scroll-distance-offset)) calc((var(--index) * var(--scroll-distance)) + var(--scroll-distance-offset));
}

@keyframes slide {
  50% {
    transform: scale(1) skew(0, 15deg);
  }

  to {
    transform: scale(.5) translate3d(calc((var(--x) - var(--image-size) / 2)),
        calc((var(--y) * -1) + var(--image-size) * 1.5),
        0) skew(0, 15deg);
  }
}

.cover-image {
  width: var(--image-size);
  height: var(--image-size);

  position: relative;
  z-index: 2;

  border-radius: var(--image-radius);
  box-shadow: 0 143px 70px -100px #000000b3;
}

/**
  * Totally stolen from Apple
  */
.cover-back {
  position: absolute;
  opacity: 70%;
  border-radius: var(--image-radius);
  background: linear-gradient(0deg, #0000004d, #0000004d), var(--image-url), #d3d3d3 50% / cover no-repeat;
  background-size: 100%;
  width: var(--image-size);
  height: var(--image-size);
}

.cover-back_1 {
  top: -1px;
  left: 1px;
}

.cover-back_2 {
  top: -2px;
  left: 2px;
}

.cover-back_3 {
  top: -3px;
  left: 3px;
}

.cover-shine_front {
  background: white;
  position: absolute;
  z-index: 3;

  left: 15%;
  top: 10%;
  width: 10%;
  height: 30%;
  border-radius: 100%;

  transform: rotate(20deg);
  filter: blur(20px);
  opacity: .1;
}

.cover-shine_back {
  background-image: radial-gradient(circle, #fff, #0000 20%);
  background-position: 70% 96%;
  background-size: 200% 200%;
  position: absolute;
  top: -3px;
  left: 3px;
  width: 100%;
  height: 100%;
  opacity: 50%;
  border-radius: var(--image-radius);
  background-repeat: no-repeat;
  z-index: 1;
}

/**
 * Entry / Exit animation
 */
.entry-exit {
  animation-timeline: --controller;
  animation-fill-mode: forwards;
  position: relative;
}


/* Entry */
.entry-1 {
  animation-name: entry-end;
  transform: translate3D(calc(var(--image-size) * -2), var(--album-stack-gap), 0);

  animation-range:
    calc(((var(--index) - 5) * var(--scroll-distance))) calc(((var(--index) - 3) * var(--scroll-distance)) + var(--scroll-distance-offset));
}

.entry-2 {
  animation-name: entry-end;
  transform: translate3D(calc(var(--album-stack-gap) * -1), var(--album-stack-gap), 0);

  animation-range: calc(((var(--index) - 3) * var(--scroll-distance))) calc(((var(--index) - 2) * var(--scroll-distance)) + var(--scroll-distance-offset));
}

.entry-3 {
  animation-name: entry-end;
  transform: translate3D(calc(var(--album-stack-gap) * -1), var(--album-stack-gap), 0);

  animation-range: calc(((var(--index) - 2) * var(--scroll-distance))) calc(((var(--index) - 1) * var(--scroll-distance)) + var(--scroll-distance-offset));
}

@keyframes entry-end {
  to {
    transform: translate3D(0, 0, 0);
  }
}

/* Exit */
.exit-1 {
  animation-name: exit1;

  animation-range: calc(((var(--index) + 1) * var(--scroll-distance))) calc(((var(--index) + 1) * var(--scroll-distance)) + var(--scroll-distance-offset));
}

@keyframes exit1 {
  to {
    transform: translate3D(var(--album-stack-gap), calc(var(--album-stack-gap) * -1), 0);
  }
}

.exit-2 {
  animation-name: exit2;

  animation-range: calc(((var(--index) + 2) * var(--scroll-distance))) calc(((var(--index) + 2) * var(--scroll-distance)) + var(--scroll-distance-offset));
}

@keyframes exit2 {
  to {
    transform: translate3D(var(--album-stack-gap), calc(var(--album-stack-gap) * -1), 0);
  }
}

.exit-3 {
  animation-name: exit3;

  animation-range: calc(((var(--index) + 3) * var(--scroll-distance))) calc(((var(--index) + 3) * var(--scroll-distance)) + var(--scroll-distance-offset));
}

@keyframes exit3 {
  to {
    transform: translate3D(var(--album-stack-gap), calc(var(--album-stack-gap) * -1), 0);
    opacity: 0;
  }
}

.album-name {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 12vh;
  text-align: center;
  z-index: 999;

  color: white;
  font-size: 20px;
  line-height: 1.6;
  font-weight: 500;
  letter-spacing: 0em;

  opacity: 0;
  animation-name: show;
  animation-timeline: --controller;
  animation-fill-mode: forwards;

  animation-range: calc((var(--index) * var(--scroll-distance)) - var(--scroll-distance-offset)) calc((var(--index) * var(--scroll-distance)) + var(--scroll-distance-offset));

  & p {
    margin: 0;
  }

  & span {
    color: hsl(calc(var(--position-relative) / 2), 48%, 80%);
  }
}

@media screen and (max-height: 600px) {
  .album-position {
    top: 3vh;

    &:before {
      font-size: 64px;
    }
  }

  .album-name {
    font-size: 16px;
    bottom: 1em;
  }
}

@keyframes show {
  40% {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  60% {
    opacity: 0;
  }
}`
    }
  }
};

const $$UIGallery = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="sandbox-list"> ${renderComponent($$result, "Sandbox", null, { "client:only": "react", "files": sandboxes["s46fp8"].files, "environment": sandboxes["s46fp8"].environment, "title": "Rainbow button", "description": "CSS-only button that lights up on hover.", "client:component-hydration": "only", "client:component-path": "/Users/danilowoznica/project/danilowoz.com/src/components/Sandbox", "client:component-export": "Sandbox" })} ${renderComponent($$result, "Sandbox", null, { "client:only": "react", "files": sandboxes["pztylm"].files, "environment": sandboxes["pztylm"].environment, "title": "Glow button", "description": "CSS-only glowy button with transparent background.", "client:component-hydration": "only", "client:component-path": "/Users/danilowoznica/project/danilowoz.com/src/components/Sandbox", "client:component-export": "Sandbox" })} ${renderComponent($$result, "Sandbox", null, { "client:only": "react", "files": sandboxes["hmmmvf"].files, "environment": sandboxes["hmmmvf"].environment, "title": "Independent gradients", "description": "Independent stroke and fill gradients without extra elements.", "client:component-hydration": "only", "client:component-path": "/Users/danilowoznica/project/danilowoz.com/src/components/Sandbox", "client:component-export": "Sandbox" })} ${renderComponent($$result, "Sandbox", null, { "client:only": "react", "files": sandboxes["n57fpk"].files, "environment": sandboxes["n57fpk"].environment, "title": "Filter Spotify menu", "description": "SVG for the merging effect, and Framer Motion to animate transition.", "showRefreshButton": true, "client:component-hydration": "only", "client:component-path": "/Users/danilowoznica/project/danilowoz.com/src/components/Sandbox", "client:component-export": "Sandbox" })} ${renderComponent($$result, "Sandbox", null, { "client:only": "react", "files": sandboxes["n9g694"].files, "environment": sandboxes["n9g694"].environment, "title": "CSS only album navigation", "description": "Reproduction of 'Apple Music: 100 best albums' website but using only CSS.", "showRefreshButton": true, "client:component-hydration": "only", "client:component-path": "/Users/danilowoznica/project/danilowoz.com/src/components/Sandbox", "client:component-export": "Sandbox" })} </div>`;
}, "/Users/danilowoznica/project/danilowoz.com/src/components/UIGallery.astro", void 0);

const $$Astro = createAstro("https://danilowoz");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const blogsMd = await Astro2.glob(/* #__PURE__ */ Object.assign({"./blog/atomic-design-with-react.md": () => import('../chunks/atomic-design-with-react_DxBRmHG4.mjs').then(n => n._),"./blog/benefits-and-potencial-challenges-on-open-source-projects.md": () => import('../chunks/benefits-and-potencial-challenges-on-open-source-projects_D7lPGZOg.mjs').then(n => n._),"./blog/blockchain-and-react-native-apps.md": () => import('../chunks/blockchain-and-react-native-apps_miE0Z3sB.mjs').then(n => n._),"./blog/my-code-principles.md": () => import('../chunks/my-code-principles_Cn3RIcNz.mjs').then(n => n._),"./blog/react-code-editor.md": () => import('../chunks/react-code-editor_B1qnE_Os.mjs').then(n => n._),"./blog/sandpack.md": () => import('../chunks/sandpack_BHfLkKVf.mjs').then(n => n._),"./blog/spatial-keyboard-navigation.md": () => import('../chunks/spatial-keyboard-navigation_DEY0_1Xg.mjs').then(n => n._)}), () => "./blog/*.md");
  const contentMd = await Astro2.glob(/* #__PURE__ */ Object.assign({"../content/coverify.md": () => import('../chunks/coverify_DtR9Ynil.mjs'),"../content/memories.md": () => import('../chunks/memories_tsPV9YKX.mjs'),"../content/my-own-styled-components.md": () => import('../chunks/my-own-styled-components_DKLFxfVd.mjs'),"../content/react-content-loader.md": () => import('../chunks/react-content-loader_Y7UNsBJQ.mjs'),"../content/sandpack.md": () => import('../chunks/sandpack_1goJ63j-.mjs')}), () => "../content/*.md");
  const content = [...blogsMd, ...contentMd].sort((a, b) => {
    const dateA = new Date(a?.frontmatter.date ?? "").getTime();
    const dateB = new Date(b?.frontmatter.date ?? "").getTime();
    return dateB - dateA;
  }).filter((item) => item.frontmatter.enabled !== false);
  const projects = content.filter(({ frontmatter }) => frontmatter.type === "project").sort((a, b) => a.frontmatter.order - b.frontmatter.order);
  const articles = content.filter(
    ({ frontmatter }) => frontmatter.type === "article"
  );
  return renderTemplate`<html lang="en" data-astro-cid-j7pv25f6> <head>${renderComponent($$result, "MainHead", $$MainHead, { "data-astro-cid-j7pv25f6": true })}${renderHead()}</head> <body data-astro-cid-j7pv25f6> <main class="container grid" data-astro-cid-j7pv25f6> ${renderComponent($$result, "Hero", $$Hero, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result, "Nav", $$Nav, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result, "Section", $$Section, { "title": "Writing", "data-astro-cid-j7pv25f6": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "List", $$List, { "data": articles, "data-astro-cid-j7pv25f6": true })} ` })} ${renderComponent($$result, "Section", $$Section, { "title": "UI garden", "data-astro-cid-j7pv25f6": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "UIGallery", $$UIGallery, { "data-astro-cid-j7pv25f6": true })} ` })} ${renderComponent($$result, "Section", $$Section, { "title": "Projects", "data-astro-cid-j7pv25f6": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Cards", $$Cards, { "data": projects, "data-astro-cid-j7pv25f6": true })} ` })} ${renderComponent($$result, "About", $$About, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-j7pv25f6": true })} </main>  </body> </html>`;
}, "/Users/danilowoznica/project/danilowoz.com/src/pages/index.astro", void 0);

const $$file = "/Users/danilowoznica/project/danilowoz.com/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

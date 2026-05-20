import { b as createAstro, c as createComponent, r as renderComponent, d as renderHead, e as addAttribute, f as renderSlot, a as renderTemplate } from './astro/server_B5SraF0R.mjs';
import { $ as $$MainHead, a as $$Footer } from './MainHead_C4I1nMQR.mjs';
/* empty css                                            */

const $$Astro = createAstro("https://danilowoz");
const $$Post = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Post;
  const {
    content: { title, date, tagline, timeToRead, cover, type }
  } = Astro2.props;
  const formatDate = (string) => {
    const date2 = new Date(string);
    return date2.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric"
    });
  };
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "MainHead", $$MainHead, { "title": title, "description": tagline, "image": false })}${renderHead()}</head> <body class="post"> <article> <a href="/" class="text-medium backlink"> <span>&#8592;</span> Homepage</a> <h1${addAttribute(`text-large ${type}`, "class")}>${title}</h1> <p>
Danilo Woznica,
${formatDate(date)} <span class="color-2">—</span> ${timeToRead} </p> <header${addAttribute(`header`, "class")}> <div></div> </header> <section class="color-1 text-content"> ${renderSlot($$result, $$slots["default"])} </section> ${renderComponent($$result, "Footer", $$Footer, {})} </article>  </body> </html>`;
}, "/Users/danilowoznica/project/danilowoz.com/src/layout/post.astro", void 0);

export { $$Post as $ };

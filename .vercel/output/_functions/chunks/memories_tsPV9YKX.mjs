import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from './astro/server_B5SraF0R.mjs';

const html = () => "";

				const frontmatter = {"type":"project","link":"https://memories.danilowoz.com/","title":"Memories","tagline":"A closer look at my personal photo album, my memories and things I like.","date":"2025-07-16T15:06:01.607Z","order":1};
				const file = "/Users/danilowoznica/project/danilowoz.com/src/content/memories.md";
				const url = undefined;
				function rawContent() {
					return "   \n             \n                                     \n               \n                                                                                   \n                              \n        \n   \n";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html())}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };

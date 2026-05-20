import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from './astro/server_B5SraF0R.mjs';

const html = () => "";

				const frontmatter = {"type":"project","link":"https://github.com/danilowoz/my-styled-component","title":"styled-components from scratch","date":"2019-01-01T15:06:01.607Z","tagline":"I spent some time figuring out how to implement my very own styled-components within 100 lines of code.","order":5,"enabled":false};
				const file = "/Users/danilowoznica/project/danilowoz.com/src/content/my-own-styled-components.md";
				const url = undefined;
				function rawContent() {
					return "   \n             \n                                                      \n                                     \n                              \n                                                                                                                \n        \n              \n   \n";
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

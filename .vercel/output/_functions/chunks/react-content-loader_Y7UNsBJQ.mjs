import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from './astro/server_B5SraF0R.mjs';

const html = () => "";

				const frontmatter = {"type":"project","link":"https://github.com/danilowoz/react-content-loader","title":"react-content-loader","tagline":"SVG-powered React component for efficient skeleton loading, enhancing user experiences.","date":"2020-01-01T15:06:01.607Z","order":999};
				const file = "/Users/danilowoznica/project/danilowoz.com/src/content/react-content-loader.md";
				const url = undefined;
				function rawContent() {
					return "   \n             \n                                                       \n                           \n                                                                                                \n                              \n          \n   \n";
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

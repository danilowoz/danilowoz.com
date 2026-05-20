import { c as createComponent, r as renderComponent, a as renderTemplate, u as unescapeHTML } from './astro/server_B5SraF0R.mjs';
import { $ as $$Post } from './post_0-zqCjrv.mjs';

const html = () => "<p>Have we already exhausted the possibilities of how we interact with our favorite code editor? Have we got so used to how we code to achieve a certain goal we can no longer see any way to involve it?</p>\n<p>Since I started to work at <a href=\"https://codesandbox.io/?from-app=1\">CodeSandbox</a>, I’ve seen myself facing those issues more often. Besides that, I began to wonder how beginners are struggling to rule the code editor and learn their favorite framework simultaneously.</p>\n<p>Therefore, I challenged myself to come up with a code editor/IDE for beginner developers focused on ReactJS and what this concept might look like.</p>\n<h2 id=\"the-anatomy-of-a-component\">The anatomy of a component</h2>\n<p>The first concept came to me some time ago, when I was teaching a friend of mine more about React and how a component works. I remember I said the component itself has a proper “anatomy”. Later, I realized it makes a lot of sense because <strong>we know where things are supposed to be in a component.</strong></p>\n<p>In other words:</p>\n<p><img src=\"/images/code-editor/anatomy.jpg\" alt=\"Anatomy of a component\" width=\"783\" height=\"385\"></p>\n<p>So basically, we can predict what actions the user might take and teach them the best practices. So, this idea evolved to a new concept which are menus with context-sensitive intentions linked to those sectors.</p>\n<video autoplay muted playsinline>\n  <source src=\"/images/code-editor/ide-concept.mp4\" type=\"video/mp4\">\n</video>\n<p>The whole point of this concept is that we can understand the code to provide a way to make a new code editor with whatever framework or even language we want. I just used React to illustrate the idea.</p>";

				const frontmatter = {"layout":"../../layout/post.astro","type":"project","title":"A React code editor","tagline":"What a code editor for beginner developers focused on ReactJS might look like.","date":"2021-04-16T15:06:01.607Z","timeToRead":"2 min read","cover":"/images/code-editor/cover.png","order":999};
				const file = "/Users/danilowoznica/project/danilowoz.com/src/pages/blog/react-code-editor.md";
				const url = "/blog/react-code-editor";
				function rawContent() {
					return "   \n                               \n             \n                          \n                                                                                       \n                              \n                      \n                                    \n                                \n          \n   \n\nHave we already exhausted the possibilities of how we interact with our favorite code editor? Have we got so used to how we code to achieve a certain goal we can no longer see any way to involve it?\n\nSince I started to work at [CodeSandbox](https://codesandbox.io/?from-app=1), I've seen myself facing those issues more often. Besides that, I began to wonder how beginners are struggling to rule the code editor and learn their favorite framework simultaneously.\n\nTherefore, I challenged myself to come up with a code editor/IDE for beginner developers focused on ReactJS and what this concept might look like.\n\n## The anatomy of a component\n\nThe first concept came to me some time ago, when I was teaching a friend of mine more about React and how a component works. I remember I said the component itself has a proper \"anatomy\". Later, I realized it makes a lot of sense because **we know where things are supposed to be in a component.**\n\nIn other words:\n\n<img\n  src=\"/images/code-editor/anatomy.jpg\"\n  alt=\"Anatomy of a component\"\n  width=\"783\"\n  height=\"385\"\n/>\n\nSo basically, we can predict what actions the user might take and teach them the best practices. So, this idea evolved to a new concept which are menus with context-sensitive intentions linked to those sectors.\n\n<video autoPlay muted playsInline>\n  <source src=\"/images/code-editor/ide-concept.mp4\" type=\"video/mp4\" />\n</video>\n\nThe whole point of this concept is that we can understand the code to provide a way to make a new code editor with whatever framework or even language we want. I just used React to illustrate the idea.\n";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [{"depth":2,"slug":"the-anatomy-of-a-component","text":"The anatomy of a component"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$Post, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html())}`
							})}`;
				});

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content,
	compiledContent,
	default: Content,
	file,
	frontmatter,
	getHeadings,
	rawContent,
	url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };

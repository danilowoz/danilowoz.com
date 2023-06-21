---
layout: ../../layout/post.astro
type: article
title: "Building Sandpack: an embeddable sandbox for everyone"
tagline: My journey in contributing to React.dev and empowering developers worldwide has been an incredible, filled with growth, learning, and meaningful connections.
date: 2023-06-21T15:06:01.607Z
timeToRead: 5 min read
tag: Learning
---

## A bit of self-reflection

From a particular moment in my career, React.js started becoming omnipresent in the front-end community. Seeing so much innovation in the open-source community cultivated a strong desire in me to contribute to something real with a positive impact. Something that could last and possibly make the world a bit fairer.

This internal force manifested in impulsive actions and made me go beyond to pursue my goals. Maybe unconsciously, I knew when I joined the CodeSandbox team that its values (to be accessible, collaborative, and empowering) could give me the chance to achieve this goal in my career. 

Never would I have imagined getting the chance to contribute to the long-awaited new React.js documentation, which may be the hugest thing I've done in the open-source space[^1]. So, I couldn't have been more motivated when CodeSandbox set this challenge for me and the team.

## React.dev meets Sandpack

React team challenged us to provide a browser-based playground (sandboxes) for the React.js documentation and ensure these sandboxes are accessible not just for everyone but everywhere. The goal was to use these sandboxes to demonstrate React APIs, create internal challenges to be solved by users, promote best practices, and ultimately educate users on how to code using React.

<figure class="large">
    <img
        src="/images/sandpack/react-dev.png"
        alt="Example of a sandbox on react.dev"
        width="1277"
        height="714"
    />
    <figcaption>Example of a Sandpack sandbox on react.dev</figcaption>
</figure>

So, **we joined forces to give everyone in the world the same chance to learn React in a reliable and educative environment for free.** For this task, our team revived an internal project and designed [Sandpack](https://sandpack.codesandbox.io/docs), which is a portable [CodeSandbox](https://codesandbox.io/) version that could be embedded in any external website.

Sandpack implements many innovative strategies to build the best React playground to achieve it. At the same time, we keep everything open-source to be used by anyone, making it possible to leverage this collective effort to be used on other use cases, such as articles, tutorials, documentation, etc., making Sandpack even more exciting.

While we encountered various technical and design challenges along the way, many of which far from trivial, here's how we approached them:

### Bring a familiar editing experience

Monaco is a great editor. It powers VS Code and introduces many essential features that we can't live without today. However, before choosing it for Sandpack, we carefully considered the audience, limitations, and requirements. After identifying some tradeoffs, we ultimately opted for [CodeMirror](https://codemirror.net/), a code editor that's modular and extensible. Here are some reasons why we made this decision:

- Mobile support: Monaco doesn't have great mobile support, which is crucial for Sandpack to deliver a consistent experience throughout all devices. Plus, CodeMirror works well with screen readers and keyboard-only users.
- Final bundle size: CodeMirror provides an easy way to load only the modules/extensions we want, allowing us to lazy-load and code-split the code editor component. Meanwhile, Monaco is quite a heavy package for this task.
- Extensibility: Although Monaco introduces many built-in features, such as intellisense and auto import, they are optional for sandboxes. On the other hand, CodeMirror provides a basic setup, but it allows us to write custom plugins for whatever we need and, of course, lazy-load them.

### Build a lightweight environment

The first Sandpack version was based on the bundler used by CodeSandbox.io. However, it included many unnecessary features for this new React.js sandbox, including postCSS integration, support for other frameworks, outdated Babel plugins, etc.

That is why the team came up with a new solution built from scratch shaped to be modularized and only load, transpile and evaluate what the sandbox would use. This resulted in a more streamlined and faster solution. So to get to know this solution, let's break it down into two main components:
- Sandpack CDN [^2]: With a custom CDN we could skip the transpiling step for dependencies by caching them in a custom-built solution. Plus, it optimizes npm modules for browsers by keeping the full registry on disk and serving them in a msgpack bundle to clients. Its speedy resolver uses the in-memory/on-disk npm registry.
- Sandpack Bundler [^3]: To start, it uses fewer resources by avoiding fetching unnecessary files. Moreover, it's significantly faster, primarily due to a new architecture that allows it to lazily load framework support, but also because it introduces support to the latest transpiler version, and removes many bottlenecks observed on the previous bundler.

This is simply the work of a genius: Jasper!

### Debug code [^4]

We understood that console is still the most friendly way to debug code and introduce a sort of checkpoints while coding. This was essential for React.dev to tell the story behind some exercises. So, Sandpack created an interface between the console native method on the bundler and the Sandpack UI to render logs next to the sandbox.

### Make it educational [^5]

The release of the new React hooks API also brought along a set of ESLint rules. So, an integration between sandboxes and linting the current code was fundamental to providing a stable and safe environment for learning. Fortunately, we could run ESLint on the client side. This made it possible to execute a set of rules and build a custom plugin on CodeMirror to highlight any errors right on the code editor.

## Wrap up 

I have had the experience of building many projects throughout my career. Unfortunately, a few of them haven't gone into production, and I struggled to feel invested in them. This less-than-ideal situation is one that many developers are familiar with. However, it might be different when it comes to the open-source world, where contributing to projects implies sharing the project's values and doing everything you can for it to work out.

I can get that the money matters. You can't pay bills with open-source stars or commits. Plus, working for big tech corporations for free also sucks. But, neither money can fulfill that sentiment for making something meaningful that deeply matters to you. Open-source can give you this chance, sometimes.

During this journey: **as a developer, I’ve learned I'm not an impostor; as a designer, I understand that the front-end area seeks more user-oriented projects; as an open-source maintainer, I realize I can contribute to big projects; and as a person, I took a step.**

## Thanks to
[Alex](https://twitter.com/alexnmoldovan), [Ives](https://twitter.com/CompuIves), [Jasper](https://twitter.com/JasperDeMoor), and the whole CodeSandbox team.

[^1]: [React.dev: docs contributors](https://react.dev/community/docs-contributors)
[^2]: [github.com/codesandbox/sandpack-bundler](https://github.com/codesandbox/sandpack-bundler)
[^3]: [github.com/codesandbox/sandpack-cdn](https://github.com/codesandbox/sandpack-cdn)
[^4]: [feat: Add SandpackConsole component](https://github.com/codesandbox/sandpack/pull/546)
[^5]: [feat: Adds eslint integration on Sandpack](https://github.com/reactjs/react.dev/pull/4665)

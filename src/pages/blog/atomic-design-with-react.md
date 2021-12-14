---
layout: ../../layout/post.astro
type: article
title: Atomic Design and ReactJS
tagline: How the Atomic Design methodology allowed me to create a great design system from scratch and made me a better developer.
date: 2018-08-01
timeToRead: 5 min read
mostRead: true
---

I have recently had the opportunity to work on a new product from scratch made in React and PWA with the well-crafted and componentized UI at Cheesecake. However, when we discussed with the whole team the best way to approach the development, we ended up having the same old problems that have happened in most past projects, such as:

- Lack of Styleguide of components;
- Lack of precision in estimating development time;
- Great amount of setup time for developers;
- Inconsistency between components and view;
- Repeated code;
- Side effects;
- Very specific components to each pages;

We’ve started to build the CSS architecture using the [ITCSS](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/) methodology that organizes the style files on stacks from generics styles to the specifics ones, which helps you to scale large projects easily. But along with ITCSS, we were using CSS Modules to scope the components, so we noticed that component stack was getting huge and even the generic styles were being componentized and reused within other one.
That was the moment in which we paused to rethink our architecture and how we could set the components in a more distributed and organized way. Then we found a methodology called [**Atomic Design**](https://bradfrost.com/blog/post/atomic-web-design/) that creates multiples stacks of components, with different hierarchies of complexity and dependence.

<img
  src="/images/atomic-design-with-react/asset-2.png"
  alt="Atomic Design hierarchy"
  width="1968"
  height="448"
/>

### What is Atomic Design?

Popularly known within the design world, Atomic Design helps to build consistent, solid and reusable design systems. Plus, in the world of React, Vue and frameworks that stimulate the componentization, Atomic Design is used unconsciously; but when used in the right way, it becomes a powerful ally for developers.
The name Atomic Design comes from the idea of separating the components in atoms, molecules, organisms, templates and pages, like in the image above. But what are the responsibilities of each separated part?

### Atoms

<img
  src="/images/atomic-design-with-react/asset-3.png"
  alt="Example of atomic component"
  width="304"
  height="132"
/>

Atoms are the smallest possible components, such as buttons, titles, inputs or event color pallets, animations, and fonts. They can be applied on any context, globally or within other components and templates, besides having many states, such as this example of button: disabled, hover, different sizes, etc.

### Molecules

<img
  src="/images/atomic-design-with-react/asset-4.png"
  alt="Example of molecule component"
  width="1308"
  height="758"
/>

They are the composition of one or more components of atoms. Here we begin to compose complex components and reuse some of those components. Molecules can have their own properties and create functionalities by using atoms, which don’t have any function or action by themselves.

### Organisms

<img
  src="/images/atomic-design-with-react/asset-5.png"
  alt="Example of organisms component"
  width="1600"
  height="501"
/>

Organisms are the combination of molecules that work together or even with atoms that compose more elaborate interfaces. At this level, the components begin to have the final shape, but they are still ensured to be independent, portable and reusable enough to be reusable in any content.

### Templates

<img
  src="/images/atomic-design-with-react/asset-6.png"
  alt="Example of template component"
  width="1170"
  height="862"
/>

In this state we stop composing components and begin to set their context. Moreover, the templates create relationships between the organisms and others components through positions, placements and patterns of the pages but it doesn’t have any style, color or component rendered. That’s why it looks like a wireframe.

### Pages

<img
  src="/images/atomic-design-with-react/asset-7.png"
  alt="Example of pages"
  width="1536"
  height="1011"
/>

Pages are the navigate parts of the application and it’s where the components are distributed in one specific template. The components get real content and they’re connected with the whole application. At this stage, we can test the efficiency of the design system to analyse if all the components are independent enough or if we need to split them in smaller parts.

## React + Atomic Design

When we started to use Atomic Design within React we had to adjust some rules of the methodology to ensure that components were reused as much as possible, that they were stateless, without styles of positions and very specific margins so to avoid any side effects in the pages of application.

So with each new component we asked ourselves: “Are these components generic enough to avoid specificity and/or repeated code in whatever context they are used?”

So we were able to write a few rules:

1.  The Atomic Design should have a file of **variables** and it must be imported by each component;
2.  The **atoms** should be written without margins and positions;
3.  Only the **molecules** and **organisms** can set the positions of atoms, but these stacks can’t have any styles of margins and positions;
4.  **Templates** have only one function: to set the grid of pages but never positions of specific components;
5.  **Pages** render the components with a template defined and it’s here that the **Atomic Design** will be connected to the rest of the application;

## Let’s code

What I will show here is everything in a [**boilerplate on GitHub**](https://github.com/danilowoz/react-atomic-design)**,** which you can test and then start your projects using Atomic Design, so let’s do it:

---

To build a UI LIbrary we used an awesome tool called [Storybook](https://storybook.js.org/), which is a great ally to the Atomic Design in React (you can use it for the React Native and Vue too), it allows to render the components and list all states/variations of one.

With the Storybook installed the folder structure will look like this:

<img
  src="/images/atomic-design-with-react/asset-8.png"
  alt="Structure folder"
  width="1564"
  height="988"
/>

Note that inside of the button component there is a file called ‘index.js’ which is the component itself, the ‘styles.css’ is the style that will be imported by CSS Modules (here we’ve used the BEM CSS inside the structure; I recommend reading the article ‘[CSS Architecture with ReactJS](https://cheesecakelabs.com/blog/css-architecture-reactjs/)’) and the ‘stories.js’ is the file that will import the component into the Storybook, which looks like this:

<img
  src="/images/atomic-design-with-react/asset-9.png"
  alt="Storybook’s file"
  width="1564"
  height="784"
/>

Each ‘add ()’ function is a variation of the component and it is the best approach to describe each state individually rather than a single function, so it becomes easier to highlight and control each one of them. So if you describe all the component variations , the Storybook should look like this:

<img
  src="/images/atomic-design-with-react/asset-10.png"
  alt="Storybook interface"
  width="1564"
  height="1011"
/>

And the coolest part of the Storybook is that you can add some ‘addons’, such as the [Storybook Info](https://github.com/storybooks/storybook/tree/master/addons/info), which does awesome things like: story source, props types, defaults values and which values are required or not.

<img
  src="/images/atomic-design-with-react/asset-11.png"
  alt="Proptypes table"
  width="446"
  height="316"
/>

## Conclusion

At the end of project, we reached the initial goals and we believe we left a good legacy, a structure which ensures that the project can grow and that other developers can understand the architecture quickly. Maybe we initially spent some extra time writing stories and etc, but the more the project grows, the more the benefits make clear why we should use such architecture.

However we could see that this architecture probably doesn’t work for every project because it depends on several factors. The main one is that the design needs to be thought in the same way as the development: **in an atomic way**. But the integration between design and development is a point that every project wants to reach, so it becomes a very positive point for **Atomic Design.**

---

Check out the result and the [codebase of this article in the GitHub.](https://github.com/danilowoz/react-atomic-design)

---

### References

- [Boilerplate on GitHub](https://github.com/danilowoz/react-atomic-design)
- [CSS Architecture with ReactJS](https://cheesecakelabs.com/blog/css-architecture-reactjs/)
- [Atomic Web Design](https://bradfrost.com/blog/post/atomic-web-design/)
- [Patternlab](https://patternlab.io/)
- [Using React within a design system](https://medium.com/buildit/using-react-within-a-design-system-73d4bb0cc822)

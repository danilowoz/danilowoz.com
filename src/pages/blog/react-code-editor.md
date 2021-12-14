---
layout: ../../layout/post.astro
type: experiments
title: A React code editor
tagline: How a code editor for beginner developers focused on ReactJS might look.
date: 2021-04-16T15:06:01.607Z
timeToRead: 2 min read
---

Have we already exhausted the possibilities of how we interact with our favorite code editor? Have we got so used to how we code to achieve a certain goal we can no longer see any way to involve it?

Since I started to work at [CodeSandbox](https://codesandbox.io/?from-app=1), I've seen myself facing those issues more often. Besides that, I began to wonder how beginners are struggling to rule the code editor and learn their favorite framework simultaneously.

Therefore, I challenged myself to come up with a code editor/IDE for beginner developers focused on ReactJS and what this concept might look like.

## The anatomy of a component

The first concept came to me some time ago, when I was teaching a friend of mine more about React and how a component works. I remember I said the component itself has a proper "anatomy". Later, I realized it makes a lot of sense because **we know where things are supposed to be in a component.**

In other words:

<img
  src="/images/code-editor/anatomy.jpg"
  alt="Anatomy of a component"
  width="783"
  height="385"
/>

So basically, we can predict what actions the user might take and teach them the best practices. So, this idea evolved to a new concept which are menus with context-sensitive intentions linked to those sectors.

<video autoPlay muted playsInline>
  <source src="/images/code-editor/ide-concept.mp4" type="video/mp4" />
</video>

The whole point of this concept is that we can understand the code to provide a way to make a new code editor with whatever framework or even language we want. I just used React to illustrate the idea.

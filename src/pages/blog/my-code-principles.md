---
layout: ../../layout/post.astro
type: article
title: "My code principles: more human abstractions than coding rules"
tagline: Autogenerating TypeScript types and custom React hooks in React applications with GraphQL Code Generator.
date: 2021-08-30T19:28:06.529Z
timeToRead: 5 min read
---

Over my career, I learned many code principles such as KISS, DRY, SOLID, etc. But recently, I've been thinking about how often I use them when planning a new feature or working on a piece of code in my day-to-day. I mean, I know these principles are there. But they are mostly implicit and not objective actions. So this made me wonder, what really drives me when I'm coding?

I believe everyone has their very own relationship with code and how to approach some problems. That said, I realized I usually spend more time on other aspects when I'm coding rather than subjective points, like if a piece of code looks elegant and/or satisfactorily implemented.

Plus, over time, we grow a set of practices to solve some problems that we face many times throughout our careers as a developer. The more often we use these practices, the stronger they'll become in our code routine, influencing code quality and career growth.

At least for me, this set of practices are more human abstractions, such as values, concerns, mental models, and even results from some sort of traumas from previous experiences, rather than any other rules I learned in college or a blog post. These are my principles, which I split into three main categories:

- **Functionally over implementation:** what are the code purposes?;
- **Development experience:** how do I interact with the code?;
- **Maintainability:** as a living component, how do I treat this piece of code?

## Functionally over implementation

It might sound obvious, but when a product or a piece of a product is designed, it's meant to solve a problem, meaning that there's a clear purpose to exist and a reason to last. If we set this as a starting point, I cannot untie the code implementation to the user experience, and I cannot take that I'm simply a person translating a UI to HTML/CSS.

Probably, the implementation could not be pixel-perfect or made using the latest trendy technique. To be honest, I don't really care about it, as long as it works and provides an exceeding user experience. So, make it work, make it work even better, and then make it the new standard.

If I look at the bigger picture holistically, I can understand the key points to achieve the main goal of a task, and sometimes it's not just delivering it to production. Hopefully, design has a ton of methods that guides us to embrace the problem, and at the end of the day, that's what matters: the problem needs to be solved, not a solution that needs to be implemented.

> "Fall in love with the problem, not with the solution." <span>― Marty Cagan</span>

## Development experience

When you're marking a party, you want everyone to feel welcome and make themselves comfortable. Of course, not everything will go as expected, but at least you try to make yourself very clear about your intentions, and people will appreciate it. So when I'm coding, I know that it's easy to overcomplicate everything. However, I take this fact into account instead of denying it.

By making a code more **explicit,** **discoverable**, and **searchable**, I believe I can provide a clear path about what I was thinking when I coded that piece of code. It doesn't mean that it must be declarative or imperative. I think the right answer will come when you realize how fast you're navigating through the codebase, how productive you feel, and have no doubts about the consequences of your changes.

> "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live." <span> ― John Woods</span>

Furthermore, maintaining a codebase from someone else is an exercise of empathy, so I put myself in the code owner's shoes, putting my judgment aside and trying to leave the codebase better than I found.

## Maintainability

My first principle can sound controversial, but it doesn't mean I'll write spaghetti code, which anyone can barely understand. I need to pave the path for the next developer or myself in the future by following some specific goals.

I aim to build a codebase that is:

- **Objective:** long and descriptive variable names, which provide the right amount of context on what it does;
- **Testable:** make most of the code branches accessible by tests. As you might know, tests implementation is deprioritized, but at some point, they might be a priority, and then it's faster to start with something ready to be tested;
- **Error handling:** you should follow my advice and don't trust in machines because humans build them. So, if machines may fail, they surely will;
- **Documentation:** for internal documentation, I usually describe what's the reason why something was implemented in such a way in the first place, and for public APIs, I usually explain what the user can expect and alternatives;

So, I imagine that the codebase is a living organism or a sort of an unfished piece of art. Many people interact with what you have written, and many others will also do. So for the very last time: we should write code for humans and, definitely, for ourselves. That’s why, I keep myself creative and proactive to make it a better "place to live." Otherwise, every time I open the editor, the code I see will suck, and I might be the author.

> "Any fool can write code that a computer can understand. Good programmers write code that humans can understand." <span>― Martin Fowler</span>

## A disclaimer

This article is written by me and to me. Plus, it doesn't mean that every piece of my code has all these principles. As a regular person, I've already shipped bugs on production many times, and I'll still do. But hopefully, after a long career, these principles will strengthen and guide me to persevere in shipping more reliable implementations.

Moreover, such principles are part of a bigger personal goal: to be part of projects that inspire me to go beyond what I have worked on so far. **I don't want to jump from project to project and copy/paste solutions I've implemented before. This means that I want to feel stupid again, make mistakes and come up with new ideas.**

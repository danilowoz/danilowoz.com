---
layout: ../../layout/post.astro
type: article
title: "My code principles: more human abstractions than coding rules"
tagline: I believe everyone has their very own relationship with code and how to approach some problems, and these are my own.
date: 2022-08-31T19:28:06.529Z
timeToRead: 5 min read
cover: /images/principles/cover.png
---

Over my career, I have learned many code principles such as KISS, DRY, SOLID, etc. But recently, I've been thinking about how often I use them when planning a new feature or working on a piece of code in my day-to-day. I mean, I know these principles are there. But they are mostly implicit and not objective actions. So this made me wonder, what really drives me when I'm coding? 

I believe everyone has their very own relationship with code and how to approach some problems. That being said, I realized I usually spend more time on other aspects when I'm coding rather than subjective points, like if a piece of code looks elegant and/or satisfactorily implemented. 

What’s more, over time, we grow a set of practices to solve some problems that we face many times throughout our careers as developers The more often we use these practices, the stronger they'll become in our code routine, influencing code quality and career growth. 

At least for me, this set of practices are more human abstractions, such as values, concerns, mental models, and even results from some sort of traumas from previous experiences, rather than any other rules I learned in college or on a blog post. These are my principles, which I split into three main categories:

- **Functionality over implementation:** what are the code purposes?;
- **Development experience:** how do I interact with the code?;
- **Maintainability:** as a living component, how do I treat this piece of code?

## Functionality over implementation

Though it might sound obvious, when a product or a piece of a product is designed, it's meant to solve a problem, meaning that there's a clear purpose to exist and a reason to last. If we set this as a starting point, I cannot untie the code implementation to the user experience, and I cannot agree that I'm simply a person translating a UI to HTML/CSS.

In most cases, the implementation could not be pixel-perfect or made using the latest trendy technique. To be honest, I don't really care about it, **as long as it works and provides an excellent user experience**. So, “make it work, make it work even better, and then make it the new standard”.

If I look at the bigger picture holistically, I can understand the key points to achieve the main goal of a task, and sometimes it's not just delivering it to production. Hopefully, design has a ton of methods that guides us to embrace the problem, and at the end of the day, that's what matters: it’s the problem that needs to be solved, not a solution that needs to be implemented.


> "Fall in love with the problem,<br/> not with the solution." <span>― Marty Cagan</span>

## Development experience

When you're hosting a party, you want everyone to feel welcome and make themselves comfortable. Of course, not everything will go to plan, but at least you try to make yourself very clear about your intentions, and people will appreciate it. So when I'm coding, I know that it's easy to overcomplicate everything. Rather than denying it, I keep this in mind.  

By making a code more **explicit**, **discoverable**, and **searchable**, I believe I can provide a clear path about what I was thinking about when I wrote that piece of code. It doesn't mean that it must be declarative or imperative. I think the right answer will come when you realize how fast you're navigating through the codebase, how productive you feel, and don’t have any doubts about the consequences of the changes you’ve made.


> "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live." <span> ― John Woods</span>

Moreover, maintaining a codebase from someone else is an exercise of empathy, so I put myself in the code owner's shoes, putting my judgment aside and trying to leave the codebase better than I found it. 


## Maintainability

My first principle might sound controversial, but it doesn't mean I’m going write spaghetti code, which barely anyone can understand. I need to pave the path for the next developer or my future self by following some specific goals. 

I aim to build a codebase that is:
- **Objective:** long and descriptive variable names, which provide the right amount of context on what it does;
- **Testable:** makes most of the code branches accessible by tests. As you might know, test implementation is very often deprioritized, but at some point, it may be a priority, and then it's faster to start with something ready to be tested;
- **Able to handle error:** you should follow my advice and not  trust machines because humans build them. So, if machines may fail, they surely will;
- **Well documented:** for internal documentation, I usually describe the reason why something was implemented in such a way in the first place, and for public APIs, I usually explain what the user can expect and any alternatives.
 
So, I imagine that the codebase is a living organism or a sort of unfished piece of art. Many people interact with what you have written, and many others are yet to. So for the very last time: we should write code for humans and, definitely, for ourselves. That’s why I stay creative and proactive to make it a better "place to live." Otherwise, every time I open the editor, the code I see will suck, and I might be the author.

> "Any fool can write code that a computer can understand. Good programmers write code that humans can understand." <span>― Martin Fowler</span>

## A disclaimer

This article is written by me and for me. However, that doesn't mean to say that every single piece of my code is aligned with these principles. As a regular human being, I've already shipped bugs on production many times, and I bet I'll continue to do so. But hopefully, after a long career, these principles will strengthen and guide me to persevere in shipping more reliable implementations. 

What’s more, such principles are part of a bigger personal goal: to be part of projects that inspire me to go beyond what I have worked on so far. **I don't want to jump from project to project and copy/paste solutions I've implemented before. This means that I want to feel stupid again, make mistakes and come up with new ideas.**


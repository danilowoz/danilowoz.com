---
layout: ../../layout/post.astro
type: article
title: Bringing your blockchain business to React Native
tagline: A humble perspective of what it was like to create a Crypto Currency wallet using React Native and its main challenges during the planning and the development stages.
date: 2020-07-21
timeToRead: 8 min read
cover: /images/bringing-your-blockchain-business-to-react-native/cover.png
---

Crypto wallets and Decentralised Applications ([dApp's](https://blockgeeks.com/guides/dapps/)) are becoming more popular each day. It is already possible to find a lot of industries adopting a decentralized approach: financial business, social networks, insurance, supply chain, only to mention a few.

Also, the benefits of introducing blockchain technology on mobile devices, for example, are evident enough, and apparently worth the effort for companies which are willing to invest in their development. Factors like immutability, transparency, and security are concepts that, not only users but also business owners, recognise as a must when pondering about digital products.

There is a lot of fuss around React Native versus native apps – and even though that's an entirely different issue – in our understanding, when budget is somehow the matter of interest, React Native is arguably the go-to choice. However, when it comes to implementing blockchain technologies with [React Native](https://reactnative.dev/), the uncertainties are unquestionable: it's a fairly recent environment which still somehow lacks expert developers out there.

## Background

We at [Significa](https://www.significa.co/) set ourselves to challenge precisely that.

When we were presented with [Vertbase](https://www.vertbase.com/), a project which entailed the concerns we just mentioned above, our thoughts were with React Native. Straight off the bat.

However, it was far from being a walk in the park. Even though we've undergone a lot of development in ReactJS, React Native was at the time somewhat new to us and topping it up with blockchain technology, could have been a shot in the leg.

But fear not!

A few hours later and it was perceptible just how efficiently React Native bridged the gap between JavaScript and the Native Modules of both iOS and Android Operating Systems.

With this, and being given the challenge of building a non-custodial wallet that is meant to support a few Crypto assets, asset transactions, and create new wallets – amongst other features – it ended up being a pretty solid App.

However, it was far from a relaxing project. The initial time estimate felt – truly – short due to all the investigation we had to perform. This was because of all the unexpected problems we had to face throughout the entire timeframe of development, which at the time were completely unlike anything we had faced before. Often, we had to rely on the open-source community which had previously done an amazing job at some React Native and blockchain libraries.

## The issues

As an act of reciprocity, we'll guide you through some of the bigger issues we faced whilst developing the application. Also worth mentioning, the list below is still work in progress as we're certain further issues will pop up every day, from Operating System updates to the deprecation of some libraries we've used, as well as potential security vulnerabilities which may arise.

### JavaScriptCore

If you have past experience with React Native, it's likely you'll know that it runs a specific version of the JavaScript Engine – [JavaScriptCore](https://developer.apple.com/documentation/javascriptcore), which Safari is built on.

Therefore, as some JavaScript functions are not yet available in JavaScriptCore, naturally as a consequence, some of the most popular JavaScript packages relevant for this kind of product – such as generating wallets or broadcasting transactions to the network – to this date, are not yet available in JavaScriptCore, meaning it's not ready to be used with React Native.

However, such packages are available for NodeJs instead. Initially, what could have been a nightmare turned out plausible – once more, with the help of the community, we got to some workarounds which made possible bringing those functions from NodeJS to React Native.

### Technical debt

Things like hierarchical deterministic wallet, BIP32, BIP44, WIF, private key, address keys, lightning network, just to mention a few amongst other subjects you probably haven't heard of.

Perhaps these may – or may not – be the sole reason why one hasn't built a thing on top of the blockchain technology.

Even though throughout this journey, we found a lot of articles, videos, talks, crash courses, and documentation which provided us with the required information to understand the basics of the blockchain infrastructure, the practical reality is utterly different. In fact, the community lacks realistic examples on how to build applications for the real world, especially on popular languages for the web, such as JavaScript – which on its own is not so popular within the blockchain universe.

### Asset implementation

Most crypto assets require their own dedicated implementation. Moreover, each requires dedicated libraries and/or frameworks to connect JavaScript and blockchain technology.

Depending on how many cryptocurrencies any given product is meant to support, the complexity may increase. In fact, there's not a one-size-fits-all when it comes to crypto assets. Almost each of them requires a dedicated, standalone process to get the connectivity going. Truth be told, have in mind that you'll have to implement one asset at a time while making sure it has JavaScript support.

In short, there isn't a single solution that covers every single cryptocurrency out there, at least when the goal is to remain decentralized. Even though you might – correctly – assume a big portion of the assets are built on the same infrastructure – extended from others, per se – every single one of them will require basic implementation and adaptation from previously integrated assets.

### Public code validation

It isn't necessarily a rule, neither is this compulsory, but users withing the blockchain community are keen to validate application codebases before putting any extra effort into it, making sure such applications are secure and trustworthy.

Therefore, keep in mind it might make sense to Open-source the code at some point. It will be scrutinised by its users, but that's just a good thing – you'll push yourself towards a better, well-documented codebase.

On the flip-side of the coin, make sure all sensitive data or non-meant-to-be-public information is safely located somewhere else and not exposed.

### Security - responsibility

People's money is on the line with these kinds of applications. Naturally, security is a fundamental concern when developing financial applications.

Users will be performing transactions, storing wallets' access keys, and even generating new ones. Due to the nature of these products, development must be responsible and lucid as every decision matters – even those that sometimes seem like no-brainers may be extremely relevant when it comes to security. Bottom line, there are no dumb questions or obvious answers when security and money are on the line.

On top of this, as you might have guessed by now, Open-source codebases can become an issue if you're not careful enough. Be extra careful when adding third-party party dependencies, beware of vulnerabilities or security breaches.

It's also worth pointing out that you should keep in mind that React Native and regular ReactJS – or the entire web environment as a whole – are deeply different at some point. A straight-forward issue on the web might be trickier than expected to deal with on React Native. For example, when developing these kinds of products, as you know, data must be stored locally on the device. For that matter, it must be placed in a safe, concealed place in order to avoid exposure to malicious users. With regards to this, make sure you choose the right approach to deal with the right kind of data.

## One possible approach

There isn't a shortcut when it comes to developing React Native Apps in the blockchain. A lot of issues were solved, but a lot more will arise. That's just the nature of new technologies, nobody is 100% certain. There isn't a formula to help you smooth your way through this kind of project, there's just too much to consider and too many variables in the mix.

However, there are some points we've learned with this experience which we can recommend for you to take a look at:

- **Codebase reliability:** make sure the codebase is type-safe, has great test coverage, handles errors properly, and is built on top of an architecture prepared to be scaled. Languages like Typescript or a tool like Flow will definitely help you on this path;

- **Security-driven development:** keep all dependencies up-to-date. More often than not, security issues are identified and to tackle that, new package versions are released. Also, have a careful, thorough look at each package or library before settling for a specific one: see Open and Closed issues, how many projects are using it, who else is using it too, which dependencies are being made use of, and so forth.

- **Try. Start small, aim big:** on the very first stage, take enough time to learn more about blockchain and how to implement it. There's a lot of content available out there, make sure you know where to start your research and, above all, what to search for. Don't hold back on moving on if you feel like so. Learning will come from the mistakes you make. Nevertheless, start small, aim big. Start with some small code samples to try out some basic concepts before moving on to the hardcore stuff.

- **Open-source, open mindset:** Share your code with the community and ask for feedback. Let more experienced developers help you out. You may be or you may become more experienced than others, and for this matter, spread your knowledge, help them as well. Write articles, open-source your code, help other people grow. There are still a whole lot of unanswered topics when it comes to blockchain - jump-start discussions, call blockchain experts, make sure you're on the right path to help make sure others are on the right path.

Bottom line, we faced a bunch of problems while developing a Cryptocurrency App in the Blockchain using React Native. It had its ups and downs, but in the end, it was extremely rewarding. We've learned a lot with our own mistakes, we spent hours figuring out one single deployment, but in the end, the whole thing got sorted. We hope we're paving the way for those who follow.

In case you have any questions or facing any issues, feel free to get in touch with me.

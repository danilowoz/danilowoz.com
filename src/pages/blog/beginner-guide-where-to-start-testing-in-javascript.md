---
layout: ../../layout/post.astro
type: article
title: "Beginner Guide: where to start testing in JavaScript"
tagline: A methodology or mental model for those who aim to start writing unit tests in Javascript, but still doesn't know where to start. This beginner guide will allow you to begin writing decent unit tests from a sane path.
date: 2020-10-17
timeToRead: 5 min read
cover: /images/beginner-guide-where-to-start-testing-in-javascript/cover.png
---

One of the most common questions I've been asked by my colleagues recently - when they start writing unit tests - is: well, what should I test? Regardless of the language, one of the main challenges is knowing what to check and how to be sure that it covers all possible bugs - which is almost an impossible task. In the following, I would like to introduce you to one possible way to write tests, making you feel more confident and productive while writing unit tests in Javascript.

It's worth mentioning that the goal here is not to discuss how much unit testing will make your application bug-free nor what kind of technology/library you should use; this conversation is for another time. However, I'm assuming you do want to write unit tests in JavaScript, and you're looking for a guide for writing useful tests.

### The nature of the unit test

First of all, you'll need to set up your stack to support unit tests. From vanilla Javascript to React, many excellent tools can provide APIs to make it easier, so I'm going to leave some useful links that will help you in this step, like [Jest](https://jestjs.io/docs/en/getting-started) and [React testing library](https://testing-library.com/docs/react-testing-library/intro).

Afterwards, there is some consensus in the community on how the unit test should look and its anatomy:

- **Atomic:** each assertion must have a clear purpose and test only one (with expectations) result or piece of the function;
- **Independent:** it needs to be dependency-free, or in cases where that's not possible, it must be mocked. The dependency here means everything in this particular assertion needs to work correctly, like a submit form that dispatches a request. In this case, the request doesn't belong to the submit test;
- **Pure:** the assertion must not have any side-effects that are not handled by the return of the function; for instance: given specific parameters, the returned values should be predictable;
- **Business logic-only:** write assertions that ensure the methods, rules, and the primary purpose of the function is working as expected, and does not causes side-effects, reactions in other modules, or even UI changes.

### The three steps

The best way I've found to describe this idea shortly is to split it into three steps, which will guide you when writing unit tests:

#### Purpose

It might sound obvious, but the most important thing about writing unit tests is to ensure that the implementation is working as expected, along with preventing regressions as development continues. In other words, the test will let you know if some future change breaks the functionality of your tested functions.

So to achieve this goal, ask yourself what the purpose of the function is:

- What is this supposed to do? And what is not supposed to do?
- Given “these“ arguments, what is the return?
- Are the values returned predictable enough?
- On a date implementation: performing the test in a different timezone, what is the result? Does it still work?
- On the React component: what does it render? Are the events are fired?
- Also, in React components: does it support internationalization, click events, state updates, or any kind of dynamic variation that would be worth being tested?

```js
describe("pxToRem - Purpose", () => {
  it("should receive a number and return the value in rem", () => {
    const result = pxToRem(16);

    expect(result).toBe("1rem");
  });

  it("should round the number to keep only one decimals", () => {
    const result = pxToRem(22);

    expect(result).toBe("1.3rem");
  });

  it("should try to convert a string in a number", () => {
    const result = pxToRem("16");

    expect(result).toBe("1rem");
  });

  it("should convert a number to rem with the body font-size argument", () => {
    const input = 16;
    const bodyFontSize = 20;

    const result = pxToRem(input, bodyFontSize);

    expect(result).toBe("0.8em");
  });
});
```

Here will be where you could spend more time writing assertions since it needs to cover all internal conditionals, branches, and variations of your implementations. It will make you more confident that your application works.

### Avoiding errors

Once you are sure that everything is working correctly, and returning the expected results, the next goal is to try to break your function as hard as possible. Focus on covering all unhandled errors, and create real-world scenarios.

For instance, sometimes you don't have control over arguments and contexts, so it’s good to know how your implementation will behave:

- Pass wrong arguments (like undefined, null, or an invalid date) or do not pass some of them (even those that are required);
- Execute in different contexts, or perform the function more times than expected;
- Regardless of type-checking (like Typescript or Flow), try to mix up all arguments (in some cases, we don’t control the data flow);
- Test as close to the real scenario as possible; any way to throw an error here is valid.

```js
describe("pxToRem - Avoiding error", () => {
  it("should return 1rem if the argument is null", () => {
    const result = pxToRem(null);

    expect(result).toBe("1rem");
  });

  it("should return 1rem if the argument is not a number", () => {
    const result = pxToRem(NaN);

    expect(result).toBe("1rem");
  });

  it("should work correctly with the 2nd argument is invalid", () => {
    const result = pxToRem(16, null);

    expect(result).toBe("1rem");
  });
});
```

Of course, after finding all those errors and places that weren't covered, it’s time to fix it!

### Improvements - maintenance

Sometimes writing unit tests might lead to other tasks. Indeed you’ll be able to realize while you’re writing tests that your implementation could be improved or even split in smaller pieces, but keep in mind these changes and improvements enhance the maintenance and that all parts of code are touched by assertions. Think about these issues:

- Isn’t there any way to make it simple to maintain?
- Could it be split into smaller pieces?
- Is every part of the code tested?
- Is there a way to turn it faster?
- I once read that if it is worth testing, it is worth documenting too. I’d strongly suggest trying to describe how and mostly why you’ve built it like that. Would your future self understand this implementation?

## Next steps

I like to think of unit testing not only as writing assertions with your favorite framework but rather as a whole pack. You need to have the right mindset and be willing to refactor many files in order to achieve your goal. On the other hand, you need a starting point, and I guess this provides you a good direction, to then go further with more complex tests and find out your favorite way to write assertions.

Once you’re comfortable with all the content introduced here, I’d recommend looking at some methodologies like [TDD](https://technologyconversations.com/2013/12/20/test-driven-development-tdd-example-walkthrough) and [BDD](https://medium.com/javascript-scene/behavior-driven-development-bdd-and-functional-testing-62084ad7f1f2); plus some different approaches to testing applications like [end-to-end](https://www.softwaretestinghelp.com/what-is-end-to-end-testing/) and [integration tests](https://www.guru99.com/integration-testing.html).

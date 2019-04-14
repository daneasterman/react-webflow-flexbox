# Building a twitter style "tweetbox" with React hooks and classes

## Purpose

The aim of this project is to compare two approaches of building a simple "tweetbox" UI component. The first uses the traditional React class with `this.state`, while the second uses the new React state hook called `useState`.

I'm very much open to any way the code could be improved! Here's a screenshot:

![Tweetbox](https://i.imgur.com/285iHJO.png)

## Getting Started

This project was bootstrapped with `create-react-app` to make it faster and easier to get up and running. We want to prioritise coding over installing and configuring!

To get a local copy running on your computer:

1. Clone this repo: `git clone https://github.com/daneasterman/class-hooks-tweetbox.git`
2. Install all the project dependencies: `yarn install`
3. Start the project: `yarn start`

Please let me know if you have any problems getting set up. You can contact me on twitter: `@daneasterman`

N.B: the above assumes you have node and yarn already installed.

## Coming Soon

- Some detail on exactly which features have been implemented.

- For those who want to dive straight in and skip the getting started steps above, I also want to put this on Codepen.

- Revamping the way the CSS works with Tachyons ie. cleaning up all the classNames and extra divs.

## Credits

I was heavily influenced by an earlier tutorial on Vue.js by Matt Rothenberg while creating this tweetbox component. Much of the way I used the Tachyons CSS libary is derived from here - even though I'm not entirely satisfied with how I've used it. The article on freeCodeCamp is called: [A Vue.js introduction for people who know just enough jQuery to get by](https://medium.freecodecamp.org/vue-js-introduction-for-people-who-know-just-enough-jquery-to-get-by-eab5aa193d77)

Matt's article originally helped me to learn basic concepts in React by building a kind of mashup with another tutorial from 2015 (under construction) which can be found here: [React.js Introduction For People Who Know Just Enough jQuery To Get By](https://chibicode.com/react-js-introduction-for-people-who-know-just-enough-jquery-to-get-by/)

Warning: the JS bin snippets in Shu Uesugi's tutorial don't seem to work anymore and it uses much older React syntax like `createClass`.

This recent article from CSS tricks has also been extremely useful: [Intro to React Hooks](https://css-tricks.com/intro-to-react-hooks/). The idea of using my own `saveTweet` function came from this source).

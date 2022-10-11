# Frontend Mentor - Interactive pricing component solution

This is a solution to the [Interactive pricing component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-pricing-component-t0m8PIyY8). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Use the slider and toggle to see prices for different page view numbers

### Screenshot

![](./screenshots/desktop.png)


### Links

- Solution URL: [https://www.frontendmentor.io/solutions/interactive-pricing-component-using-flexbox-reGeMAIKgn](https://your-solution-url.com)
- Live Site URL: [https://awsmpuff.github.io/interactive-pricing-component/](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```html
<!-- Learn about range type input -->
<input class="slider-bar" type="range" id="points" name="points" min="0" max="4" value="2">
```
```js
// Set process color before and after slider
slider.style.background = `linear-gradient(to right, red 0%, red ${(slider.value - slider.min)/(slider.max - slider.min)*100}%, blue ${(slider.value - slider.min)/(slider.max - slider.min)*100}%, blue 100%)`;
slider.addEventListener("input", () => {
    slider.style.background = `linear-gradient(to right, red 0%, red ${(slider.value - slider.min)/(slider.max - slider.min)*100}%, blue ${(slider.value - slider.min)/(slider.max - slider.min)*100}%, blue 100%)`;
})
```

## Author

- Website - [Wanxia Xie/Laurenxx](https://www.your-site.com)
- Frontend Mentor - [@awsmPuff](https://www.frontendmentor.io/profile/awsmPuff)


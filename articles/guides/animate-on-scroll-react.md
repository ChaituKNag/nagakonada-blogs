---
title: Animate on scroll in React
description: Learn how to animate sections of your page into view in React, as you scroll to those sections.
sidebar_label: Animate On Scroll
---

Have you worked on animations in React? Do you think they are different from normal CSS animations? Are they difficult to achieve?

Well, they are easy but they are not obvious. If you are good with CSS, then yeah you can animate things, but React plays with DOM nodes so differently that you may sometimes not get a level-ground to play with your CSS.

This post does not go over the details of how you do animations in React. If you are looking for that, do let me know in the comments.

This post tries to address a specific scenario: how to animate sections of your page into view as you scroll to those sections.

## The challenge

Product owners want the apps to be blazing fast. At the same time they want them to be beautiful and well designed and have a pleasant user experience. Sometimes depending on the type of web-site and the target consumers, that might mean that the app should contain some animations.

Now writing up animations in plan HTML and CSS is quite easy because you are not dealing with involvement of JavaScript there. Browser understands CSS and converts the rules provided there to swift animations very easily.

When you club the idea of blazing fast sites that still animate and do UI stuff, that is where things start to get a little tricky. You might go about using a modern framework like React (based things like Gatsby or Next.js) or Vue (or Angular, I know I know 😜). Now, each of these works differently and when it comes to animations they provide ways of achieving your required animations. All these ways are not quite as straight forward as working with CSS. To say the least, they do not scale well. Of course, since they are all JS based frameworks, you might get some flexibility and reusability but you always have the overhead of learning the methods recommended by these tools and these methods may not always suite your way.

**One such scenario** is that you have a single column page with a bunch of sections and your product owner comes and tells you that these sections should not show up right away as static stuff. Instead their ask is that each of those sections should have some sort of fly-in animation (from left or right) and that they should animate when you scroll to them and not at the time the page loads. For our convenience, lets assume the project is built on React.

How do you achieve this?

## The solution for today

Of course, we have many wonderful libraries that help with animations. Some of them are: [react-transition-group](https://reactcommunity.org/react-transition-group/), [react-spring](https://www.react-spring.io/docs/hooks/basics), [react-reveal](https://www.react-reveal.com/docs/)

Today, we will make use of something called [framer-motion](https://www.framer.com/api/motion/). I like this one particularly because it is very easy to use, you can achieve complex animations with simple configurations and you can animate between pages as well and my most favorite feature is exit animations. Exit animations are especially tricky because normally your component gets unmounted before the animation finishes (or even triggers) and achieving full animation is a little tricky whereas this tool allows us to specify exit animation as a prop which is cool.

To achieve scroll based animations, we will leverage a capability in JavaScript called `IntersectionObserver`.

Alright let's get started.

> **Note:** that we are not dealing with dynamically loading components through `React.lazy` or code-splitting or any of that stuff in this one. We have everything loaded on to the page up-front and we show them through an animation when user scrolls up to them.

### The setup

I will go over the solution by giving the step by step instructions so that you can follow. But if you are in a hurry, the TLDR; demo is [here in codesandbox](https://codesandbox.io/s/framer-motion-lazy-show-qx4qn?file=/src/App.js), you can take a look at it and may be copy paste stuff.

Anyway, for the setup, go ahead and create a `create-react-app` project or anything similar.

```bash
npx create-react-app framer-motion-lazy-show
## yarn create react-app framer-motion-lazy-show
```

We need `framer-motion` so go ahead and install it.

```bash
npm i framer-motion
## yarn add framer-motion
```

### Get started with the component

Our hero is one component that handles revealing contents through a fade-in animation when user scrolls to it. Initially contents will be visibly hidden (notice contents are not unmounted).

Lets create `LazyShow.js` component with some boiler-plate:

```javascript
const LazyShow = ({ children }) => {
  return <div className="lazy-div">{childen}</div>;
};
```

All its doing at the moment is get the children and render them in a div with class `lazy-div`. Lets style it a bit.

```css
.lazy-div {
  /* height: 50vh; */
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin: 20px;
  padding: 20px;
  font-size: 1.5em;
}
```

Font size is exaggerated here for demo purposes so that we see each of the LazyShow components occupy much of the view-port height. Alternatively we could have given a `height: 50vh;` or `min-height: 80vh` to make our point, but these styles do not affect the functionality of the component.

### Add in the animation

In order to make use of `framer-motion` we would have to import `motion` element and convert our normal `<div>` to a `<motion.div` component.

```javascript
import { motion } from "framer-motion";
```

Then we can specify the `initial` and `animate` props for our fade-in affect.

So go ahead and update the JSX as so:

```javascript
<motion.div
  className="lazy-div"
  initial={{ opacity: 0, x: -10 }}
  animate={{ opacity: 1, x: 0 }}
>
  {children}
</motion.div>
```

All we are saying is that initially the opacity of our child component is `0` and as the animation finishes it becomes `1`. Also we are moving the component using `x` key, initially it will be `10px` towards left (negative) and then it becomes `0` which is its normal position. So essentially the whole contents would be fading in from the left.

There is another concept in `framer-motion` called variants, where you can specify `variants={fadeInVariants}` and define `fadeInVariants` with `initial` and `animate` keys to do the exact same thing. This `variants` concept has the advantage of clean less-cluttered JSX. But we do not require that for this demo.

### Preview the component

Add a bunch of the `<LazyShow>` in your `App.js`

```javascript
const LazyShowWrapper = () => {
  return (
    <>
      <LazyShow>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </LazyShow>
      {/* add a bunch of these*/}
    </>
  );
};

export default function App() {
  return (
    <>
      <LazyShowWrapper />
    </>
  );
}
```

Now you would see in the preview that the component renders but immediately runs the animation and be done with it. That is not what we want.

### Control animation start

We should control when the animation starts. For that we can use the `useAnimation` hook that `framer-motion` provides and get the `controls` module. Replace the `animate` prop value with this `controls` api and use the `controls.start` function to start the animation.

```javascript
import { motion, useAnimation } from "framer-motion";
```

Changed component looks like this:

```javascript
const LazyShow = ({ children }) => {
  const controls = useAnimation();
  useEffect(() => {
    controls.start({
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    });
  }, [controls]);
  return (
    <motion.div
      className="lazy-div"
      initial={{ opacity: 0, x: -10 }}
      animate={controls}
    >
      {children}
    </motion.div>
  );
};
```

Now, with the above changes, the animation is controlled but it still triggers immediately after the component loads. We still want to control the animation to show when user scrolls to it.

### Listen to visibility (Intersection Observer)

We can use the `useOnScreen` hook available in [here](https://usehooks.com/useOnScreen/).

```javascript
function useOnScreen(ref, rootMargin = "0px") {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.unobserve(ref.current);
    };
  }, []);

  return isIntersecting;
}
```

Quickly, what this hook is doing is taking a ref and root margin and maintaining an internal `isIntersecting` state which becomes true when the ref is intersecting.

Now let's update the `LazyShow` component to leverage this new hook.

```javascript
const LazyShow = ({ children }) => {
  const controls = useAnimation();
  const rootRef = useRef();
  const onScreen = useOnScreen(rootRef);
  useEffect(() => {
    if (onScreen) {
      controls.start({
        x: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          ease: "easeOut"
        }
      });
    }
  }, [onScreen, controls]);
  return (
    <motion.div
      className="lazy-div"
      ref={rootRef}
      initial={{ opacity: 0, x: -10 }}
      animate={controls}
    >
      {children}
    </motion.div>
  );
};
```

We leverage `useRef` api to get the reference of our `motion.div` that needs animation. We update the dependencies list of our only `useEffect` to track the `onScreen` boolean that is returned out of the `useOnScreen` hook.

So when the component comes into view, the `onScreen` becomes true and the `useEffect` executes and the animation starts.

The `transition` key in the `control.start` call controls the duration of the animation and also the ease parameter.

This is the final change. Now you can see that the component shows up with the animation when user scrolls to it.

The solution demo is here:
{% codesandbox qx4qn runonclick=1%}

## Conclusion

There are many ways to achieve the same effect. Did you try something else previously? Let me know how it worked out for you. I would like to know your feedback. Do you want me to create a post on anything else? Do let me know.

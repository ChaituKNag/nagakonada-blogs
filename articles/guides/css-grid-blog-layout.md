---
title: Blog post layout using CSS grids
description: A simple step by step guide on creating a blogpost layout using CSS Grid.
sidebar_label: Grid Blog Layout
---

## Recap

Welcome back!

In the last [article](https://dev.to/chaituknag/blog-post-layout-using-css-flexbox-383j), I explained how I tried to achieve a typical blog-post layout using [`flexbox`](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox). Here is the [link to the final layout](https://cdpn.io/chaituknag/debug/PoNvXmJ/bZrQWERaDgyk) in CodePen.

I mentioned that there were a couple of hacks we had to do to make it work, because of the way flexbox works. It is unidirectional in nature, which means, at any time you can only affect the layout in one direction, row or column. If you wish to make a complex layout with sections spanning across multiple rows and columns in a random fashion, then the best option (and somewhat of the only option) is CSS grids.

The last time I checked the compatibility for CSS grid layout in [CanIUse.com](https://caniuse.com/css-grid), it is hovering around 95%. It is a very good coverage, you can confidently use CSS grids for your layout needs and this number will only become better going forward.

So, why don't we go ahead and implement the same layout in CSS grids?

## Final result

Just like the previous one, we achieve the same UI, no difference at all. But internally, it is a lot cleaner and easy to understand.

Here is the [codepen](https://codepen.io/chaituknag/pen/zYqQyoV).

## Demo

![blog-article-layout-using-css-grid](https://dev-to-uploads.s3.amazonaws.com/i/6nm1gv0r8rgxdozm5zta.gif)

This is it, that is what we get. Not so much different from the previous [flexbox example](https://codepen.io/chaituknag/pen/PoNvXmJ?editors=0100), much simpler internally.

## Let's look at the improvements

### Addressing the double `h1` problem

We have done some structural changes to the HTML. It no longer has two `h1`s, which is good for our SEO stuff and semantics.

Now the structure looks like this:

```html
<!-- content wrapper -->
<!-- the h1 title -->
<!-- the left nav -->
<!-- the reading column -->
<!-- content wrapper ends -->
```

This is so much simpler than the one in `flexbox` version.

We use the beauty of CSS grids and specifically `grid-template-areas` property to achieve our desired layouts, both in desktop and mobile views.

To make grids work, we apply `display: grid` to the root level `.content-wrapper` div.

Unlike flexbox which might require multiple parent divs to achieve complex layouts, the grid system does require only one parent div and all the sections can be immediate children of that parent.

Lets see the magic of `grid-template-areas`.

### In desktop view:

The content wrapper div looks like this:

```css
.title {
  grid-area: title; // this is the grid area label
}

.left-nav {
  grid-area: leftnav;
  position: relative;
  max-width: 100%;
}

.reading-column {
  grid-area: reading;
}

.content-wrapper {
  display: grid;
  grid-gap: 0 2rem;
  grid-template-areas:
    ". title"
    "leftnav reading";
  grid-template-columns: minmax(250px, 1fr) 3fr;
  width: 100%;
}
```

We firstly provide `grid-area` label to each of the siblings and use those names in `grid-template-areas` rule of the parent to decide the layout.

There are two strings in the value of `grid-template-areas`, they represent two rows. And the contents of each string represent the columns. Each string has two tokens, so two columns each.

So, the first row has nothing in the first column (because `.` represents nothing) and has the `header` in the second column.

The second row has the `leftnav` in the first column space and the `reading` section in the second column space.

This is what we want.

### Mobile view:

Now lets look at the `grid-template-areas` value in case of mobile view:

```css
@media only screen and (max-width: 900px) {
  .content-wrapper {
    grid-template-areas:
      "title"
      "leftnav"
      "reading";
    grid-template-columns: 1fr;
  }
}
```

Here there are three strings, so three rows. And each string has only one token, so only one column. As simple as that.

### Controlling width of the left nav section

Notice this line:

```css
.content-wrapper {
  ...
  grid-template-columns: minmax(250px, 1fr) 3fr;
  ...
}
```

There is a function we are using here called `minmax`. What this does is it fixes the minimum and maximum width values for each column (since it is `grid-template-columns`). In this particular case, we want the first column of the `.content-wrapper` to have a minimum of `250px` and a maximum of `1fr`. `1fr` means one fraction.

The second column has 3fr always (no `minmax` applied), so as long as the total width of `.content-wrapper` is such that the total fractions (1fr + 3fr = 4fr) is more than 4 times 250px, the width of the leftnav column will be that much (total width / 4). But as soon as that becomes 250px or less, the leftnav takes up 250px and the rest is divided to three fractions (3fr).

So, when the overall width is 1200px, the left column width is 1fr (out of 4fr) which is 1/4 of 1200px which is 300px.

Whereas when the overall width is just 900px, the leftnav takes up 250px and the reading section width is 650px (900 - 250).

Summing up, you can notice that the size of the leftnav increases slightly as you keep increasing the window width.

In the mobile view, there is only one column and all the rows have `1fr` width, so they occupy complete width.

### Reading column width

There are `.reading-column__section`s within the reading column and thanks to the below rules, the maximum width of these sections does not exceed `60ch` even though the column itself is spanning till the right side edge.

```css
.reading-column__section {
  width: 100%;
  max-width: 60ch;
}
```

## Conclusion

If you are new to flexbox and grids in CSS, it is high time you learn them. There are many good resources for you to understand them. The browser support is getting better and better.

Please do suggest if you want me to achieve any other feature in this particular example. Or if you like it, please let me know what you learned.

Subscribe to my [**YouTube channel**](https://www.youtube.com/channel/UCl5dc2m9rRGZsAu04ytfDjw/featured?view_as=subscriber) for many such developer tips.

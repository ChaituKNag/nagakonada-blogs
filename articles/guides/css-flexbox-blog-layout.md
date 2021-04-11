---
title: Blog post layout using CSS flexbox
description: A simple step by step guide on creating a blogpost layout using CSS Flexbox.
sidebar_label: Flexbox Blog Layout
---

## Intro

Lately, I have been thinking a lot about CSS. It is so wonderful how far CSS has come along. Browser support is awesome for new features like Flexbox and Grids in CSS.

When you think about creating complex layouts, it is no longer a dread or nightmare. Rather, it is just fun to create them, isn't it?

So, why not get our feet wet and start off by creating some layouts on our own. Along the way, why not learn a new concept or two!

> The best way to learn is to write code.

## Final result

This is what we are building today. This is a typical layout when you come across blog article layouts.

There is a header, a page navigation section and the rest of the page contains sections, each with a section header and some content.

Now, in larger screen sizes, the layout can split into two columns, the left column being the table of contents and the right column is the sections content.

I made the table of contents floating when you scroll the page so that it is always visible for you, very typical these days.

Also, according to [Kevin Powell](https://www.youtube.com/user/KepowOb) (watch [this video](https://youtu.be/dgbFtMBOMlA), it is awesome), we need to limit the total width of the text column to be a max of `60ch`.

Here is the [codepen](https://codepen.io/chaituknag/pen/PoNvXmJ).

## Demo

![blog-article-layout-using-css-flexbox](https://dev-to-uploads.s3.amazonaws.com/i/49mqbx1cgmns67nlek3b.gif)

## Lets kick it off

![Lets begin](https://dev-to-uploads.s3.amazonaws.com/i/uixuakj6epyvgx9ziik4.jpg)

For the rest of the tutorial, we will be working towards the above code.

### The all important template

Go ahead and start your coding, create an empty html 5 document and create the default structure.

It looks something like this:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body></body>
</html>
```

> TIP: You can get the above structure in VSCode (thanks to Emmet) by typing `!` and hitting tab in a new HTML file

The most important line in the above code is the meta viewport tag. It should have the `width=device-width` and `initial-scale=1.0` to make responsive stuff work in mobile views.

### A little bit about the structure

We have a page title, a navigation section and some content sections.

In the desktop view, we want to display the page title aligning to the content sections column. We want the navigation section towards the left.

In the mobile view, we want them all to be in a single column, but the left navigation should now go in between the page title and the sections.

### The problem with this layout

You might think, the markup structure should look like this:

```html
<!-- page title h1 -->
<!-- left nav list -->
<!-- content sections -->
```

The problem with this is very simple. How would you get only the left nav and content sections to be in two columns in the desktop layout?

Now you can do it like this:

```html
<!-- page title h1 -->
<!-- two column wrapper -->
<!-- left nav list -->
<!-- content sections -->
<!-- two column wrapper ends -->
```

The above layout works fine now, you can toggle the layout of the two column wrapper div to be two column or single column layout based on view port widths.

But the **big problem** is that the page title will not align with the content sections in the desktop view. Instead it will always be on the left side. Now, as a hack, you may use some javascript to find out the width of the left nav and add left margin to the page title when the viewport width changes. This is kind of hack-ey.

What I would do instead is, to use two headings in two different locations and show-hide them based on the layout.

```html
<!-- page title h1 (for mobile) -->
<!-- two column wrapper -->
<!-- left nav list -->
<!-- reading column -->
<!-- page title h1 (for desktop) -->
<!-- content sections -->
<!-- reading column ends -->
<!-- two column wrapper ends -->
```

### The markup

Here is how the markup looks like:

```html
<h1 class="title">Lorem ipsum dolor sit amet</h1>
<div class="content-wrapper">
  <nav class="left-nav">
    <ul class="left-nav__list">
      <li class="left-nav__list-item">
        <a href="#" class="left-nav__link">Lorem ipsum dolor.</a>
      </li>
      <!-- rest of the links-->
    </ul>
  </nav>

  <div class="reading-column">
    <h1 class="title">Lorem ipsum dolor sit amet</h1>
    <div class="reading-column__section">
      <h2 class="reading-column__title">
        Lorem ipsum dolor sit amet, consectetur.
      </h2>
      <p class="reading-column__desc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius est
        tenetur possimus ipsum. Nostrum nobis odit delectus et excepturi, quis
        repudiandae facere, expedita dignissimos, quo nihil? Veritatis,
        voluptates expedita corporis earum esse illo ipsa vitae ab. Molestiae
        officiis officia aut? Explicabo earum quis officia quo eligendi eveniet
        reprehenderit sint dolores?
      </p>
    </div>
    <!-- rest of the sections -->
  </div>
</div>
```

Notice, there are two h1 tags, one at the root level (inside `body`), the other one inside the `.reading-column` div.

I know, you might be thinking - two `h1`s inside the markup, is it like violating the SEO rules or something? Yes it kind of does. But at least we got one h1 right up in the markup. Do you think there is a better way? Leave a comment plz.

### Lets dive into the CSS

Now, having consistent CSS is every FE guy's dream, right? The important thing to take care up front for this is to have some CSS resets.

This is what I start with:

```css
* {
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
  font-size: 1.2rem;
  line-height: 1.5;
  margin: 2rem;
}

img {
  width: 100%;
}
```

Now, the `font-family`, `font-size` and `margin` are optional, but I included them anyway. The most important ones are `box-sizing` and image `width`. Of course, there are many more resets you can do.

#### Image width thing:

By default, all `<img>`s are displayed `inline-block` and so if the width of the image is bigger, it will overflow towards right creating a horizontal scrollbar.

So, we set the `width` to `100%` to fix that issue.

See this [codepen](https://codepen.io/chaituknag/pen/RwamdMN) to see the issue.

#### Maximum width 60ch:

![Screenshot 2020-09-30 at 10.04.47 PM](https://dev-to-uploads.s3.amazonaws.com/i/a4td2o5z07t0yafm8yuc.png)

As I mentioned earlier, there is a psychological thing that says a line should contain a max of 60 letters in a line for the comfort of the eyes and for the sake of not losing interest.

#### Making two columns work:

> By default all HTML content without additional CSS is `single column`.

Then how do we make it two columns? We use `@media` queries ([MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@media)).

There are two main approaches to writing media queries.

1. **desktop first approach**: When you write CSS for desktop version and then write just the media queries for mobile version.
2. **mobile first approach**: When you write CSS for mobile version first and then write just the media queries for desktop version.

The common thing with both approaches is that you always override some rules you wrote above in your file.

In our example, we are using desktop first approach, no particular reason.

The `.content-wrapper` div holds two sections, the `.left-nav` and the `.reading-column`. In desktop, in order to make them two columns, we just give `display: flex` to the `.content-wrapper` parent. They immediately become two columns, why?

> When you use `display: flex`, by default the layout becomes horizontal. All the immediate children become individual columns. This is because by default, `flex-direction` is `row` in flexbox ([MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)).

Now, We achieved two columns. Next thing is page title alignment.

#### Making page title work:

We wanted the main title of the page to align with the second column (content column), right? So how do we achieve that?

Well, if you just want to use CSS and no JS, you have very little choice with Flexbox. In a future post, we will cover CSS grids which solve this issue very easily.

For now, what we do is that we create a duplicate `h1` tag and copy that inside the `.reading-column` div. This allows us the ability to hide and show based on layout.

In desktop view, we hide the original page title and show the one inside `.reading-column`:

```css
.title {
  display: none;
}

.reading-column .title {
  display: block;
}
```

In mobile view (@media query), we do the opposite:

```css
@media only screen and (max-width: 900px) {
  .title {
    display: block;
  }

  .reading-column .title {
    display: none;
  }
}
```

There you go, our title is now aligning properly with respect to the content column.

#### Lets take care of left-nav

There are a couple of things to take care here:

1. In desktop layout, the top of the first left-nav link should align with the first title of the content sections. If not, it would look awkward because the left nav goes all the way up, nudging beside the page title.
2. In desktop layout, I wish to have the left navigation floating when the user scrolls so that they can have an idea where to go next.

For the first issue, we simply manage the `margin-top` of the `.left-nav`. Now, you have to try out the alignment by changing the `margin-top` till you see it properly aligned. For my layout, it worked at `5rem` so I kept that.

```css
.left-nav {
    # other rules
    margin-top: 5rem;
    # other rules
}
```

We reset this back to `0` in the media query because we do not want this kind of margin in mobile view.

```css
@media only screen and (max-width: 900px) {
    # other rules
    .left-nav {
        # other left-nav rules
        margin-top: 0;
        # other left-nav rules
    }
    # other rules
}
```

#### Achieving floating left nav in desktop

This is a cool feature isn't it? To be able to see the page links all the time in the desktop view?

To achieve this, we have to use a cool feature called `position: sticky`.

Thanks to flexbox, We already have the `.left-nav` stretching from top to bottom in desktop view. This is because, by default, the `align-items` rule defaults to `stretch`. Check [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox) to learn more about this.

Now, all we have to do is target the `.left-nav__list` and do the position related changes.

> Note about positioning: In order for this to work, we have to make sure our `.left-nav` should have a `position` value other than the default one. Because, the child with a position value of `sticky` will always look for its immediate parent in the hierarchy that has its own stacking context. In other words, it will look for the parent that has `position` as one of these: [sticky, fixed, absolute or relative]. So we give `position: relative` to `.left-nav`.

Here are the changes.

```css
.left-nav {
  # other rules
  position: relative;
}

.left-nav__list {
  # other rules
  position: sticky;
  top: 0;
}
```

The `top: 0` rule makes sure our list is sticking to the top rather than to the bottom of the parent.

#### Other important things to learn

1. In the desktop view, the links are aligning towards right, this is something I have seen in many such implementations.

2. Use `list-style-type: none` to remove the bullets in the list which come by default. In some CSS resets, this is done for all lists, but I think that is more of a limitation than an advantage, especially in documentation apps where bullets are expected to be there by default.

3. Notice that in desktop view, we are fixing the width of the left nav and doing `flex: 1` to the reading column. What this does is that your reading column will always occupy the rest of the width in the page.

#### Missing features we could add

1. The "always see the table of contents" feature is only available in desktop but not in the mobile view, may be we could add a sliding-in left-navigation to achieve this in future.
2. We may try to achieve highlighting the left-nav link based on the current section in view. This is a useful feature if you have sections whose heights are many times more than the viewport height. In this case, even though the section heading is hidden above, you can still look at the left-nav to know which section it is.

### What next

I will resolve a couple of hacks that we did here in my next post using CSS grids.

1. Two `h1`s in the markup
2. Manually tweaking the `margin-top` of left-nav to align it with the first content heading.

Please do suggest if you want me to achieve any other feature in this particular example. Or if you like it, please let me know what you learned.

See you in the next one.

Subscribe to my [YouTube channel](https://www.youtube.com/channel/UCl5dc2m9rRGZsAu04ytfDjw/featured?view_as=subscriber) for many such developer tips.

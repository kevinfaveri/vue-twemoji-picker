---
title: 'Introduction'
---

# Introduction

Vue Twemoji Picker was born when, in a project, I've faced a challenge: I couldn't find a performatic enough emoji picker. 
So I did what every developer does when he doesn't find a library ready: wrote my own.

This library is meant to be a developer friendly, easy integrable and performatic emoji picker (with some batteries) using the Twitter emoji arts (Twemojis). Emoji Unicode 12 (latest emoji spec, from 2019, which includes skins) is used as the base dataset.

Updates to the emoji list of this library depends on two factors: release of the new standard of emojis released yearly and release of official Twitter emoji arts for the new released standard.

## What is the Magic

First and foremost: **there is no magic** (!)

Vue Twemoji Picker **is a plug-n-play component** which emits events like @emojiUnicodeAdded so you can catch the selected emoji and perform some action. This enables the **customization of its behaviour to fit your logic**. 

The emoji dataset the component uses is also defined by the developer (but some optimized datasets are already distributed together with this library for ease of use), which means you can import only the emoji categories in the interest of your app, **leveraging customization to a performance-wise level**. This is a particularly useful feature bacause it enables the developer to configure the dataset request as per its needs.

This library also contains an auxiliary component: **TwemojiTextarea**. It is a textarea component implementation which automatically converts emoji unicodes to Twemoji arts.

## Requirements

- Vue Twemoji Picker is made with Vue, for Vue.

- For the search feature to work your browser needs to support [String Includes](https://caniuse.com/#feat=es6-string-includes).

- For the component to correctly render your browser needs to support [CSS Flexbox](https://caniuse.com/#feat=flexbox).

- In most cases [Polyfill.io](https://polyfill.io/v2/docs/) can ensure support for older browsers.


## Demo

<ClientOnly>
<TwemojiTextarea/>
</ClientOnly>
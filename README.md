# Running the app

To run the app locally:

> I'm using pnpm so that's what I'll use for the instructions, but any package manager will do.

1. Clone the repository
2. Install dependencies `pnpm install`
3. Run the dev server `pnpm run dev`
4. The local url will be shown in the terminal

# Tech Stack & Assumptions

## Framework

Since the use of frameworks like Remix or Next.js was discouraged, I decided to go with a vanilla React SPA using Vite.

The task description states that nav buttons (among others) should only be placeholders, though leaving them without any functionality felt wrong. That's why I decided to add react-router to the project and included a dummy routing setup. All routes other than home are empty placeholders, but this allowed me to structure the project more closesly to how a real one would be structured. Additionally it let me set the active nav item styles in a more realistic way.

This app is a client-side rendered SPA, but without the no-framework limitation, I would've most likely gone with an SSR or even SSG setup to improve performance and SEO.

## Styling

I decided to go with TailwindCSS for styling. Even though it might look chaotic at first glance, this feeling passes as soon as you start using it. I strongly believe its model of using components as the primary way for style reuse instead of css classes is a perfect fit for modern component-based libraries and frameworks.

> In case tailwind css isn't something you want to use, I'm also experienced with many other styling approaches e.g. styled-components, Sass, css modules, and Chakra UI.

Since strict adherence to the design was emphasized in the task guidelines, I ended up resorting to the use of arbitrary values in quite a few places. This is mostly related to spacing, and I would have preferred to stick to a more strictly defined spacing scale, which is something I would have brought up with the designers.

## Fonts

I've noticed that the version of the Exo font used in the design appears to be different from the one available on Google Fonts. I ended up sticking with the Google Fonts version, but it's something I would have asked the designers about, to see if this mismatch can be prevented.

## Icons

Since all icons except for the media controls could be found on react-icons, I decided to use it in this project. It's a tried and tested solution which provides a huge variety of icons for any and all scenarios. The play button icon (and pause icon which I made) was exported from figma, omptimized using SVGOMG and imported using the vite svgr plugin as a react component to use alongside icons from react-icons. I manually edited the icons exported from Figma to use `currentcolor` so they can be styled the same way as react-icons icons. Using the svgr plugin for such a small project is probably overkill, but if we assume this is a part of a larger website, it would most likely come in handy later on as well.

## Video

I've decided to host the video separately using S3 and CloudFront, to among other things, reduce the load on the website hosting server.

## Media Controls

Since the terms used to describe the media controls functionality were "start/stop" instead of "play/stop", I took "stop" to simply mean "pause". This also made more sense to me from a UX standpoint, since:

1. Pausing is a much more common action
2. The traditional "stop" functionality, which resets the playback position to the start, usually uses a separate button

This is a call I made, but I would have preferred to double check with the task author to make sure this is the intended functionaliy.

## RWD & Mobile

Since the guidelines explicitly say not to develop a mobile version, this website doesn't scale to smaller viewport sizes. I thought about making some small adjustments to make the website more usable on smaller screens, but since that would require interfering with the layout, spacing, and font sizes (which is also explicitly discouraged) I decided against it.

However I'm more than comfortable with making such changes without a specific mobile design provided (or creating the design myself), when needed.

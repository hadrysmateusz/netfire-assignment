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

The task description states that nav buttons (among others) should only be placeholders, though leaving them without any functionality at all felt wrong. That's why I decided to add react-router to the project and included a dummy routing setup. All routes other than home are empty placeholders, but this allowed me to structure the project more closesly to how a real one would be structured, and additionally it let me set the active nav item styles in a more realistic way.

This app is a client-side rendered SPA, but without the no-framework limitation, I would've most likely gone with an SSR or even SSG setup to improve performance and SEO.

## Styling

I decided to go with TailwindCSS for styling. Even though it might look chaotic at first glance, this feeling passes as soon as you start using it. I strongly believe its model of using components as the primary way for style reuse instead of css classes is a perfect fit for modern component-based libraries and frameworks.

Since strict adherence to the design was emphasized in the task guidelines, I ended up resorting to the use of arbitrary values in quite a few places. This is mostly related to spacing, and I would have preferred to stick to a more rigid spacing scale, which is something I would have liked to bring up with the designers.

## Fonts

I've noticed that the version of the Exo font used in the design appears to be different from the one available on Google Fonts. I ended up sticking with the Google Fonts version, but it's something I would have asked the designers about, to see if this mismatch can be prevented.

## Icons

Since all icons except for the media controls ones could be found on react-icons, I decided to use it in this project. It's a tried and tested solution which provides a huge variety of icons for any and all scenarios. The play button icon was exported from figma, omptimized using SVGOMG and imported using the vite svgr plugin as a react component to use alongside icons from react-icons. I manually edited the icons exported from Figma to use `currentcolor` so they can be styled the same way as react-icons icons.

## Video

I've decided to host the video separately using S3 and CloudFront, to among other things, reduce the load on the website hosting server.

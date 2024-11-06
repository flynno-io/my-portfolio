# Luke Flynn Portfolio

This is my software developer portfolio. It uses Vite + React and is deployed via Netlify [here](https://luke-flynn.netlify.app/about).

## Design
I have built other Vite + React websites (you can check them out on my the site's portfolio page) so decided to try a few things differently this time to test my skills and different design patterns. 

I wrote all CSS for each component as style objects included in the component itself. This proved to be a major problem for the following reasons:
1. The component files became very messy with the different styles.
2. Style objects do not allow for pseudo classes such as :hover, :active, :before, :after which are standard for interactive web design. I did not find any viable workarounds in the Style object design to replace this important functionality.
3. Code is repeated a lot instead of importing the same styles from a global CSS file. I could have moved the Styles into their own assets/styles/ folder but at this point, I should have gone back to using external CSS stylesheets instead.

I used as little `<div></div>` as possible and leverage standard HTML tags such as `<section></section>`, `<h1></h1>`, `<header></header>`, `<footer></footer>`, `<nav></nav>`, etc. This was easy to do and makes the website more accessible to all persons.

## Overall
I had a fun time creating this quick and simple Portfolio website, design, and style. I hope you enjoy exploring it.
# Tailwind CSS Ep-10

## Steps to install Tailwind CSS

Command:- `npm install tailwindcss @tailwindcss/vite`;

then define a vite plugin for tailwindcss in vite.config.js file like below-

```js

import tailwindcss from "@tailwindcss/vite"
export default defineConfig({
  plugins: [tailwindcss()],
})

```

then use `@import "tailwindcss";` in your CSS file to import tailwindCSS.

```css

@import "tailwindcss";

```

1** As tailwindcss has different classes for the different works of it or styling properties like- 'text-red-500' (for the text color red), 'text-2xl' (for the text size 2xl), 'text-bold' (for the font weight bold), etc.

2** so you can use any class to style your element.

3** Dynamic classes to tailwindcss we use 

```js
className = " w-[200px h-[300px] bg-black"

```

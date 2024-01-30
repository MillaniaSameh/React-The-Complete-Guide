### Create a new App 

- npm create vite 
- npm install 
- npm run dev 

### Extra packages 

- npm install styled-components 
- npm install -D tailwindcss postcss autoprefixer -> npx tailwindcss init -p 

### Rules of Hooks 

- must not call React Hooks outside of the component function. 
- must not call React Hooks inside of if statements. 
- must not call React Hooks inside of nested functions. 

### Notes 

- Hooks: must be used directly in the root level of the component function. 
- Key prop on a component that is not a part of a list: whenever it changes, react will destroy the old component instance and create a new one. 
- useRef: use refs for managing values that are stored and managed independently from the component function lifecycle to which they belong. 
- Prop drilling = passing shared data through multiple components layers even tho most components don't directly need that data (just pass it on to the child component). 
- Component composition = one way to solve prop drilling, the middle component act as a wrapper. 

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
- Prop drilling = passing shared data through multiple components layers even tho most components don't directly need that data (just pass it on to the child component). 
- Component composition = one way to solve prop drilling, the middle component act as a wrapper. 

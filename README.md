### Create a new App 

- npm create vite 
- npm install 
- npm run dev 

### Extra packages 

- npm install styled-components 
- npm install -D tailwindcss postcss autoprefixer -> npx tailwindcss init -p 
- npm install million 
- npm install redux react-redux 
- npm install @reduxjs/toolkit 
- npm install react-router-dom 
- npm install @tanstack/react-query 

### Rules of Hooks 

- must not call React Hooks outside of the component function. 
- must not call React Hooks inside of if statements. 
- must not call React Hooks inside of nested functions. 

### Notes 

- Hooks: must be used directly in the root level of the component function. 
- Key prop on a component that is not a part of a list: whenever it changes, react will destroy the old component instance and create a new one. 
- useRef: use refs for managing values that are stored and managed independently from the component function lifecycle to which they belong. 
- Memo: prevents functional components executions that are triggered from the parent component. You might avoid it by clever component structuring. 
- useMemo: prevents function execution, only re-executeif one of the dependencies is changed. 
- useCallback: used to avoid recreation of a function. 
- Prop drilling = passing shared data through multiple components layers even tho most components don't directly need that data (just pass it on to the child component). 
- Component composition = one way to solve prop drilling, the middle component act as a wrapper. 
- Don't do side effects (async code) inside reducers. 
- Thunk: is a function that delays an action until later. 
- Index routes: allows you to define the default route that should be loaded if the parent routes path is active. 
- useLoaderData: you can access loaded data with help of useLoaderData in any component on the same level or lower level. 
- useFetcher: use it if you wanna trigger a loader or an action without actually loading the page, the route to which this action or loader belongs. 

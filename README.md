# Fixing tutorial


## Download dependencies
```
//install with i-storyline
npx create-react-app test
cd test
npm i i-storyline-js

//Install Necessary Polyfills
npm install buffer
npm install stream-browserify
npm install timers-browserify
```

## Update Webpack Configuration
```
npm run eject
```
After ejecting, review the new files and directory structure in your project. You will find configurations like webpack.config.js in the config folder and various scripts in the scripts folder.
```
module.exports = {
  // ... other config settings ...

  resolve: {
    // ... other resolve settings ...
    fallback: {
      "buffer": require.resolve("buffer/"),
      "stream": require.resolve("stream-browserify"),
      "timers": require.resolve("timers-browserify")
    }
  },
};
```
Import Polyfills in Your Code in index.js inside test package
```
import { Buffer } from 'buffer';
import { Stream } from 'stream-browserify';

window.Buffer = Buffer;
window.Stream = Stream;

// For timers, you usually don't need to import as they are mostly used internally by other modules

```


## use it
```
import storyScriptUrl from './Redcap.xml';

  const testHelper = () => {
    let iStoryliner = new iStoryline();

  // graph can be drawed using any canvas or svg libraries
  iStoryliner.load(storyScriptUrl)
  .then((graph) => {
    console.log(graph)

    // obtain the characters names
    console.log(graph.characters);  // ['Red cap', 'Mother', 'Wolf', 'GrandMa']
  
    // obtain the paths of the characters
    console.log(graph.storylines);
  }) ;
```
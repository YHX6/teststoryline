import logo from './logo.svg';
import './App.css';
import iStoryline from 'i-storyline-js';
import storyScriptUrl from './Redcap.xml';


function App() {
  const testHelper = () => {
    let iStoryliner = new iStoryline();

  // generate storyline visualizations from the story script
  // let storyScriptUrl = './Redcap.xml';

  // graph can be drawed using any canvas or svg libraries
  iStoryliner.load(storyScriptUrl)
  .then((graph) => {
    console.log(graph)

    // obtain the characters names
    console.log(graph.characters);  // ['Red cap', 'Mother', 'Wolf', 'GrandMa']
  
    // obtain the paths of the characters
    console.log(graph.storylines);
  }) ;

  }


  
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={testHelper}>asdasd</button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

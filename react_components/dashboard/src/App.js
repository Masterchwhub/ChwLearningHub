import './App.css';
import MoodleWs from "./services/moodlews";
import Container from './components/Container';

function App(props) {
    const testString = 'sectionsavailability';
    const testComponent = 'format_topics';

    let strings = [''];
    let moodleWsInstance = new MoodleWs(props.sesskey, props.wwwroot);
    let stringidentifier = { strings: [{stringid: testString, component: testComponent}]};
    let strignsWS = moodleWsInstance.getMoodleStrings(stringidentifier);
    if (strignsWS) {
        strings = strignsWS;
    }
  return (
    <div className="App">
      <header className="App-header">
        <Container /> {/* Primera instancia de Container */}
        <p>This is a test of a react with props from Moodle to React HOLA 2.</p>
        <p>Username: {props.username} {props.lastname}</p>
        <p>and this test the WS class:</p>
        <p><strong>Strings call:</strong></p>
        <p>{strings[0].string}</p>
      </header>
    </div>
  );
}

export default App;

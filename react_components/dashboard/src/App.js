import './App.css';
import MoodleWs from "./services/moodlews";
//import Container from './components/Container';

function App(props) {
    const moodleWsInstance = new MoodleWs(props.sesskey, props.wwwroot);

    let strings = [''];
    const testString = 'sectionsavailability';
    const testComponent = 'format_topics';
    let stringidentifier = { strings: [{stringid: testString, component: testComponent}]};
    let strignsWS = moodleWsInstance.getMoodleStrings(stringidentifier);
    if (strignsWS) {
        strings = strignsWS;
    }

    let usersData = [''];
    let userWs = moodleWsInstance.getMoodleUser(parseInt(props.userid));
    if (userWs) {
      usersData = userWs;
    }

  return (
    <div className="App">
      <header className="App-header">
        {/* <Container /> */}{/* Primera instancia de Container */}
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

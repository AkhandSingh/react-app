import React  from 'react';
// import ReactDOM from 'react-dom';
// import logo from './logo.svg';
import './App.css';
import Comment from './Comment';
import Card from './Card';
import Link from './Links';
import Route from './Route';
import ChildToParent from './ChildToParent';
import CallApi from './CallApi';

class App  extends React.Component {

  state = {commentText: ''};
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div>
    <div className="ui secondary pointing menu">
      <Link href="/" className="App-link">Home</Link>
      <Link href="/comments" className="App-link">Comments(Parent to Child - Input)</Link>
      <Link href="/ctop" className="App-link">Comments(Child to Parent - Output)</Link>
      <Link href="/apicall" className="App-link">API Calls</Link>
      <Link href="/appdeployment" className="App-link">Deployement of React App</Link>
    </div>
     <div>
     <Route path="/">
       <div>
       Welcome to React Practice
       </div>
       <div className="ui ordered list">
        <Link href="/" className="item">Building with JSX</Link>
        <Link href="/comments" className="item">Communicating with Props</Link>
        <Link href="/ctop" className="item">Structuring Apps with Class-Based Components</Link>
        <Link href="/apicall" className="item">State in React Components</Link>
        <Link href="/apicall" className="item">Making API Requests with React</Link>
        <Link href="/appdeployment" className="App-link">Deploying a React App</Link>
      </div>
       </Route>
      <Route path="/comments">
        <div class="ui comments">
          <Card>
            <Comment author="Akhand" time="Today at 5:42PM" text="Hello Alok"></Comment>
          </Card>
          <Card>
          <Comment author="Alok" time="Today at 6:42PM" text="Hi Akhand"></Comment>
          </Card>
          <Card>
            <Comment author="Anuj" time="Today at 7:42PM" text="Hello Durgesh"></Comment>
          </Card>
          <Card>
            <Comment author="Durgesh" time="Today at 8:42PM" text="Hi Anuj"></Comment>
          </Card>
      </div>
      </Route>
      <Route path="/ctop">
        <ChildToParent onSubmit={this.onSubmit}></ChildToParent>
        <Comment author="Akhand" time= {new Date().toDateString()} text={this.state.commentText}></Comment>
      </Route>
      <Route path="/apicall">
        <CallApi></CallApi>
      </Route>
      <Route path="/appdeployment">
        To build react app - run "npm run build" command and index.html, all js files and css files will be generated in "build" folder.
      </Route>
     </div>
    </div>
    );
  } 
  

  onSubmit=()=> {
    this.setState({commentText: 'Congratulations...its approved!!'});
  }
}
// const App=()=> {
//   return (
//     <div class="ui comments">
//         <Card>
//           < Comment author="Akhand" time="Today at 5:42PM" text="Hello Alok"></Comment>
//         </Card>
//         <Card>
//         < Comment author="Alok" time="Today at 6:42PM" text="Hi Akhand"></Comment>
//         </Card>
//         <Card>
//           <Comment author="Anuj" time="Today at 7:42PM" text="Hello Durgesh"></Comment>
//         </Card>
//         <Card>
//           <Comment author="Durgesh" time="Today at 8:42PM" text="Hi Anuj"></Comment>
//         </Card>
//     </div>
//   );
// }

export default App;

import { Component, useEffect, useState } from 'react';

// const Route = ({ path, children }) => {
//   const [currentPath, setCurrentPath] = useState(window.location.pathname);

//   useEffect(() => {
//     const onLocationChange = () => {
//       alert(window.location.pathname)
//       setCurrentPath(window.location.pathname);
//     };

//     window.addEventListener('popstate', onLocationChange);
//     console.log('hello');
//     return () => {
//       alert('hi');
//       window.removeEventListener('popstate', onLocationChange);
//       console.log('Hi');
//     };
//   }, []);

//   return currentPath === path ? children : null;
// };

class Route extends Component {
  state = {currentPath:window.location.pathname}

  render() {
    return this.state.currentPath === this.props.path ? this.props.children : null;
  }

  componentDidMount() {
    window.addEventListener('popstate', () =>this.onLocationChange());
  }

  onLocationChange() {
    this.setState({currentPath:window.location.pathname});
  };
}
export default Route;

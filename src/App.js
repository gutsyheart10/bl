import './App.scss';
import First from './components/first';
import Fourth from './components/fourth';
import Second from './components/second';
import Third from './components/third';
import Fifth from './components/fifth';
import Seventh from './components/seventh';
import Footer from './components/footer';
import Eigth from './components/eigth';
import Sixth from './components/sixth';
import Header from './components/Header'
import React, {useRef} from 'react';
function App() {
  let seventh = useRef()
  let second = useRef()
  let third = useRef()
  let sixth = useRef()
  let fifth = useRef()
  let first = useRef()
  let eigth = useRef()
  return (
    <div className="App">
      <Header first={first} two={second} three={third} five={fifth} six={sixth} seven={seventh} eigth={eigth}/>
      <First ref={first}/>
      <Second ref={second}/>
      <Third ref={third}/>
      <Fourth eigth={eigth}/>
      <Fifth ref={fifth}/>
      <Sixth ref={sixth}/>
      <Seventh ref={seventh}/>
      <Eigth ref={eigth}/>
      <Footer />
    </div>
  );
}

export default App;

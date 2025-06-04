import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './appStyles.css'
// import Greet from './components/Greet'
// import Welcome from './components/Welcome'
// import Hello from './components/Hello'
// import Message from './components/Message';
// import Counter from './components/Counter';
// import FunctionClick from './components/FunctionClick';
// import ClassClick from './components/ClassClick';
// import EventBind from './components/EventBind';
// import ParentComponent from './components/ParentComponent';
// import UserGreeting from './components/UserGreeting';
// import NameList from './components/NameList';
// import Stylesheet from './components/Stylesheet';
// import Inline from './components/Inline';
// import styles from './appStyles.module.css'
// import Form from './components/Form';
// import LifecycleA from './components/LifecycleA';
// import FragmentDemo from './components/FragmentDemo';
// import Table from './components/Table';
// import PureComp from './components/PureComp';
// import ParentComp from './components/ParentComp';
// import MemoComp from './components/MemoComp';
// import RefsDemo from './RefsDemo';
// import FocusInput from './FocusInput';
// import FRParentInput from './FRParentInput';
// import PortalDemo from './components/PortalDemo';
// import Hero from './components/Hero';
// import ErrorBoundary from './components/ErrorBoundary';
// import ClickCounter from './components/ClickCounter';
// import HoverCounter from './components/HoverCounter';
// import ClickCounterTwo from './ClickCounterTwo';
// import HoverCounterTwo from './HoverCounterTwo';
// import User from './User';
// import ComponentC from './components/ComponentC';
// import { UserProvider } from './components/userContext';

import ClassCounter from './components/state-hook/ClassCounter';
import HookCounter from './components/state-hook/HookCounter';
import HookCounterTwo from './components/state-hook/HookCounterTwo';
import HookCounterThree from './components/state-hook/HookCounterThree';
import HookCounterFour from './components/state-hook/HookCounterFour';
import ClassCounterOne from './components/state-hook/ClassCounterOne';
import HookCounterOne from './components/state-hook/HookCounterOne';
import ClassMouse from './components/state-hook/ClassMouse';
import HookMouse from './components/state-hook/HookMouse';
import MouseContainer from './components/state-hook/MouseContainer';
import IntervalClassCounter from './components/state-hook/IntervalClassCounter';
import IntervalHookCounter from './components/state-hook/IntervalHookCounter';




//---- functional compnent (Greet basics)
/*
function App() {
  return (
    <div className="App">
      <Greet />
    </div>
  );
}
*/

/*
class App extends Component {
  render() {
    return (
      <div className="App">
        <Greet /> 
      </div>
    );
  }
}

export default App;

// work painding
*/


//---- class compnent video - 9 (Greet props)

// class App extends Component {
//   render() {
//     return (
//       <div className="App">

//         {/* pair tag */}
//         <Greet name="Bruce" heroName="Batman">
//           {/* <p>This is children props</p> */}
//           <b>aman</b>
//         </Greet>

//         {/* single tag */}

//         <Greet name="nadeem" heroName="singer" children={<b>toshif</b>} />

//         <Greet name="clark" heroName="superman">
//           <button>Action</button>
//         </Greet>

//         <Greet name="Diana" heroName="wonder woman">
//           <input placeholder='name'></input> <button>Login</button>
//         </Greet>

//         <Welcome name="Bruce" heroName="Batman" />
//         <Welcome name="clark" heroName="superman" />
//         <Welcome name="Diana" heroName="wonder woman" />
//       </div>
//     );
//   }
// }

// export default App



/*
// video 8 (JSX) (with JSX)

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hello />
      </div>
    )
  }
}

export default App;
*/

/*
// video 10 (state)

class App extends Component {
  render() {
    return (
      <div className="App">
        <Message />
      </div>
    )
  }
}

export default App;
*/

/*
// video - 11 (setState)

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter />
      </div>
    )
  }
}

export default App;
*/

/*
// video - 13 (Event handling)
// 1st (func.comp)

class App extends Component {
  render() {
    return (
      <div className="App">
        <FunctionClick />
         <ClassClick />
      </div>
    );
  }
}

export default App;
*/

/*
// video - 14 (Binding Event Handler)

class App extends Component {
  render() {
    return (
      <div className="App">
       <EventBind />
      </div>
    );
  }
}

export default App;

*/



// video - 15 (Methods as props)
/*
class App extends Component {
  render() {
    return (
      <div className="App">
       <ParentComponent />
      </div>
    );
  }
}
export default App;

*/


/*
// video - 16 (conditonal renderning)

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserGreeting />
      </div>
    )
  }
}

export default App;
*/

/*
// video - 17 (List renderning)

class App extends Component {
  render() {
    return (
      <div className="App">
        <NameList />
      </div>
    )
  }
}

export default App;
*/


/*
// video - 20 (Styling and CSS Basics) (work - stylesheet.js, mtStyle.css & Inline.js, appStyles.css, appStyles.module.css)

class App extends Component {
  render() {
    return (
      <div className="App">
        <Stylesheet primary={true} />
        <Inline />
        <h1 className='error'>Error</h1>
        <h1 className={styles.success}>Success</h1>
      </div>
    )
  }
}

export default App;
*/

/*
// video - 21 - (Basics of Form Handling)

class App extends Component {
  render() {
    return (
      <div className="App">
        <Form />
      </div>
    )
  }
}

export default App;
*/


/*
// video - 23 - (component mounting lifecycle methods)

class App extends Component {
  render() {
    return (
      <div className="App">
        <LifecycleA />
      </div>
    )
  }
}

export default App;
*/

/*
// video - 25 - (Fragments)

class App extends Component {
  render() {
    return (
      <div className="App">
        <FragmentDemo />
        <Table />
      </div>
    )
  }
}

export default App;
*/


/*
// video - 25 - (Pure component)

class App extends Component {
  render() {
    return (
      <div className="App">
        <ParentComp />
      </div>
    )
  }
}

export default App;

// log not print 
*/


/*
// video - 28 - (Refs)

class App extends Component {
  render() {
    return (
      <div className="App">
        // <RefsDemo />
        // <FocusInput />
        <FRParentInput />
      </div>
    )
  }
}

export default App;
*/


/*
// video - 28 - (Portals)

class App extends Component {
  render() {
    return (
      <div className="App">
       <PortalDemo />
      </div>
    )
  }
}

export default App;
*/


/*
// video - 32 - (Error Boundary)

class App extends Component {
  render() {
    return (
      <div className="App">
        <ErrorBoundary>
          <Hero heroName="Batman" />
        </ErrorBoundary>

        <ErrorBoundary>
          <Hero heroName="Superman" />
        </ErrorBoundary>

        <ErrorBoundary>
          <Hero heroName="Joker" />
        </ErrorBoundary>

      </div>
    )
  }
}

export default App;
*/


/*
// video - 33 - (Higher Order Components - part - 1)
// video - 34 - (Higher Order Components - part - 2)
// video - 34 - (Higher Order Components - part - 3)

class App extends Component {
  render() {
    return (
      <div className="App">
       <ClickCounter name='Toshif' />
       <HoverCounter />
      </div>
    )
  }
}

export default App;
*/


/*
// video - 36 - (Render Props - part - 1)


class App extends Component {
  render() {
    return (
      <div className="App">
        <ClickCounterTwo />
        <HoverCounterTwo />
      </div>
    )
  }
}

export default App;
*/



// video - 37 - (Render Props - part - 2)

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         {/* <User />  //(a.)  */}
//         {/* <User name="Toshif" //(b.)/> */}
//         {/* <User name={() => 'Toshif'} //(c.) /> */}
//         {/* <User name={(isLoggedIn) => isLoggedIn ? 'Toshif' : 'Guest'} /> // (d.) */}
//         {/* <User render={(isLoggedIn) => isLoggedIn ? 'Toshif' : 'Guest'} /> // (e.) */}
//         <Counter
//           render={(count, incrementCount) => (
//             <ClickCounterTwo count={count} incrementCount={incrementCount} 
//     )}
//         />
//         <Counter
//           render={(count, incrementCount) => (
//             <HoverCounterTwo count={count} incrementCount={incrementCount} />
//           )}
//         />
//       </div>
//     )
//   }
// }

// export default App;



// video - 38 - (Context - part - 2)

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         {/* provider comp. is responsible for providing a value for all the descennat component */}
//         <UserProvider value="Toshif">    
//           <ComponentC />
//         </UserProvider>
//       </div>
//     )
//   }
// }

// export default App;


/*
// video - 39 - (Context - part - 3)

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserProvider value='Vishwas'>
          <ComponentC />
        </UserProvider>
      </div>
    )
  }
}

export default App;
*/





/*
// video - 46 - (useState Hook)

function App() {
  return (
    <div className="App">
     <ClassCounter />
     <HookCounter />
    </div>
  );
}

export default App;
*/


/*
// video - 47 - (useState with previous state)

function App() {
  return (
    <div className="App">
      <HookCounterTwo />
    </div>
  );
}

export default App;
*/


/*
// video - 48 - (useState with object)

function App() {
  return (
    <div className="App">
      <HookCounterThree />
    </div>
  );
}

export default App;
*/


/*
// video - 49 - (useState with array)

function App() {
  return (
    <div className="App">
      <HookCounterFour />
    </div>
  );
}

export default App;
*/


/*
// video - 51 - (useEffect after render)

function App() {
  return (
    <div className="App">
      <ClassCounterOne />
      <HookCounterOne />
      
    </div>
  );
}

export default App;
*/

/*
// video - 53 - (runs effects only once)

function App() {
  return (
    <div className="App">
      <ClassMouse />
      <HookMouse />
    </div>
  );
}

export default App;
*/

/*
// video - 54 - (useEffect with cleanup)

function App() {
  return (
    <div className="App">
      <MouseContainer />
    </div>
  );
}

export default App;
*/



// video - 55 - (useEffect with incorrect dependency)

function App() {
  return (
    <div className="App">
      <IntervalClassCounter />
      <IntervalHookCounter />
    </div>
  );
}

export default App;
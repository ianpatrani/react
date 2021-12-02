/* import React, {Fragment} from "react";
//components
import Foo from "./components/foo/foo";


const user = {
    email :"foo@foo.foo",
    name : "foo",
    pass : "foo123",
    role : "fullstack" 
};

export default function App(){
  return (
     <Fragment>
      <Foo {...user}/>
     </Fragment>
  )
};
 */

import React from 'react'
import Card from './components/card/card'
import Cards from './components/card/cards.jsx'
function App() {
  return (
    <div>
      <Cards/>
    </div>
  )
}

export default App

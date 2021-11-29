import React, {Fragment} from "react";
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

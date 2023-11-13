import React from "react";

import Info from "./Info";
import Nav from "./Nav";
import Resources from "./Resources";
import MaximizableView from "./MaximizableView";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Nav />
      <div className="row">
        <div className="lg-5 col">
          <div className="paper">
            <Info />
          </div>
          <Resources />
        </div>
        <div className="lg-7 col">
          <div className="paper">
            <div className="row">
              <div className="col-fill col">
                <MaximizableView backgroundColor="#efefef">
                </MaximizableView>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;


import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "highlight.js/styles/stackoverflow-light.css";

export default function Reactrender() {
  return (
    <>
      <aside className="bd-aside sticky-xl-top text-muted align-self-start mb-3 mb-xl-5 px-2">
        <h2 className="h6 pt-4 pb-3 mb-4 border-bottom">On this page</h2>
        <nav className="small" id="toc">
          <ul className="list-unstyled">
            <li className="my-2">
              <button
                className="btn d-inline-flex align-items-center"
                data-bs-toggle="collapse"
                aria-expanded="true"
                data-bs-target="#contents-collapse"
                aria-controls="contents-collapse"
              >
                Contents
              </button>
              <ul
                className="list-unstyled ps-3 collapse show"
                id="contents-collapse"
              >
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#render"
                  >
                    Render()
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#embed"
                  >
                    Embed two or more components
                  </a>
                </li>
              </ul>
            </li>
            <li className="my-2">
              <button
                className="btn d-inline-flex align-items-center"
                data-bs-toggle="collapse"
                aria-expanded="true"
                data-bs-target="#contents-collapse"
                aria-controls="contents-collapse"
              >
                Related links
              </button>
              <ul
                className="list-unstyled ps-3 collapse show"
                id="contents-collapse"
              >
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/entityframework"
                  >
                    Entity Framework
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </aside>
      <div className="bd-cheatsheet container-fluid bg-body">
        <section id="dotnet-core">
          <h2 className="sticky-xl-top fw-bold p-0 m-0">Contents</h2>
          <h3>Rendering</h3>
          <article id="render">
            <h6>Explain the purpose of render() in React.</h6>
            <div>
              <p>
                Each React component must have a render() mandatorily. It
                returns a single React element which is the representation of
                the native DOM component. If more than one HTML element needs to
                be rendered, then they must be grouped together inside one
                enclosing tag.
              </p>
              <Highlight className="language-jsx">
                {`import React from 'react'
class App extends React.Component {
    render() {
        return (
            <h1>Hello World</h1>
        )
    }
}
export default App`}
              </Highlight>
            </div>
          </article>
          <article id="embed">
            <h6>How can you embed two or more components into one?</h6>
            <div>
              <p>
                You can embed two or more components into the following way:
              </p>
              <Highlight className="language-jsx">
                {`import React from 'react'
class App extends React.Component{
    render() {
        return(
            <hi>Hello World</h1>
        )
    }
    render (){
        return (
            <hi>Hello Skyeagle</h1>
        )
    }
}
export default App;`}
              </Highlight>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}

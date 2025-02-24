import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "highlight.js/styles/stackoverflow-light.css";

export default function Modularize() {
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
                    href="#modularize"
                  >
                    Modularize
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
          <h3>Modularize</h3>
          <article id="modularize">
            <h6>How do you modularize code in React?</h6>
            <div>
              <p>
                We can modularize code by using the export and import
                properties. They help in writing the components separately in
                different files.
              </p>
              <Highlight className="language-jsx">
                {`//ChildComponent .jsx
export default class ChildComponent extends React.Component {
    render() {   
        return(
            <div>
                <h1>This is a child component</h1>
            </div>
        
        );
    }
}

//ParentComponent.jsx   
import ChildComponent from './childcomponent.js';
class ParentComponent extends React.Component {
    render() {
        return(
            <div>
                <App />
            </div>
        );
    }
}`}
              </Highlight>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}

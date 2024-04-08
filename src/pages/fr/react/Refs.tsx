import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "highlight.js/styles/stackoverflow-light.css";

export default function Refs() {
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
                    href="#definition"
                  >
                    Refs
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#use"
                  >
                    Use of refs
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#ref"
                  >
                    React.Ref
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#forward-ref"
                  >
                    React.ForwardRef
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
          <h3>refs in React</h3>
          <article id="definition">
            <h6>Les refs</h6>
            <div>
              <p>
                Les refs fournissent un moyen d’accéder aux nœuds du DOM ou
                éléments React créés dans la méthode de rendu.
              </p>
            </div>
          </article>
          <article id="use">
            <h6>Les cas d’usages tout trouvés pour les refs :</h6>
            <ul>
              <li>
                Gérer le focus, la sélection du texte, ou la lecture de média.
              </li>
              <li>Lancer des animations impératives.</li>
              <li>S’interfacer avec des bibliothèques DOM tierces.</li>
            </ul>
          </article>
          <article id="ref">
            <h6>React.createRef</h6>
            <div>
              <p>
                <code>React.createRef</code> crée une <code>ref</code> qui peut
                être associée à des éléments React via l’attribut{" "}
                <code>ref</code>.
              </p>
              <Highlight className="language-jsx">
                {`class MyComponent extends React.Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }

  render() {
    return <input type="text" ref={this.inputRef} />;
  } 

  componentDidMount() {
    this.inputRef.current.focus();
  }
}`}
              </Highlight>
            </div>
          </article>
          <article id="forward-ref">
            <h6>React.forwardRef</h6>
            <div>
              <p>
                <code>React.forwardRef</code> crée un composant React qui
                transfère la valeur de l’attribut ref qu’il reçoit à un autre
                composant plus bas dans l’arbre.
              </p>
              <Highlight className="language-jsx">
                {`const FancyButton = React.forwardRef((props, ref) => (
  <button ref={ref} className="FancyButton">
    {props.children}
  </button>
));

// You can now get a ref directly to the DOM button:
const ref = React.createRef();
<FancyButton ref={ref}>Click me!</FancyButton>;`}
              </Highlight>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}

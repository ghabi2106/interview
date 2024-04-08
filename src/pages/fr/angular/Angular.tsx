import React from "react";
import { Link } from "react-router-dom";

export default function Angular() {
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
                    href="#introduction"
                  >
                    Angular
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#features"
                  >
                    Features
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
                    to="/angular"
                  >
                    Angular
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
          <h3>Angular</h3>
          <article id="introduction">
            <h6>Angular</h6>
            <div>
              <p>
                Angular est une plateforme de développement, construite sur
                TypeScript. En tant que plateforme, Angular comprend :
              </p>
              <ul>
                <li>
                  Un cadre basé sur des composants pour la création
                  d'applications web évolutives.
                </li>
                <li>
                  Une collection de bibliothèques bien intégrées qui couvrent
                  une grande variété de fonctionnalités, notamment le routage,
                  la gestion des formulaires, la communication client-serveur,
                  etc.
                </li>
                <li>
                  Une suite d'outils de développement pour vous aider à
                  développer, construire, tester et mettre à jour votre code.
                </li>
              </ul>
            </div>
          </article>
          <article id="features">
            <h6>Features</h6>
            <div>
              <p>What are the key components of Angular?</p>
              <ul>
                <li>Components</li>
                <li>Templates</li>
                <li>Directives</li>
                <li>Dependency injection</li>
              </ul>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}

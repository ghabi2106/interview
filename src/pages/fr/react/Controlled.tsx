import React from "react";
import { Link } from "react-router-dom";

export default function Controlled() {
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
                    href="#controlled"
                  >
                    controlled vs uncontrolled
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
          <h3>Difference between controlled and uncontrolled components?</h3>
          <article id="controlled">
            <h6>
              what is the difference between controlled and uncontrolled
              components?
            </h6>
            <table className="table table-bordered">
              <caption>
                <h4>Composants contrôlés vs non contrôlés</h4>
              </caption>
              <tbody>
                <tr>
                  <th>
                    <strong>Composants contrôlés</strong>
                  </th>
                  <th>
                    <strong>Composants non contrôlés</strong>
                  </th>
                </tr>
                <tr>
                  <td>1. Ils ne maintiennent pas leur propre état (state)</td>
                  <td>1. Ils maintiennent leur propre état</td>
                </tr>
                <tr>
                  <td>
                    2. Les données sont contrôlées par le composant parent
                  </td>
                  <td>2. Les données sont contrôlées par le DOM</td>
                </tr>
                <tr>
                  <td>
                    3. Ils prennent les valeurs actuelles via des props,
                    puis notifient les modifications via des rappels (callbacks)
                  </td>
                  <td>
                    3. Les références sont utilisées pour obtenir leurs valeurs
                    actuelles
                  </td>
                </tr>
                <tr>
                  <td>4. Il permet le contrôle de validation.</td>
                  <td>4. Il ne permet pas le contrôle de validation.</td>
                </tr>
              </tbody>
            </table>
          </article>
        </section>
      </div>
    </>
  );
}

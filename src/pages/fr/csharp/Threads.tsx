import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "highlight.js/styles/stackoverflow-light.css";

export default function Threads() {
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
                    href="#task"
                  >
                    Task
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#thread"
                  >
                    Thread
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#task-thread"
                  >
                    Task vs Thread
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#deadlock"
                  >
                    Deadlock
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
                    to="/stringbuilder"
                  >
                    String Builder
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/tuple"
                  >
                    Tuple
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/collections"
                  >
                    Collections
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/enumindexer"
                  >
                    Enumeration, Indexer and Generics
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/parameters"
                  >
                    Ref, in and Out
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/covariance"
                  >
                    Covariance
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/delegate"
                  >
                    Delegate
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/string2int"
                  >
                    string to int
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/threads"
                  >
                    Task And Thread
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/operators"
                  >
                    Operators
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/datatype"
                  >
                    Dynamic, Nullables, Discards and Anonymous Types, Extension
                    methods
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
          <h3>Task And Thread In C#</h3>
          <article id="task">
            <h6>What is Task?</h6>
            <div>
              <p>
                Une tâche est un objet qui représente un travail qui doit être
                fait. La tâche peut indiquer si le travail est terminé et si
                l'opération renvoie un résultat, la tâche retourne le résultat.
              </p>
              <p>
                Une tâche peut être considérée comme un moyen pratique et facile
                d'exécuter des instructions de manière asynchrone et en
                parallèle. Dans d'autres langages et frameworks de
                programmation, cela peut être connu comme une promesse - "Je
                promets que je reviendrai vers vous à un moment donné". Une
                tâche utilisera par défaut le Threadpool , ce qui économise des
                ressources car la création de threads peut être coûteuse.
              </p>
              <p>
                Un Threadpool est un pool de threads, qui sont prêts à exécuter
                des instructions.
              </p>
              <Highlight className="language-csharp">
                {`static void Main(string[] args) {  
    Task < string > obTask = Task.Run(() => (  
        return“ Hello”));  
    Console.WriteLine(obTask.result);  
} `}
              </Highlight>
            </div>
          </article>
          <article id="thread">
            <h6>What is Thread?</h6>
            <div>
              <p>
                Un Thread est un petit ensemble d'instructions exécutables. Les
                threads ne sont pas une construction .NET, ils sont intégrés à
                votre système d'exploitation . La classe de threads de .NET
                n'est qu'un moyen de créer et de gérer des threads.
              </p>
              <Highlight className="language-csharp">
                {`static void Main(string[] args) {  
    Thread thread = new Thread(new ThreadStart(getMyName));  
    thread.Start();  
}  
public void getMyName() {} `}
              </Highlight>
            </div>
          </article>
          <article id="task-thread">
            <h6>Différences entre les tâches et les threads</h6>
            <ul>
              <li>
                La tâche est plus abstraite que les threads. Il est toujours
                conseillé d'utiliser des tâches au lieu de thread car il est
                créé sur le pool de threads qui a déjà créé des threads par le
                système pour améliorer les performances.
              </li>
              <li>
                La tâche peut renvoyer un résultat. Il n'y a pas de mécanisme
                direct pour renvoyer le résultat d'un thread.
              </li>
              <li>
                La tâche prend en charge l'annulation via l'utilisation de
                jetons d'annulation. Mais Thread ne le fait pas.
              </li>
              <li>
                Vous pouvez attacher une tâche à la tâche parent, ainsi vous
                pouvez décider si le parent ou l'enfant existera en premier.
              </li>
              <li>
                Lors de l'utilisation de thread si nous obtenons l'exception
                dans la méthode de longue durée, il n'est pas possible
                d'intercepter l'exception dans la fonction parent, mais la même
                chose peut être facilement interceptée si nous utilisons des
                tâches.
              </li>
              <li>
                Vous pouvez facilement créer des chaînes de tâches. Vous pouvez
                spécifier quand une tâche doit démarrer après la tâche
                précédente et vous pouvez spécifier s'il doit y avoir un
                changement de contexte de synchronisation. Cela vous donne la
                possibilité d'exécuter une tâche de longue durée en
                arrière-plan, puis une tâche d'actualisation de l'interface
                utilisateur sur le thread de l'interface utilisateur.
              </li>
              <li>
                Une tâche est par défaut une tâche en arrière-plan. Vous ne
                pouvez pas avoir de tâche au premier plan. D'un autre côté, un
                fil peut être en arrière-plan ou au premier plan.
              </li>
              <li>
                Le TaskScheduler par défaut utilisera le pool de threads, de
                sorte que certaines tâches peuvent ne pas démarrer tant que
                d'autres tâches en attente ne sont pas terminées. Si vous
                utilisez Thread directement, chaque utilisation démarrera un
                nouveau Thread.
              </li>
            </ul>
          </article>
          <article id="deadlock">
            <h6>Deadlock</h6>
            <div>
              <p>
                Un blocage en C# est une situation dans laquelle deux threads ou
                plus sont gelés (<strong>frozen</strong>) dans leur exécution
                car ils attendent que l'autre se termine. Par exemple, le thread
                A attend le <strong>lock_1</strong> détenu par le thread B. Le
                thread B ne peut pas terminer et libérer le{" "}
                <strong>lock_1</strong> car il attend le <strong>lock_2</strong>
                , qui est détenu par le thread A. Trop déroutant ? Je vais vous
                montrer un exemple dans un instant, maispremierparlons des{" "}
                <strong>Locks</strong>.
              </p>
              <h6>Explication du code :</h6>
              <Highlight className="language-csharp">
                {`public void Foo()
{
    object lock1 = new object();
    object lock2 = new object();
    Console.WriteLine("Starting...");
    var task1 = Task.Run(() =>
    {
        lock (lock1)
        {
            Thread.Sleep(1000);
            lock (lock2)
            {
                Console.WriteLine("Finished Thread 1");
            }
        }
    });
 
    var task2 = Task.Run(() =>
    {
        lock (lock2)
        {
            Thread.Sleep(1000);
            lock (lock1)
            {
                Console.WriteLine("Finished Thread 2");
            }
        }
    });
 
    Task.WaitAll(task1, task2);
    Console.WriteLine("Finished...");
}`}
              </Highlight>
              <ul>
                <li>
                  Deux objets sont créés à des fins de{" "}
                  <strong>verrouillage</strong> . En C#, n'importe quel objet
                  peut être utilisé comme verrou.
                </li>
                <li>
                  <code>Task.Run</code> démarre 2 tâches, qui sont exécutées par
                  2 threads sur le <strong>Thread-Pool</strong> .
                </li>
                <li>
                  Le premier Thread acquiert <strong>lock1</strong> et se met en{" "}
                  <strong>veille</strong> pendant 1 seconde. Le second acquiert{" "}
                  <strong>lock2</strong> et dort également pendant une seconde.
                  Ensuite, le thread 1 attend que <strong>lock2</strong> soit
                  libéré et le thread 2 attend que <strong>lock1</strong> soit
                  libéré. Donc, ils attendent tous les deux indéfiniment et
                  aboutissent à un <strong>Deadlock</strong> .
                </li>
                <li>
                  <code>Task.WaitAll(task1, task2)</code> attend sur le Thread
                  de la méthode jusqu'à ce que les deux Tasks soient terminées,
                  ce qui n'arrive jamais. Cela en fait une impasse 3-Thread.
                  L'impression de la console est : <code>Starting…</code>
                </li>
              </ul>
              <h6>Déboguer un blocage</h6>
              <p>
                Vous pouvez facilement voir le blocage dans le débogueur, une
                fois que vous savez quoi rechercher. Coup sur le{" "}
                <strong>Debug | Break All</strong> (Ctrl + Alt + Break), puis
                allez dans <strong>Debug | Windows | Threads</strong>.
              </p>
              <img
                className="mw-900"
                src="/img/dotnet/nested_deadlock_breakall.png"
                alt="nested_deadlock_breakall"
              />
              <h6>Résoudre l'impasse(Deadlock) Nested-Lock</h6>
              <Highlight className="language-csharp">
                {`// After (without deadlock, change only in "Transfer" method)
public class Account
{
    public uint Id { get; set; }
}
// ...
private Task Transfer(Account acc1, Account acc2, int sum)
{
    var lock1 = acc1.Id < acc2.Id ? acc1 : acc2;//smalled Id account
    var lock2 = acc1.Id < acc2.Id ? acc2 : acc1;//biggest Id account
    var task = Task.Run(() =>
    {
        lock (lock1)
        {
            Thread.Sleep(1000);
            lock (lock2)
            {
                Console.WriteLine($"Finished transferring sum {sum}");
            }
        }
    });
    return task;
}`}
              </Highlight>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}

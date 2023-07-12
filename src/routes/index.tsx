import React, { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

//initial
const Home = lazy(() => import("../pages"));
const About = lazy(() => import("../pages/about"));
const Contact = lazy(() => import("../pages/contact"));
const Proyectos = lazy(() => import("../pages/proyectos"));

//proyects
const TodoApp = lazy(() => import("../pages/proyectos/todo-app"));
const PokemonApi = lazy(() => import("../pages/proyectos/pokemon-api"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/projects",
    element: <Proyectos />,
    children: [
      {
        path: "todo-app",
        element: <TodoApp />,
      },
      {
        path: "pokemon-api",
        element: <PokemonApi />,
      },
    ],
  },
]);
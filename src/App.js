import logo from "./logo.svg";
import "./App.css";
import {
  RouterProvider,
  createBrowserRouter,
  createHashRouter,
} from "react-router-dom";
import Layout from "./Components/Layout/Layout.jsx";
import Home from "./Components/Home/Home.jsx";
import About from "./Components//About/About.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Profile from "./Components/Profile/Profile.jsx";
import NotFound from "./Components/Notfound/NotFound.jsx";
import Main from "./Components/Main/Main.jsx";

const routers = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Main /> },
      { path: "about", element: <About /> },
      { path: "portfolio", element: <Profile /> },
      { path: "contact", element: <Contact /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={routers} />;
    </>
  );
}

export default App;

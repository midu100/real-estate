import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import LayoutOne from "./layout/LayoutOne";
import Home from "./pages/Home";
import PropertyListing from "./pages/PropertyListing";
import PropertyDetails from "./pages/PropertyDetails";
import Agents from "./pages/Agents";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Wishlist from "./pages/Wishlist";

const App = () => {
  const myRoute = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<LayoutOne />}>
          <Route index element={<Home />} />
          <Route path="properties" element={<PropertyListing />} />
          <Route path="property/:id" element={<PropertyDetails />} />
          <Route path="agents" element={<Agents />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="wishlist" element={<Wishlist />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={myRoute} />
    </>
  );
};

export default App;
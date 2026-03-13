import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { Rooms } from "./pages/Rooms";
import { Amenities } from "./pages/Amenities";
import { Contact } from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/rooms",
    Component: Rooms,
  },
  {
    path: "/amenities",
    Component: Amenities,
  },
  {
    path: "/contact",
    Component: Contact,
  },
]);

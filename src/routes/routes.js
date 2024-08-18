import { nanoid } from "nanoid";
import { Home } from "../pages/home";
import { Products } from "../pages/products";

export const routes = [
  {
    component: Home,
    id: nanoid(),
  },
  {
    component: Products,
    id: nanoid(),
    path: "products",
  },
];

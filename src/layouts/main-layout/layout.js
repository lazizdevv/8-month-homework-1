import { HomeOutlined, ProductOutlined } from "@ant-design/icons";
import { nanoid } from "nanoid";

export const data = [
  {
    key: nanoid(),
    icon: HomeOutlined,
    label: "Home",
    path: "/",
  },
  {
    key: nanoid(),
    icon: ProductOutlined,
    label: "Products",
    path: "products",
  },
];

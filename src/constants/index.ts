import type {
  INavLink,
  IFooterSection,
  IProduct,
} from "../types";

import {
  shoe4,
  shoe5,
  shoe6,
  shoe7,
} from "../assets/images";

export const navLinks: INavLink[] = [
  { href: "#home", label: "Home" },
  { href: "#product", label: "Product" },
  { href: "#news", label: "News" },
  { href: "#about", label: "Contact Us" },
  { href: "#about", label: "About" },
];

export const products: IProduct[] = [
  {
    imgUrl: shoe4,
    name: "Nike Air Jordan-01",
    price: "$200.20",
    rating: 4.5,
  },
  {
    imgUrl: shoe5,
    name: "Nike Air Jordan-10",
    price: "$210.20",
    rating: 4.2,
  },
  {
    imgUrl: shoe6,
    name: "Nike Air Jordan-100",
    price: "$220.20",
    rating: 4.6,
  },
  {
    imgUrl: shoe7,
    name: "Nike Air Jordan-001",
    price: "$230.20",
    rating: 4.7,
  },
];

export const footerLinks: IFooterSection[] = [
  {
    title: "Products",
    links: [
      { name: "VirtualYou", link: "https://app.virtualyou.info" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "How It Works", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Contact Us",
    links: [
      { name: "dlwhitehurst@gmail.com", link: "mailto:dlwhitehurst@gmail.com" },
      { name: "+19196056529", link: "tel:+19196056529" },
    ],
  },
];

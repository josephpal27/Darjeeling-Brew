import productBox1 from "../assets/images/our-products/product-box-1.avif";
import productBox2 from "../assets/images/our-products/product-box-2.avif";
import productBox3 from "../assets/images/our-products/product-box-3.avif";

export const products = [
  {
    id: 1,
    slug: "himalayan-elixir-classic",
    title: "Himalayan Elixir Classic",
    rating: 4.3,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor et dolore magna aliqua.",
    mainProductImage: productBox1,
    images: [productBox1, productBox2, productBox3, productBox1],
    variants: [
      {
        weight: 100,
        price: 800,
      },
      {
        weight: 50,
        price: 400,
      },
    ],
  },
  {
    id: 2,
    slug: "himalayan-elixir-ruby",
    title: "Himalayan Elixir Ruby",
    rating: 4.7,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor et dolore magna aliqua.",
    mainProductImage: productBox2,
    images: [productBox2, productBox3, productBox1, productBox2],
    variants: [
      {
        weight: 100,
        price: 2500,
      },
      {
        weight: 50,
        price: 1250,
      },
    ],
  },
  {
    id: 3,
    slug: "himalayan-elixir-gold",
    title: "Himalayan Elixir Gold",
    rating: 4.9,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor et dolore magna aliqua.",
    mainProductImage: productBox3,
    images: [productBox3, productBox1, productBox2, productBox3],
    variants: [
      {
        weight: 100,
        price: 5000,
      },
      {
        weight: 50,
        price: 2500,
      },
    ],
  },
];
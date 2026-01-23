import productBox1 from "../assets/images/our-products/product-box-1.avif";
import productBox2 from "../assets/images/our-products/product-box-2.avif";
import productBox3 from "../assets/images/our-products/product-box-3.avif";
import productCup1 from "../assets/images/our-products/product-1.avif";
import productCup2 from "../assets/images/our-products/product-2.avif";
import productCup3 from "../assets/images/our-products/product-3.avif";

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
    cupImage: productCup1,
    cupLeftContent: "Smokey and Smooth",
    cupRightContent: "Rich and Bold",
    productEssence: "Harvested during the monsoons, it offers a smooth, full-bodied flavor - a daily luxury that brings the mountains to your morning, best enjoyed black or with a dash of milk and sugar.",
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
    cupImage: productCup2,
    cupLeftContent: "Sweet and fragrant with <br/> undertones of honey",
    cupRightContent: "Ruby, Royal Amber",
    productEssence: "Matured under the bright Himalayan sun and picked when the rays are strong and yet the air remains cool from the misty mountains, these leaves develop a unique depth of flavour known as muscatel.",
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
    cupImage: productCup3,
    cupLeftContent: "Fresh and Floral",
    cupRightContent: "Bright, golden with a <br/> delicate shimmer",
    productEssence: "The rarest of rare harvests, plucked at dawn in early spring, when the Himalayan mist is still rests on the leaves, grown and produced in limited quantities.",
  },
];
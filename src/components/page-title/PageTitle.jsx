import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const PageTitle = () => {
  const location = useLocation();

  useEffect(() => {
    let title = "The Darjeeling Brew"; // default
    let description = ""; // default

    switch (location.pathname) {
      case "/":
        title = "The Darjeeling Brew";
        description = "";
        break;
      case "/products":
        title = "Our Products -The Darjeeling Brew";
        description = "";
        break;
      case "/products/himalayan-elixir-classic":
        title = "Himalayan Elixir Classic -The Darjeeling Brew";
        description = "";
        break;
      case "/products/himalayan-elixir-ruby":
        title = "Himalayan Elixir Ruby -The Darjeeling Brew";
        description = "";
        break;
      case "/products/himalayan-elixir-gold":
        title = "Himalayan Elixir Gold -The Darjeeling Brew";
        description = "";
        break;
      case "/ultimate-beverage":
        title = "The Ultimate Beverage -The Darjeeling Brew";
        description = "";
        break;
      case "/art-of-brewing":
        title = "The Art Of Brewing -The Darjeeling Brew";
        description = "";
        break;
      case "/hot-brew":
        title = "Hot Brew - The Darjeeling Brew";
        description = "";
        break;
      case "/cold-brew":
        title = "Cold Brew - The Darjeeling Brew";
        description = "";
        break;
      case "/vision":
        title = "Vision - The Darjeeling Brew";
        description = "";
        break;
      case "/mission":
        title = "Mission - The Darjeeling Brew";
        description = "";
        break;
      case "/sustainability":
        title = "Sustainability - The Darjeeling Brew";
        description = "";
        break;
      case "/contact":
        title = "Contact - The Darjeeling Brew";
        description = "";
        break;
      case "/checkout":
        title = "Checkout - The Darjeeling Brew";
        description = "";
        break;
      case "/cart":
        title = "Cart - The Darjeeling Brew";
        description = "";
        break;
      case "/store-terms-and-policies":
        title = "Store terms & policies - The Darjeeling Brew";
        description = "";
        break;
      default:
        title = "The Darjeeling Brew";
        description = "";
    }

    // Page Title update
    document.title = title;

    // Meta Title & Description update
    let metaTitle = document.querySelector("meta[name='title']");
    let metaDesc = document.querySelector("meta[name='description']");

    if (metaTitle) metaTitle.setAttribute('content', title);
    if (metaDesc) metaDesc.setAttribute('content', description);

  }, [location]);

  return null; // doesn’t render anything visible
};

export default PageTitle;

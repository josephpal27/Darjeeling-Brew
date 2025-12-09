import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there's a hash (#section), do NOT scroll to top
    if (hash) return;

    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;

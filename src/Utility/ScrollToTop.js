import { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    if (history.action === "PUSH") {
      window.scrollTo(0, 0);
    }
  }, [location, history]);

  return null;
};

export default ScrollToTop;

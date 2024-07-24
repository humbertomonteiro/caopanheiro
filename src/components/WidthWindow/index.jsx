import { useState, useEffect } from "react";

export default function WidthWindow() {
  let [widthScreen, setWidthScreen] = useState(window.innerWidth);

  const handleWindowSizeChange = () => {
    setWidthScreen(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return widthScreen;
}

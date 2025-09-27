import { useEffect } from "react";

export default function App({ children }) {
  useEffect(() => {
    function reInit() {
      if (typeof window.initMainJS === "function") {
        console.log("Re-initializing main.js animations…");
        window.initMainJS();
      } else {
        console.warn("initMainJS not found");
      }
    }

    // Run once immediately
    reInit();

    // Run again when window fully loads (ensures images are present)
    window.addEventListener("load", reInit);

    return () => {
      window.removeEventListener("load", reInit);
    };
  }, []);

  return <div>{children}</div>;
}

import { useEffect } from "react";

export default function App({ children }) {
  useEffect(() => {
    const reInit = () => {
      if (typeof window.initMainJS === "function") {
        console.log("Re-initializing main.js animations…");
        // Run it only once per load
        if (!window.__mainJSInitialized) {
          window.initMainJS();
          window.__mainJSInitialized = true;
        }
      } else {
        console.warn("⚠️ initMainJS not found");
      }
    };

    // Run after React mounts the DOM
    setTimeout(reInit, 200);

    // Run again on full window load (ensures images)
    window.addEventListener("load", reInit);

    return () => {
      window.removeEventListener("load", reInit);
    };
  }, []);

  return <>{children}</>;
}

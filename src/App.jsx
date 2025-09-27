import { useEffect } from "react";

export default function App({ children }) {
  useEffect(() => {
    setTimeout(() => {
      if (typeof window.initMainJS === "function") {
        window.initMainJS();
      }
    }, 300);
  }, []);

  return <div>{children}</div>;
}

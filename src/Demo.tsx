import { useEffect } from "react";

export default function Demo() {
  useEffect(() => {
    const _t = setInterval(() => {
      window.postMessage({ type: "Hello!", payload: "Hello, I am child app!" });
    }, 1000);
    return () => {
      clearInterval(_t);
    };
  }, []);
  return <h2>I Am Demo!</h2>;
}

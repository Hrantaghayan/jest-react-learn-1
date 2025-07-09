import { useState, useEffect } from "react";

function fakeFetchColors() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["Red", "Green", "Blue"]);
    }, 1000);
  });
}
export default function LoadableColorList() {
  const [colors, setColors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fakeFetchColors().then((fetchedColors) => {
      setColors(fetchedColors);
      setLoading(false);
    });
  }, []);

  return (
    <ul>
      l
      {loading
        ? "Loading...."
        : colors?.map((color) => color && <li key={color}>{color}</li>)}
    </ul>
  );
}

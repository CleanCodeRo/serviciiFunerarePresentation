import { useState, useEffect } from "react";

const useSize = () => {
  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Dependency array is empty to run effect only once on mount
  console.log(size)
  return size;
};

export default useSize;

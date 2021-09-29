import { useEffect } from "react";
import { useState } from "react";

const OutsideClick = (ref) => {
  const [isClicked, setIsClicked] = useState();
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
          console.log('clicked!');
        setIsClicked(true);
      } else {
        setIsClicked(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return document.removeEventListener("mousedown", handleOutsideClick);
  }, [ref]);
  return isClicked;
};

export default OutsideClick;
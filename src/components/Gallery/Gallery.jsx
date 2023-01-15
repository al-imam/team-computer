import { useState, useCallback } from "react";
import classes from "./gallery.module.css";
import useOutsideClick from "../../hooks/useOutSideClick";

function Gallery({ pictures }) {
  return (
    <div className={classes.gallery}>
      {pictures.map(({ url }, index) => (
        <Picture show={index} key={url + Math.random()} url={url} />
      ))}
    </div>
  );
}

export default Gallery;

function Picture({ url }) {
  const [isOpen, setIsOpen] = useState(false);

  const onClick = useCallback(() => {
    if (isOpen) {
      setIsOpen(false);
    }
    console.log("im called", isOpen);
  }, [isOpen]);

  const ref = useOutsideClick(onClick);

  return (
    <div
      ref={ref}
      className={`${classes.imgContainer} ${isOpen ? classes.open : ""}`}
      onClick={() => setIsOpen(true)}
    >
      <img src={url} />
    </div>
  );
}

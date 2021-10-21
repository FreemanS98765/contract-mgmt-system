import { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const LightboxImage = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="row">
      <a href="#" onClick={() => setIsOpen(true)}>
        <img
          src={props.attachment}
          alt={`upload.filename`}
          width={100}
          height={100}
        />
      </a>
      {isOpen && (
        <Lightbox
          mainSrc={props.attachment}
          onCloseRequest={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default LightboxImage;

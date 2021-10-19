import { useEffect, useState } from "react";
import LoadingSpinner from "./LoadingSpinner";

const UploadThumb = (props) => {
  const [loading, setLoading] = useState(false);
  const [thumb, setThumb] = useState("");

  const file = props.file;

  const loadThumb = async (nextProps) => {
    if (!nextProps) {
      return;
    }

    let reader = new FileReader();

    reader.onloadstart = () => {
      setLoading(true);
    };

    reader.onloadend = () => {
      setLoading(false);
      setThumb(reader.result);
    };

    reader.readAsDataURL(nextProps);
  };

  useEffect(() => {
    loadThumb(file);
  }, [file]);

  if (!file) {
    return null;
  }

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <img src={thumb} alt={file.name} className="img" height={150} width={150} />
  );
};

export default UploadThumb;

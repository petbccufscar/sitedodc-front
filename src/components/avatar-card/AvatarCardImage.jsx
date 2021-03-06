import React from "react";
import PropTypes from "prop-types";


import avatar from "../../images/avatar.png";
import { ImageLoader } from "../../components/image-loader";

const AvatarCardImage = ({ foto }) => {
  return (
    <ImageLoader
      classnames="card-img-top fit-image-aluno"
      src={foto}
      fallback={avatar}
      alt="Foto"
      loaderHeight="250px"
    />
  );
};

AvatarCardImage.propTypes = {
  foto: PropTypes.string.isRequired,
};

export default AvatarCardImage;
import PropTypes from "prop-types";

SliderVideoCard.propTypes = {
  content: PropTypes.object,
};

function SliderVideoCard(props) {
  const { content } = props;
  const { link } = content;
  return (
    <iframe
      width="560"
      height="315"
      src={link}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  );
}

export default SliderVideoCard;

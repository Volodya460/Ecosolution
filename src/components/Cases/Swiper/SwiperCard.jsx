import Icons from "../../../images/sprite.svg";
import PropTypes from "prop-types";
import {
  DateDiv,
  InfoBox,
  LocationDiv,
  TextLocationDiv,
} from "./SwiperCard.styled";

export const SwiperCard = ({ el }) => {
  const { img, location, name, type, date } = el;

  return (
    <div>
      <div>
        <img src={img} />
      </div>
      <InfoBox>
        <LocationDiv>
          <TextLocationDiv>
            <p>{location}</p>
            <p>{name}</p>
          </TextLocationDiv>
          <button>
            <svg width="28px" height="28px" aria-labelledby="global-edit">
              <use href={Icons + "#icon-arrow-up_right"}></use>
            </svg>
          </button>
        </LocationDiv>
        <DateDiv>
          {" "}
          <p>{type}</p>
          <p>{date}</p>
        </DateDiv>
      </InfoBox>
    </div>
  );
};

SwiperCard.propTypes = {
  el: PropTypes.object,
};

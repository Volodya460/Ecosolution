import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import PropTypes from "prop-types";
import { SwiperCard } from "./SwiperCard";
import {
  ButtonDiv,
  PageDiv,
  PaginationDiv,
  TotalSpan,
} from "./SwiperCase.styled";
import Icons from "../../../images/sprite.svg";
import { useState } from "react";

export const SwiperCase = ({ arr }) => {
  const [total, setTotal] = useState(0);
  const [current, setCurrent] = useState(0);

  const formattedPage = (num) => {
    return num.toString().padStart(2, "0");
  };

  return (
    <>
      <PaginationDiv>
        <h2>Successful cases of our company</h2>
        <PageDiv>
          <span> {formattedPage(current)}</span>
          <TotalSpan>/{formattedPage(total)}</TotalSpan>
        </PageDiv>
        <div className="swiper-pagination" style={{ display: "none" }}></div>
        <ButtonDiv>
          {" "}
          <button type="button" className="prev">
            <svg width="36px" height="36px" aria-labelledby="arrow-left">
              <use href={Icons + "#icon-arrow-left"}></use>
            </svg>
          </button>
          <button type="button" className="next">
            <svg width="36px" height="36px" aria-labelledby="arrow-righ">
              <use href={Icons + "#icon-arrow-right"}></use>
            </svg>
          </button>
        </ButtonDiv>
      </PaginationDiv>
      <Swiper
        direction="horizontal"
        loop={true}
        mousewheel={true}
        css-mode="true"
        modules={[Mousewheel, Pagination, Navigation]}
        navigation={{
          nextEl: ".next",
          prevEl: ".prev",
        }}
        pagination={{
          el: ".swiper-pagination",
          type: "custom",
          renderCustom: function (swiper, current, total) {
            setTotal(total);
            setCurrent(current);
          },
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          1280: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
      >
        {arr.map((el) => {
          return (
            <SwiperSlide key={el.id}>
              <SwiperCard el={el} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

SwiperCase.propTypes = {
  arr: PropTypes.array,
};

import SectionContainer from "./containers/SectionContainer";
import useScrollInToView from "../../hooks/useScrollInToView";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import SectionHeader from "./SectionHeader";
import { addAttributesToReactNode, trim } from "../../utils/functions/general";
import { ReactElement } from "react";

const CarouselSection = ({
  title,
  containerClassName,
  cardClassName,
  headerClassName,
  cards,
}: {
  title: string;
  cards: ReactElement[];
  headerClassName?: string;
  containerClassName?: string;
  cardClassName?: string;
}) => {
  const { targetRef, isInView } = useScrollInToView();

  return (
    <SectionContainer
      ref={targetRef}
      className={`${containerClassName}`}
      wraperClassName="py-7"
    >
      <SectionHeader
        title={title}
        className={`text-body-primary ${headerClassName}`}
      />
      <Swiper
        ref={targetRef}
        modules={[Autoplay]}
        loop
        tag="ul"
        slidesPerView={"auto"}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        spaceBetween={50}
        dir="ltr"
        className={trim(`
          w-full 
          mt-10
          rounded-xl 
          transition-opacity
          duration-500
          ease-in-out
          select-none
          ${isInView ? "opacity-100" : "opacity-0"}`)}
      >
        {cards.map((card, i) => (
          <SwiperSlide tag="li" className="!w-auto" key={i}>
            {addAttributesToReactNode(card, {
              className: `w-auto ${cardClassName}`,
            })}
          </SwiperSlide>
        ))}
      </Swiper>
    </SectionContainer>
  );
};

export default CarouselSection;

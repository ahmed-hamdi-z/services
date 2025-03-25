
import SectionContainer from "../shared/containers/SectionContainer";
import SectionHeader from "../shared/SectionHeader";
import { trim } from "../../utils/functions/general";
import useScrollInToView from "../../hooks/useScrollInToView";

const InfoBanner = ({
  title,
  description,
  bg,
  reverse,
}: {
  title: string;
  description: string;
  img: string;
  bg?: boolean;
  reverse?: boolean;
}) => {
  const { targetRef, isInView } = useScrollInToView();

  return (
    <SectionContainer
      ref={targetRef}
      className={`${bg ? "bg-custom-radial" : ""}`}
      wraperClassName={`
        ${reverse ? "md:flex-row-reverse" : "md:flex-row"} 
        gap-8
        items-center
        justify-between
        trasition-opacity
        duration-500
        ease-in-out
        ${isInView ? "opacity-100" : "opacity-0"}`}
    >
      <div
        className={trim(`
          flex
          flex-col
          gap-4
          md:min-w-[50%]
          w-full
          text-responsive-md
          ${bg ? "text-white" : "text-body-primary"}`)}
      >
        <SectionHeader
          title={title}
          className={`
            text-start
            ${bg ? "!text-white" : "!text-body-primary"}`}
        />
        <p>{description}</p>
      </div>

     
    </SectionContainer>
  );
};

export default InfoBanner;

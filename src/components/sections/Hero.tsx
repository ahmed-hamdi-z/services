import { trim } from "../../utils/functions/general";
import SectionContainer from "../shared/containers/SectionContainer";
import petHugs from "../../assets/imgs/pet-hugs.png";
import SectionHeader from "../shared/SectionHeader";
import ar from "../../locales/ar.json";
import useScrollInToView from "../../hooks/useScrollInToView";

const { title, description, description2 } = ar.pages.home.hero;

const Hero = () => {
  const { targetRef, isInView } = useScrollInToView();

  return (
    <SectionContainer
      ref={targetRef}
      id="hero"
      className={`
        bg-custom-radial
        pt-40
        pb-16
        lg:rounded-br-full`}
      wraperClassName={`
        lg:flex-row
        trasition-opacity
        duration-500
        ease-in-out
        ${isInView ? "opacity-100" : "opacity-0"}`}
    >
      <img
        src={petHugs}
        alt="hugs-img"
        className={trim(`
          lg:min-w-[50%]
          max-w-[700px]
          block`)}
      />
      <div
        className={trim(`
          flex
          flex-col
          gap-4
          lg:min-w-[50%]
          w-full
          text-responsive-md
          text-white`)}
      >
        <SectionHeader title={title} className="text-start text-white" />
        <p className="mb-7">{description}</p>
        <p>{description2}</p>
      </div>
    </SectionContainer>
  );
};

export default Hero;

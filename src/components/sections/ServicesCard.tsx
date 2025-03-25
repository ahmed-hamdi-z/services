import useScrollInToView from "../../hooks/useScrollInToView";
import { trim } from "../../utils/functions/general";

const ServicesCard = ({
  img,
  title,
  description,
  className = "",
}: {
  img: string;
  title: string;
  description: string;
  className?: string;
}) => {
  const { targetRef, isInView } = useScrollInToView();

  return (
    <div
      className={trim(`
        pt-30
        h-full
        transition-opacity
        duration-500
        ease-in-out
        ${isInView ? "opacity-100" : "opacity-0"}
        ${className}`)}
    >
      <div
        ref={targetRef}
        className={trim(`
        flex
        flex-col
        items-center
        justify-center
        gap-4
        pt-20
        sm:pt-36
        pb-10
        px-8
        sm:px-14
        rounded-4xl
        h-full
        max-w-[300px]
        sm:max-w-[550px]
        relative
        text-center
        bg-[#DFDFDF]`)}
      >
        <img
          src={img}
          alt="service-img"
          className="absolute -top-10 sm:-top-20 left-1/2 transform -translate-x-1/2 w-full max-w-30 sm:max-w-48"
        />

        <h1 className="text-responsive-lg font-semibold">{title}</h1>
        <p className="text-responsive-2sm">{description}</p>
      </div>
    </div>
  );
};

export default ServicesCard;

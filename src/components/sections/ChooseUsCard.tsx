import useScrollInToView from "../../hooks/useScrollInToView";
import { trim } from "../../utils/functions/general";

const ChooseUsCard = ({
  img,
  title,
  className = "",
}: {
  img: string;
  title: string;
  className?: string;
}) => {
  const { targetRef, isInView } = useScrollInToView();

  return (
    <div
      className={trim(`
        flex
        flex-col
        items-center
        justify-center
        gap-4
        py-10
        px-14
        rounded-4xl
        h-full
        max-w-90
        bg-yellow-raial
        transition-opacity
        duration-500
        ease-in-out
        ${isInView ? "opacity-100" : "opacity-0"}
        ${className}`)}
    >
      <img
        ref={targetRef}
        src={img}
        alt="client"
        className={trim(`
          w-auto
          max-w-40`)}
      />
      <h3 className="text-responsive-lg font-semibold text-center">{title}</h3>
    </div>
  );
};

export default ChooseUsCard;

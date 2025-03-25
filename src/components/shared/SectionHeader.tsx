import { HTMLAttributes } from "react";
import { trim } from "../../utils/functions/general";

const SectionHeader = ({
  className = "",
  title,
  tag: Tag = "h1",
  ...attributes
}: {
  title: string;
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
} & HTMLAttributes<HTMLHeadElement>) => {
  return (
    <Tag
      className={trim(`
        text-responsive-2xl
        font-semibold
        text-center
        pb-10
        text-shadow-lg
        ${className}`)}
      {...attributes}
    >
      {title}
    </Tag>
  );
};

export default SectionHeader;

import { cloneElement, ReactElement } from "react";
import variables from "../variables";
import styles from "../input-styles.module.css";

const formatClasses = (className: string): string =>
  className.replace(/\s+/g, " ").trim();

const addAttributesToReactNode = (
  element: ReactElement,
  attributes?: React.HTMLAttributes<HTMLOrSVGElement>
) => cloneElement(element, attributes);

const getClasses = (
  target: "label" | "tag" | "input" | "textarea" | "error",
  {
    tagSize,
    border,
    error,
    transparent,
  }: {
    tagSize?: "xs" | "sm" | "md" | "lg" | "xl" | "custom";
    border?: boolean;
    error?: string;
    transparent?: boolean;
  } = {}
) => {
  const classes = {
    label: `${styles.label}
            ${tagSize === "xs" ? styles["text-sm"] : ""}
            ${tagSize === "sm" ? styles["text-md"] : ""}
            ${tagSize === "md" ? styles["text-lg"] : ""}
            ${tagSize === "lg" ? styles["text-xl"] : ""}
            ${tagSize === "xl" ? styles["text-2xl"] : ""}
            ${error ? styles["color-rose"] : variables.labelTextColor}`,

    tag: `${styles.tag}
          ${variables.textColor}
          ${transparent ? styles["bg-transparent"] : variables.bgColor}
          ${
            tagSize === "xs"
              ? `
              ${styles["p-1.5"]} 
              ${styles["pt-2"]} 
              ${styles["text-xs"]}`
              : ""
          }
          ${
            tagSize === "sm"
              ? `
              ${styles["p-2"]} 
              ${styles["pt-3"]} 
              ${styles["text-sm"]}`
              : ""
          }
          ${
            tagSize === "md"
              ? `
              ${styles["p-3"]} 
              ${styles["pt-4"]} 
              ${styles["text-md"]}`
              : ""
          }
          ${
            tagSize === "lg"
              ? `
              ${styles["p-4"]} 
              ${styles["pt-5"]} 
              ${styles["text-lg"]}`
              : ""
          }
          ${
            tagSize === "xl"
              ? `
              ${styles["p-5"]} 
              ${styles["pt-6"]} 
              ${styles["text-xl"]}`
              : ""
          }
          ${
            error ? styles.errorTag : `${border ? variables.borderColors : ""}`
          }`,

    input: `
          ${
            tagSize === "xs"
              ? `
              ${styles["p-1.5"]} 
              ${styles["pt-2"]} 
              ${styles["text-xs"]}`
              : ""
          }
          ${
            tagSize === "sm"
              ? `
              ${styles["p-2"]} 
              ${styles["pt-3"]} 
              ${styles["text-sm"]}`
              : ""
          }
          ${
            tagSize === "md"
              ? `
              ${styles["p-3"]} 
              ${styles["pt-4"]} 
              ${styles["text-md"]}`
              : ""
          }
          ${
            tagSize === "lg"
              ? `
              ${styles["p-4"]} 
              ${styles["pt-5"]} 
              ${styles["text-lg"]}`
              : ""
          }
          ${
            tagSize === "xl"
              ? `
              ${styles["p-5"]} 
              ${styles["pt-6"]} 
              ${styles["text-xl"]}`
              : ""
          }`,

    textarea: `
              ${
                tagSize === "xs"
                  ? `
              ${styles["p-1.5"]} 
              ${styles["pt-2"]} 
              ${styles["text-xs"]} 
              ${styles["h-20"]}`
                  : ""
              }
              ${
                tagSize === "sm"
                  ? `
              ${styles["p-2"]} 
              ${styles["pt-4"]} 
              ${styles["text-sm"]} 
              ${styles["h-28"]}`
                  : ""
              }
              ${
                tagSize === "md"
                  ? `
              ${styles["p-3"]} 
              ${styles["pt-5"]} 
              ${styles["text-md"]} 
              ${styles["h-36"]}`
                  : ""
              }
              ${
                tagSize === "lg"
                  ? `
              ${styles["p-4"]} 
              ${styles["pt-6"]} 
              ${styles["text-lg"]} 
              ${styles["h-44"]}`
                  : ""
              }
              ${
                tagSize === "xl"
                  ? `
              ${styles["p-5"]} 
              ${styles["pt-7"]} 
              ${styles["text-xl"]} 
              ${styles["h-52"]}`
                  : ""
              }`,

    error: `${styles.error}
            ${tagSize === "xs" ? styles["text-xs"] : ""}
            ${tagSize === "sm" ? styles["text-sm"] : ""}
            ${tagSize === "md" ? styles["text-md"] : ""}
            ${tagSize === "lg" ? styles["text-lg"] : ""}
            ${tagSize === "xl" ? styles["text-xl"] : ""}`,
  };

  return classes[target];
};
export { formatClasses, addAttributesToReactNode };
export default getClasses;

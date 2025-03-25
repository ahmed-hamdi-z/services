const varablesTwClasses = {
  font: "",
  text: "text-primary-dark font-bold",
  hover: "hover:!text-primary-dark hover:!bg-gray-200",
  bg: "",
  underlineColor: "text-secondary",
  border: "border",
  rippleBg: "bg-primary",
  rippleDuration: undefined,
};

const formatClasses = (className?: string): string =>
  className ? className.replace(/\s+/g, " ").trim() : "";

export { formatClasses };
export default varablesTwClasses;

// file to customize the button component

// the obj should look like this

// const varablesTwClasses = {
//   font: "font-monospace",
//   text: "text-body-lightest",
//   hover: "hover:text-primary hover:bg-box group-hover:bg-box",
//   bg: "bg-paper",
//   border: "border border-primary",
//   rippleBg: "bg-primary",
//   rippleDuration: undefined,
// };

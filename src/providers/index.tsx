import { Fragment, ReactNode } from "react";
import { Toaster } from "react-hot-toast";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <Fragment>
      <Toaster containerStyle={{ textAlign: "center" }} />
      {children}
    </Fragment>
  );
}

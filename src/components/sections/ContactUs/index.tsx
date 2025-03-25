import SectionContainer from "../../shared/containers/SectionContainer";
import SectionHeader from "../../shared/SectionHeader";
import ar from "../../../locales/ar.json";
import Form from "./Form";
import useScrollInToView from "../../../hooks/useScrollInToView";

const { title } = ar.pages.home.contactUs;

const ContactUs = () => {
  const { targetRef } = useScrollInToView();
  return (
    <SectionContainer ref={targetRef} className="">
      <SectionHeader title={title} className="text-white" />
      <Form />
    </SectionContainer>
  );
};

export default ContactUs;

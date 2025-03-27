import Form from "../components/sections/ContactUs/Form";

export default function Home() {
  return (
    <div
      className="flex flex-col justify-center items-center w-full h-full min-h-screen  bg-contain md:bg-no-repeat md:bg-cover"
      style={{ backgroundImage: "url('./images/bg.jpg')" }}
    >
      <div>
        {" "}
        <Form />
      </div>
    </div>
  );
}

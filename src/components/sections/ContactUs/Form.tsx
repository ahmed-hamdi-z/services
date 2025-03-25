import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Dropdown from "./dropdown";
import { IoCloseSharp } from "react-icons/io5";

const ContactAd: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedService, setSelectedService] = useState("");

  const [message, setMessage] = useState<string | null>(null);
  const form = useRef<HTMLFormElement>(null);

  const handleCityChange = (value: string) => {
    setSelectedCity(value);
  };

  const handleServiceChange = (value: string) => {
    setSelectedService(value);
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.current) {
      emailjs
        .sendForm(
          "service_tc9dusc",
          "template_4qrvjnp",
          form.current,
          "OT9OR1z7XDM1I2qYe"
        )
        .then(
          () => {
            setMessage("تم تسجيل ردكم بنجاح");
            form.current;
          },
          (error) => {
            setMessage(`FAILED... ${error.text}`);
          }
        );
    }
  };
  return (
    <div className="w-full flex items-center justify-center pr-5">
      <form onSubmit={sendEmail} ref={form} className=" md:w-4/12 w-5/6 mt-5">
        <div className="mb-2">
          <label className="mb-1 inline-block text-sm font-medium text-[#764095]">
            الاسم بالكامل
            <span className="text-red-600">*</span>
          </label>
          <input
            id="name-input"
            name="user_name"
            type="text"
            className="w-full border-[1px] border-slate-300 px-2.5 py-1.5 outline-none shadow-md shadow-[#764095]"
            required
          />
        </div>

        <div className="mb-2">
          <label className="mb-1 inline-block text-sm font-medium text-[#764095]">
            الفرع
            <span className="text-red-600">*</span>
          </label>
          <Dropdown
            name="city"
            options={[" ــــــ الرجاء اختيار الفرع ــــــ","فرع 4","فرع 3","فرع 2", "فرع1 "]}
            value={selectedCity}
            onChange={handleCityChange}
          />
        </div>

        <div className="mb-2">
          <label className="mb-1 inline-block text-sm font-medium text-[#764095]">
            نوع الطلب
            <span className="text-red-600">*</span>
          </label>
          <Dropdown
            name="toolmakerID"
            options={[
              " ــــــ الرجاء اختيار طلب ــــــ",
              "طلب 1 ",
              "طلب 2 ",
              "طلب 3 ",
              "طلب 4 ",
            ]}
            value={selectedService}
            onChange={handleServiceChange}
          />
        </div>

        <input
          className="mt-3 w-full bg-[#764095] px-4 py-2 text-center font-medium text-white transition-colors hover:bg-indigo-700 hover:cursor-pointer"
          type="submit"
          value={"ارسال"}
        />
      </form>
      {/* Pop-up message */}
      {message && (
        <div className="fixed text-[#764095] top-56 flex items-center justify-center">
          <div className="bg-white text-black p-6 rounded-lg shadow-lg w-96 h-32 flex flex-col items-center justify-center">
            <button
              onClick={() => setMessage(null)}
              className="relative left-40 top-0 mb-4 font-bold  w-7 h-7 text-black text-3xl z-50"
              aria-label="Close"
            >
              <IoCloseSharp />
            </button>
            <p className="text-lg font-semibold absolute top-3">{message}</p>
            <button
              onClick={() => setMessage(null)}
              className="bg-[#764095] text-white px-4 py-2 mt-3 hover:bg-indigo-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactAd;

import React, { useState } from "react";

const WhatsAppForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    branch: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendWhatsApp = () => {
    const phoneNumber = "+201069169075";
    const { name, branch, service, message } = formData;
    const url =
      `https://wa.me/${phoneNumber}?text=` +
      `*Name :* ${name}%0a` +
      `*Branch :* ${branch}%0a` +
      `*service:* ${service}%0a` +
      `*Message :* ${message}%0a%0a`;
    window.open(url, "_blank");
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form className="bg-white p-6 rounded-lg shadow-md w-96">
        <label className="mb-1 inline-block text-sm font-medium text-[#764095]">
          الاسم بالكامل
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border-[1px] border-slate-300 px-2.5 py-1.5 outline-none shadow-md shadow-[#764095]"
        />

        <label className="mb-1 inline-block text-sm font-medium text-[#764095]">
          الفرع
        </label>
        <input
          type="text"
          name="branch"
          value={formData.branch}
          onChange={handleChange}
          className="w-full border-[1px] border-slate-300 px-2.5 py-1.5 outline-none shadow-md shadow-[#764095]"
        />

        <label className="mb-1 inline-block text-sm font-medium text-[#764095]">
          نوع الطلب
        </label>
        <input
          type="text"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="w-full border-[1px] border-slate-300 px-2.5 py-1.5 outline-none shadow-md shadow-[#764095]"
        />

        <label className="mb-1 inline-block text-sm font-medium text-[#764095]">
          الملاحظات
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full border-[1px] border-slate-300 px-2.5 py-1.5 outline-none shadow-md shadow-[#764095]"
        ></textarea>

        <button
          type="button"
          onClick={sendWhatsApp}
          className="bg-green-500 text-white p-2 w-full rounded hover:bg-green-700 hover:cursor-pointer "
        >
          Send Via WhatsApp
        </button>
      </form>
    </div>
  );
};

export default WhatsAppForm;

{
  /* <div className="mb-2">
<label className="mb-1 inline-block text-sm font-medium text-[#764095]">
  الاسم بالكامل
  <span className="text-red-600">*</span>
</label>
<input
  id="name-input"
  name=""
  type="text"
  className="w-full border-[1px] border-slate-300 px-2.5 py-1.5 outline-none shadow-md shadow-[#764095]"
  required
/>
</div> */
}

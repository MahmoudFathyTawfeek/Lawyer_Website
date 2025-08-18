import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("تم إرسال استشارتك القانونية بنجاح ✅");
    // هنا يمكنك إضافة منطق الإرسال الفعلي عبر API إذا أردت
  };

  return (
    <div
      className="container mt-5 text-white"
      style={{ paddingTop: "120px", paddingLeft: "20px", paddingRight: "20px" }}
    >
      <h2 className="mb-4 text-center text-white" style={{ fontSize: "2rem" }}>
        إرسال استشارة قانونية
      </h2>

      <form onSubmit={handleSubmit} className="mb-5">
        <div className="mb-3" dir="rtl">
          <label className="form-label">الاسم</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="اكتب اسمك الكامل"
            required
          />
        </div>

        <div className="mb-3" dir="rtl">
          <label className="form-label">البريد الإلكتروني</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="example@mail.com"
            required
          />
        </div>

        <div className="mb-3" dir="rtl">
          <label className="form-label fw-bold">نص الاستشارة</label>
          <textarea
            className="form-control"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            placeholder="اكتب استشارتك القانونية هنا"
            required
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary w-100">
          إرسال
        </button>
      </form>

      {/* أرقام التواصل */}
      <div className="contact-info mt-4 text-center fw-bold">
        <h5>تواصل معنا مباشرة:</h5>
        <p>📞 الهاتف: 0123456789</p>
        <p>
          📱 واتساب:{" "}
          <a
            href="https://wa.me/201205116609"
            target="_blank"
            rel="noreferrer"
          >
            اضغط هنا للتواصل
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;

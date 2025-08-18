import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("جارٍ الإرسال...");

    try {
      const response = await fetch("https://formspree.io/f/mkgzaapv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("تم إرسال استشارتك القانونية بنجاح ✅");
        setFormData({ name: "", email: "", message: "" }); // تفريغ الحقول بعد الإرسال
      } else {
        setStatus("حدث خطأ ❌ حاول مرة أخرى");
      }
    } catch (error) {
      setStatus("فشل الاتصال بالسيرفر ❌");
    }
  };

  return (
    <div
      className="container text-white"
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

      {/* رسالة حالة الإرسال */}
      {status && (
        <div className="alert alert-info text-center fw-bold">{status}</div>
      )}

      {/* أرقام التواصل */}
      <div className="contact-info mt-4 text-center fw-bold">
        <h5>تواصل معنا مباشرة:</h5>
        <p>📞 0 122 165 3213</p>
        <p>📞 0 127 068 8701</p>
        <p>
          📱 واتساب:{" أ/عبدالله "}
          <a href="https://wa.me/20 122 165 3213" target="_blank" rel="noreferrer">
            اضغط هنا للتواصل
          </a>
        </p>
         <p>
          📱 واتساب:{"  أ/حسن النص  "}
          <a href="https://wa.me/20 127 068 8701" target="_blank" rel="noreferrer">
            اضغط هنا للتواصل
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;

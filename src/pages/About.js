import React from "react";

const About = () => {
  return (
    <section
      dir="rtl"
      className="py-5"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,.55), rgba(0,0,0,.55)), url('/bg.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        paddingTop: "120px", // padding-top عشان Navbar ما يغطيش المحتوى
        paddingLeft: "20px",
        paddingRight: "20px",
      }}
    >
      <div className="container mt-5">
        {/* بطاقة تعريفية */}
        <div className="row justify-content-center mb-4">
          <div className="col-lg-10">
            <div className="bg-dark text-white rounded-4 shadow p-4 p-md-5 text-center">
              <h1 className="fw-bold mb-3" style={{ fontSize: "2rem" }}>من نحن</h1>
              <p className="lead mb-0 text-white" style={{ maxWidth: "90%", margin: "0 auto" }}>
                شركة العدل للاستشارات القانونية تقدّم خدمات قانونية احترافية عبر
                فريق من المحامين المتخصصين في مختلف المجالات. نسعى دومًا لتحقيق
                أفضل النتائج لعملائنا بالالتزام والمصداقية والسرية.
              </p>
            </div>
          </div>
        </div>

        {/* رسالتنا - رؤيتنا - قيمنا */}
        <div className="row g-4">
          {[
            { title: "رسالتنا", text: "تقديم حلول قانونية دقيقة وفعّالة تدعم اتخاذ القرار وتحفظ الحقوق." },
            { title: "رؤيتنا", text: "أن نكون الشريك القانوني الأول للأفراد والشركات محليًا وإقليميًا." },
            { title: "قيمنا", text: "الالتزام، المصداقية، السرية، والعمل بروح الفريق لخدمة عميلنا." }
          ].map((item, idx) => (
            <div className="col-md-4 " key={idx}>
              <div className="card h-100 shadow border-0 bg-dark text-white rounded-4">
                <div className="card-body text-center p-4">
                  <h5 className="card-title fw-bold mb-2 text-white">{item.title}</h5>
                  <p className="card-text text-white mb-0" style={{ maxWidth: "90%", margin: "0 auto", lineHeight: "1.4" }}>
                    {item.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* إحصائيات سريعة */}
        <div className="row text-white text-center mt-5 g-3">
          {[
            { number: "15+", label: "سنوات خبرة" },
            { number: "500+", label: "عميل موثوق" },
            { number: "800+", label: "قضية ناجحة" },
            { number: "24/7", label: "دعم واستشارة" }
          ].map((stat, idx) => (
            <div className="col-6 col-md-3" key={idx}>
              <div className="bg-dark rounded-3 py-3">
                <div className="fs-4 fw-bold">{stat.number}</div>
                <div className="small">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

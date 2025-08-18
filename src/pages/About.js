import React from "react";

const About = () => {
  return (
    <section
      dir="rtl"
      className="py-5"
      style={{
        // حط صورة الخلفية في public باسم law-bg.jpg
        backgroundImage:
          "linear-gradient(rgba(0,0,0,.55), rgba(0,0,0,.55)), url('/bg.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "83vh",
      }}
    >
      <div className="container">
        {/* بطاقة تعريفية */}
        <div className="row justify-content-center mb-4">
          <div className="col-lg-10">
            <div className="bg-white rounded-4 shadow p-4 p-md-5 text-center">
              <h1 className="fw-bold mb-3">من نحن</h1>
              <p className="lead mb-0 text-muted">
                شركة العدل للاستشارات القانونية تقدّم خدمات قانونية احترافية عبر
                فريق من المحامين المتخصصين في مختلف المجالات. نسعى دومًا لتحقيق
                أفضل النتائج لعملائنا بالالتزام والمصداقية والسرية.
              </p>
            </div>
          </div>
        </div>

        {/* رسالتنا - رؤيتنا - قيمنا */}
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100 shadow border-0">
              <div className="card-body text-center p-4">
                <h5 className="card-title fw-bold mb-2">رسالتنا</h5>
                <p className="card-text text-muted mb-0">
                  تقديم حلول قانونية دقيقة وفعّالة تدعم اتخاذ القرار وتحفظ الحقوق.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 shadow border-0">
              <div className="card-body text-center p-4">
                <h5 className="card-title fw-bold mb-2">رؤيتنا</h5>
                <p className="card-text text-muted mb-0">
                  أن نكون الشريك القانوني الأول للأفراد والشركات محليًا وإقليميًا.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 shadow border-0">
              <div className="card-body text-center p-4">
                <h5 className="card-title fw-bold mb-2">قيمنا</h5>
                <p className="card-text text-muted mb-0">
                  الالتزام، المصداقية، السرية، والعمل بروح الفريق لخدمة عميلنا.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* إحصائيات سريعة (اختياري) */}
        <div className="row text-white text-center mt-5 g-3">
          <div className="col-6 col-md-3">
            <div className="bg-dark rounded-3 py-3">
              <div className="fs-4 fw-bold">15+</div>
              <div className="small">سنوات خبرة</div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="bg-dark rounded-3 py-3">
              <div className="fs-4 fw-bold">500+</div>
              <div className="small">عميل موثوق</div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="bg-dark rounded-3 py-3">
              <div className="fs-4 fw-bold">800+</div>
              <div className="small">قضية ناجحة</div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="bg-dark rounded-3 py-3">
              <div className="fs-4 fw-bold">24/7</div>
              <div className="small">دعم واستشارة</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

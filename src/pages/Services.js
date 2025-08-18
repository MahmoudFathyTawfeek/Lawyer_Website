import React from "react";

const Services = () => {
  const services = [
    {
      title: "الاستشارات القانونية",
      desc: "نوفر استشارات قانونية دقيقة لحل مشاكلك.",
      img: "https://img.icons8.com/color/96/law.png",
    },
    {
      title: "قضايا الشركات والعقود",
      desc: "صياغة ومراجعة عقود الشركات ومتابعة القضايا التجارية.",
      img: "https://img.icons8.com/color/96/agreement.png",
    },
    {
      title: "القضايا الجنائية والمدنية",
      desc: "خبرة كبيرة في متابعة القضايا الجنائية والمدنية.",
      img: "https://img.icons8.com/color/96/scales.png",
    },
    {
      title: "التحكيم التجاري",
      desc: "حل النزاعات التجارية بالطرق القانونية السليمة.",
      img: "https://img.icons8.com/color/96/court.png",
    },
  ];

  return (
    <div
      className="py-5"
      style={{
        background: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1521791136064-7986c2920216')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <div className="container">
        <h1 className="text-center mb-5 fw-bold text-white">خدماتنا</h1>
        <div className="row g-4">
          {services.map((service, index) => (
            <div key={index} className="col-md-6 col-lg-3">
              <div className="card h-100 shadow border-0 text-center p-3">
                <img
                  src={service.img}
                  className="card-img-top mx-auto"
                  alt={service.title}
                  style={{ width: "80px", height: "80px" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{service.title}</h5>
                  <p className="card-text text-muted">{service.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

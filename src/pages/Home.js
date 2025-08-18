import React, { useState, useEffect } from "react";

const Home = () => {
  const quotes = [
    "حقوقك أمانة.. ونحن حمايتها.",
    "العدالة هدفنا، والدفاع عنك مهمتنا.",
    "خبرة قانونية، نتائج ملموسة.",
    "معك في كل خطوة نحو الإنصاف.",
    "نحو العدالة، بثقة واحترافية."
  ];

  const [currentQuote, setCurrentQuote] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const fadeInterval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentQuote((prev) => (prev + 1) % quotes.length);
        setFade(true);
      }, 500);
    }, 4000);

    return () => clearInterval(fadeInterval);
  }, []);

  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/bg.jpeg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "83vh",
        color: "white",
        padding: "20px",
        textShadow: "2px 2px 8px rgba(0,0,0,0.7)"
      }}
    >
      {/* الشعار */}
      <div
        style={{
          opacity: fade ? 1 : 0,
          transform: fade ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.8s ease-in-out, transform 0.8s ease-in-out",
          marginBottom: "20px",
          width: "100%",
          maxWidth: "250px"
        }}
      >
        <img
          src="logo1.PNG"
          alt="Logo"
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "50%",
            objectFit: "cover",
            border: "3px solid white"
          }}
        />
      </div>

      {/* النص الرئيسي */}
      <h1
        style={{
          opacity: fade ? 1 : 0,
          transform: fade ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.8s ease-in-out, transform 0.8s ease-in-out",
          marginBottom: "15px",
          fontSize: "2rem",
          maxWidth: "90%"
        }}
      >
        نحن هنا لمساعدتك في جميع القضايا القانونية والاستشارات.
      </h1>

      {/* الاقتباسات المتغيرة */}
      <h3
        style={{
          fontStyle: "italic",
          opacity: fade ? 1 : 0,
          transform: fade ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.8s ease-in-out, transform 0.8s ease-in-out",
          fontSize: "1.2rem",
          maxWidth: "90%",
          marginBottom: "30px"
        }}
      >
        {quotes[currentQuote]}
      </h3>

      {/* الاقتباس الكبير والثابت */}
      <blockquote
        style={{
          fontSize: "1.6rem",
          fontWeight: "bold",
          fontStyle: "normal",
          maxWidth: "80%",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          padding: "20px",
          borderLeft: "5px solid #fff",
          borderRadius: "8px",
          textAlign: "center"
        }}
      >
        "العدالة ليست مجرد كلمة، بل التزامنا اليومي لحماية حقوق عملائنا وتحقيق الإنصاف."
      </blockquote>
    </div>
  );
};

export default Home;

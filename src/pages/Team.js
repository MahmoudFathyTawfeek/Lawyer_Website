import React from "react";
import "../TeamSection.css"; // تأكد إن المسار صحيح

const teamMembers = [
  {
    name: "الأستاذ / رضا المنشاوى",
    role: "محامي متخصص في القانون المدنى",
    description: "لديه خبرة واسعة في القضايا المتعلقة بالقانون المدنى.",
    img: "member1.png", // ممكن تغيّرها لأي صورة مؤقتة
  }  ,
    {
    name: "الأستاذ / عبدالله عادل",
    role: "محامي متخصص في القضايا الجنائية",
    description: "لديه خبرة واسعة في القضايا الجنائية.",
    img: "member3.png", // ممكن تغيّرها لأي صورة مؤقتة
  },

    {
    name: "الأستاذ / على النص",
    role: "محامي متخصص في قضايا الأسرة",
    description: "لديه خبرة واسعة في قضايا الأسرة.",
    img: "member2.png", // ممكن تغيّرها لأي صورة مؤقتة
  },

];

const TeamSection = () => {
  return (
    
    <section className="team-section mt-5">
      <h2 className="section-title">فريق العمل</h2>
      <div className="team-cards">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card">
            <div className="card-img">
              <img src={member.img} alt={member.name} />
              <div className="overlay">
                <p>{member.role}</p>
              </div>
            </div>
            <h3>{member.name}</h3>
            <p className="member-description">{member.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;

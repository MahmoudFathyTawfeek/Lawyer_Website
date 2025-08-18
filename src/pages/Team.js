import React from "react";
import "../TeamSection.css"; // تأكد إن المسار صحيح

const teamMembers = [
  {
    name: "الأستاذ / رضا المنشاوى",
    role: "محامي متخصص في العقود",
    description: "لديه خبرة واسعة في صياغة ومراجعة العقود القانونية المختلفة.",
    img: "member1.png", // ممكن تغيّرها لأي صورة مؤقتة
  },

];

const TeamSection = () => {
  return (
    
    <section className="team-section">
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

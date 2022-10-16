import React from "react";
import "./team.css";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import teamprofile from "../../assets/data/coreTeam.json";
import profile from "./data";

function Team() {
  return (
    <div className="team__component">
      <div className="article">
        <p className="article__header">
          Our lineup of big thinkers and even bigger doers
        </p>
        <p className="article__p">
          Google is known all around the world. Everyone is 'googling', checking
          on 'maps' and communicating in gmail. For simple users, they are
          services that just works, but not for us. Developers see much more:
          APIs, scalability issues, complex technology stacks. And that is what
          GDG is about.
        </p>

        <div className="article__p">
          Our goal is to organize space to connect the best industry experts
          with Lafia audience to boost development of IT. And Our Core Team is:
        </div>
      </div>
      <div className="team">
        {teamprofile.map((member, i) => (
          <div key={member.name} className="member">
            <div
              style={{ backgroundImage: `url(${profile[i]})` }}
              className={`member__image `}
            ></div>
            <p className="member__name">{member.name}</p>
            <p className="member__role">{member.designation}</p>
            <div className="member__social">
              <a href={member.twitter} target="_blank" className="member__link">
                <FaTwitter />
              </a>
              <a
                href={member.linkedin}
                target="_blank"
                className="member__link"
              >
                <FaLinkedin />
              </a>
              <a href={member.github} target="_blank" className="member__link">
                <FaGithub />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;

import React, { useState, useEffect } from "react";
import "./about.css";
import guide from "../../assets/data/aboutPage.json";

function About() {
  const [accord, setAcord] = useState([]);
  const { communityGuideline } = guide;

  useEffect(() => {
    const newGuide = communityGuideline.map((prev, i) => {
      return { ...prev, active: false, index: i };
    });
    setAcord(newGuide);
  }, []);

  const toggle = i => {
    setAcord(prev => {
      return prev.map(newAccord => {
        if (newAccord.index === i) {
          return { ...newAccord, active: !newAccord.active };
        } else {
          return { ...newAccord, active: false };
        }
      });
    });
  };
  const Accordion = () => {
    return accord.map((guide, i) => {
      return (
        <div key={i} className="accordion">
          <div className="acordion__header">
            <p className="accordion__name">{guide.name}</p>
            <span onClick={() => toggle(guide.index)}>&#x3e;</span>
          </div>
          <div
            className={`${
              guide.active ? "active__accord " : " "
            }accordion__des`}
          >
            {guide.des}
          </div>
        </div>
      );
    });
  };

  return (
    <div className="about__component">
      <div className="about__hero">
        <div className="hero__background"></div>
        <div className="hero__content">
          <p className="hero__p1">
            Google Developer Group Lafia is inspired by GTUG/GDG Family . We
            started our journey in 2014. We try to engage student developers,
            fresh graduates and professionals through our hack events & meetups.
            The motive is to create a local ecosystem of programmers & hackers
            in and around Lafia. The technology awareness is main goal for first
            few years of the group.
          </p>
          <p className="hero__p2">
            GDGs are local groups of developers who are specifically interested
            in Google products and APIs. Each local group is called a GDG
            chapter and can host a variety of technical activities for
            developers - from just a few people getting together to watch our
            latest videos, to large gatherings with demos and tech talks, to
            hackathons.
          </p>
          <a href="https://www.meetup.com/GDG-Lafia" className="link-reset">
            <span className="hero__member">Be come a member</span>
          </a>
          <a href="https://developers.google.com/groups" className="link-reset">
            <span className="hero__learn__more">learn more</span>
          </a>
        </div>
      </div>
      {/*  */}
      <div className="commuity-guide-section">
        <div className="community-wrapper">
          <div className="accordion-wrapper">
            <p className="accordion__heading">Community Guidelines</p>
            <div className="accordion__container">
              <Accordion />
            </div>
          </div>
          {/*  */}
          <div className="code">
            <div className="code__heading">Code of conduct</div>
            <div className="code__text">
              When you join our programs, you’re joining a community. And like
              any growing community, a few ground rules about expected behavior
              are good for everyone. These guidelines cover both online (e.g.
              mailing lists, social channels) and offline (e.g. in-person
              meetups) behavior. Violations of this code of conduct can result
              in members being removed from the program. Use your best
              judgement, and if you’d like more clarity or have questions feel
              free to reach out.
            </div>
          </div>
          {/*  */}
          <div className="harassment">
            <div className="harassment__heading">Anti-Harassment Policy</div>
            <div className="harassment__text">
              <p className="harassment-p">
                Why do we have an official Anti-Harassment policy for GDG Lafia
                events?
              </p>
              <ul className="harassment-ul">
                <li>
                  It sets expectations for behavior at the event. Simply having
                  an anti-harassment policy can prevent harassment.
                </li>
                <li>
                  It encourages people to attend who have had bad experiences at
                  other events
                </li>

                <li>
                  It gives event staff/volunteers instructions on how to handle
                  harassment quickly, with minimum amount of disruption for the
                  event.
                </li>
              </ul>
              <p className="harassment-p">
                GDG Lafia is dedicated to providing a harassment-free event
                experience for everyone, regardless of:
              </p>
              <ul className="harassment-ul">
                <li> Gender</li>
                <li>Sexual Orientation</li>
                <li>Disability</li>
                <li>Gender Identity</li>
                <li>Age</li>
                <li>Race</li>
                <li>Religion</li>
                <li>Nationality</li>
              </ul>
              <ul className="harassment-ul">
                <p>
                  The above is not an exhaustive list -- we do not tolerate
                  harassment of event spanarticipants in any form.
                </p>
                <p>
                  Sexual language and imagery is not appropriate for any event
                  venue, including talks. Event participants violating these
                  rules may be expelled from the event, and event banned from
                  future events at the discretion of the event
                  organizers/management.
                </p>
                <p>Harassment includes (but is not limited to): </p>
              </ul>
              <ul className="harassment-ul">
                <p className="harassment-p">
                  Harassment includes (but is not limited to):{" "}
                </p>
                <li>
                  Offensive verbal comments related to gender, sexual
                  orientation, disability, gender identity, age, race, religion
                </li>
                <li>
                  The use or display of sexual images in public spaces
                  Deliberate intimidation
                </li>
                <li>Stalking</li>
                <li>Harassing photography or recording</li>
                <li>Sustained disruption of talks or other events</li>
                <li>Inappropriate physical contact</li>
                <li>Unwelcome sexual attention</li>
                <p style={{ margin: "20px 0" }}>
                  Participants asked to stop any harassing behavior are expected
                  to comply immediately.{" "}
                </p>
                <p style={{ margin: "20px 0" }}>
                  Exhibiting partners and guests are also subject to the
                  anti-harassment policy. In particular, exhibitors and speakers
                  should not use sexualized images, activities, or other
                  material, or otherwise create a sexualized environment in
                  their slide decks, exhibit material, exhibit staffing,
                  promotional items or demo material.{" "}
                </p>
                <p style={{ margin: "20px 0" }}>
                  If you are being harassed, notice that someone else is being
                  harassed, or have any other concerns, please contact an
                  organizer or event volunteer immediately. Organizers and event
                  volunteers may be identified by t-shirts or special
                  badges/lanyards. Organizers will investigate the issue and
                  take appropriate action. This may include helping participants
                  contact venue security or local law enforcement, provide
                  escorts, or otherwise assist these experiencing harassment to
                  fell safe for the duration of the event.{" "}
                </p>
                <p style={{ margin: "20px 0" }}>
                  Though we hope that we never have to invoke this policy, we
                  believe that having this document helps everyone think a
                  little more about how their actions and words affect the whole
                  community, as well as individuals in the community.{" "}
                </p>
              </ul>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </div>
  );
}

export default About;

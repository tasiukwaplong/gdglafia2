import React from "react";
import "./home.css";
import img from "./img";
import {
  MdChat,
  MdCode,
  MdAirplay,
  MdSchool,
  MdHighlightOff,
  MdInsertInvitation,
  MdWatchLater,
  MdMap,
  MdLanguage,
  MdFacebook,
} from "react-icons/md";
import { FaMeetup } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <div className="hero__img"></div>
        <div className="hero__content">
          <p className="hero__heading">
            <b>
              Make good things &nbsp;
              <span className="heading__span">together</span>.
            </b>
          </p>
          <p className="hero__gdg">GDG Lafia</p>
          <p className="hero__article">
            Google Developers Group Lafia is an initiative to concentrate the
            efforts of many developers in and around Lafia to learn, share and
            get productive using the various Google products.
          </p>
          <p className="hero__hash">
            <span className="color">#GDGLafia &nbsp;</span>
            <span className="color">#WTMLafia &nbsp;</span>
            <span className="color">#GDG &nbsp;</span>
            <span className="color">#WTM &nbsp;</span>
          </p>
          <a
            href="https://www.meetup.com/GDG-Lafia"
            target="_blank"
            className=""
          >
            <div className="hero__member">Become a Member</div>
          </a>
          &nbsp;
          <a
            href="https://developers.google.com/programs/community/"
            target="_blank"
            className=""
          >
            <div className="hero__learn">Learn More</div>
          </a>
        </div>
      </div>
      {/* tech section */}
      <div className="tech">
        <div className="tech__container">
          <div className="tech__header-container">
            <p className="tech__header">What we do?</p>
            <p className="tech__header-sub">
              Google Developer Groups (GDGs) are for developers who are
              interested in Google's developer technology.
            </p>
            <p className="tech__header-sub">
              About different Google technologies
            </p>
            <div className="tech__header-icons">
              {img.map(({ path }, i) => {
                return (
                  <a key={i} className="link" href="">
                    <img className="tech__header-img" src={path} alt="" />
                  </a>
                );
              })}
            </div>
          </div>
          <div className="tech__icons-container">
            <div className="tech__icons">
              <div className="tech__icons-wrapper">
                <MdChat className="light tech__md" />
                <p className="tech__p">Talks</p>
              </div>
              <p className="tech__text">
                Get updated with the latest news and announcements
              </p>
            </div>
            {/*  */}
            <div className="tech__icons">
              <div className="tech__icons-wrapper">
                <MdCode className="light tech__md" />
                <p className="tech__p">Codelabs</p>
              </div>
              <p className="tech__text">
                Get hands-on experience and guidance from the community members
              </p>
            </div>
            {/*  */}
            <div className="tech__icons">
              <div className="tech__icons-wrapper">
                <MdSchool className="light tech__md" />
                <p className="tech__p">Campus Roadshows</p>
              </div>
              <p className="tech__text">
                Get hands-on experience and guidance from the community members
              </p>
            </div>
            {/*  */}
            <div className="tech__icons">
              <div className="tech__icons-wrapper">
                <MdAirplay className="light tech__md" />
                <p className="tech__p">live viewing parties</p>
              </div>
              <p className="tech__text">
                Share knowledge in different Companies, colleges and
                universities
              </p>
            </div>
            {/*  */}
          </div>
        </div>
      </div>
      {/* about section */}
      <div className="about__sectiion">
        <div className="about__container">
          <p className="about__heading">About GDG Lafia</p>
          <p className="about__article">
            Google Developer Group Lafia is inspired by GTUG/GDG Family . We
            started our journey in 2014. We try to engage student developers,
            fresh graduates and professionals through our hack events &amp;
            meetups. The motive is to create a local ecosystem of programmers
            &amp; hackers in and around Lafia. The technology awareness is main
            goal for first few years of the group.
          </p>
          <div className="about__links">
            <a
              className="link"
              href="https://www.meetup.com/GDG-Lafia"
              target="_blank"
            >
              <div>Meetup Page</div>
            </a>

            <a
              className="link"
              href="https://www.facebook.com/GDGLafia/"
              target="_blank"
            >
              <div>Facebook Page</div>
            </a>
          </div>
          <Link className="link" to="/about">
            <p className="about__p"> See More about GDG Lafia</p>
          </Link>
        </div>
      </div>
      {/* event section */}
      <div className="event-section">
        <div className="event__heading">
          <p className="heading__header">Our Events &amp; Meetups</p>
          <p className="heading__artilce">
            At sessions that span from the technical to the visionary, let’s
            celebrate and discover what the technologies can enable: how product
            innovation, open source, and ML and AI can propel enterprises
            forward and solve the big problems that impact all of us.
          </p>

          <Link color="rgb(76, 74, 120)  " className="link">
            See More
          </Link>
        </div>
        <div className="events__container">
          <p className="event__not-found">
            <MdHighlightOff
              style={{
                verticalAlign: "middle",
                fontSize: "25px",
                color: "rgb(76, 74, 120)",
              }}
            />
            &nbsp; Event not found
          </p>
        </div>
      </div>
      {/*  */}
      <div className="meet">
        <div className="meet__inner">
          <p className="meet__header">Our Feature Event & Meetup</p>
          <div className="meet__container">
            <div className="meet__background"></div>
            <div className="meet__location">
              <p className="meet__heading">IO Extended'19 Lafia</p>
              <span className="meet__time">
                <MdInsertInvitation />
                3/12/2022 &nbsp;
                <MdWatchLater />
                09:00 AM - 04:30 PM &nbsp;
                <MdMap />
                ICT Complex Federal University Lafia..
                <a
                  href="https://www.google.com/maps/search/?api=1&amp;query=8.473896%2C8.558076"
                  target="_blank"
                >
                  (Map)
                </a>
              </span>
              <p className="meet__article">
                Give our community members the opportunity to take part and feel
                the I/O experience, we will be watching all the exciting
                announcements from both the General Keynote as well as the
                Developers Keynote where latest news and updates to Google's
                developer products and platforms were be announced.
                #io19extended
              </p>
              <div className="meet__links">
                <a
                  href="https://www.meetup.com/gdglafia/events/261318417/"
                  target="_blank"
                >
                  <div className="meet__register">Registration Link</div>
                </a>
                &nbsp;
                <a
                  className="meet__icon-link"
                  href="https://www.meetup.com/gdglafia/events/261318417/"
                  target="_blank"
                >
                  <MdLanguage className="meet__icon" />
                </a>
                &nbsp;
                <span>
                  <a
                    className="meet__icon-link"
                    href="https://www.meetup.com/gdglafia/events/261318417/"
                    target="_blank"
                  >
                    <FaMeetup className="meet__icon" />
                  </a>
                </span>
                &nbsp;
                <span>
                  <a className="meet__icon-link" href="" target="_blank">
                    <MdFacebook className="meet__icon" />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="partners__section">
        <div className="partners__container">
          <div className="partners__articles">
            <p className="article__heading">Partners</p>
            <div className="article__text">
              <p className="article__p">
                A very big thank you to all our partners for their continued
                partnership.
              </p>
              <div className="article__p">
                If you’re interested in being showcased throughout GDG Lafia,
                contact <span>gdgLafia@gmail.com</span> to discuss sponsorship
                opportunities.
              </div>
            </div>
          </div>
          <div className="general">
            <div className="general__heading">Generals Partners</div>
            <div className="general__container">
              <div className="gdg partners__background"></div>
              <div className="women partners__background"></div>
              <div className="gdg-x partners__background"></div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
    </div>
  );
};

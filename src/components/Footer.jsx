import React from "react";
import "./comstyles.css";
import json from "../assets/data/footer.json";
import link from "../assets/data/chapterDetails.json";
import { FaFacebook, FaTwitter } from "react-icons/fa";

function Footer({ toggle }) {
  const { socialLinks } = link;
  const facebook = socialLinks[0];
  const twitter = socialLinks[1];
  const {
    AboutSession,
    ChapterResourcesSession,
    DevConsole,
    FooterEndSession,
  } = json;

  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__social">
          <span>Follow Us:</span>
          <a href={facebook.link}>
            <FaFacebook />
          </a>
          <a href={twitter.link}>
            <FaTwitter />
          </a>
        </div>
        <div className="footer__content">
          <div className="footer__about">
            <p className="footer__content-heading">About</p>
            {AboutSession.map((links, i) => {
              return (
                <a key={i} href={links.Link} className="footer__content-link">
                  {links.LinkName}
                </a>
              );
            })}
          </div>
          <div className="footer__resource">
            <p className="footer__content-heading">Resource</p>
            {ChapterResourcesSession.map((res, i) => {
              return (
                <a key={i} href={res.Link} className="footer__content-link">
                  {res.LinkName}
                </a>
              );
            })}
          </div>
          <div className="footer__dev">
            <p className="footer__content-heading">Developer Console</p>
            {DevConsole.map((dev, i) => {
              return (
                <a key={i} href={dev.Link} className="footer__content-link">
                  {dev.LinkName}
                </a>
              );
            })}
          </div>
        </div>
        <div className="footer__ending">
          <p className="footer__ending-p">GDG Lafia</p>
          {FooterEndSession.map((item, i) => {
            return (
              <a key={i} href={item.Link} className="footer__ending-link">
                {item.LinkName}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Footer;

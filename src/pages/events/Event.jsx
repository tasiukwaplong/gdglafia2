import React from "react";
import "./events.css";
import { MdHighlightOff } from "react-icons/md";
function Event() {
  return (
    <div className="event__component">
      <div className="event__intro">
        <div className="intro__header">
          <p className="header__event">GDG Lafia's Events</p>
          <p className="header__question">
            Questions? Please contact <span>gdgLafia@gmail.com.</span>
          </p>
        </div>
        <div className="event__up">
          <div className="up__container">
            <p className="up__header">Upcoming Events</p>
            <div className="up__text">
              Our events are open to newbies, developers, managers, and
              organizations who are interested in Google's technologies or use
              them as part of their projects.
            </div>
            <div className="up__error">
              <MdHighlightOff
                className="error__icon"
                style={{ verticalAlign: "middle" }}
              />
              Upcoming Events Not Found!
            </div>
          </div>
        </div>
      </div>
      <div className="past-event">
        <p className="past__header">Directory of past events</p>
        <p className="past__text">
          Events are listed in reverse chronological order by date.
        </p>
        <p className="past__text">
          Here are the recent 10 meetups. To know more about the past meetups
          Click &nbsp;
          <a className="link" href="https://www.meetup.com/GDG-Lafia">
            here
          </a>
        </p>
        <div className="past__error">
          <MdHighlightOff
            className="past__icon"
            style={{ verticalAlign: "middle" }}
          />
          Past Events Not Found!
        </div>
      </div>
    </div>
  );
}

export default Event;

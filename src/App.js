import React, { Component } from "react";
import "./sass/main.scss";
import logo from "./img/logo.png";
import userPhoto from "./img/user-6.jpg";
import hotel1 from "./img/hotel-1.jpg";
import hotel2 from "./img/hotel-2.jpg";
import hotel3 from "./img/hotel-3.jpg";

import user3 from "./img/user-3.jpg";
import user4 from "./img/user-4.jpg";
import user5 from "./img/user-5.jpg";
import user6 from "./img/user-6.jpg";

import user1 from "./img/user-1.jpg";
import user2 from "./img/user-2.jpg";

class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <header className="header">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
            <form className="search">
              <input
                type="text"
                className="search__input"
                placeholder="Search hotels"
              />
              <button className="search__button">
                <svg className="search__icon">
                  <use xlinkHref="sprite.svg#icon-magnifying-glass" />
                </svg>{" "}
              </button>
            </form>
            <nav className="user-nav">
              <div className="user-nav__icon-box">
                <svg className="user-nav__icon">
                  <use xlinkHref="sprite.svg#icon-bookmark" />
                </svg>
                <span className="user-nav__notification">7</span>
              </div>
              <div className="user-nav__icon-box">
                <svg className="user-nav__icon">
                  <use xlinkHref="sprite.svg#icon-chat" />
                </svg>
                <span className="user-nav__notification">2</span>
              </div>
              <div className="user-nav__user">
                <img
                  src={userPhoto}
                  alt="UserPhoto"
                  className="user-nav__user-photo"
                />
                <span className="user-nav__user-name">Evelyn</span>
              </div>
            </nav>
          </header>

          <div className="content">
            <nav className="sidebar">
              <ul className="side-nav">
                <li className="side-nav__item side-nav__item--active">
                  <a href="#" className="side-nav__link">
                    <svg className="side-nav__icon">
                      <use xlinkHref="sprite.svg#icon-home" />
                    </svg>
                    <span>Hotel</span>
                  </a>
                </li>
                <li className="side-nav__item">
                  <a href="#" className="side-nav__link">
                    <svg className="side-nav__icon">
                      <use xlinkHref="sprite.svg#icon-aircraft-take-off" />
                    </svg>
                    <span>Flight</span>
                  </a>
                </li>
                <li className="side-nav__item">
                  <a href="#" className="side-nav__link">
                    <svg className="side-nav__icon">
                      <use xlinkHref="sprite.svg#icon-key" />
                    </svg>
                    <span>Car rental</span>
                  </a>
                </li>
                <li className="side-nav__item">
                  <a href="#" className="side-nav__link">
                    <svg className="side-nav__icon">
                      <use xlinkHref="sprite.svg#icon-map" />
                    </svg>
                    <span>Tours</span>
                  </a>
                </li>
              </ul>
              <div className="legal">
                &copy; 2017 by trillo. All rights reserved.
              </div>
            </nav>

            <main className="hotel-view">
              <div className="gallery">
                <figure className="gallery__item">
                  <img
                    src={hotel1}
                    alt="PhotoOfHotel1"
                    className="gallery__photo"
                  />
                </figure>
                <figure className="gallery__item">
                  <img
                    src={hotel2}
                    alt="PhotoOfHotel1"
                    className="gallery__photo"
                  />
                </figure>
                <figure className="gallery__item">
                  <img
                    src={hotel3}
                    alt="PhotoOfHotel1"
                    className="gallery__photo"
                  />
                </figure>
              </div>

              <div className="overview">
                <h1 className="overview__heading">Hotel Las Palmas</h1>
                <div className="overview__stars">
                  <svg className="overview__icon-star">
                    <use xlinkHref="sprite.svg#icon-star" />
                  </svg>
                  <svg className="overview__icon-star">
                    <use xlinkHref="sprite.svg#icon-star" />
                  </svg>
                  <svg className="overview__icon-star">
                    <use xlinkHref="sprite.svg#icon-star" />
                  </svg>
                  <svg className="overview__icon-star">
                    <use xlinkHref="sprite.svg#icon-star" />
                  </svg>
                  <svg className="overview__icon-star">
                    <use xlinkHref="sprite.svg#icon-star" />
                  </svg>
                </div>
                <div className="overview__location">
                  <svg className="overview__icon-location">
                    <use xlinkHref="sprite.svg#icon-location-pin" />
                  </svg>
                  <button className="btn-inline">Albufeira, Portugal</button>
                </div>
                <div className="overview__rating">
                  <div className="overview__rating-average">8.6</div>
                  <div className="overview__rating-count">429 Votes</div>
                </div>
              </div>

              <div className="detail">
                <div className="description">
                  <p className="paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Animi nisi dignissimos debitis ratione sapiente saepe.
                    Accusantium cumque, quas, ut corporis incidunt deserunt quae
                    architecto voluptate.
                  </p>
                  <p className="paragraph">
                    Accusantium cumque, quas, ut corporis incidunt deserunt quae
                    architecto voluptate delectus, inventore iure aliquid
                    aliquam.
                  </p>
                  <ul className="list">
                    <li className="list__item">Close to the beach</li>
                    <li className="list__item">Breakfast included</li>
                    <li className="list__item">Free wifi in all rooms</li>
                    <li className="list__item">Air-conditioning and heating</li>
                    <li className="list__item">Pets allowed</li>
                    <li className="list__item">We speak all languages</li>
                    <li className="list__item">Perfect for families</li>
                  </ul>
                  <div className="recommand">
                    <p className="recommand__count">
                      Lucy and 3 other friends recommand this hotel.
                    </p>
                    <div className="recommand__friends">
                      <img
                        src={user3}
                        alt="User3"
                        className="recommand__photo"
                      />
                      <img
                        src={user4}
                        alt="User4"
                        className="recommand__photo"
                      />
                      <img
                        src={user5}
                        alt="User5"
                        className="recommand__photo"
                      />
                      <img
                        src={user6}
                        alt="User6"
                        className="recommand__photo"
                      />
                    </div>
                  </div>
                </div>

                <div className="user-reviews">
                  <figure className="review">
                    <blockquote className="review__text">
                      Accusantium cumque, quas, ut corporis incidunt deserunt
                      quae architecto voluptate delectus, inventore iure aliquid
                      aliquam.
                    </blockquote>
                    <figcaption className="review__user">
                      <img src={user1} alt="User 1" className="review__photo" />
                      <div className="review__user-box">
                        <p className="review__user-name">Nick Smith</p>
                        <p className="review__user-date">Feb 23rd, 2018</p>
                      </div>
                      <div className="review__rating">7.8</div>
                    </figcaption>
                  </figure>

                  <figure className="review">
                    <blockquote className="review__text">
                      Accusantium cumque, quas, ut corporis incidunt deserunt
                      quae architecto voluptate delectus.
                    </blockquote>
                    <figcaption className="review__user">
                      <img src={user2} alt="User 2" className="review__photo" />
                      <div className="review__user-box">
                        <p className="review__user-name">Mary Thoms</p>
                        <p className="review__user-date">Sept 27th, 2018</p>
                      </div>
                      <div className="review__rating">7.8</div>
                    </figcaption>
                  </figure>

                  <button className="btn-inline">
                    Show all <span>&rarr;</span>
                  </button>
                </div>
              </div>

              <div className="cta">
                <h2 className="cta__book">
                  Good news! We have 4 free rooms for your selected dates!
                </h2>
                <button className="btn">
                  <span className="btn__invisible">Only 4 rooms left!</span>
                  <span className="btn__visible">Book now!</span>
                </button>
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

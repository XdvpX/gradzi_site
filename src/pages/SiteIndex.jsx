import React from "react";
import ApplicationForm from "./ApplicationForm";

export default function SiteIndex() {
  return (
    <main id="main-content">
      {/* Sidebar */}
      <section id="sidebar">
        <div className="inner">
          <nav>
            <ul>
              <li><a href="#intro">Welcome</a></li>
              <li><a href="#one">Our Services</a></li>
              <li><a href="#two">What we do</a></li>
              <li><a href="#three">Get in touch</a></li>
            </ul>
          </nav>
        </div>
      </section>

      {/* Wrapper */}
      <div id="wrapper">
        {/* Intro */}
        <section className="wrapper style1 fullscreen fade-up" id="intro">
          <img
            alt="Welcome to Gradzi Overseas"
            className="title-logo"
            src="/images/gradzi.co.png"
          />

          <svg height="0" width="0">
            <defs>
              <linearGradient gradientTransform="rotate(45)" id="luxuryGradient">
                <stop offset="50%" stopColor="#0f172a"></stop>
                <stop offset="100%" stopColor="#1e40af"></stop>
              </linearGradient>
            </defs>
          </svg>

          <div
            className="inner"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            <div style={{ flex: 1, minWidth: "300px", paddingRight: "20px" }}>
              <p style={{ color: "#fffacd", fontWeight: 500 }}>
                Your study abroad dreams deserve the best seat in the house — and
                we’re here to reserve it for you. From{" "}
                <strong>world-class universities</strong> to{" "}
                <strong>life-changing academic experiences</strong>, Gradzi
                Overseas guides you every step of the way.
              </p>
              <p style={{ color: "#fffacd", fontWeight: 500 }}>
                With our global network, expert advice, and a knack for turning
                forms into fun (well, almost), we make sure your journey from
                ambition to acceptance is smooth, exciting, and maybe even a
                little adventurous.
              </p>
              <ul className="actions">
                <li>
                  <a className="button scrolly" href="#one">
                    Explore Our Services
                  </a>
                </li>
              </ul>
            </div>
            <div style={{ flex: 1, minWidth: "300px", paddingRight: "20px" }}>
              <dotlottie-wc
                autoplay
                loop
                src="https://lottie.host/053c0d96-1460-430c-905b-0ca99b6d1928/GXcSKOT6qR.lottie"
                style={{ width: "110%", background: "transparent" }}
              ></dotlottie-wc>
            </div>
          </div>
        </section>

        {/* One */}
        <section className="wrapper style2 spotlights" id="one">
          {/* USA */}
          <section>
            <a className="image" href="/site/study-destination/usa">
              <img alt="Admissions to USA" data-position="center center" src="/images/pic01.jpg" />
            </a>
            <div className="content">
              <div className="inner">
                <h2>Admissions to United States</h2>
                <p>Admissions to United States</p>
                <ul className="actions">
                  <li><a className="button" href="/site/study-destination/usa">Learn more</a></li>
                </ul>
              </div>
            </div>
          </section>

          {/* UK */}
          <section>
            <a className="image" href="/site/study-destination/uk">
              <img alt="Admissions to UK" data-position="top center" src="/images/pic02.jpg" />
            </a>
            <div className="content">
              <div className="inner">
                <h2>Admissions to United Kingdom</h2>
                <p>Admissions to United Kingdom</p>
                <ul className="actions">
                  <li><a className="button" href="/site/study-destination/uk">Learn more</a></li>
                </ul>
              </div>
            </div>
          </section>

          {/* Canada */}
          <section>
            <a className="image" href="/site/study-destination/canada">
              <img alt="Admissions to Canada" data-position="25% 25%" src="/images/pic03.jpg" />
            </a>
            <div className="content">
              <div className="inner">
                <h2>Admissions to Canada</h2>
                <p>Admissions to Canada</p>
                <ul className="actions">
                  <li><a className="button" href="/site/study-destination/canada">Learn more</a></li>
                </ul>
              </div>
            </div>
          </section>

          {/* Australia */}
          <section>
            <a className="image" href="/site/study-destination/australia">
              <img alt="Admissions to Australia" data-position="center center" src="/images/pic14.jpg" />
            </a>
            <div className="content">
              <div className="inner">
                <h2>Admissions to Australia</h2>
                <p>Explore world-class universities in Australia</p>
                <ul className="actions">
                  <li><a className="button" href="/site/study-destination/australia">Learn more</a></li>
                </ul>
              </div>
            </div>
          </section>

          {/* New Zealand */}
          <section style={{ backgroundColor: "#4C4EAC" }}>
            <a className="image" href="/site/study-destination/newzealand">
              <img alt="Admissions to New Zealand" data-position="top center" src="/images/pic09.jpg" />
            </a>
            <div className="content">
              <div className="inner">
                <h2>Admissions to New Zealand</h2>
                <p>Admissions to New Zealand</p>
                <ul className="actions">
                  <li><a className="button" href="/site/study-destination/newzealand">Learn more</a></li>
                </ul>
              </div>
            </div>
          </section>

          {/* Ireland */}
          <section style={{ backgroundColor: "#484aa3" }}>
            <a className="image" href="/site/study-destination/ireland">
              <img alt="Admissions to Ireland" data-position="center center" src="/images/pic11.jpg" />
            </a>
            <div className="content">
              <div className="inner">
                <h2>Admissions to Ireland</h2>
                <p>Shape your career with Ireland’s top institutions</p>
                <ul className="actions">
                  <li><a className="button" href="/site/study-destination/ireland">Learn more</a></li>
                </ul>
              </div>
            </div>
          </section>
        </section>

        {/* Two */}
        <section className="wrapper style3 fade-up" id="two">
          <div className="inner">
            <h2>What we do</h2>
            <p>
              End-to-end guidance for students aspiring to study abroad — from profile evaluation to
              admission, visa, and post-arrival support.
            </p>
            <div className="features">
              <section>
                <span className="icon solid major fa-user-graduate"></span>
                <h3>Profile &amp; Eligibility Evaluation</h3>
                <p>Assess academics, match programs, check admission criteria</p>
              </section>
              <section>
                <span className="icon solid major fa-book"></span>
                <h3>Test Prep &amp; Documentation</h3>
                <p>IELTS/GRE prep, SOPs, LORs, resumes, required documents</p>
              </section>
              <section>
                <span className="icon solid major fa-university"></span>
                <h3>University Applications</h3>
                <p>Shortlist, apply, and track university applications</p>
              </section>
              <section>
                <span className="icon solid major fa-dollar-sign"></span>
                <h3>Financial &amp; Admission Confirmation</h3>
                <p>Tuition fees, scholarships, admission letters</p>
              </section>
              <section>
                <span className="icon solid major fa-passport"></span>
                <h3>Visa Process</h3>
                <p>Documentation, interview scheduling, mock sessions</p>
              </section>
              <section>
                <span className="icon solid major fa-plane-departure"></span>
                <h3>Pre-Departure &amp; Post-Arrival Support</h3>
                <p>Orientation, accommodation, ongoing assistance</p>
              </section>
            </div>
          </div>
        </section>

        {/* Three */}
        <section className="wrapper style1 fade-up" id="three">
          <div className="inner">
            <h2>Get in touch</h2>
            <p>
              Have questions? Drop us a message — we’ll get back to you faster than
              Netflix asks if you’re still watching.
            </p>
            <div className="split style1">
              <ApplicationForm />

              {/* Contact Info */}
              <section className="contact-info">
                <ul className="contact">
                  <li>
                    <h3><i className="fas fa-map-marker-alt"></i> Address</h3>
                    <span>
                      Flat 501, MJ Metro View
                      <br />
                      Nagole, Hyderabad
                      <br />
                      500068
                    </span>
                  </li>
                  <li>
                    <h3><i className="fas fa-envelope"></i> Email</h3>
                    <a href="mailto:admissions@gradzi.co">admissions@gradzi.co</a>
                  </li>
                  <li>
                    <h3><i className="fas fa-phone"></i> Phone</h3>
                    <span>+91 8500898289</span>
                  </li>
                  <li>
                    <h3><i className="fas fa-share-alt"></i> Social</h3>
                    <ul className="icons">
                      <li>
                        <a
                          className="icon brands fa-instagram"
                          href="https://www.instagram.com/gradzi.co/"
                        >
                          <span className="label">Instagram</span>
                        </a>
                      </li>
                      <li>
                        <a className="icon brands fa-linkedin-in" href="#">
                          <span className="label">LinkedIn</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
                <h3><i className="fas fa-map"></i> Reach Us</h3>
                <div className="map-container" style={{ marginTop: "1em" }}>
                  <iframe
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.608271936734!2d78.55968957440386!3d17.38257270294526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb98d4494089e5%3A0xf3cb900f6caee44f!2sM%20J%20METRO%20VIEW!5e0!3m2!1sen!2sin!4v1755537873906!5m2!1sen!2sin"
                    style={{
                      width: "100%",
                      height: "250px",
                      border: 0,
                      borderRadius: "8px",
                    }}
                  ></iframe>
                </div>
              </section>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="wrapper alt" id="footer">
        <div className="inner">
          <ul className="menu">
            <li>© Gradzi Overseas. All rights reserved.</li>
            <li>
              <small>
                Design base:{" "}
                <a href="http://html5up.net" target="_blank" rel="noreferrer">
                  HTML5 UP
                </a>
              </small>
            </li>
          </ul>
        </div>
      </footer>
    </main>
  );
}

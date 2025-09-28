import React from "react";
import ApplicationForm from "./ApplicationForm";

export default function SiteIndex() {
  return (
    <main id="main-content">
      {/* ... your sidebar, intro, services sections stay the same ... */}

      {/* Contact Section */}
      <section className="wrapper style1 fade-up" id="three">
        <div className="inner">
          <h2>Get in touch</h2>
          <div className="split style1">
            <ApplicationForm />
            <section className="contact-info">
              {/* your address, email, phone, socials, map iframe here */}
            </section>
          </div>
        </div>
      </section>

      {/* footer stays here */}
    </main>
  );
}

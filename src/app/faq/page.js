import Link from 'next/link';

export default function FaqPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-dark text-white py-5 text-center"  style={{ marginTop: '100px' }}>
        <div className="container">
          <h1 className="display-4 fw-bold">Frequently Asked Questions</h1>
          <p className="lead">Have questions? We’ve got answers.</p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-5">
        <div className="container">
          <div className="accordion" id="faqAccordion">

            {/* Q1 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                  What is the check-in/check-out time?
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  Check-in starts at 2:00 PM and check-out is by 12:00 PM.
                </div>
              </div>
            </div>

            {/* Q2 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                  Do you offer airport shuttle service?
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  Yes, we provide airport shuttle service upon request. Please contact us 24 hours before arrival.
                </div>
              </div>
            </div>

            {/* Q3 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                  Is breakfast included in the room rate?
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  Yes, complimentary breakfast is included with all room bookings.
                </div>
              </div>
            </div>

            {/* Q4 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFour">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour">
                  Do you allow pets?
                </button>
              </h2>
              <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  Unfortunately, pets are not allowed in our hotel premises.
                </div>
              </div>
            </div>

            {/* Q5 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFive">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive">
                  What is your cancellation policy?
                </button>
              </h2>
              <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  You can cancel free of charge up to 48 hours before your check-in date. Late cancellations may incur a fee.
                </div>
              </div>
            </div>

            {/* Q6 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingSix">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix">
                  Is parking available at the hotel?
                </button>
              </h2>
              <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  Yes, we offer free on-site parking for all guests.
                </div>
              </div>
            </div>

            {/* Q7 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingSeven">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven">
                  How can I modify or cancel a booking?
                </button>
              </h2>
              <div id="collapseSeven" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  You can manage your booking through our website or by contacting our reservation team directly.
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-dark py-5 text-center  text-white">
        <div className="container">
          <h4 className="mb-3">Still have questions?</h4>
          <p className="mb-4">Contact our team for assistance. We’re happy to help!</p>
          <Link href="/contact">
            <button className="btn btn-primary px-4 py-2 fw-bold">Contact Us</button>
          </Link>
        </div>
      </section>
    </main>
  );
}

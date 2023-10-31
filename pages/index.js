import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import Image from 'next/image';
// import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa6';

import CheckoutForm from "../components/CheckoutForm";
import Footer from "../components/Footer";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function App() {
  const [clientSecret, setClientSecret] = React.useState("");

  React.useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="App">
      <main>
        <div className="hero">
          <div className="nav">
            <Image
              src="/zoek-logo.webp"
              alt="Zoek Logo"
              className=""
              width={100}
              height={24}
              priority
            />
          </div>

        
          <div className="header">
            <div className="content">
              <span className="title-sub orange">Insider Exclusive:</span>
              <h1>NEXT-LEVEL SOCIAL MEDIA <br/> MARKETING</h1>
            </div>
          </div>
        </div>


        <section className="container">
          <p className="section-text">Our Social Media Management services are not available to the public yet, <br/>but we’re giving you insider access to our brand-new service at MARKED-DOWN prices!</p>
          <div className="section-content">
            <div className="copy">
              <h2>Now More Than Ever...</h2>
              <p>A solid online presence is essential for every business, regardless of type or size. Social media is a crucial aspect of this digital presence. With 4.89 billion social media users worldwide by 2023, not utilizing its power would mean missing out on untapped revenue and falling behind competitors.</p>
              <a href="https://calendly.com/zoek-sales" target="_blank">
                <button>
                  <p>Book Your Discounted Services</p>
                </button>
              </a>
            </div>
            <div className="media">
              <Image
                src="/blog.webp"
                alt="blog"
                width="0"
                height="0"
                sizes="100vw"
              />
            </div>
          </div>
        </section>

        <section className="services">
          <div className="container">
            <div className="service">
              <h2 className="title-text">Starter Social</h2>
              <h4 className="prices">
                <span className="linethrough">$299/Month</span>
                <span className="orange">  $249/Month</span>
              </h4>
              <div className="content-text">
                <p>
                  Get Social.
                  <br/><br/>
                  The ideal package for smaller companies or businesses just getting started. This package includes management for 2 social networks, 2 weekly posts, access to our exclusive Zoek Social Platform & Dashboard, and more.
                  <br/><br/>
                  Includes:
                </p>
                <ul>
                  <li>Access to Zoek Social Platform</li>
                  <li>Two Posts per Week on two Networks</li>
                  <li>Post Scheduler Powered by AI</li>
                  <li>Social Profile Creation</li>
                  <li>Initial Consultation with Social Media Manager</li>
                  <li>Quarterly Reviews</li>
                  <li>Full Reporting Dashboard</li>
                  <li>Content and Image Creation available*</li>
                </ul>
                <span className="disclaimer">*Social Media content and image creation available for an additional fee</span>
              </div>
            </div>
            <div className="service">
              <h2 className="title-text">Premium Social</h2>
              <h4 className="prices">
                <span className="linethrough">$799/Month</span>
                <span className="orange">  $599/Month</span>
              </h4>
              <div className="content-text">
                <p>
                  Get Social.
                  <br/><br/>
                  Perfect for growing businesses! This package includes all the features of the Starter package, plus more frequent posts, direct message and comment management, bi-monthly check-ins, and in-depth competitor research.
                  <br/><br/>
                  Includes:
                </p>
                <ul>
                  <li>Everything from SMM Starter</li>
                  <li>4 Posts per Week on 2 Networks</li>
                  <li>Reach and Respond</li>
                  <li>Dedicated Social Media Manager</li>
                  <li>Bi-Monthly Checkin</li>
                  <li>5 Extra Hours of Management a Month</li>
                  <li>Competitor Research and Benchmarking</li>
                  <li>Content and Image Creation available*</li>
                </ul>
                <span className="disclaimer">*Social Media content and image creation available for an additional fee</span>
              </div>
            </div>
            <div className="service">
              <h2 className="title-text">Enterprise Social</h2>
              <h4 className="prices">
                <span className="linethrough">$1,499/Month </span>
                <span className="orange">  $1,099/Month</span>
              </h4>
              <div className="content-text">
                <p>
                  Live Social.
                  <br/><br/>
                  The enterprise package is essential for larger businesses seeking complete social media management. Enterprise includes all the Premium package features, double the posts, CRM integration, post promotion, and much more!
                  <br/><br/>
                  Includes:
                </p>
                <ul>
                  <li>Everything from SMM Premium</li>
                  <li>8 Posts per Week on 2 Networks</li>
                  <li>10 Extra Hours of Management a Month</li>
                  <li>Respond to DMs Automatically</li>
                  <li>Integration Support</li>
                  <li>Promoted Posts</li>
                </ul>
              </div>
            </div>
            <div className="service">
              <h2 className="title-text">Agency Social</h2>
              <h4 className="prices">
                <span className="linethrough">$1,999/Month</span>
                <span className="orange">  $1,899/Month</span>
              </h4>
              <div className="content-text">
                <p>
                  Dominate Social.
                  <br/><br/>
                  Tailored for businesses demanding a comprehensive solution. Get everything from the Enterprise package, plus content for reels and stories, monthly check-ins, and our exclusive Social Media Bible.<br/><br/>The Agency Package is the ultimate Social Media experience. Your dedicated Social Media team will be at your disposal to grow and expand your business in ways you didn&apos;t even think were possible!
                  <br/><br/>
                  Includes:
                </p>
                <ul>
                  <li>Everything from SMM Premium</li>
                  <li>20+ Extra Hours of Management a Month</li>
                  <li>In-Depth Monthly Report and Social Media Brand Bible</li>
                  <li>Reels and Stories</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="work">
          <div className="container">
            <div className="section-content">
              <div className="copy">
                <span className="subheader">OUR WORK IS ONE-OF-A-KIND</span>
                <h2>See For Yourself</h2>
                <p>Discover the true capabilities of the Zoek team. We not only provide customized graphics for our clients, but also boast a top-notch graphic team that is equipped and prepared to fulfill any graphic design requests that will keep you ahead of the competition.</p>
              </div>
              <div className="media">
                <a href="https://www.behance.net/gallery/157669329/Social-Media-Graphics-10" target="_blank">
                  <button>
                    <p>View Our Recent Works</p>
                  </button>
                </a>
              </div>
            </div>
          </div>

          {clientSecret && (
            <div className="container">
              <Elements options={options} stripe={stripePromise}>
                <CheckoutForm />
              </Elements>
            </div>
          )}



          <a href="https://calendly.com/zoek-sales" target="_blank">
            <div className="bg">
              <div className="overlay"></div>
              <div className="header">
                <div className="content">
                  <span className="title-sub">So What&apos;s Next</span>
                  <h1>Click To Schedule Your Free Chat</h1>
                </div>
              </div>
            </div>
          </a>
        </section>

        {/* <div className="footer">
          <div className="container">
            <div className="marketing">
              <h5 className="title">Zoek Marketing</h5>
              <p className="description">We understand the headache SMB marketing can cause - which is why we&apos;d love to get started and help you along your journey! Get in touch, and our team of experts will be there to answer all your questions.</p>
              <div className="social">
                <a href="https://www.facebook.com/GoZoek/" target="_blank">
                  <FaFacebookF />
                </a>
                <a href="https://www.linkedin.com/" target="_blank">
                  <FaLinkedinIn />
                </a>
                <a href="https://twitter.com/gozoek_" target="_blank">
                  <FaTwitter/>
                </a>
                <a href="https://www.instagram.com/gozoek/" target="_blank">
                  <FaInstagram/>
                </a>
              </div>
            </div>
            <div className="connected">
              <h5 className="title">Get Connected</h5>
              <div className="links">
                <a href="http://www.gozoek.com/" target="_blank">www.gozoek.com</a>
                <a href="mailto:hi@gozoek.com" target="_blank">hi@gozoek.com</a>
                <a href="tel:8887379635" target="_blank">1-888-737-9635</a>
              </div>
            </div>
            <div className="office">
              <h5 className="title">Our Office</h5>
              <p className="address">530 Technology Dr. <br/>Irvine CA 92618</p>
            </div>
            <p className="copyright">© 2023 All rights reserved. Zoek Marketing</p>
          </div>
        </div> */}
      </main>
    </div>
  );
}
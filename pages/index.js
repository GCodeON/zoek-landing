import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import Image from 'next/image';

import Services from "../components/Services";
import CheckoutForm from "../components/CheckoutForm";
import Footer from "../components/Footer";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function App() {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
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

        <Services />

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

        <Footer/>
        
      </main>
    </div>
  );
}
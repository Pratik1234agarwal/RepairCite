import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/repair.png';
import Screen from '../images/screen.jpg';
import Charging from '../images/charging.png';

const Home = () => {
  return (
    <div>
      <header>
        <div class='container'>
          <div class='row'>
            <div class='col-md-12'>
              <nav
                style={{ padding: '10px' }}
                class='navbar navbar-expand-lg navbar-light'
              >
                <Link class='navbar-brand' to='/'>
                  <img src={Logo} alt='RepairCite' class='logo-img' />
                  {/* <div class='name__company'>
                    <span>Re</span>pair
                  </div> */}
                </Link>
                <div class='navbar-toggler justify-content-end'>
                  <ul class='navbar-nav'>
                    <li class='nav-item'>
                      <a class='nav-link' href='#howitworks'>
                        How it works
                      </a>
                    </li>
                  </ul>
                </div>
                <div
                  class='collapse navbar-collapse justify-content-end'
                  id='navbarNavDropdown'
                >
                  <ul class='navbar-nav'>
                    <li class='nav-item'>
                      <a class='nav-link' href='#howitworks'>
                        How it works
                      </a>
                    </li>
                    <li class='nav-item'>
                      <a class='nav-link' href='#services'>
                        Our Services{' '}
                      </a>
                    </li>
                    <li>
                      <Link to='/bookings' class='btn btn-info'>
                        Book a Repair
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <section class='slider'>
        <div class='container'>
          <div class='row justify-content-center'>
            <div class='col-md-10'>
              <div class='slider-content'>
                <h1>Repair Made Easy</h1>
                <h3>
                  Book expert phone repair handymen at a moment's notice. Just
                  pick a time and we’ll do the rest.
                </h3>
                <div class='form-wrap'>
                  <div
                    class='btn-group'
                    role='group'
                    aria-label='Basic example'
                  >
                    <button class='btn-form'>
                      <Link
                        to='/bookings'
                        style={{ textDecoration: 'none', color: 'white' }}
                      >
                        Continue<i class='pe-7s-angle-right'></i>
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class='howit-work main-block center-block' id='howitworks'>
        <div class='container'>
          <div class='row'>
            <div class='col-md-12'>
              <h2>
                How it <span>works</span>
              </h2>
              <h6>
                We’ve made all the hardwork for making it simple for you. Here’s
                how it works
              </h6>
            </div>
          </div>
          <div class='row'>
            <div class='col-md-4'>
              <div class='howit-wrap'>
                <span class='pe-7s-date'></span>
                <h4>Book a Repairing</h4>
                <p>
                  Click the book now button to make a booking on your preffered
                  date and time
                </p>
              </div>
            </div>
            <div class='col-md-4'>
              <div class='howit-wrap'>
                <span class='pe-7s-lock'></span>
                <h4>Confirm Booking</h4>
                <p>We will confirm your booking along with your instructions</p>
              </div>
            </div>
            <div class='col-md-4'>
              <div class='howit-wrap'>
                <span class='pe-7s-home'></span>
                <h4>We’ll Repair it</h4>
                <p>
                  Our trusted & experienced worker will come to your door-step
                  on the time for a repair
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class='testimonial main-block center-block'>
        <div class='container'>
          <div class='row'>
            <div class='col-md-12'>
              <h2>
                Don’t take our <span>word</span>
              </h2>
              <h6>Read what our past customers said about our services.</h6>
            </div>
          </div>
          <div class='row mt-5'>
            <div class='col-md-4'>
              <div class='testi-block'>
                <i class='fa fa-quote-left' aria-hidden='true'></i>
                <p>
                  Really great place! People are so awesome and super fair. My
                  phone was fixed within the hour and at a great price!!
                </p>
              </div>
              <div class='testi-title'>
                <h4>Andrew</h4>
              </div>
            </div>
            <div class='col-md-4'>
              <div class='testi-block'>
                <i class='fa fa-quote-left' aria-hidden='true'></i>
                <p>
                  This place is a 100% reliable and trust worthy I went to get
                  my phone fixed and this store multiple times for different
                  occasions I would 100% recommend this place
                </p>
              </div>
              <div class='testi-title'>
                <h4>Jessica</h4>
              </div>
            </div>
            <div class='col-md-4'>
              <div class='testi-block'>
                <i class='fa fa-quote-left' aria-hidden='true'></i>
                <p>
                  They fixed my cracked iPhone X (front and back glass) in a few
                  hours. Great work and reasonable pricing. Highly recommend!
                </p>
              </div>
              <div class='testi-title'>
                <h4>Jessica</h4>
              </div>
            </div>
            <div class='col-md-4'>
              <div class='testi-block'>
                <i class='fa fa-quote-left' aria-hidden='true'></i>
                <p>
                  Fast service it only took a hour for 2 phones, cheap but
                  efficient.
                </p>
              </div>
              <div class='testi-title'>
                <h4>Jessica</h4>
              </div>
            </div>
            <div class='col-md-4'>
              <div class='testi-block'>
                <i class='fa fa-quote-left' aria-hidden='true'></i>
                <p>
                  BEST CUSTOMER SERVICE EVER!! My phone had been frozen on the
                  home screen for an hour and I couldn't get it to work but
                  luckily when I went into Hitech Wireless they master reset my
                  phone FREE OF CHARGE. Very very kind of them, ill definitely
                  be going back for other services!
                </p>
              </div>
              <div class='testi-title'>
                <h4>John</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class='service-title' id='services'>
        <div class='container'>
          <div class='row'>
            <div class='col-md-12'>
              <h2>
                Check out some of our <span>services!</span>
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section class='service'>
        <div class='img-objectfit'>
          <div class='grid'>
            <figure class='effect-lily'>
              <img src={Charging} class='img-fluid' alt='#' />
            </figure>
          </div>
        </div>
        <div class='container'>
          <div class='row'>
            <div class='col-md-6'></div>
            <div class='col-md-6'>
              <div class='service-link'>
                <h3>
                  iPhone repair <span>Charging Port </span>
                </h3>
                <ul>
                  <li>
                    <i class='fa fa-check' aria-hidden='true'></i>
                    <a href='#!'>Repair Charging Port.</a>
                  </li>
                  <li>
                    <i class='fa fa-check' aria-hidden='true'></i>
                    <a href='#!'>Get Best Quality Services</a>
                  </li>
                  <li>
                    <i class='fa fa-check' aria-hidden='true'></i>
                    <a href='#!'>Quick Repair</a>
                  </li>
                  <li>
                    <i class='fa fa-check' aria-hidden='true'></i>
                    <a href='#!'>Affordable Prices</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class='service'>
        <div class='container'>
          <div class='row'>
            <div class='col-md-6'>
              <div class='service-link service-link1'>
                <h3>
                  iPhone repair <span>Screen</span>
                </h3>
                <ul>
                  <li>
                    <i class='fa fa-check' aria-hidden='true'></i>
                    <a href='#'>Repair any damage to Screen</a>
                  </li>
                  <li>
                    <i class='fa fa-check' aria-hidden='true'></i>
                    <a href='#'>Get Full Screen Changes</a>
                  </li>
                  <li>
                    <i class='fa fa-check' aria-hidden='true'></i>
                    <a href='#'>Reliable Services</a>
                  </li>
                  <li>
                    <i class='fa fa-check' aria-hidden='true'></i>
                    <a href='#'>Good Quality Screen</a>
                  </li>
                  <li>
                    <i class='fa fa-check' aria-hidden='true'></i>
                    <a href='#'>Best-in-class Prices</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class='col-md-6'></div>
          </div>
        </div>
        <div class='img-objectfit_1'>
          <div class='grid'>
            <figure class='effect-lily'>
              <img src={Screen} class='img-fluid' alt='#' />
            </figure>
          </div>
        </div>
      </section>

      <section class='booking main-block center-block'>
        <div class='container'>
          <div class='row'>
            <div class='col-md-12'>
              <h2>Don’t wait, Book a Repair now.</h2>
            </div>
          </div>
          <div class='row justify-content-center'>
            <div class='col-md-10'>
              <div class='form-wrap mt-5'>
                <div class='btn-group' role='group' aria-label='Basic example'>
                  <button class='btn-form'>
                    <Link
                      to='/bookings'
                      style={{ textDecoration: 'none', color: 'white' }}
                    >
                      Continue<i class='pe-7s-angle-right'></i>
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

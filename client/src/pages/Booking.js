import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Selector from '../components/Selector';
import { format } from 'date-fns';
import Time from '../components/Time';
import Modal from '../components/Modal';
import { pincodes } from '../helpers';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';

const Booking = (props) => {
  const [showModal, setShow] = useState({
    show: false,
    msg: '',
    error: true,
  });
  const handleModal = (e, open) => {
    setShow({ ...showModal, show: open });
  };
  const [data, setData] = useState({
    repairs: [
      {
        name: 'Charging Port',
        code: 'ch',
      },
      {
        name: 'Screen Repair',
        code: 'sr',
      },
    ],
    phones: [],
    formData: {
      type: '',
      modelName: '',
      additionInfo: '',
      address: '',
      phone: '',
      timeSlot: '',
      date: '',
      email: '',
      pincode: '',
      price: '',
    },
  });
  const onClick = async (e) => {
    const { formData } = data;
    const template = (data) => `Please fill the ${data} of repair wanted`;
    if (formData.type === '')
      return setShow({ show: true, msg: template('type'), error: true });
    if (formData.modelName === '')
      return setShow({ show: true, msg: template('Model Name'), error: true });
    if (formData.date === '')
      return setShow({ show: true, msg: template('date'), error: true });
    if (formData.timeSlot === '')
      return setShow({ show: true, msg: template('Time Slot'), error: true });
    if (formData.address === '')
      return setShow({ show: true, msg: template('Address'), error: true });
    if (formData.phone === '')
      return setShow({ show: true, msg: template('phone'), error: true });
    if (formData.email === '')
      return setShow({ show: true, msg: template('email'), error: true });
    if (formData.pincode === '')
      return setShow({ show: true, msg: template('email'), error: true });
    formData.pincode = parseInt(formData.pincode);
    if (!pincodes.includes(formData.pincode))
      return setShow({
        show: true,
        msg: 'We do not server that pincode yet.',
        error: true,
      });
    try {
      console.log(formData);
      formData.price = data.phones.find(
        (phone) => phone.name === data.formData.modelName
      )[
        data.formData.type
          .toLowerCase()
          .substr(0, data.formData.type.indexOf(' '))
      ];
      const res = await axios.post('/api/booking', formData);
      console.log(res.data);
      setShow({
        show: true,
        msg: 'Thanks for choosing us, your repair is booked',
      });
    } catch (err) {
      console.log(err);
      setShow({ show: true, msg: err.response.data.err, error: true });
    }
  };
  const radioChange = (e) => {
    let field = 'modelName';
    if (e.target.name === 'repair') {
      field = 'type';
    }
    setData({
      ...data,
      formData: {
        ...data.formData,
        [field]: e.target.value,
      },
    });
  };
  const onChange = (e) => {
    setData({
      ...data,
      formData: {
        ...data.formData,
        [e.target.name]: e.target.value,
      },
    });
  };
  useEffect(() => {
    async function fetchData() {
      try {
        console.log('running');
        const res = await fetch('/api');
        const phones = await res.json();
        setData((d) => ({
          ...d,
          phones: phones.phones,
        }));
      } catch (err) {
        console.log(err);
        alert(err.response.data.err);
      }
    }
    fetchData();
  }, [setData]);
  return (
    <React.Fragment>
      <Spinner />
      <div>
        <header className='header-style2 fixed-top'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12'>
                <Link to='/' style={{ textDecoration: 'none' }}>
                  <h3 style={{ display: 'flex', flexDirection: 'row' }}>
                    <div style={{ color: '#45c3d3' }}>Re</div>pair
                  </h3>
                </Link>
              </div>
            </div>
          </div>
        </header>

        <section className='booking-details center-block main-block'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12'>
                <h2>Book your Repair</h2>
                <h6>Its time to book our Repair for your iPhone.</h6>
              </div>
            </div>
            <div className='row mt-5'>
              <div className='col-md-8 set-sm-fit mb-4'>
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className='preference-title'>
                    <h4>Cleaning Preferences</h4>
                  </div>

                  <div className='preferences'>
                    <Selector
                      data={data.phones}
                      type={'phones'}
                      heading={'Select your iPhone model ?'}
                      onChange={radioChange}
                    />
                    {data.formData.modelName !== '' && (
                      <Selector
                        data={data.repairs.filter((repair) => {
                          return data.phones.find(
                            (phone) => phone.name === data.formData.modelName
                          )[
                            repair.name
                              .substr(0, repair.name.indexOf(' '))
                              .toLowerCase()
                          ];
                        })}
                        type='repair'
                        heading={'What type of repair does your phone need ?'}
                        onChange={radioChange}
                      />
                    )}

                    <div className='preference-radio mt-4'>
                      <p>
                        Do you have any special requerments?
                        <span className='optional-fade'>(optional)</span>
                      </p>
                      <div className='row'>
                        <div className='col-md-12'>
                          <textarea
                            name='additionInfo'
                            value={data.formData.additionInfo}
                            onChange={onChange}
                            className='optinal-textarea'
                          ></textarea>
                        </div>
                      </div>
                    </div>

                    <div className='row'>
                      <div className='col-md-12'>
                        <div className='preference-about_home'>
                          <h4>Choose hours and dates</h4>
                        </div>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-md-12'>
                        <div className='preference-radio mt-4'>
                          <p>Choose a date?</p>
                          <div className='form-group'>
                            <div className='col-xs-5 date'>
                              <div
                                className='input-group input-append date'
                                id='datePicker'
                              >
                                <input
                                  type='date'
                                  className='form-control'
                                  name='date'
                                  min={format(new Date(), 'yyyy-MM-dd')}
                                  onChange={onChange}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {data.formData.date !== '' && (
                      <Time date={data.formData.date} onChange={onChange} />
                    )}

                    <div className='preference-radio mt-5'>
                      <p>Pesonal Details</p>
                      <div className='row'>
                        <div className='col-md-6'>
                          <div className='card-details'>
                            <input
                              type='email'
                              placeholder='Email Address'
                              className='card-number'
                              onChange={onChange}
                              value={data.formData.email}
                              name='email'
                              email
                            />
                          </div>
                        </div>
                        <div className='col-md-6'>
                          <div className='card-details'>
                            <input
                              type='number'
                              placeholder='Phone Number'
                              className='card-number'
                              phone
                              name='phone'
                              onChange={onChange}
                              value={data.formData.phone}
                            />
                          </div>
                        </div>
                      </div>
                      <div className='row mt-3'>
                        <div className='col-md-9'>
                          <div className='card-details'>
                            <input
                              type='text'
                              placeholder='Your Full Address'
                              className='card-number'
                              name='address'
                              value={data.formData.address}
                              onChange={onChange}
                            />
                          </div>
                        </div>
                        <div className='col-md-3'>
                          <div className='card-details'>
                            <input
                              type='number'
                              placeholder='10023'
                              className='card-number'
                              value={data.formData.pincode}
                              onChange={onChange}
                              name='pincode'
                            />
                          </div>
                        </div>
                      </div>
                      <div className='row mt-3'></div>
                      <div className='row mt-4'>
                        <div className='col-md-12'>
                          <button
                            className='btn btn-block complete-booking'
                            onClick={onClick}
                          >
                            <span className='pe-7s-unlock'></span>Complete
                            Booking
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>

              <div className='col-md-4 set-sm-fit'>
                <div data-toggle='affix'>
                  <div className='preference-title'>
                    <h4>Booking Summary</h4>
                  </div>
                  <div className='fesilities'>
                    <ul>
                      <li>
                        <i className='fa fa-paint-brush' aria-hidden='true'></i>
                        <p>
                          {data.formData.type} {data.formData.modelName}
                        </p>
                      </li>
                      <li>
                        <i className='fa fa-calendar' aria-hidden='true'></i>
                        <p>
                          {data.formData.date} {data.formData.timeSlot}
                        </p>
                      </li>
                      <li>
                        <i className='fa fa-map-marker' aria-hidden='true'></i>
                        <p>{data.formData.address}</p>
                      </li>
                      <li>
                        <i className='fa fa-map-marker' aria-hidden='true'></i>
                        <p>{data.formData.email}</p>
                      </li>
                      <li>
                        <i className='fa fa-map-marker' aria-hidden='true'></i>
                        <p>{data.formData.phone}</p>
                      </li>
                    </ul>
                    {data.formData.type !== '' &&
                      data.formData.modelName !== '' && (
                        <h4>
                          Total cost
                          <span>
                            {
                              data.phones.find(
                                (phone) =>
                                  phone.name === data.formData.modelName
                              )[
                                data.formData.type
                                  .toLowerCase()
                                  .substr(0, data.formData.type.indexOf(' '))
                              ]
                            }{' '}
                            $
                          </span>
                        </h4>
                      )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Modal {...showModal} handleModal={handleModal} />
    </React.Fragment>
  );
};

export default Booking;

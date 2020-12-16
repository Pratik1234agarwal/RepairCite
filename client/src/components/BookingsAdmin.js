import React from 'react';
import TabsAdmin from './TabsAdmin';
import Card from 'react-bootstrap/Card';

const BookingsAdmin = ({ bookings, deleteBooking }) => {
  const [data, setData] = React.useState({
    active: [],
    expired: [],
  });
  React.useEffect(() => {
    bookings = bookings.sort();
    console.log('Runnings');
    let active = [],
      expired = [];
    for (let i = 0; i < bookings.length; i++) {
      let book = bookings[i];
      let date = new Date(book.date);
      if (Date.now() > date.getTime()) {
        expired.push(
          <div key={book._id} className='col-md-6 col-sm-12 my-3'>
            <Card style={{ boxShadow: '0 8px 16px rgba(0,0,0,0.3)' }}>
              <Card.Body className='text-dark'>
                <Card.Title>{book.type}</Card.Title>
                <Card.Subtitle className='mb-2 text-muted'>
                  {book.modelName}
                </Card.Subtitle>
                <Card.Text>Date : {book.date}</Card.Text>
                <Card.Text>Time Slot : {book.timeSlot}</Card.Text>
                <Card.Text>Pincode : {book.pincode}</Card.Text>
                <Card.Text>Phone Number : {book.phone}</Card.Text>
                <Card.Text>Address : {book.address}</Card.Text>
                <Card.Text>Price : {book.price}</Card.Text>
                <button
                  onClick={() => deleteBooking(book._id)}
                  className='btn btn-danger'
                >
                  Delete
                </button>
              </Card.Body>
            </Card>
          </div>
        );
      } else {
        active.push(
          <div key={book._id} className='col-md-6 col-sm-12 my-3'>
            <Card style={{ boxShadow: '0 8px 16px rgba(0,0,0,0.3)' }}>
              <Card.Body className='text-dark'>
                <Card.Title>{book.type}</Card.Title>
                <Card.Subtitle className='mb-2 text-muted'>
                  {book.modelName}
                </Card.Subtitle>
                <Card.Text>Date : {book.date}</Card.Text>
                <Card.Text>Time Slot : {book.timeSlot}</Card.Text>
                <Card.Text>Pincode : {book.pincode}</Card.Text>
                <Card.Text>Phone Number : {book.phone}</Card.Text>
                <Card.Text>Address : {book.address}</Card.Text>
                <Card.Text>Price : {book.price}</Card.Text>
                <button
                  onClick={() => deleteBooking(book._id)}
                  className='btn btn-danger'
                >
                  Delete
                </button>
              </Card.Body>
            </Card>
          </div>
        );
      }
    }
    setData({
      active,
      expired,
    });
  }, [bookings]);
  const activeData = <div className='row'>{data.active}</div>;
  const expiredData = <div className='row'>{data.expired}</div>;
  return <TabsAdmin active={activeData} expired={expiredData}></TabsAdmin>;
};

export default BookingsAdmin;

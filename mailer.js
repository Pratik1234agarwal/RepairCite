const nodemailer = require('nodemailer');

async function main(html) {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'pratik12aga@gmail.com', // generated ethereal user
      pass: 'Pratik@.1234', // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Repair Cite 👻" <repair@cite.com>', // sender address
    to: 'pratik1234agarwal@gmail.com, pratik12aga@gmail.com', // list of receivers
    subject: 'New Booking Registered', // Subject line
    text:
      'Hey, You have a new booking registered, login to admin panel to see them', // plain text body
    html: html,
  });

  console.log('Message sent: %s', info.messageId);
}

const mail = (data) => {
  const html = `
    <html>
        <head>
            <style>
            body {
                text-align: center;
            }
            h1 {
                color: #444;
                text-align: center;
            }
            .container {
                margin-top: 5vh;
                width: 100%;
                text-align: center;
            }
            p {
                text-align: center;
            }
            .card {
                padding: 20px;
                background: #ebebeb;
                box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.3);
                border-radius: 10px;
            }
            a {
                margin-top: 5vh;
                border: none;
                padding: 10px;
                border-radius: 5px;
                cursor: pointer;
                background-color: #007fbb;
                color: white;
                font-size: 1.3rem;
            }
            </style>
        </head>
        <body>
            <h1>New Booking</h1>
            <div class="container">
            <p>A new Booking Has Been Made in Repair Cite.</p>
            <div class="card">
                <p>Type : ${data.type}</p>
                <p>Model Name : ${data.modelName}</p>
                <p>Price : ${data.price}</p>
                <p>Date : ${data.date}</p>
                <p>Time Slot : ${data.timeSlot}</p>
                <p>Address : ${data.address}</p>
                <p>Phone : ${data.phone}</p>
                <p>Addition Info : ${data.additionalInfo}</p>
            </div>
            </div>
            <div style="margin-top: 7vh">
            <a onclick="onclick" href="http://localhost:3000/admin/login">
                See All Bookings
            </a>
            </div>
        </body>
    </html>`;

  main(html).catch(console.log);
};

module.exports = mail;

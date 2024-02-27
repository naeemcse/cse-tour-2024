// import * as React from 'react';

// export  const EmailTemplate = ({ firstName,}) => (
//     <div>
//       <h1>Welcome, {firstName}!</h1>
//       <p> Thanks for registration for going to SaintMartin  </p>
//       <h2  align = "center"> Arranged by CSE-12 Batch   </h2>
//     </div>
//   );

//     export default EmailTemplate; 

export const EmailTemplate = ({ firstName, id, mobile, tShirtSize }) => (
  <div style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>
      <p style={{ color: '#48bb78' }}> Hellow  {firstName} , Wllcome </p> 

   <div style={{ background: '#0070f3', padding: '20px', textAlign: 'center', color: '#fff', marginBottom: '0' }}>
  <h1 style={{ fontSize: '2rem', fontWeight: 'bold', margin: '0' }}>CSE-tour 2K24</h1>
  <p style={{ fontSize: '1rem', margin: '0' }}>Arranged by CSE-12 Batch</p>
</div>

<img src="https://www.tripsilo.com/uploads/images/tours/slider/644403_12496316_10153273503225248_3424486551059093533_o.jpg" alt="Saint Martin" style={{ maxWidth: '100%', marginTop: '0', marginLeft: 'auto', marginRight: 'auto', display: 'block' }} />

    <div style={{ margin: '20px 0' }}>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Event Details:</h2>
      <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
        <li><strong>Place:</strong> Saint Martin</li>
        <li><strong>Start:</strong> 28-02 (night)</li>
        <li><strong>End:</strong> 02-03 (night)</li>
      </ul>
    </div>

    <div style={{ margin: '20px 0' }}>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Schedule:</h2>
      <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
        <li>28.02.24: Journey starts</li>
        <li>29.02.2024: Ship journey Cox Bazar to Saint Martin</li>
        <li>Lunch, Segment, Dinner</li>
        <li>01.03.2024: Chhera Island night (BBQ and Cultural)</li>
        <li>02.03.2024: Return to Cox Bazar and return to Cumilla at night</li>
      </ul>
    </div>

    <p style={{ marginTop: '20px' }}>Thanks for joining us, {firstName}!</p>

    <div style={{ margin: '20px 0' }}>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Discover Saint Martin:</h2>
      <p>Known for its pristine beaches and crystal-clear waters, Saint Martin is a tropical paradise nestled in the Bay of Bengal. Explore the beauty of nature and experience a journey like never before.</p>
    </div>

    <div style={{ margin: '20px 0' }}>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Your Information:</h2>
      <p style={{ color: '#48bb78' }}>Name: {firstName}</p>
      <p>ID: {id}</p>
      <p>Mobile Number: {mobile}</p>
      <p>T-Shirt Size: {tShirtSize}</p>
    </div>
    <p style={{ marginTop: '10px', fontSize: '1rem', fontWeight: 'bold' }}> Call( Shihab Uddin Himel) for any Need:  <a> 01302-982717  </a>  </p>

    <p style={{ marginTop: '20px', fontSize: '1.25rem', fontWeight: 'bold', color: '#48bb78' }}>Wishing you a wonderful time at CSE-tour 2K24!</p>
    <p style={{ marginTop: '20px', fontSize: '1rem', fontWeight: 'bold', }}> Developed by <b> Najmul Islam Naeem </b>  </p>
  </div>
);

export default EmailTemplate;

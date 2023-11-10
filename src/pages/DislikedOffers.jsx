import React from 'react';

import OffersTable from '../components/OffersTable';

const DislikedOffers = () => {
  const dummyTableData = [
    {
      amount: '$50',
      location: '123 Main St, Cityville',
      hours: 2,
      duration: '02:30 - 04:30',
      captureTime: '16-10-23 10:30 am',
      date: '2023-11-11',
      packageType: 'A',
      reason: 'No such address'
    },
    {
      amount: '$30',
      location: '456 Oak Ave, Townsville',
      hours: 1.5,
      duration: '01:15 - 02:45',
      captureTime: '16-10-23 2:45 pm',
      date: '2023-11-12',
      packageType: 'B',
      reason: 'Location not feasible'
    },
    {
      amount: '$75',
      location: '789 Pine Rd, Villageland',
      hours: 3,
      duration: '03:00 - 06:00',
      captureTime: '16-10-23 5:15 pm',
      date: '2023-11-13',
      packageType: 'C',
      reason: 'Traffic Issue'
    },
    {
      amount: '$40',
      location: '101 Elm Lane, Hamlet',
      hours: 2.5,
      duration: '04:30 - 07:00',
      captureTime: '16-10-23 8:30 am',
      date: '2023-11-14',
      packageType: 'D',
      reason: 'Less Amount'
    },
    {
      amount: '$60',
      location: '202 Maple Blvd, Riverside',
      hours: 1.8,
      duration: '12:15 - 02:00',
      captureTime: '16-10-23 1:15 pm',
      date: '2023-11-15',
      packageType: 'E',
      reason: 'Traffic Issue'
    },
    {
      amount: '$90',
      location: '303 Cedar Street, Brookside',
      hours: 4,
      duration: '09:30 - 01:30',
      captureTime: '16-10-23 11:45 am',
      date: '2023-11-16',
      packageType: 'F',
      reason: 'Location not feasible'
    },
    {
      amount: '$55',
      location: '404 Birch Road, Lakeside',
      hours: 2.2,
      duration: '03:45 - 06:15',
      captureTime: '16-10-23 4:30 pm',
      date: '2023-11-17',
      packageType: 'G',
      reason: 'Location not feasible'
    },
    {
      amount: '$70',
      location: '505 Oakwood Drive, Hilltop',
      hours: 3.5,
      duration: '07:00 - 10:30',
      captureTime: '16-10-23 7:15 am',
      date: '2023-11-18',
      packageType: 'H',
      reason: 'Location not feasible'
    },
    {
      amount: '$85',
      location: '606 Pine Lane, Summit',
      hours: 2.8,
      duration: '12:30 - 03:15',
      captureTime: '16-10-23 2:00 pm',
      date: '2023-11-19',
      packageType: 'I',
      reason: 'Location not feasible'
    },
    {
      amount: '$120',
      location: '707 Cedar Avenue, Crestview',
      hours: 5,
      duration: '10:00 - 03:00',
      captureTime: '16-10-23 9:30 am',
      date: '2023-11-20',
      packageType: 'J',
      reason: 'Location not feasible'
    },
    {
      amount: '$50',
      location: '123 Main St, Cityville',
      hours: 2,
      duration: '02:30 - 04:30',
      captureTime: '16-10-23 10:30 am',
      date: '2023-11-11',
      packageType: 'A',
      reason: 'No such address'
    },
    {
      amount: '$30',
      location: '456 Oak Ave, Townsville',
      hours: 1.5,
      duration: '01:15 - 02:45',
      captureTime: '16-10-23 2:45 pm',
      date: '2023-11-12',
      packageType: 'B',
      reason: 'Location not feasible'
    },
    {
      amount: '$75',
      location: '789 Pine Rd, Villageland',
      hours: 3,
      duration: '03:00 - 06:00',
      captureTime: '16-10-23 5:15 pm',
      date: '2023-11-13',
      packageType: 'C',
      reason: 'Traffic Issue'
    },
    {
      amount: '$40',
      location: '101 Elm Lane, Hamlet',
      hours: 2.5,
      duration: '04:30 - 07:00',
      captureTime: '16-10-23 8:30 am',
      date: '2023-11-14',
      packageType: 'D',
      reason: 'Less Amount'
    },
    {
      amount: '$60',
      location: '202 Maple Blvd, Riverside',
      hours: 1.8,
      duration: '12:15 - 02:00',
      captureTime: '16-10-23 1:15 pm',
      date: '2023-11-15',
      packageType: 'E',
      reason: 'Traffic Issue'
    },
    {
      amount: '$90',
      location: '303 Cedar Street, Brookside',
      hours: 4,
      duration: '09:30 - 01:30',
      captureTime: '16-10-23 11:45 am',
      date: '2023-11-16',
      packageType: 'F',
      reason: 'Location not feasible'
    },
    {
      amount: '$55',
      location: '404 Birch Road, Lakeside',
      hours: 2.2,
      duration: '03:45 - 06:15',
      captureTime: '16-10-23 4:30 pm',
      date: '2023-11-17',
      packageType: 'G',
      reason: 'Location not feasible'
    }
  ];
  return (
    <div>
      <OffersTable
        tableData={dummyTableData}
        tableType={'disliked'}
        pageNumber={'01'}
      />
    </div>
  );
};

export default DislikedOffers;

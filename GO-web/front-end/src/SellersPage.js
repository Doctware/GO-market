import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './SellersPage.css';
import meatSeller from './goImage/meatSeler.jpeg';
import peperSeller from './goImage/peperSeller.jpeg';

/* sellers Page function */
const SellerPage = () => {
  // This will be used to hold sellers data once fetched from the backend
  const [sellers] = useState([
    {
      name: 'Olayode Yusuf',
      whatsapp: '+234 8082937081',
      location: 'Line 4, Songo Market, Agege Lagos',
      groceryType: 'Fresh Cow Meat',
      image: meatSeller
    },
    {
      name: 'GO user',
      whatsapp: '+123456789',
      location: 'Line 2, Mile 12, Lagos',
      groceryType: 'Fresh Pepper',
      image: peperSeller
    }
  ]);

  // In the future, i'll be fetching sellers data from the backend here.
  useEffect(() => {
    // Example for fetching sellers from API (uncomment later)
    // fetch('/api/sellers')
    //   .then((response) => response.json())
    //   .then((data) => setSellers(data))
    //   .catch((error) => console.error('Error fetching sellers:', error));
  }, []);

  return (
    <div className='seller-page'>
      <h2>Find a Seller</h2>
      <div className='seller-container'>
        {sellers.map((seller, index) => (
          <div className='seller-details' key={index}>
            <div className='seller-image'>
              <img src={seller.image} alt={`Seller ${index + 1}`} />
            </div>
            <div className='seller-info'>
              <p><strong>Name:</strong> {seller.name}</p>
              <p><strong>WhatsApp:</strong> <a href={`https://wa.me/${seller.whatsapp.replace('+', '')}`} target='_blank' rel='noopener noreferrer'>{seller.whatsapp}</a></p>
              <p><strong>Location:</strong> {seller.location}</p>
              <p><strong>Grocery Type:</strong> {seller.groceryType}</p>
            </div>
            <Link to='/' className='b_home-button'>
              <button className='home-btn'> <b>&larr;</b> GO home</button>
            </Link>

          </div>
        ))}
      </div>
    </div>
  );
};

export default SellerPage;

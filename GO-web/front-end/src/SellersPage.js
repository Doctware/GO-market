import React from 'react';
import './SellersPage.css'
import Header from './App.js'
import meatSeller from './goImage/meatSeler.jpeg';
import peperSeller from './goImage/peperSeller.jpeg';

/* sellers Page functio */
const SellerPage = () => {
  const sellers = [
    {
      name: 'Olayode yusuf',
      whatsapp: '+234 8082937081',
      location: 'line 4, Songo market, Agege Lagos',
      groceryType: 'Frech Cow Meat',
      image: meatSeller
    },

    {
      name: '... ....',
      whatsapp: '+123456789',
      location: '... .. ... ... ...',
      groceryType: 'Frech Peper',
      image: peperSeller

    }
  ];

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
          </div>
        ))}
      </div>
    </div>
  );
};

export default SellerPage;

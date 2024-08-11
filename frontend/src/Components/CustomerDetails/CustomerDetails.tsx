import React, { memo } from 'react';
import './customer-details.css';
import ImageGrid from '../ImageGrid/ImageGrid';

interface Customer {
  id: string;
  name: string;
  description: string;
  address: string;
}

interface CustomerProps {
  selectedCustomer: Customer;
}

const CustomerDetails: React.FC<CustomerProps> = ({ selectedCustomer }) => {
    
  return (
    <div className="customer_details">
      <p className="customer_details_title">{selectedCustomer.name}</p>
      <p className="customer_details_address">{selectedCustomer.address}</p>
      <p className="customer_details_desc">{selectedCustomer.description}</p>
      <ImageGrid />      
    </div>
  );
};

export default memo(CustomerDetails);

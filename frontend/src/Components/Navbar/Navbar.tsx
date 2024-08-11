import React, { useState, useCallback, memo } from 'react';
import './navbar.css';
import customers from '../../assets/data/data';

interface Customer {
  id: string;
  name: string;
  description: string;
  address: string;
}

interface NavbarProps {
  selectedCustomer: Customer;
  setSelectedCustomer: React.Dispatch<React.SetStateAction<Customer>>;
  toggle: boolean;
}

const PAGE_SIZE = 10; // Updated to 10 customers per page

const Navbar: React.FC<NavbarProps> = ({ selectedCustomer, setSelectedCustomer, toggle }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const startIndex = currentPage * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const paginatedCustomers = customers.slice(startIndex, endIndex);

  const handleCustomerChange = useCallback((customer: Customer) => {
    setSelectedCustomer(customer);
  }, [setSelectedCustomer]);

  const handleNextPage = () => {
    if (endIndex < customers.length) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div className={`navbar_main ${toggle ? '' : 'navbar_hidden'}`}>
      {paginatedCustomers.map((customer) => (
        <div
          key={customer.id}
          className={`navbar_element ${selectedCustomer.id === customer.id ? 'navbar_element_active' : ''}`}
          onClick={() => handleCustomerChange(customer)}
        >
          <p className="navbar_customer_title">{customer.name}</p>
          <p className="navbar_customer_desc">{customer.description}</p>
        </div>
      ))}
      <div className="navbar_pagination">
        <button onClick={handlePreviousPage} disabled={currentPage === 0} >Previous</button>
        <button onClick={handleNextPage} disabled={endIndex >= customers.length} >Next</button>
      </div>
    </div>
  );
};

export default memo(Navbar);

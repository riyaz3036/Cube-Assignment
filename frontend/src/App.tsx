import React,{useState} from 'react';
import Navbar from './Components/Navbar/Navbar'
import CustomerDetails from './Components/CustomerDetails/CustomerDetails'
import Header from './Components/Header/Header'
import customers from './assets/data/data'

interface Customer{
  id: string;
  name: string;
  description: string;
  address: string;
}

function App() {

  //state to store selected customer and handle navbar toggle
  const [selectedCustomer, setSelectedCustomer] = useState<Customer>(customers[0]);
  const [toggle,setToggle] = useState<boolean>(false);

  
  return (
    <div className="main">

      {/* Header */}
      <Header toggle={toggle} setToggle={setToggle}/>

      {/* Navbar  */}
      <Navbar selectedCustomer={selectedCustomer} setSelectedCustomer={setSelectedCustomer} toggle={toggle} />
      
      {/* Details of the selected customer */}
      <CustomerDetails selectedCustomer={selectedCustomer} />

    </div>
  );
}

export default App;

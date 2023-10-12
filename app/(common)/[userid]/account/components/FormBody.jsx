'use cleint'
import { AppContext } from '@/context/AppContext';
import React, { useContext } from 'react'
import Input from './Input';
import { faBuilding, faEnvelope, faFlag, faUser } from '@fortawesome/free-regular-svg-icons';
import { faCity, faEarth, faMapPin, faPhone } from '@fortawesome/free-solid-svg-icons';
import TextArea from './TextArea';
const FormBody = ({title,step,userid , type}) => {
const {accdata,setAccData}=useContext(AppContext);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name.includes('.')) {
          const [firstLevel, secondLevel] = name.split('.');
          setAccData((prevState) => ({
            ...prevState,
            [firstLevel]: {
              ...prevState[firstLevel],
              [secondLevel]: value,
            },
          }));
        } else {
          setAccData((prevState) => ({
            ...prevState,
            [name]: value,
          }));
        }  
      };
       
  return (
    <>
    <p className="text-base font-medium text-slate-700 dark:text-navy-100">
                {title}
              </p>
              <div className="mt-4 space-y-4">
          
                    <Input
                type="text"
                title="Name"                
                placeholder="Enter Name"
                name="name"
                value={accdata.name}
                onChange={handleInputChange}
                icon={faUser}
              />
                  
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Input
                type="email"
                title="Email"                
                placeholder="Enter email"
                name="email"
                value={accdata.email}
                onChange={handleInputChange}
                icon={faEnvelope}
              />
                    <Input
                type="number"
                title="Phone number"                
                placeholder="Enter number"
                name="phone"
                value={accdata.phone}
                onChange={handleInputChange}
                icon={faPhone}              
              />
                <Input
                type="text"
                title="Aadhar"                
                placeholder="Enter Aadhar number"
                name="aadhar"
                value={accdata.aadhar}
                onChange={handleInputChange}
                icon={faBuilding}
              />
                    <Input
                type="text"
                title="PAN number"                
                placeholder="Enter Pan number"
                name="pan"
                value={accdata.pan}
                onChange={handleInputChange}
                icon={faBuilding}              
              />
                </div>
               <TextArea  
               type="text"
                title="Address"                
                placeholder="Your Address (Area and Street)"
                name="address.street"
                value={accdata.address?.street}
                onChange={handleInputChange}
                icon={faBuilding} />
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Input
                type="text"
                title="City"                
                placeholder="Enter city name"
                name="address.district"
                value={accdata.address?.district}
                onChange={handleInputChange}
                icon={faCity}              
              />
                <Input
                type="text"
                title="State"                
                placeholder="Enter state name"
                name="address.state"
                value={accdata.address?.state}
                onChange={handleInputChange}
                icon={faFlag}              
              />
                <Input
                type="text"
                title="Country"                
                placeholder="Enter country name"
                name="address.country"
                value={accdata.address?.country}
                onChange={handleInputChange}
                icon={faEarth}              
              />
                <Input
                type="text"
                title="pin"                
                placeholder="Enter pin code"
                name="address.pin"
                value={accdata.address?.pin}
                onChange={handleInputChange}
                icon={faMapPin}              
              />
                  
                </div>
                </div>
    </>
  )
}

export default FormBody
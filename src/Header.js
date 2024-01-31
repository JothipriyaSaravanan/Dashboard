import React, { useState } from 'react';
function Header({onSectorChange}) {

  const [selectedValue, setSelectedValue] = useState(0);

  const handleDropdownChange = (event) => {
    const selectedSector = event.target.value;
    setSelectedValue(selectedSector);
    onSectorChange(selectedSector);
  };
  return(
    
          <header className='header'>
         
          <div className='header-left'>
          <select className='select-dropdown' onChange={handleDropdownChange} value={selectedValue}>
          <option value={0}>Select Item</option>
          <option value='Automotive'>Automotive</option>
          <option value='Construction'>Construction</option>
          <option value='Education'>Education</option>
          <option value='Energy'>Energy</option>
          <option value='Environment'>Environment</option>
          <option value='Healthcare'>Healthcare</option>
          <option value='Financial services'>Financial services</option>
          <option value='Government'>Government</option>
          <option value='Information Technology'>Information Technology</option>
          <option value='Manufacturing'>Manufacturing</option>
          <option value='Mining'>Mining</option>
          <option value='Pharmaceuticals'>Pharmaceuticals</option>
          <option value='Retail'>Retail</option>
          <option value='Science'>Science</option>
          <option value='Security'>Security</option>
          <option value='Support services'>Support services</option>
          <option value='Telecoms'>Telecoms</option>
          <option value='Transport'>Transport</option>
          <option value='Water'>Water</option>
          </select>
          </div>
      </header>
  );
}

export default Header;

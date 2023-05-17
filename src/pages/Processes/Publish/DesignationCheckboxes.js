import React, { useState } from 'react';
import { Label, Input } from 'reactstrap';

function DesignationCheckboxes(props) {
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);

  function handleCheckboxChange(event) {
    const checkboxValue = event.target.value;
    const checked = event.target.checked;

    if (checked) {
      setSelectedCheckboxes(prevSelected => [...prevSelected, checkboxValue]);
    } else {
      setSelectedCheckboxes(prevSelected =>
        prevSelected.filter(value => value !== checkboxValue)
      );
    }
  }

  function handleCrossClick(checkboxValue) {
    setSelectedCheckboxes(prevSelected =>
      prevSelected.filter(value => value !== checkboxValue)
    );
  }

  const labelfontsize = {
    fontSize: '1.1em',
    paddingLeft: '10px',
  };

  return (
    <div>
      <div className="d-flex">
        <Label style={{ fontSize: '1.1em' }}>
          <Input
            type="checkbox"
            value="Senior Developer"
            checked={selectedCheckboxes.includes('Senior Developer')}
            onChange={handleCheckboxChange}
          />
          Senior Developer
        </Label>
        <br />
        <Label style={labelfontsize}>
          <Input
            type="checkbox"
            value="Junior Developer"
            checked={selectedCheckboxes.includes('Junior Developer')}
            onChange={handleCheckboxChange}
          />
          Junior Developer
        </Label>
        <br />
        <Label style={labelfontsize}>
          <Input
            type="checkbox"
            value="Intern Developer"
            checked={selectedCheckboxes.includes('Intern Developer')}
            onChange={handleCheckboxChange}
          />
          Intern Developer
        </Label>
        <br />
      </div>
      {selectedCheckboxes.length > 0 && (
        <div className="mb-4 mt-3">
          {selectedCheckboxes.map(value => (
            <span
              key={value}
              className="bg-primary text-white me-2"
              style={{ padding: '10px', borderRadius: '8px', marginRight: '4px' }}
            >
              {value}
              <span
                style={{ cursor: 'pointer', marginLeft: '4px' }}
                onClick={() => handleCrossClick(value)}
              >
                <i className="ti-close" style={{ fontSize: '0.8em', fontWeight: 'bold' }}></i>
              </span>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default DesignationCheckboxes;

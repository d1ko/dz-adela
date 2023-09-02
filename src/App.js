import React from 'react';
import './App.css';

const PrototypeForm = {
  key1: 'Barbara',
  key2: 'Hepworth',
  key3: 'bhepworth@react.com',
  key4: 'love cats',
};

export const App = () => {
  return (
    <div className="form-container">
      <form>
        <div className="form-group">
          <label htmlFor="key1">First Name</label>
          <input type="text" id="key1" value={PrototypeForm.key1} readOnly />
          <p className="form-data">{PrototypeForm.key1}</p>
        </div>

        <div className="form-group">
          <label htmlFor="key2">Last Name</label>
          <input type="text" id="key2" value={PrototypeForm.key2} readOnly />
          <p className="form-data">{PrototypeForm.key2}</p>
        </div>

        <div className="form-group">
          <label htmlFor="key3">Email</label>
          <input type="email" id="key3" value={PrototypeForm.key3} readOnly />
          <p className="form-data">{PrototypeForm.key3}</p>
        </div>

        <div className="form-group">
          <label htmlFor="key4">Hobbies</label>
          <input type="text" id="key4" value={PrototypeForm.key4} readOnly />
          <p className="form-data">{PrototypeForm.key4}</p>
        </div>
      </form>
    </div>
  );
};


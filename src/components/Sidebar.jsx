import React from 'react';

const Sidebar = () => {
  const items = [
    { category: 'Today', entries: ['Hackathon Website Ideas', 'Screen Recording Laptop Guide', 'SignUp Form Debugging'] },
    { category: 'Yesterday', entries: ['Contributing to Open Source', 'Proposal Enhancement for Tourism'] },
  ];

  return (
    <div style={{ width: '250px', padding: '20px', borderRight: '1px solid #ddd', height: '100vh', overflowY: 'auto' }}>
      <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>Sidebar</h3>
      {items.map((section, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <h4 style={{ color: '#555', marginBottom: '10px' }}>{section.category}</h4>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {section.entries.map((entry, idx) => (
              <li key={idx} style={{ marginBottom: '8px', cursor: 'pointer', color: '#4285f4' }}>
                {entry}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
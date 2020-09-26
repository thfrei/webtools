/**
 *
 * QRCodeGenerator
 *
 */

import React, { useState } from 'react';
// import PropTypes from 'prop-types';

import QRCode from 'qrcode.react';
import DropdownList from 'react-widgets/lib/DropdownList';

function QRCodeGenerator() {
  const [url, setUrl] = useState('http://');
  const [level, setLevel] = useState('Q');

  return (
    <div>
      <h3>QrCode</h3>
      <input
        type="text"
        value={url}
        onChange={(e) => {
          setUrl(e.target.value);
        }}
        style={{ width: '100%' }}
      />
      <DropdownList
        style={{ backgroundColor: 'transparent' }}
        data={[
          // source: https://en.wikipedia.org/wiki/QR_code#Error_correction
          { id: 'L', name: 'Level L (Low) 7% can be restored.' },
          { id: 'M', name: 'Level M (Medium) 15% can be restored.' },
          { id: 'Q', name: 'Level Q (Quartile)	25% can be restored.' },
          { id: 'H', name: 'Level H (High) 30% can be restored.' },
        ]}
        valueField="id"
        textField="name"
        defaultValue="Q"
        placeholder="Select a Error Correction Level"
        onChange={(dataItem, metaData) => {
          console.log('ddl', dataItem, metaData);
          setLevel(dataItem.id);
        }}
      />
      <br />
      <div>
        <QRCode value={url} size={256} level={level} />
        <div>{url}</div>
      </div>
    </div>
  );
}

const URLTitle = `
  color: lightslategrey;
  font-family: Arial;
  font-size: 12px;
  width: auto;
  text-align: center;
`;

QRCodeGenerator.propTypes = {};

export { QRCodeGenerator };

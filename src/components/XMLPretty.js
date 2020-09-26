/**
 *
 * XMLPretty
 *
 */

import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import beautify from 'xml-beautifier';
import { trim } from 'lodash';

function XMLPretty() {
  const [text, setText] = useState(
    `<?xml version="1.0"?><ZMIILOI1><IDOC BEGIN="1"><EDI_DC40 SEGMENT="1"><TABNAM>EDI_DC40</TABNAM><MANDT>480</MANDT></EDI_DC40></IDOC></ZMIILOI1>`,
  );

  return (
    <div>
      <h3>XML Formatter</h3>
      XML Text:
      <textarea
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        style={{ width: '100%', height: '50px', border: '3px double' }}
      />
      <br />
      Formatted - XML:
      <textarea
        type="text"
        value={beautify(trim(text))}
        readOnly
        style={{ width: '100%', height: '200px', border: '1px solid black' }}
      />
    </div>
  );
}

XMLPretty.propTypes = {};

export { XMLPretty };

/**
 *
 * MarkdownImageLinkConverter
 *
 */

import React, { useState } from 'react';
// import PropTypes from 'prop-types';

function MarkdownImageLinkConverter() {
  const [text, setText] = useState(`# only change images
no change in text
* ![image](/upd/im.jpg)
`);
  const [width, setWidth] = useState(300);

  return (
    <div>
      <h3>Markdown Image to HTML Converter</h3>
      Markdown Text:
      <textarea
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        rows={3}
      />
      Default Width:
      <input
        type="text"
        value={width}
        onChange={(e) => {
          setWidth(e.target.value);
        }}
      />
      <br />
      Markdown - HTML:
      <textarea
        type="text"
        value={convertMarkdownImageLink(text, width)}
        readOnly
        rows={5}
      />
    </div>
  );
}

/**
 * Converts markdown image to html
 * e.g.
 *  ![image](/uploads/4e23b5f7b21f41216165df8d2c9193f5/image.png)
 *  becomes
 *  <img src="/uploads/4e23b5f7b21f41216165df8d2c9193f5/image.png" title="image" width="300" />
 * @param text
 * @returns {string}
 */
function convertMarkdownImageLink(text = '', width = 300) {
  const regex = /!\[(.*)\]\((.*)\)/gm;
  return text.replace(regex, `<img src="$2" title="$1" width="${width}" />`);
}

MarkdownImageLinkConverter.propTypes = {};

export { MarkdownImageLinkConverter };

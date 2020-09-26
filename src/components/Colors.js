/**
 *
 * Colors
 *
 */

import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { CompactPicker, SketchPicker, SliderPicker } from 'react-color';

function Colors() {
  const [color, setColor] = useState('#ffffff');

  return (
    <div>
      <h3>Colors</h3>
      <SliderPicker color={color} onChangeComplete={(c) => setColor(c)} />
      <SketchPicker color={color} onChangeComplete={(c) => setColor(c)} />
      <CompactPicker color={color} onChangeComplete={(c) => setColor(c)} />
    </div>
  );
}

Colors.propTypes = {};

export { Colors };

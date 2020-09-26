/**
 *
 * OPCUANodeIdConverter
 *
 */

import React, { useState } from 'react';
// import PropTypes from 'prop-types';

function OPCUANodeIdConverter() {
  const [nodeId, setNodeId] = useState('NS2|String|identifierString');

  return (
    <div>
      <h3>NodeID Converter</h3>
      UAExpert String:
      <input
        type="text"
        value={nodeId}
        onChange={(e) => {
          setNodeId(e.target.value);
        }}
      />
      <br />
      Node-OPCUA:
      <input type="text" value={detectAndParseNodeId(nodeId)} readOnly />
    </div>
  );
}

/**
 * detects uaexert node format
 *
 * node-opcua: `ns=3;s="FunctionData"."CIP"."aRuntime"`
 * uaexpert: `NS3|String|"FunctionData"."CIP"."aRuntime"`
 * @param nodeId
 */
function detectAndParseNodeId(nodeId) {
  return nodeId
    ? nodeId.replace(/^NS([0-9])\|/gm, 'ns=$1;').replace('String|', 's=')
    : nodeId;
}

OPCUANodeIdConverter.propTypes = {};

export { OPCUANodeIdConverter };

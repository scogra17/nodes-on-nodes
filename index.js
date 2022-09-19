/* eslint-disable no-await-in-loop */
const { apiClient } = require('./services/ApiClient');
const { JsonToEntityNodes } = require('./mappers/nodes');

async function getNodesData(firstNodeId) {
  const encounteredNodeIds = {};
  let nodeIdQueue = [firstNodeId];

  while (nodeIdQueue.length > 0) {
    const nodeId = nodeIdQueue.shift();
    if (nodeId in encounteredNodeIds) {
      // we've already seen this node, we don't need to make another get request
      encounteredNodeIds[nodeId] += 1;
    } else {
      encounteredNodeIds[nodeId] = 1;
      const data = await apiClient.getNodes([nodeId]);
      const nodes = JsonToEntityNodes(data);
      nodeIdQueue = [...nodeIdQueue, ...nodes.getAllChildNodeIds()];
    }
  }
  console.log('encounteredNodeIds: ', encounteredNodeIds);
  return encounteredNodeIds;
}

getNodesData('089ef556-dfff-4ff2-9733-654645be56fe');

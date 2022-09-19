/* eslint-disable no-await-in-loop */
const { apiClient } = require('./services/ApiClient');
const { JsonToEntityNodes } = require('./mappers/nodes');

async function getNodesData(firstNodeId) {
  const encounteredNodeIds = {};
  let nodeIdQueue = [firstNodeId];

  while (nodeIdQueue.length > 0) {
    const nodeId = nodeIdQueue.shift();
    console.log(`visiting node: ${nodeId}`);
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
  return encounteredNodeIds;
}

function summariseNodesData(nodesData) {
  const summary = {
    countOfUniqueNodes: 0,
    mostReferencedNode: {
      id: '',
      references: 0,
    },
  };

  Object.keys(nodesData).forEach((nodeId) => {
    summary.countOfUniqueNodes += 1;
    const referenceCount = nodesData[nodeId];
    if (referenceCount > summary.mostReferencedNode.references) {
      summary.mostReferencedNode.id = nodeId;
      summary.mostReferencedNode.references = referenceCount;
    }
  });

  console.log(`There are ${summary.countOfUniqueNodes} unique nodes.`);
  console.log(`Node ${summary.mostReferencedNode.id} is shared the most amongs all other nodes.`);
  return summary;
}

async function getNodesSummary() {
  const nodesData = await getNodesData('089ef556-dfff-4ff2-9733-654645be56fe');
  summariseNodesData(nodesData);
}

getNodesSummary();

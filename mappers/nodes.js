const Node = require('../entities/Node');
const Nodes = require('../entities/Nodes');

const jsonToEntityNode = (jsonNode) => {
  const node = new Node({ id: jsonNode.id, childNodeIds: jsonNode.child_node_ids });
  return node;
};

const JsonToEntityNodes = (jsonNodes) => {
  const nodes = jsonNodes.map((node) => jsonToEntityNode(node));
  return new Nodes(nodes);
};

module.exports = {
  JsonToEntityNodes,
};

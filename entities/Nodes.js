class Nodes {
  constructor(nodesArr) {
    this.nodes = nodesArr;
  }

  getAllChildNodeIds() {
    let childNodeIds = [];
    this.nodes.forEach((node) => {
      childNodeIds = [...childNodeIds, ...node.childNodeIds];
    });
    return childNodeIds;
  }
}

module.exports = Nodes;

# Problem 
Using `https://nodes-on-nodes-challenge.herokuapp.com/nodes/$NODE_UUID`, which returns a "node" of the shape: 
- `id` - a UUID unique to the node
- `child_node_ids` - an array of other node IDs

Determine, starting with node `089ef556-dfff-4ff2-9733-654645be56fe`

1) The total number of unique IDs
2) Which node ID is shared the most among all other nodes

# Scaffolding
* Use axios to make GET requests 
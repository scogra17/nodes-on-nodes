# Problem 
Using `https://nodes-on-nodes-challenge.herokuapp.com/nodes/$NODE_UUID`, which returns a "node" of the shape: 
- `id` - a UUID unique to the node
- `child_node_ids` - an array of other node IDs

determine, starting with node `089ef556-dfff-4ff2-9733-654645be56fe`:
1) The total number of unique IDs
2) Which node ID is shared the most among all other nodes 

# Approach 
* BFS-like 

# Algorithm 
* declare `encounteredNodeIds` and initialize to empty hash 
* declare `nodeIdQueue` and initialize to first ID
* loop over `nodeIdQueue` until it is empty
  * dequeue and check if `id` is already in `encounteredNodeIds`
    * if it is: increment its reference count in the value 
    * if it is not: 
      * add it to `encounteredNodeIds`
      * make request to determine it's children nodes and equeue them in `nodeIdQueue`
* return the length of `encounteredNodeIds` and the max value 

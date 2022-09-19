const { apiClient } = require('./services/ApiClient');

async function getNodesData() {
  const data = await apiClient.getNodes(['089ef556-dfff-4ff2-9733-654645be56fe']);
  console.log(data);
}

getNodesData();

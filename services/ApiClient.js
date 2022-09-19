const axios = require('axios');

const URL = 'https://nodes-on-nodes-challenge.herokuapp.com/nodes/';

const apiClient = {
  getNodes: async (ids) => {
    try {
      const formattedIds = ids.join(',');
      const { data } = await axios.get(`${URL}/${formattedIds}`);
      return data;
    } catch (e) {
      console.log(e);
    }
  },
};

module.exports = { apiClient };

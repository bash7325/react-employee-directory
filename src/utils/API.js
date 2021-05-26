/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

// Random User API

export default {
  search: function() {
    return axios.get("https://randomuser.me/api/?results=20&nat=us'");
  }
};
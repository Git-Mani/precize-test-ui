import axios from 'axios';
const API_URL = 'http://localhost:8080/test/api/users/';
export async function post(
    url,
    data,
    config = {
        headers: {
            "Content-Type": "application/json;charset=UTF-8",
        },
    }
) {
    try {
        const response = await axios.post(API_URL + url, data, config);

        if (response.status >= 200 && response.status <= 299) {
            return response.data;
        } else {
            throw response.data;
        }
    } catch (error) {
        throw error.response;
    }
}

export async function get(url, config = {}) {
    try {
        const response = await axios.get(API_URL + url, config);

        if (response.status >= 200 && response.status <= 299) {
            return response.data;
        } else {
            throw response.data;
        }
    } catch (error) {
        console.log(error);
        throw error.response;
    }
}
export const putReq = async (url, data, config = {}) => {
    try {
        const response = await axios.put(API_URL + url, data, config);
        if (response.status >= 200 && response.status <= 299) {
            return response.data;
        } else {
            throw response.data;
        }
    } catch (error) {
        throw error.response.data;
    }
};
export const del = async (url, config = {}) => {
    try {
      const response = await axios.delete(API_URL + url, config);
      if (response.status >= 200 && response.status <= 299) {
        return response.data;
      } else {
        throw response.data;
      }
    } catch (error) {
      throw error.response.data;
    }
  };
import axios from "axios";

// configuratiion of api options
const baseURL = "https://bdv-backend.staging.applab.do/api";
const api = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*"
  }
});

const forms = {
  submitForm: async ({ token, tokenType, body }) => {
    return await api.post("/clients", body, {
      headers: { authorization: `${tokenType} ${token}` }
    });
  }
};

export const services = {
  forms
};

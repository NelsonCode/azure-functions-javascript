require("dotenv").config();
const axios = require("axios");

module.exports = async function (context, req) {
  try {
    context.log("JavaScript HTTP trigger function processed a request.");

    await axios.post(process.env.URL_DISCORD, {
      content: "Hello Azure",
    });
    context.res = {
      body: {
        message: "success",
      },
    };
  } catch (error) {
    context.res = {
      body: {
        message: error.message,
        status: 500,
      },
    };
  }
};


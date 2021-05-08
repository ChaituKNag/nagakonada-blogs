const FormData = require("form-data");
const fetch = require("isomorphic-fetch");

exports.handler = async (event, context) => {
  if (event.httpMethod === "POST") {
    const { firstName, email } = JSON.parse(event.body);

    // const myHeaders = new Headers();
    // myHeaders.append("Authorization", `Bearer ${process.env.REVUE_API_TOKEN}`);

    const formdata = new FormData();
    formdata.append("email", email);
    formdata.append("first_name", firstName);

    const resp = await fetch("https://www.getrevue.co/api/v2/subscribers", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.REVUE_API_TOKEN}`
      },
      body: formdata
    });

    const data = await resp.json();
    return {
      statusCode: 200,
      data: JSON.stringify(data)
    };
  }

  return {
    statusCode: 404
  };
};

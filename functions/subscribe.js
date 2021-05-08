exports.handler = (event, context) => {
  console.log("env variable", process.env.REVUE_API_TOKEN);
  if (event.httpMethod === "POST") {
    console.log("received", event.body);
    return {
      statusCode: 200
    };
  }
};

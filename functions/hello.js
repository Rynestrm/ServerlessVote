const positonArray = [0, 0];

exports.handler = async (event) => {
  const lat = event.queryStringParameters.lat;
  const lng = event.queryStringParameters.lng;
  positonArray[0] = lat;
  console.log(lat);
//   if (lat) {
//   } else if {

//   }
  console.log(JSON.stringify(positonArray));

  return {
    statusCode: 200,
    headers: { 'Access-Control-Allow-Origin': '*' },
    body: JSON.stringify(positonArray),
  };
};

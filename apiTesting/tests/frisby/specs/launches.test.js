const UserToken = require("../lib/userToken.js");
const LaunchesAPI = require("../model/launchesModel.js");

const userToken = new UserToken();
const launchesAPI = new LaunchesAPI();
let accessToken;
let tokenType;
let launchId;
const invalidToken = '';


test('Store the access token', async () => {
  const getToken = await userToken.getToken();
  accessToken = getToken.access_token;
  tokenType = getToken.token_type;
});

test('It should be possible to create, GET, update and delete launches', async () => {
  await launchesAPI.startProjectLaucnh(accessToken, tokenType)
  .expect('status', 201)
});

test('Launche shouldn\'t be created with invalid token', async () => {
    await launchesAPI.startProjectLaucnh(invalidToken, tokenType)
    .expect('status', 401);
});

test('It should be possible to GET laucnh by name with valid token', async () => {
  const getlauanch = await launchesAPI.getProjLaucnhByName(accessToken, tokenType)
  .expect('status', 200)
  .then((res) => {
    let response = res.json
    return response
  });
  launchId = getlauanch.content[0].id;
});
test('It shouldn\'t be possible to GET laucnh by name with invalid token', async () => {
  await launchesAPI.getProjLaucnhByName(invalidToken, tokenType)
  .expect('status', 401);
});
test('It should be possible to force finish the launch with valid token', async () => {
  await launchesAPI.forseFinishLaunch(accessToken, tokenType, launchId)
  .expect('status', 200);

});
test('It should not be possible to force finish the launch with invalid token', async () => {
  await launchesAPI.forseFinishLaunch(invalidToken, tokenType, launchId)
  .expect('status', 401);
});
test('It should be possible to delete laucnhe with valid token', async () => {
  await launchesAPI.deleteLaunche(accessToken, tokenType, launchId)
  .expect('status', 200);
}); 
test('It should not be possible to delete laucnhe with invalid token', async () => {
  await launchesAPI.deleteLaunche(invalidToken, tokenType, launchId)
  .expect('status', 401);
});    

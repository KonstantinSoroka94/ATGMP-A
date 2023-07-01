import UserToken from "../lib/userToken.mjs";
import LaunchesAPI from "../model/launchesModel.mjs";
import { expect } from "chai";

const {accessToken, tokenType, ...rest} = await UserToken.getToken();
const invalidToken = '';
let launchId;
describe('It should be possible to create, GET, update and delete launches', async () => {
  it('Launche should be created with valid token', async () => {
    const { status, data } = await LaunchesAPI.startProjectLaucnh(accessToken, tokenType);
    expect(status).to.eq(201);
    expect(data.id).to.exist;
  });
  it('Launche shouldn\'t be created with invalid token', async () => {
    const { status } = await LaunchesAPI.startProjectLaucnh(invalidToken, tokenType);
    expect(status).to.eq(401);
  });
  it('It should be possible to GET laucnh by name with valid token', async () => {
    const { status, data } = await LaunchesAPI.getProjLaucnhByName(accessToken, tokenType)
    expect(status).to.eq(200);
    launchId = data.content[0].id;
  });
  it('It shouldn\'t be possible to GET laucnh by name with invalid token', async () => {
    const { status } = await LaunchesAPI.getProjLaucnhByName(invalidToken, tokenType)
    expect(status).to.eq(401);
  });
  it('It should be possible to force finish the launch with valid token', async () => {
    const { status, data } = await LaunchesAPI.forseFinishLaunch(accessToken, tokenType, launchId);
    expect(status).to.eq(200);
    expect(data[0].message).to.exist;
  });
  it('It should not be possible to force finish the launch with invalid token', async () => {
    const { status } = await LaunchesAPI.forseFinishLaunch(invalidToken, tokenType, launchId);
    expect(status).to.eq(401);
  });
  it('It should be possible to delete laucnhe with valid token', async () => {
    const { status } = await LaunchesAPI.deleteLaunche(accessToken, tokenType, launchId);
    expect(status).to.eq(200)
  }); 
  it('It should not be possible to delete laucnhe with invalid token', async () => {
    const { status } = await LaunchesAPI.deleteLaunche(invalidToken, tokenType, launchId);
    expect(status).to.eq(401)
  });    
})
import AppConfig from "../config/AppConfig.mjs";
import axios from "axios";


class LaunchesAPI {
  
  static async startProjectLaucnh(accessToken, tokenType) {
    try {
      return await axios.post(
        `${AppConfig.baseUrl}/api/v1/automatedtestingglobalmentoringprogram/launch`,
        {
          'attributes': [
            {
              'key': 'string1',
              'system': true,
              'value': 'string2'
            }
          ],
          'description': 'string3',
          'mode': 'DEFAULT',
          'name': 'string4',
          'rerun': false,
          'rerunOf': 'string5',
          'startTime': '2023-06-18T11:08:23.081Z'
        },
        {
          headers: {
            'accept': '*/*',
            'Content-Type': 'application/json',
            'Authorization': `${tokenType} ${accessToken}`,
          }
        }
      );
    } catch(e) {
      return e.response;
    }
  };

  static async getProjLaucnhByName(accessToken, tokenType) {
    try {
      return await axios.get(`${AppConfig.baseUrl}/api/v1/automatedtestingglobalmentoringprogram/launch`, {
        params: {
        'filter.eq.name': 'string4'
        },
        headers: {
          'accept': '*/*',
          'Authorization': `${tokenType} ${accessToken}`,
        }
      });
    } catch (e) {
      return e.response
    }
  };

  static async forseFinishLaunch(accessToken, tokenType, launchID) {
    try {
      return await axios.put(
        `${AppConfig.baseUrl}/api/v1/automatedtestingglobalmentoringprogram/launch/stop`,
        {
          'entities': {
            [launchID]: {
              'endTime': Date.now(),
              'status': 'STOPPED'
            }
          }
        },
        {
          headers: {
            'Accept-Language': 'en-US,en;q=0.9',
            'Authorization': `${tokenType} ${accessToken}`,
            'Connection': 'keep-alive',
            'Cookie': '_ga=GA1.1.1794721716.1680612463; _gid=GA1.1.992426003.1687185688; _gat=1',
            'Origin': AppConfig.baseUrl,
            'Referer': `${AppConfig.baseUrl}/ui/`,
            'Sec-Fetch-Dest': 'empty',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Site': 'same-origin',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"'
          }
        }
      );
    } catch(e) {
      return e.response
    }
  };

  static async deleteLaunche(accessToken, tokenType, launchID) {
    try{
      return await axios.delete(`${AppConfig.baseUrl}/api/v1/automatedtestingglobalmentoringprogram/launch/${launchID}`, {
        headers: {
          'accept': '*/*',
          'Authorization': `${tokenType} ${accessToken}`,
        }
      })
    } catch(e) {
      return e.response
    }
  }
}

export default LaunchesAPI;
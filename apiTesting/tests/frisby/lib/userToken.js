const frisby = require("frisby");
const AppConfig = require("../config/AppConfig.cjs");

class UserToken {

  getToken() {
    return frisby
      .fetch(`${AppConfig.baseUrl}/uat/sso/oauth/token`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Accept-Language': 'en-US,en;q=0.9',
          'Authorization': 'Basic dWk6dWltYW4=',
          'Connection': 'keep-alive',
          'Content-Type': 'application/x-www-form-urlencoded',
          'Cookie': '_ga=GA1.1.1794721716.1680612463; _gid=GA1.1.1062170341.1687368364; _gat=1',
          'Origin': AppConfig.baseUrl,
          'Referer': `${AppConfig.baseUrl}/ui/`,
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-origin',
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
        body: `grant_type=${AppConfig.grant_type}&username=${AppConfig.username}&password=${AppConfig.password}`,
        compress: true,
      })
      .then((res) => {
        let response = res.json
        return response
      });
  }
}

module.exports = UserToken;
import axios from "axios";
import AppConfig from "../config/AppConfig.mjs";

class UserToken {

  static async getToken() {
    let token = {};
    await axios.post(
      `${AppConfig.baseUrl}/uat/sso/oauth/token`,
      new URLSearchParams({
        'grant_type': AppConfig.grant_type,
        'username': AppConfig.username,
        'password': AppConfig.password
      }),
      {
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Accept-Language': 'en-US,en;q=0.9',
          'Authorization': 'Basic dWk6dWltYW4=',
          'Connection': 'keep-alive',
          'Cookie': '_ga=GA1.1.1794721716.1680612463; _gid=GA1.1.1988011199.1686670784',
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
    )
    .then((res) => {
      token.accessToken = res.data.access_token;
      token.tokenType = res.data.token_type;
      token.refreshToken = res.data.refresh_token;
    });
    return token;
  }
}

export default UserToken;
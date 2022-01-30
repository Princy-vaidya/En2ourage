import NetInfo from "@react-native-community/netinfo";
import axios from 'axios';
import Toast from 'react-native-root-toast';
import AppStrings from '../utils/AppStrings'


export default Network = (url, method, body, token) => {
  console.log('url in Config',url)
  console.log('url in Config',method)
  console.log('url in Config',body)
  console.log('url in Config',token)

  return new Promise((resolve, reject) => {
    NetInfo.fetch().then(state => {
      if(state.isConnected) {
        axios({
          method,
          url:url,
          headers: {
           'Content-Type': 'application/json',
           'x-access-token': token
          },
          data: body
        })
        .then(function (response) {
          console.log("RESPONSE: ", response)
          resolve(response.data)
        })
        .catch(function (error) {
          console.log('net error',error);
          Toast.show(error.response.data.response_message)
          reject(error)
        });
      } else {
        reject('No connection')
        Toast.show(AppStrings.INTERNET_ERROR, {
          duration: Toast.durations.LONG,
          position: Toast.positions.BOTTOM
        })
      }
    });
  })

}
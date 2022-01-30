import {ApiConfig} from "../../ApiConfig";
import Network from "../../ApiNetwork";

const userLogin = async (values) => {
    
    const data = {
        email:values.email,
        password:value.password
      };
  
      console.log("data---->", data);
      console.log("url---->", ApiConfig.LOGIN);
  
      Network(ApiConfig.FORGOT_PASSWORD, "post", data)
        .then(async (res) => {
          setLoading(false);
         if(res.response_code===200){
        
         }
        })
        .catch((error) => {
          setLoading(false);
          // Toast.show(error.response.data.response_message)
        });
   
}

export default userLogin
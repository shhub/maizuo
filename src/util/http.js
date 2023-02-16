import axios from "axios";
const http='https://m.maizuo.com'


async function Http(url){
   return axios.get(http+url, {
        headers: {
          'X-Client-Info': ' {"a":"3000","ch":"1002","v":"5.2.0","e":"1639130276910043440480257"}',
          'X-Host': 'mall.film-ticket.film.info'
        }
      })
}
export default Http
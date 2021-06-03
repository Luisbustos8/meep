   const BASE_URL = 'https://apidev.meep.me/tripplan/api/v1/routers/lisboa/resources';
const apiCall = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    },
    cors: 'Access-Control-Allow-Origin : *', 
    params: '?lowerLeftLatLon=38.711046,-9.160096&upperRightLatLon=38.739429,- 9.137115&companyZoneIds=473'
}
  
   export const getData = async () => {
    let url= `${BASE_URL}?lowerLeftLatLon=38.711046,-9.160096&upperRightLatLon=38.739429,-9.137115&companyZoneId=473`
    const data = await fetch(url ,{
        method: apiCall.method, 
        headers: apiCall.headers,
    })
    const response = await data.json();
    console.log('response', response)
};
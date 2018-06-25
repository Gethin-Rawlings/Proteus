const url ='http://ec2-52-56-248-133.eu-west-2.compute.amazonaws.com:5000/';
const urlForNetwork = url+'organisations?type=network';
const urlForindie = url+'organisations?type=indie';
const urlForproduction = url+'organisations?type=production';
const urlForLogin = url+'login';

//Fetch for organsation drop downs returns all networks from organisations table
  export const getNetwork = async () => {
    const response = await fetch(urlForNetwork) 
    if(response.status >= 400) {
        throw(new Error('Network request failed'))
      } else {
        return await response.json()
      }
    }
//Fetch for organsation drop downs returns all production departments from organisations table
    export const getProduction = async () => {
        const response = await fetch(urlForproduction) 
        if(response.status >= 400) {
            throw(new Error('Network request failed'))
          } else {
            return await response.json()
          }
        }
//Fetch for organsation drop downs returns all Indies from organisations table
    export const getIndie = async () => {
    const response = await fetch(urlForindie) 
    if(response.status >= 400) {
        throw(new Error('Network request failed'))
      } else {
        return await response.json()
      }
    }
//Fetch to handle login submit
    export const login = async (data) => {
        const response = await fetch(urlForLogin, { 
            method: 'POST', 
            body: data
          }) 
        if(response.status >= 400) {
            throw(new Error('Network request failed'))
          } else {
            return await response
          }
        }
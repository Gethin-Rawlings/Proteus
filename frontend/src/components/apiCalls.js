//const url ='http://ec2-52-56-248-133.eu-west-2.compute.amazonaws.com:5000/';
const url ='http://localhost:5000/';
const urlForNetwork = url+'organisations?type=network';
const urlForindie = url+'organisations?type=indie';
const urlForproduction = url+'organisations?type=production';
const urlForLogin = url+'login';
const urlForUpdateUsers = url+'updateusers'  ;

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
    export const login = async (submit) => {
        const response = await fetch(urlForLogin, { 
            method: 'POST', 
            body: submit
          }).then(response => response.json().then(data => {
            if(response.status >= 400) {
              sessionStorage.setItem('loggedIn','failed');
              throw(new Error('Network request failed'))
            };
            if (data.success === true){
              sessionStorage.setItem('token',data.token);
              sessionStorage.setItem('loggedIn',data.success);
              sessionStorage.setItem('supplier',data.supplier)
              sessionStorage.setItem('network',data.network)
              sessionStorage.setItem('admin',data.admin)
              sessionStorage.setItem('finance',data.finance)
              sessionStorage.setItem('commission',data.commission)
                };
          } ))
          return await response.json()
        }

        export const updateUsers = async (submit) => {
          const response = await fetch(urlForUpdateUsers, { 
              method: 'POST', 
              body: submit
            }).then(response => response.json().then(data => {
              if(response.status >= 400) {
                throw(new Error('Network request failed'))
              };
            } ))
            return await response.json()
          }
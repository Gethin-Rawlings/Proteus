//const url ='http://ec2-52-56-248-133.eu-west-2.compute.amazonaws.com:5000/';
const url = 'http://localhost:5000/';
const urlForNetwork = url + 'organisations?type=network';
const urlForindie = url + 'organisations?type=indie';
const urlForproduction = url + 'organisations?type=production';
const urlForLogin = url + 'login';
const urlForUpdateUsers = url + 'updateusers';
const urlForprogrammeSearch = url + 'programmesearch';
const urlForUserSearch = url + 'useradmin';

//Fetch for organsation drop downs returns all networks from organisations table
export const getNetwork = async() => {
  const response = await fetch(urlForNetwork)
  if (response.status >= 400) {
    throw(new Error('Network request failed'))
  } else {
    return await response.json()
  }
}
// Fetch for organsation drop downs returns all production departments from
// organisations table
export const getProduction = async() => {
  const response = await fetch(urlForproduction)
  if (response.status >= 400) {
    throw(new Error('Network request failed'))
  } else {
    return await response.json()
  }
}
//Fetch for organsation drop downs returns all Indies from organisations table
export const getIndie = async() => {
  const response = await fetch(urlForindie)
  if (response.status >= 400) {
    throw(new Error('Network request failed'))
  } else {
    return await response.json()
  }
}
//Fetch to handle login submit
export const login = async(submit) => {
  const dataform = new FormData(submit)
  const response = await fetch(urlForLogin, {
    method: 'POST',
    body: dataform
  })
  if (response.status >= 400) {
    sessionStorage.setItem('loggedIn', 'failed');
    throw(new Error('Network request failed'))
  };
  if (response.success === true) {
    sessionStorage.setItem('token', response.token);
    sessionStorage.setItem('loggedIn', response.success);
    sessionStorage.setItem('supplier', response.supplier)
    sessionStorage.setItem('network', response.network)
    sessionStorage.setItem('admin', response.admin)
    sessionStorage.setItem('finance', response.finance)
    sessionStorage.setItem('commission', response.commission)
  };
  return await response.json()
}
// Fetch to update user information
export const updateUsers = async(submit) => {
  const response = await fetch(urlForUpdateUsers, {
    method: 'POST',
    body: submit
  })
  if (response.status >= 400) {
    throw(new Error('Network request failed'))
  };
  return await response.json()
}
// fetch to retrive programme data from search screen
export const programmeSearch = async(submit) => {
  const dataform = new FormData(submit)
  const token = sessionStorage.getItem('token');
  const programmeSearchHeader = {
    Authorization: `Bearer ${token}`
  }
  const response = await fetch(urlForprogrammeSearch, {
    method: 'POST',
    headers: programmeSearchHeader,
    body: dataform
  })
  if (response.status >= 400) {
    throw(new Error('Network request failed'))
  };
  return await response.json()
}

// fetch to retrive programme data from search screen
export const userSearch = async(submit) => {
  const dataform = new FormData(submit)
  const token = sessionStorage.getItem('token');
  const userSearchHeader = {
    authorization: `Bearer ${token}`
  }
  const response = await fetch(urlForUserSearch, {
    method: 'POST',
    headers: userSearchHeader,
    body: dataform
  })
  if (response.status >= 400) {
    throw(new Error('Network request failed'))
  };
  return await response.json()
}
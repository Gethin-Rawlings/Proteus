//const url ='http://ec2-52-56-248-133.eu-west-2.compute.amazonaws.com:5000/';
const url = 'http://gethin-laptop:5000/';
//const url = 'http://192.168.1.47:5000/';
const urlForOrganisations = url + 'organisations?type='
const urlForLogin = url + 'login';
const urlForUpdateUsers = url + 'updateusers';
const urlForprogrammeSearch = url + 'programmesearch';
const urlForUserSearch = url + 'useradmin';
const urlForuserDetails = url + 'userDetails?user=';
const urlForuserRoles = url + 'userRoles?user=';
const urlForUserProgrammeSearch = url + 'programmeSearchColumns?user=';
const urlForProgrammeSection = url + 'programmeSection?programme=';
const urlForAddUser = url + 'addUser'
const urlForgetTransmissionSection = url + 'transmissionSection?programme=';

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
  return await response.json()
}

export const addUser = async(submit) => {
  const response = await fetch(urlForAddUser, {
    method: 'POST',
    body: submit
  })
  if (response.status >= 400) {
    throw(new Error('Network request failed'))
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
    Authorization: `${token}`
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
    authorization: `${token}`
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
export const userDetails = async(user) => {
  const response = await fetch(urlForuserDetails+user)
  if (response.status >= 400) {
    throw(new Error('Network request failed'))
  } else {
    return await response
  }
}
export const userRoles = async(user) => {
  const response = await fetch(urlForuserRoles+user)
  if (response.status >= 400) {
    throw(new Error('Network request failed'))
  } else {
    return await response.json()
  }
}
export const getOrganisations = async(type) => {
  const response = await fetch(urlForOrganisations+type)
  if (response.status >= 400) {
    throw(new Error('Network request failed'))
  } else {
    return await response.json()
  }
}

export const getProgrammeSearchColumns = async(user) =>{
  const response = await fetch(urlForUserProgrammeSearch+user)
  if (response.status >= 400) {
    throw(new Error('Network request failed'))
  } else {
    return await response.json()
  }
}

export const getProgrammeSection = async(programme) =>{
  const response = await fetch(urlForProgrammeSection+programme)
  if (response.status >= 400) {
    throw(new Error('Network request failed'))
  } else {
    return await response.json()
  }
}

export const getTransmissionSection = async(programme) =>{
  const response = await fetch(urlForgetTransmissionSection+programme)
  if (response.status >= 400) {
    throw(new Error('Network request failed'))
  } else {
    return await response.json()
  }
}


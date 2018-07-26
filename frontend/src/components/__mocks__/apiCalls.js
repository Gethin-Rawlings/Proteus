export const login = async(submit) => {
    const loginStatus = {"success":true,"err":null,"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhd2xpZzAxIiwiaWF0IjoxNTMyMDc3MTQ5LCJleHAiOjE1MzIyMDY3NDl9.VYjJ6LKYOcBM4YEAdRdjfKXU8hCuOtkPGs90iCds-sQ","admin":true,"supplier":true,"network":true,"finance":false,"commission":false}
    return (loginStatus)
  }

  const data = [{programmeNumber: "PEK49000001", sequence: "AAA", Supplier: 101355, Network: 400}]
    

  export const programmeSearch = async() => {
    return await new Promise(resolve => {
      resolve(data);
    });
  };
  /*
  export const getNetwork = async() => {
    const data = [{org_organisation_id: 101, org_description: "1Xtra"}]
    return (data)
  }
*/
  const fakeData = [{org_organisation_id: 101, org_description: "1Xtra"}];

  export const getNetwork = async()  => {
    return await new Promise(resolve => {
      resolve(fakeData);
    });
  };

  export const getProduction = async()  => {
    return await new Promise(resolve => {
      resolve(fakeData);
    });
  };

  export const getIndie = async()  => {
    return await new Promise(resolve => {
      resolve(fakeData);
    });
  };
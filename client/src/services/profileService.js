// You can create all the fetches to your own APIs and externals APIs here
 // This example fetch is specifically for our Profile API and is why the file is called profileService.js
 import axios from "axios";

 const getAllProfiles = async () => {
   const response = await axios.get('http://localhost:8080/api/profile', {port: 8080});

   return response.data || [];
 };
 const createProfile = async (profile) => {
  const response = await axios.post('http://localhost:8080/api/profile', profile);

  return response.data || [];
};

const getSignatureCount = async () => {
  const response = await axios.get('http://localhost:8080/api/profile/count');

  return response.data || [];
};
// const getEmailCount = async () => {
//     const response = await axios.get('/api/profile', { params: { count: true } });

//     return response.data || 0;
// };


 // All of the endpoints in this file can be exported below
 export { getAllProfiles, createProfile, getSignatureCount}
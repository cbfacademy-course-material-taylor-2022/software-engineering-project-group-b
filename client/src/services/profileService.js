// You can create all the fetches to your own APIs and externals APIs here
 // This example fetch is specifically for our Profile API and is why the file is called profileService.js
 import axios from "axios";

 const getAllProfiles = async () => {
   const response = await axios.get(`/api/profile`);

   return response.data || [];
 };
 const createProfile = async (profile) => {
  const response = await axios.post(`/api/profile`, profile);

  return response.data || [];
};

const getEmailCount = async () => {
    const response = await axios.get('/api/profile', { params: { count: true } });

    return response.data || 0;
};


 // All of the endpoints in this file can be exported below
 export { getAllProfiles, createProfile, getEmailCount }
const base_url = 'https://www.omdbapi.com/';
const apiKey = process.env.API_KEY;
  export const  Fetch = async(url)=>{
   const data = await fetch(`${base_url}/?${url}&apikey=9833a2ea`);
   const parseData = data.json();
   return parseData;
  }
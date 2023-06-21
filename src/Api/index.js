import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://booking-com.p.rapidapi.com/v1/metadata/exchange-rates',
  params: {
    currency: 'AED',
    locale: 'en-gb'
  },
  headers: {
    'X-RapidAPI-Key': 'b6dbdc9b0dmsh876624bbf891a3cp1dbcd3jsn2d98f465bf59',
    'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}
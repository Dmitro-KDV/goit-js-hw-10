import Notiflix from 'notiflix';
import SlimSelect from 'slim-select'

const select = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');
const err = document.querySelector('.error');
// new SlimSelect({
//     select: '#selectElement'
//   })

export let storedBreeds = [];

const api_key = "live_nwBBH9iYGELMsf7Elhlx9ow0Jh4PNBpfYYumTvhoU32Nk0m5NqDiDomOVKJzKcp1";

export function fetchBreeds() {
    // axios.defaults.baseURL = 'https://api.thecatapi.com/v1';
    // axios.defaults.headers.common['x-api-key'] = 'live_nwBBH9iYGELMsf7Elhlx9ow0Jh4PNBpfYYumTvhoU32Nk0m5NqDiDomOVKJzKcp1';


    let url = `https://api.thecatapi.com/v1/breeds`;

   return fetch(url,{headers: {
         'x-api-key': api_key
      }})
   // axios.get('/breeds')
   .then((response) => {
      if (!response.ok) {
         throw new Error(response.statusText);
      }
      loader.style.display = 'none';
      return response.json();
   })
   .then((data) => {

      data = data.filter(img=> img.image?.url!=null)
      storedBreeds = data;

      for (let i = 0; i < storedBreeds.length; i++) {
        
      const breed = storedBreeds[i];
      let option = document.createElement('option');
      
      if(!breed.image)continue
         option.value = breed.id;
         option.innerHTML = `${breed.name}`;
         select.appendChild(option);
      }
   })
   .catch(function(error) {
      Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!');
   });
}

export function fetchCatByBreed() {  
   let url = 'https://api.thecatapi.com/v1/images/search';
    const id_kat = select.value;
    loader.style.display = 'blok';
    
    return fetch(`${url}?breed_ids=${id_kat}&api_key=${api_key}`)
    .then((response) => {
        if (!response.ok) {
            throw new Error(response.statusText);
         }
         loader.style.display = 'none';
       return response.json();
    })
    .then((data) => {
       const img_kat = data[0].url;
       const object_breeds = data[0].breeds[0];

       showBreedImage(img_kat, object_breeds);
    })
    .catch(function(error) {
       Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!');
    });
 }

 function showBreedImage(img, objectKat) { 
    const catInfo = document.querySelector(".cat-info");
    catInfo.innerHTML = `<li class='js-cat'>
                            <img src="${img}" alt="${objectKat.name}">
                            <div>
                               <h2>${objectKat.name}</h2>
                               <p>${objectKat.description}</p>
                               <p><span>Temperament:</span> ${objectKat.temperament}</p>
                            </div>
                         </li>`;
   
 }
 
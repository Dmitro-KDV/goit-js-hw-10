const select = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');
const err = document.querySelector('.error');

export let storedBreeds = [];

export function fetchBreeds() {
    // axios.defaults.baseURL = 'https://api.thecatapi.com/v1';
    // axios.defaults.headers.common['x-api-key'] = 'live_nwBBH9iYGELMsf7Elhlx9ow0Jh4PNBpfYYumTvhoU32Nk0m5NqDiDomOVKJzKcp1';


    let url = `https://api.thecatapi.com/v1/breeds`;
    const api_key = "live_nwBBH9iYGELMsf7Elhlx9ow0Jh4PNBpfYYumTvhoU32Nk0m5NqDiDomOVKJzKcp1";
    loader.style.display = 'blok';
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
      console.log(error);
      err.style.display = 'block';
   });
}

export function fetchCatByBreed() {   
    let url = 'https://api.thecatapi.com/v1/images/search';
    const id_kat = select.value;
    loader.style.display = 'blok';
    
    return fetch(`${url}?breed_ids=${id_kat}`)
    .then((response) => {
        if (!response.ok) {
            throw new Error(response.statusText);
         }
         loader.style.display = 'none';
       return response.json();
    })
    .then((data) => {
       let img_kat ='';
       for (let i = 0; i < data.length; i++) {
          img_kat = data[i].url;
       }
       
       showBreedImage(img_kat, id_kat);
    })
    .catch(function(error) {
       console.log(error);
       err.style.display = 'block';
    });
 }

 function showBreedImage(img, id_kat) { 
    objectKat = storedBreeds.find(({id}) => id === id_kat);
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
 
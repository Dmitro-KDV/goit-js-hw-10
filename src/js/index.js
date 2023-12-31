import axios from "axios"
import {fetchBreeds, fetchCatByBreed} from "./cat-api.js";


const select = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');
const err = document.querySelector('.error');

err.style.display = 'none';

fetchBreeds();

select.addEventListener("change", fetchCatByBreed);


import {url} from "./constants.js";
import {catchAndDisplay} from "./ui/catchAndDisplay.js";
import { handleClick } from "./helper/handleClick.js";
import { fetchJackets } from "./api/fetchJackets.js";

const container = document.querySelector("#jackets__container");

async function getJackets(){
  try{
    const fetched = await fetch(url)
    const results = await fetched.json()
    const jackets = results;

    container.innerHTML = "";
    
    fetchJackets(jackets);
                            
    const ctaAdd = document.querySelectorAll("#add");
    ctaAdd.forEach(function(button){
      button.addEventListener("click", handleClick);
    });
  }catch(error){
    consol.error(error)
    catchAndDisplay(".container","There has been an error in loading the page","error");
  }
}
getJackets()
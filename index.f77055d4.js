!function(){var e=document.querySelector(".breed-select"),t=document.querySelector(".loader"),n=document.querySelector(".error"),o=[];var c=document.querySelector(".breed-select"),r=document.querySelector(".loader"),a=document.querySelector(".error");r.style.display="none",a.style.display="none",t.style.display="blok",fetch("https://api.thecatapi.com/v1/breeds",{headers:{"x-api-key":"live_nwBBH9iYGELMsf7Elhlx9ow0Jh4PNBpfYYumTvhoU32Nk0m5NqDiDomOVKJzKcp1"}}).then((function(e){if(!e.ok)throw new Error(e.statusText);return t.style.display="none",e.json()})).then((function(t){t=t.filter((function(e){var t;return null!=(null===(t=e.image)||void 0===t?void 0:t.url)})),o=t;for(var n=0;n<o.length;n++){var c=o[n],r=document.createElement("option");c.image&&(r.value=c.id,r.innerHTML="".concat(c.name),e.appendChild(r))}})).catch((function(e){console.log(e),n.style.display="block"})),c.addEventListener("change",(function(){var c=e.value;return t.style.display="blok",fetch("".concat("https://api.thecatapi.com/v1/images/search","?breed_ids=").concat(c)).then((function(e){if(!e.ok)throw new Error(e.statusText);return t.style.display="none",e.json()})).then((function(e){for(var t="",n=0;n<e.length;n++)t=e[n].url;!function(e,t){objectKat=o.find((function(e){return e.id===t})),document.querySelector(".cat-info").innerHTML="<li class='js-cat'>\n                            <img src=\"".concat(e,'" alt="').concat(objectKat.name,'">\n                            <div>\n                               <h2>').concat(objectKat.name,"</h2>\n                               <p>").concat(objectKat.description,"</p>\n                               <p><span>Temperament:</span> ").concat(objectKat.temperament,"</p>\n                            </div>\n                         </li>")}(t,c)})).catch((function(e){console.log(e),n.style.display="block"}))}))}();
//# sourceMappingURL=index.f77055d4.js.map

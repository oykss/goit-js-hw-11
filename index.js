import{S as f,i as a}from"./assets/vendor-5ObWk2rO.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const m="46231257-9f78b377890ff4b2ac35cee0f",d="https://pixabay.com/api/",h=r=>{const s=new URLSearchParams({key:m,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${d}?${s}`).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})},g=r=>r.hits.map(({largeImageURL:s,webformatURL:o,tags:l,likes:e,views:t,comments:i,downloads:p})=>`<li class="photo">
      <a href="${s}">
        <img
        src="${o}" 
        alt="${l}" 
        width="360" 
        height="152">
      </a>
      <ul class="list-value">
        <li class="list-item">
          <p class="title">Likes</p>
          <p class="value">${e}</p>
        </li>
        <li class="list-item">
          <p class="title">Views</p>
          <p class="value">${t}</p>
        </li>
        <li class="list-item">
          <p class="title">Comments</p>
          <p class="value">${i}</p>
        </li>
        <li class="list-item">
          <p class="title">Downloads</p>
          <p class="value">${p}</p>
        </li>
      </ul>
      </li>`).join(""),c={titleSize:"0px",messageSize:"16px",messageLineHeight:1.5,messageColor:"#fff",backgroundColor:"#ef4040",position:"topRight",closeOnEscape:!0,iconUrl:"bi_x-octagon.svg",timeout:3e3,class:"custom-toast-width",message:"Sorry, there are no images matching your search query. Please, try again!"},y=document.querySelector("form"),n=document.querySelector(".wrap-photos"),u=document.querySelector(".loader"),L=new f(".wrap-photos a",{captionsData:"alt",captionDelay:250});y.addEventListener("submit",r=>{r.preventDefault();const s=document.querySelector("input").value.trim();s?(n.innerHTML="",u.classList.remove("visually-hidden"),h(s).then(o=>{o.hits.length?(n.innerHTML=g(o),L.refresh(),v()):a.error({...c})}).catch(o=>console.log(o)).finally(()=>{u.classList.add("visually-hidden")})):a.error({...c})});function v(){document.querySelectorAll(".photo").forEach((r,s)=>{setTimeout(()=>{r.classList.add("active")},s*100)})}
//# sourceMappingURL=index.js.map

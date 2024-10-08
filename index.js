import{S as m,i as c}from"./assets/vendor-BrddEoy-.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const p="46396055-d69cef0b7d1de44edfbae421d",f="https://pixabay.com/api/",h=r=>{const o=new URLSearchParams({key:p,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${f}?${o}`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})},g=r=>r.map(({webformatURL:o,largeImageURL:s,tags:i,likes:e,views:t,comments:a,downloads:u})=>`
<li class="gallery-item">
<a href="${s}" class="gallery-link" >
<img src="${o}" class="gallery-image" alt="${i}" />
</a>
<div class="item-info">
    <div class="stats-box">
    <p class="stat">Likes</p>
    <p class="stat-value">${e}</p>
  </div>
  <div class="stats-box">
    <p class="stat">Views</p>
    <p class="stat-value">${t}</p>
  </div>
  <div class="stats-box">
      <p class="stat">Comments</p>
      <p class="stat-value">${a}</p>
  </div>
  <div class="stats-box">
      <p class="stat">Downloads</p>
      <p class="stat-value">${u}</p>
  </div>
</div>
</li>`),n=document.querySelector(".gallery"),l=document.querySelector(".search-form"),d=document.querySelector(".loader"),y=()=>c.show({message:"Input is empty!",position:"topRight",backgroundColor:"orangered",messageSize:"16",messageColor:"#fff",theme:"dark",maxWidth:"432px",icon:"ico-warning"}),v=()=>c.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#EF4040",messageSize:"16",messageColor:"#fff",theme:"dark",maxWidth:"432px",icon:"ico-error"}),b=new m(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250}),L=()=>d.classList.remove("hidden"),w=()=>d.classList.add("hidden"),x=r=>{r.preventDefault();const o=r.currentTarget.elements["text-request"].value.toLowerCase().trim();if(!o)return y();n.innerHTML="",L(),h(o).then(s=>{if(!s.hits.length)return v();n.insertAdjacentHTML("beforeend",g(s.hits).join("")),b.refresh()}).catch(s=>console.log(s)).finally(()=>w()),l.reset()};l.addEventListener("submit",x);
//# sourceMappingURL=index.js.map

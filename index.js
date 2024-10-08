import{a as v,S as L,i as m}from"./assets/vendor-mdVVRe9K.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();const b="46396055-d69cef0b7d1de44edfbae421d",w="https://pixabay.com/api/",x=15,E=async(o,t=1)=>{const a={params:{key:b,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:x}};try{return(await v.get(w,a)).data}catch(r){throw new Error(r.message)}},S=o=>o.map(({webformatURL:t,largeImageURL:a,tags:r,likes:e,views:s,comments:i,downloads:y})=>`
<li class="gallery-item">
  <a href="${a}" class="gallery-link">
    <img src="${t}" class="gallery-image" alt="${r}" />
  </a>
  <div class="item-info">
    <div class="stats-box">
      <p class="stat">Likes</p>
      <p class="stat-value">${e}</p>
    </div>
    <div class="stats-box">
      <p class="stat">Views</p>
      <p class="stat-value">${s}</p>
    </div>
    <div class="stats-box">
      <p class="stat">Comments</p>
      <p class="stat-value">${i}</p>
    </div>
    <div class="stats-box">
      <p class="stat">Downloads</p>
      <p class="stat-value">${y}</p>
    </div>
  </div>
</li>`).join(""),n=document.querySelector(".gallery"),h=document.querySelector(".search-form"),g=document.querySelector(".loader"),p=document.querySelector(".load-more");let l="",c=1,u=0;const C=()=>m.show({message:"Input is empty!",position:"topRight",backgroundColor:"orangered",messageSize:"16",messageColor:"#fff",theme:"dark",maxWidth:"432px",icon:"ico-warning"}),q=()=>m.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#EF4040",messageSize:"16",messageColor:"#fff",theme:"dark",maxWidth:"432px",icon:"ico-error"}),P=()=>m.show({message:"We're sorry, but you've reached the end of search results.",position:"topRight",backgroundColor:"#EF4040",messageSize:"16",messageColor:"#fff",theme:"dark",maxWidth:"432px",icon:"ico-warning"}),z=new L(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250}),R=()=>g.classList.remove("hidden"),M=()=>g.classList.add("hidden"),O=()=>p.classList.remove("hidden"),d=()=>p.classList.add("hidden"),f=async(o=!1)=>{try{R();const t=await E(l,c);if(t.hits.length===0&&c===1){d(),q();return}u=t.totalHits,n.insertAdjacentHTML("beforeend",S(t.hits)),z.refresh(),n.children.length<u?O():(d(),P()),o&&$()}catch(t){console.log(t)}finally{M()}},$=()=>{const o=n.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:o*2,behavior:"smooth"})},A=o=>{if(o.preventDefault(),l=o.currentTarget.elements["text-request"].value.toLowerCase().trim(),!l)return C();c=1,n.innerHTML="",d(),f(),h.reset()},B=()=>{c+=1,f(!0)};h.addEventListener("submit",A);p.addEventListener("click",B);
//# sourceMappingURL=index.js.map

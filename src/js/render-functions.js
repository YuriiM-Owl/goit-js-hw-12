export const imageCard = array =>
  array.map(
    ({
      webformatURL,
      largeImageURL,
      tags,
      likes,
      views,
      comments,
      downloads,
    }) => `
<li class="gallery-item">
<a href="${largeImageURL}" class="gallery-link" >
<img src="${webformatURL}" class="gallery-image" alt="${tags}" />
</a>
<div class="item-info">
    <div class="stats-box">
    <p class="stat">Likes</p>
    <p class="stat-value">${likes}</p>
  </div>
  <div class="stats-box">
    <p class="stat">Views</p>
    <p class="stat-value">${views}</p>
  </div>
  <div class="stats-box">
      <p class="stat">Comments</p>
      <p class="stat-value">${comments}</p>
  </div>
  <div class="stats-box">
      <p class="stat">Downloads</p>
      <p class="stat-value">${downloads}</p>
  </div>
</div>
</li>`
  );

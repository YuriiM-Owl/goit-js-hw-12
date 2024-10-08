import { searchImages } from './js/pixabay-api.js';
import { imageCard } from './js/render-functions.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const gallery = document.querySelector('.gallery');
const form = document.querySelector('.search-form');
const loaderElement = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.load-more');
let query = '';
let page = 1;
let totalHits = 0;

const iziWarning = () =>
  iziToast.show({
    message: 'Input is empty!',
    position: 'topRight',
    backgroundColor: 'orangered',
    messageSize: '16',
    messageColor: '#fff',
    theme: 'dark',
    maxWidth: '432px',
    icon: 'ico-warning',
  });

const iziError = () =>
  iziToast.show({
    message:
      'Sorry, there are no images matching your search query. Please try again!',
    position: 'topRight',
    backgroundColor: '#EF4040',
    messageSize: '16',
    messageColor: '#fff',
    theme: 'dark',
    maxWidth: '432px',
    icon: 'ico-error',
  });

const iziEndOfResults = () =>
  iziToast.show({
    message: "We're sorry, but you've reached the end of search results.",
    position: 'topRight',
    backgroundColor: '#EF4040',
    messageSize: '16',
    messageColor: '#fff',
    theme: 'dark',
    maxWidth: '432px',
    icon: 'ico-warning',
  });

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

const showLoader = () => loaderElement.classList.remove('hidden');
const hideLoader = () => loaderElement.classList.add('hidden');
const showLoadMoreBtn = () => loadMoreBtn.classList.remove('hidden');
const hideLoadMoreBtn = () => loadMoreBtn.classList.add('hidden');

const fetchAndRenderImages = async (shouldScroll = false) => {
  try {
    showLoader();
    const data = await searchImages(query, page);

    if (data.hits.length === 0 && page === 1) {
      hideLoadMoreBtn();
      iziError();
      return;
    }

    totalHits = data.totalHits;
    gallery.insertAdjacentHTML('beforeend', imageCard(data.hits));
    lightbox.refresh();

    if (gallery.children.length < totalHits) {
      showLoadMoreBtn();
    } else {
      hideLoadMoreBtn();
      iziEndOfResults();
    }

    if (shouldScroll) {
      scrollToNewImages();
    }
  } catch (error) {
    console.log(error);
  } finally {
    hideLoader();
  }
};

const scrollToNewImages = () => {
  const cardHeight = gallery.firstElementChild.getBoundingClientRect().height;
  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
};

const handleForm = event => {
  event.preventDefault();
  query = event.currentTarget.elements['text-request'].value
    .toLowerCase()
    .trim();

  if (!query) {
    return iziWarning();
  }

  page = 1;
  gallery.innerHTML = '';
  hideLoadMoreBtn();
  fetchAndRenderImages();
  form.reset();
};

const handleLoadMore = () => {
  page += 1;
  fetchAndRenderImages(true);
};

form.addEventListener('submit', handleForm);
loadMoreBtn.addEventListener('click', handleLoadMore);

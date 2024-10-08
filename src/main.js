import { searchImages } from './js/pixabay-api.js';
import { imageCard } from './js/render-functions.js';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const gallery = document.querySelector('.gallery');
const form = document.querySelector('.search-form');
const loaderElement = document.querySelector('.loader');

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

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

const showLoader = () => loaderElement.classList.remove('hidden');
const hideLoader = () => loaderElement.classList.add('hidden');

const handleForm = event => {
  event.preventDefault();
  const query = event.currentTarget.elements['text-request'].value
    .toLowerCase()
    .trim();

  if (!query) return iziWarning();

  gallery.innerHTML = '';
  showLoader();

  searchImages(query)
    .then(json => {
      if (!json.hits.length) return iziError();
      gallery.insertAdjacentHTML('beforeend', imageCard(json.hits).join(''));
      lightbox.refresh();
    })
    .catch(e => console.log(e))
    .finally(() => hideLoader());

  form.reset();
};

form.addEventListener('submit', handleForm);

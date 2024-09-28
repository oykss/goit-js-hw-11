import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';
import 'izitoast/dist/css/iziToast.min.css';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { getPhotos } from './js/pixabay-api';
import { renderPhotos } from './js/render-functions';

const options = {
  titleSize: '0px',
  messageSize: '16px',
  messageLineHeight: 1.5,
  messageColor: '#fff',
  backgroundColor: '#ef4040',
  position: 'topRight',
  closeOnEscape: true,
  iconUrl: 'bi_x-octagon.svg',
  timeout: 3000,
  class: 'custom-toast-width',
  message: 'Sorry, there are no images matching your search query. Please, try again!',
};

const form = document.querySelector('form');
const wrapPhotos = document.querySelector('.wrap-photos');
const loader = document.querySelector('.loader');

const lightBoxPhotos = new SimpleLightbox('.wrap-photos a', {
  captionsData: 'alt',
  captionDelay: 250,
});

form.addEventListener('submit', event => {
  event.preventDefault();

  const inputValue = document.querySelector('input').value;

  wrapPhotos.innerHTML = '';
  loader.classList.remove('visually-hidden');

  getPhotos(inputValue)
    .then(photos => {
      if (!inputValue || !photos.hits.length) {
        iziToast.error({ ...options });
      } else {
        wrapPhotos.innerHTML = renderPhotos(photos);
        lightBoxPhotos.refresh();
        showCards();
      }
    })
    .catch(error => console.log(error))
    .finally(() => {
      loader.classList.add('visually-hidden');
    });
});

function showCards() {
  document.querySelectorAll('.photo').forEach((photo, index) => {
    setTimeout(() => {
      photo.classList.add('active');
    }, index * 100);
  });
}

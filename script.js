const toast = document.querySelector('#liveToast');
const progressBar = document.querySelector('#progress-bar');

const documentHeight = document.documentElement.scrollHeight;
const clientHeight = document.documentElement.clientHeight;

window.addEventListener('scroll', () => {
  const scroll = this.scrollY;
  const percentage = (scroll / (documentHeight - clientHeight)) * 100;

  progressBar.style.width = percentage + '%';
});

document.addEventListener('DOMContentLoaded', () => {
  const toastAlert = bootstrap.Toast.getOrCreateInstance(toast);
  toastAlert.show();
});

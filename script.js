const progressBar = document.querySelector('#progress-bar');
const documentHeight = document.documentElement.scrollHeight;
const clientHeight = document.documentElement.clientHeight;

console.log(progressBar);

window.addEventListener('scroll', () => {
  const scroll = this.scrollY;
  const percentage = (scroll / (documentHeight - clientHeight)) * 100;

  progressBar.style.width = percentage + '%';
});

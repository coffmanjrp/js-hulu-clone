const modal = document.querySelector('.modal');
const loginBtn = document.querySelector('.login-btn');
const closeBtn = document.querySelector('.close');
const welcomeTabContent = document.querySelectorAll('.welcome-tab-content');
const welcomeTabController = document.querySelectorAll(
  '.welcome-tab-controller'
);
const welcomeTabBg = document.querySelector('.welcome-tab-bg');
const activeBar = document.querySelector('.active-bar');

function openModal() {
  modal.style.display = 'block';
}

function closeModal() {
  modal.style.display = 'none';
}

function outsideClick(e) {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
}

loginBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

function removeActive() {
  welcomeTabContent.forEach((item) => item.classList.remove('active'));
  welcomeTabController.forEach((item) => item.classList.remove('active'));
}

function selectTab(e) {
  e.preventDefault();
  const activeTab = document.getElementById(`${this.id}-content`);
  const barWidth = e.target.clientWidth;
  const barOffset = e.target.offsetLeft;

  removeActive();

  this.classList.add('active');
  activeTab.classList.add('active');
  activeBar.style.width = `${barWidth}px`;
  activeBar.style.transform = `translateX(${barOffset}px)`;

  if (window.screen.width <= 768) {
    welcomeTabBg.style.backgroundImage = `linear-gradient(
      rgba(0, 0, 0, 0.8) -39.59%,
      rgba(0, 0, 0, 0) 117.14%
    ), url('../img/welcome-${this.id}-small.jpg')`;
  } else {
    welcomeTabBg.style.backgroundImage = `linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.8) -57.5%,
      rgba(0, 0, 0, 0) 98.72%
    ), url('../img/welcome-${this.id}.jpg')`;
  }
}

welcomeTabController.forEach((tab) => tab.addEventListener('click', selectTab));

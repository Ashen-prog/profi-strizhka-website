/////////////////////////////Общие

document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.menu');
  const overlay = document.querySelector('.overlay');

  function toggleMenu() {
    menu.classList.toggle('active');
    overlay.classList.toggle('active');
    menuToggle.classList.toggle('active');
  }

  // При клике на кнопку гамбургера
  menuToggle.addEventListener('click', toggleMenu);

  // При клике на оверлей закрываем меню
  overlay.addEventListener('click', toggleMenu);

  // При клике на ссылки в меню закрываем меню
  const menuLinks = menu.querySelectorAll('a');
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (menu.classList.contains('active')) {
        toggleMenu();
      }
    });
  });
});

//Онлайн запись

const signBtn = document.querySelector('.sign-btn');
const signBtnMobileUnderHeader = document.querySelector('.under-header_online-registration-btn');
const signBtnMobile = document.querySelector('.footer_online-registration-btn_mobile');

signBtn.addEventListener('click', () => {
  window.open(
    'https://n1059344.yclients.com/select-city/25/select-branch?previousStepUrl=%2Fcompany%2F912077%2Fpersonal%2Fselect-services%3Fo%3D&o=',
    '_blank'
  );
});

signBtnMobile.addEventListener('click', () => {
  window.open(
    'https://n1059344.yclients.com/select-city/25/select-branch?previousStepUrl=%2Fcompany%2F912077%2Fpersonal%2Fselect-services%3Fo%3D&o=',
    '_blank'
  );
});

signBtnMobileUnderHeader.addEventListener('click', () => {
  window.open(
    'https://n1059344.yclients.com/select-city/25/select-branch?previousStepUrl=%2Fcompany%2F912077%2Fpersonal%2Fselect-services%3Fo%3D&o=',
    '_blank'
  );
});

//Назад

document.querySelectorAll('.back-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    window.history.back();
  });
});

//Логотип

document.querySelector('.header_logo-container').addEventListener('click', () => {
  window.location.href = '/index.html';
});

//Соц сети

const footerSocialNetworks = document.querySelectorAll('.footer_social-networks');
const underHeaderSocialNetworks = document.querySelector('.social-networks_under-header');

footerSocialNetworks.forEach(item => {
  item.addEventListener('click', e => {
    if (e.target.classList.contains('footer_tg')) {
      window.open('https://ok.ru/group/70000008419521', '_blank');
    } else if (e.target.classList.contains('footer_inst')) {
      window.open('https://instagram.com/cirulnik64', '_blank');
    } else if (e.target.classList.contains('footer_vk')) {
      window.open('https://vk.com/profi_strijka64', '_blank');
    }
  });
});

underHeaderSocialNetworks.addEventListener('click', e => {
  if (e.target.classList.contains('under-header_ok')) {
    window.open('https://ok.ru/group/70000008419521', '_blank');
  } else if (e.target.classList.contains('under-header_inst')) {
    window.open('https://instagram.com/cirulnik64', '_blank');
  } else if (e.target.classList.contains('under-header_vk')) {
    window.open('https://vk.com/profi_strijka64', '_blank');
  }
});

/* Выпадашка для "Услеги и цены" */
const menuBtnServices = document.querySelector('.menu-btn-services');
const menuServicesDropdown = document.querySelector('.menu-services-dropdown');
const menuBtnServicesImg = document.querySelector('.menu-btn-services img');

menuBtnServices.addEventListener('click', () => {
  menuServicesDropdown.classList.toggle('show');
  menuBtnServicesImg.classList.toggle('rotated');
});

/**/
const hairLink = document.querySelectorAll('#menu_hair');
const nailLink = document.querySelectorAll('#menu_nail');
const stylingLink = document.querySelectorAll('#menu_styling');
const browLink = document.querySelectorAll('#menu_brow');
const colorationLink = document.querySelectorAll('#menu_coloration');

// Функция для принудительного вызова логики price.js
function forceNavigateToPrice(targetHash) {
  const currentPath = window.location.pathname;
  const currentHash = window.location.hash.slice(1);

  if (currentPath.includes('price.html') && currentHash === targetHash) {
    // Мы уже на price.html с нужным хэшем - принудительно вызываем функцию
    if (window.checkHashAndOpenSection) {
      window.checkHashAndOpenSection();
    } else {
      // Если функция не в глобальной области - перезагружаем страницу
      window.location.reload();
    }
  } else {
    // Обычный переход
    window.location.href = `/price.html#${targetHash}`;
  }
}

// "Парикмахерские" (hair)
hairLink.forEach(item => {
  item.addEventListener('click', e => {
    e.preventDefault();
    forceNavigateToPrice('hair');
  });
});

// "Ногтевой" (nail)
nailLink.forEach(item => {
  item.addEventListener('click', e => {
    e.preventDefault();
    forceNavigateToPrice('nail');
  });
});

// "Брови" (brow)
browLink.forEach(item => {
  item.addEventListener('click', e => {
    e.preventDefault();
    forceNavigateToPrice('brow');
  });
});

// "Стайлинг" (styling)
stylingLink.forEach(item => {
  item.addEventListener('click', e => {
    e.preventDefault();
    forceNavigateToPrice('styling');
  });
});

// Окрашивания (используется только на титульной странице)
colorationLink.forEach(item => {
  item.addEventListener('click', e => {
    e.preventDefault();
    forceNavigateToPrice('styling');
  });
});

// Услуги на главной странице
const serviceItems = document.querySelectorAll('.service-item');

serviceItems.forEach((item, index) => {
  const services = ['hair', 'nail', 'styling'];
  const service = services[index];

  if (service) {
    item.addEventListener('click', e => {
      e.preventDefault();
      forceNavigateToPrice(service);
    });
  }
});

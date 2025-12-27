
// >------------------  start scroll spy  ------------->

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".spy");

document.addEventListener("scroll", function() {
  let currentSectionId = "";

  for (let i = 0; i < sections.length; i++) {
    let sectionTop = sections[i].offsetTop;
    let sectionHeight = sections[i].offsetHeight;

    if (scrollY >= sectionTop - 50 && scrollY < sectionTop + sectionHeight - 50) {
      currentSectionId = sections[i].getAttribute("id");
      break;
    }
  }

  for (let j = 0; j < navLinks.length; j++) {
    navLinks[j].classList.remove("active");
    if (navLinks[j].getAttribute("href") === "#" + currentSectionId) {
      navLinks[j].classList.add("active");
    }
  }
});

// >------------------  end scroll spy  ------------->

// >------------------ start dark & light mode  ------------->

let root = document.getElementsByTagName("html")
let btnSwitch=document.querySelector(".switch")
btnSwitch.addEventListener('click',()=>{
    root[0].classList.toggle("dark")
    if(root[0].classList.contains("dark")){
      icon.style.color="white"
    }else{
      icon.style.color="black"
    }
})
console.log(btnSwitch);
console.log(root[0]);

// >------------------ end dark & light mode  ------------->

// >------------------ start library ------------->

  ScrollReveal().reveal('.reveal-left', {
    origin: 'left',       
    distance: '150px',   
    duration: 1200,         
    easing: 'ease-out',   
    reset: false          
  });

  ScrollReveal().reveal('.reveal-right', {
    origin: 'right',
    distance: '150px',
    duration: 1200,
    easing: 'ease-out',
    reset: false
  });

  // >------------------ end library ------------->

  // >------------------ start open & close sidebar ------------->

let toggleBtn = document.getElementById("settings-toggle");
let sidebar = document.getElementById("settings-sidebar");
let btnClose=document.getElementById("close-settings")
// close btn
btnClose.addEventListener("click",()=>{
  sidebar.classList.toggle("translate-x-full");
})
// gear
toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("translate-x-full");
  sidebar.classList.toggle("translate-x-0");
});
// document
document.addEventListener("click", (e) => {
  if (!sidebar.contains(e.target) && sidebar.classList.contains("translate-x-0")) {
    sidebar.classList.add("translate-x-full");
    sidebar.classList.remove("translate-x-0");
  }
});

  // >------------------ end open & close sidebar ------------->

  // >------------------ start change font ------------->

let fontButtons = document.querySelectorAll(".font-option");

// دالة تطبيق الخط
function applyFont(font) {
  document.body.style.fontFamily = font;
}

// تحميل الخط المحفوظ أول ما الصفحة تفتح
let savedFont = localStorage.getItem("siteFont");
if (savedFont) {
  applyFont(savedFont);

  // تفعيل الزرار المناسب
  for (let i = 0; i < fontButtons.length; i++) {
    if (fontButtons[i].getAttribute("data-font") === savedFont) {
      fontButtons[i].classList.add("active");
    }
  }
}

// كليك على الأزرار
for (let i = 0; i < fontButtons.length; i++) {
  let btn = fontButtons[i];

  btn.addEventListener("click", () => {

    // إزالة active من الكل
    for (let j = 0; j < fontButtons.length; j++) {
      fontButtons[j].classList.remove("active");
    }

    // إضافة active للزرار المختار
    btn.classList.add("active");

    let font = btn.getAttribute("data-font");

    // تطبيق الخط
    applyFont(font);

    // تخزينه
    localStorage.setItem("siteFont", font);
  });
}


  // >------------------ end change font ------------->

 // >------------------ start show & hide nav ------------->
var icon= document.getElementById("icon-nav")
let menu=document.querySelector(".nav-links")
console.log(icon);
console.log(menu);
icon.addEventListener("click",()=>{
  menu.classList.toggle("show")
})
document.addEventListener("click", (e) => {
  if (!menu.contains(e.target) && e.target !== icon) {
    menu.classList.remove("show");
  }
});

for(let i=0; i<navLinks.length;i++){
  console.log(navLinks[i]);
  navLinks[i].addEventListener("click",()=>{
    console.log("hi");
    menu.classList.toggle("show")
  })
}

  // >------------------ end show & hide nav  ------------->

  //>------------------ start filtter  ------------->

let filterButtons = document.querySelectorAll(".portfolio-filter");
let items = document.querySelectorAll(".portfolio-item");

for (let i = 0; i < filterButtons.length; i++) {
  filterButtons[i].addEventListener("click", function (e) {

    // active
    for (let j = 0; j < filterButtons.length; j++) {
      filterButtons[j].classList.remove("active-btn");
    }

    e.target.classList.add("active-btn");

    let filter = e.target.getAttribute("data-filter");


    for (let k = 0; k < items.length; k++) {
      if (filter === "all" || items[k].getAttribute("data-category") === filter) {
        items[k].style.display = "block";
      } else {
        items[k].style.display = "none";
      }
    }

  });
}
   // >------------------ end filtter   ------------->

 // >------------------ start validation   ------------->

let form = document.querySelector('form');
let fullName = document.getElementById('full-name');
let email = document.getElementById('email');
let projectDetails = document.getElementById('project-details');

let nameSpan = fullName.parentElement.querySelector('.text-name');
let emailSpan = email.parentElement.querySelector('.text-name');
let detailsSpan = projectDetails.parentElement.querySelector('.text-name');


fullName.addEventListener('input', function() {
    if (fullName.value.trim().length >= 6) {
        nameSpan.style.display = 'none';
    }else{
        nameSpan.style.display = 'block';

    }
});

email.addEventListener('input', function() {
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email.value.trim())) {
        emailSpan.style.display = 'none';
    }else{
        emailSpan.style.display = 'block';

    }
});

projectDetails.addEventListener('input', function() {
    if (projectDetails.value.trim() !== ''&&projectDetails.value.trim().length >50 ) {
        detailsSpan.style.display = 'none';
    }else{
       detailsSpan.style.display = 'block';

    }
});


form.addEventListener('submit', function(e) {
    e.preventDefault(); // منع الفورم من الإرسال الافتراضي
    let isValid = true;

    if (fullName.value.trim().length < 6) {
        nameSpan.style.display = 'block';
        isValid = false;
    }

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
        emailSpan.style.display = 'block';
        isValid = false;
    }

    if (projectDetails.value.trim().length < 50) {
        detailsSpan.style.display = 'block';
        isValid = false;
    }

    if (isValid) {
        Swal.fire({
            title: 'تم الإرسال بنجاح!',
            text: 'شكراً على تواصلك معنا.',
            icon: 'success',
            confirmButtonText: 'حسناً',
        }).then(() => {
            form.submit();
        });
    }
});


 // >------------------ end validation   ------------->

  // >------------------ start drop down  ------------->


let allCustomSelects = document.querySelectorAll('.custom-select-wrapper');

for (let i = 0; i < allCustomSelects.length; i++) {
    let wrapper = allCustomSelects[i];
    let select = wrapper.querySelector('.custom-select');
    let optionsContainer = wrapper.querySelector('.custom-options');
    let options = wrapper.querySelectorAll('.custom-option');
    let selectedText = select.querySelector('.selected-text');
    let icon = select.querySelector('i');

    
    select.addEventListener('click', function () {
        let isOpen = select.getAttribute('aria-expanded') === 'true';

        for (let j = 0; j < allCustomSelects.length; j++) {
            if (allCustomSelects[j] === wrapper) continue;

            let otherSelect = allCustomSelects[j].querySelector('.custom-select');
            let otherOptions = allCustomSelects[j].querySelector('.custom-options');
            let otherIcon = otherSelect.querySelector('i');

            otherOptions.classList.add('hidden');
            otherIcon.classList.remove('rotate-180');
        }

        select.setAttribute('aria-expanded', !isOpen);
        optionsContainer.classList.toggle('hidden');
        icon.classList.toggle('rotate-180');
    });

    for (let k = 0; k < options.length; k++) {
        options[k].addEventListener('click', function () {
            selectedText.textContent = options[k].dataset.value;
            optionsContainer.classList.add('hidden');
            icon.classList.remove('rotate-180');
        });
    }

    document.addEventListener('click', function (e) {
        if (!wrapper.contains(e.target)) {
            optionsContainer.classList.add('hidden');
            icon.classList.remove('rotate-180');
        }
    });
}

 // >------------------ end drop down  ------------->

 // >------------------ start scroll btn   ------------->

let scrollBtn = document.getElementById('scroll-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > window.innerHeight) {
        scrollBtn.classList.remove('opacity-0', 'invisible');
        scrollBtn.classList.add('opacity-100', 'visible');
    } else {
        scrollBtn.classList.remove('opacity-100', 'visible');
        scrollBtn.classList.add('opacity-0', 'invisible');
    }
});

scrollBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

 // >------------------ end scroll btn   ------------->

 // >------------------ start slider   ------------->


let carousel = document.getElementById("testimonials-carousel");
let cards = document.querySelectorAll(".testimonial-card");
let nextBtn = document.getElementById("next-testimonial");
let prevBtn = document.getElementById("prev-testimonial");
let indicators = document.querySelectorAll(".carousel-indicator");

let currentIndex = 0;
let maxIndex = cards.length - 3;

function updateCarousel() {
  let cardWidth = cards[0].offsetWidth;
  carousel.style.transform = `translateX(${currentIndex * cardWidth}px)`;

 for (let i = 0; i < indicators.length; i++) {
    if (i === currentIndex) {
        indicators[i].classList.add("bg-accent");
        indicators[i].classList.remove("bg-slate-400", "dark:bg-slate-600");
    } else {
        indicators[i].classList.remove("bg-accent");
        indicators[i].classList.add("bg-slate-400", "dark:bg-slate-600");
    }
}
}

// next 
nextBtn.addEventListener("click", () => {
  currentIndex++;

  if (currentIndex > maxIndex) {
    currentIndex = 0;
  }

  updateCarousel();
});

// prev
prevBtn.addEventListener("click", () => {
  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = 0;
  }

  updateCarousel();
});


// indicators
for (let i = 0; i < indicators.length; i++) {
  indicators[i].addEventListener("click", () => {
    currentIndex = i;
    updateCarousel();
  });
}

window.addEventListener("resize", updateCarousel);

updateCarousel();
 // >------------------ end slider   ------------->


 // >------------------ start progress bar   ------------->

let skillBars = document.querySelectorAll('.skill-bar');

for (let i = 0; i < skillBars.length; i++) {
  skillBars[i].style.width = '0%';
  skillBars[i].style.transition = 'width 1.5s ease-in-out';
}

let observer = new IntersectionObserver(function(entries, obs) {
  for (let i = 0; i < entries.length; i++) {
    let entry = entries[i];
    if (entry.isIntersecting) {
      let bar = entry.target;
      let progress = bar.parentElement.getAttribute('aria-valuenow');
      bar.style.width = progress + '%';
      obs.unobserve(bar);
    }
  }
}, { threshold: 0.5 });

for (let i = 0; i < skillBars.length; i++) {
  observer.observe(skillBars[i]);
}

 // >------------------ end progress bar   ------------->

 // >------------------ start counter  ------------->


 let counters = document.querySelectorAll('.text-5xl');

function animateCounter(counter) {
  let target = parseInt(counter.textContent.replace('+', ''));
  if (isNaN(target)) return; 

  let count = 0;
  let increment = target / 100;

  function updateCounter() {
    count += increment;
    if (count < target) {
      counter.textContent = Math.ceil(count) + '+';
      requestAnimationFrame(updateCounter);
    } else {
      counter.textContent = target + '+';
    }
  }
  updateCounter();
}

let observer2 = new IntersectionObserver(function(entries, obs) {
  for (let i = 0; i < entries.length; i++) {
    let entry = entries[i];
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      obs.unobserve(entry.target);
    }
  }
}, { threshold: 0.5 });

for (let i = 0; i < counters.length; i++) {
  observer2.observe(counters[i]);
}



 // >------------------ end counter  ------------->

 // >------------------ start colors  ------------->


const themeBoxes = document.querySelectorAll('#theme-colors-grid > div');
const root_2 = document.documentElement;


function applyTheme(colors) {
  root_2.style.setProperty('--color-primary', colors.primary);
  root_2.style.setProperty('--color-secondary', colors.secondary);
  root_2.style.setProperty('--color-accent', colors.accent);
}


for (let i = 0; i < themeBoxes.length; i++) {
  themeBoxes[i].addEventListener('click', function () {
    const colors = {
      primary: this.dataset.primary,
      secondary: this.dataset.secondary,
      accent: this.dataset.accent,
    };

    applyTheme(colors);
    localStorage.setItem('themeColors', JSON.stringify(colors));
  });
}


const savedTheme = localStorage.getItem('themeColors');
if (savedTheme) {
  applyTheme(JSON.parse(savedTheme));
}


 // >------------------ end colors  ------------->

 // >------------------  start reset  ------------->


const resetBtn = document.getElementById('reset-settings');


const defaultTheme = {
  primary: '#6366f1',
  secondary: '#8b5cf6',
  accent: '#a855f7',
};


const defaultFont = "'Tajawal'";

resetBtn.addEventListener('click', () => {


  localStorage.removeItem('themeColors');

 
  localStorage.removeItem('siteFont');

  
  applyTheme(defaultTheme);

  
  document.body.style.fontFamily = defaultFont;

  
  const fontButtons = document.querySelectorAll('.font-option');
  for (let i = 0; i < fontButtons.length; i++) {
    fontButtons[i].classList.remove('active');

   
    if (fontButtons[i].dataset.font === defaultFont) {
      fontButtons[i].classList.add('active');
    }
  }
});

 // >------------------  end reset  ------------->

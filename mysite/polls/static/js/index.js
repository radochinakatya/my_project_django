// Слайдер:

let flag = 0
/*alert("TRASH");*/
/* Устанавливаем стартовый индекс слайда по умолчанию: */
let slideIndex = 1;
/* Вызываем функцию, которая реализована ниже: */
showSlides(slideIndex);

/* Увеличиваем индекс на 1 — показываем следующий слайд: */
function nextSlide() {
  showSlides(slideIndex += 1);
}

/* Уменьшаем индекс на 1 — показываем предыдущий слайд: */
function previousSlide() {
  showSlides(slideIndex -= 1);
}

/* Устанавливаем текущий слайд: */
function currentSlide(n) {
  showSlides(slideIndex = n);
}

/* Функция перелистывания: */
function showSlides(n) {
  /* Обращаемся к элементам с названием класса "item", то есть к картинкам: */
  let slides = document.getElementsByClassName("item");

  /* Проверяем количество слайдов: */
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }

  /* Проходим по каждому слайду в цикле for: */
  for (let slide of slides) {
    slide.style.display = "none";
  }
  /* Делаем элемент блочным: */
  slides[slideIndex - 1].style.display = "block";
}


let timer = setInterval(function () {
  slideIndex++;
  showSlides(slideIndex);
}, 4500);


// Поп ап рассылки:


const emailSubmit = document.getElementById('emailSubmit');
const inputModal = document.getElementById('inputModal');
const closeButton2 = inputModal.querySelector('.close');

emailSubmit.addEventListener('click', () => {
  inputModal.style.display = 'block';
});

closeButton2.addEventListener('click', () => {
  inputModal.style.display = 'none';
});

window.onclick = function (event) {
  if (event.target == inputModal) {
    inputModal.style.display = 'none';
  }
};


closeButton2.addEventListener('click', () => {
  inputModal.style.display = 'none';
});


//   Фильтр каталога
/*
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  // Добавить класс "show" (display:block) к отфильтрованным элементам и удалите класс "show" из элементов, которые не выбраны
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Показать отфильтрованные элементы
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Скрыть элементы, которые не выбраны
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Добавить активный класс к текущей кнопке управления (выделите ее)
var btnContainer = document.getElementById("catalog_nav");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
*/

// попап для входа



function signinopenPopup() {
  if(flag == 0) document.getElementById("signInpopup").style.display = "block";
  flag = 1;
}

function signinclosePopup() {
  document.getElementById("signInpopup").style.display = "none";
  flag = 0;
}

function signUpopenPopup() {
  signinclosePopup()
  flag = 3;
   if(flag == 3) document.getElementById("signUp").style.display = "block";
  flag = 4;
}


function closesignUpPopup() {
  document.getElementById("signUp").style.display = "none";
  flag = 3;
}


window.onclick = function(event) {
  if (event.target == signInpopup) {
    signinclosePopup();
  }
}






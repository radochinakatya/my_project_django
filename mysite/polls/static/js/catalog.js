

// JavaScript код для добавления товара в корзину
let total = 0;
const cart = [];


function addToCart(product, price, image) {
  let itemIndex = -1;
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].product === product) {
      itemIndex = i;
      break;
    }
  }

  if (itemIndex === -1) {
    const item = { product, price, count: 1, image, total_price: 0 };
    item.total_price=item.price;
    total+=item.price;
    cart.push(item);
  } else {
    cart[itemIndex].count++;
    cart[itemIndex].total_price=cart[itemIndex].price*cart[itemIndex].count;
    total+=cart[itemIndex].price
  }
  console.log(`Товар ${product} добавлен в корзину`);
}

function removeCartItem(productName) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].product === productName) {
      if (cart[i].count > 1) {
        total-=cart[i].price;
        cart[i].count--; // Уменьшаем количество товара
      } else {
        total-=cart[i].price;
        cart.splice(i, 1); // Если количество равно 1, удаляем товар из корзины метод сплайс:(array.splice(start, deleteCount, item1, item2, ...))
      }
      break;
    }
  }
}



const cartIcon = document.getElementById('cart');
const cartModal = document.getElementById('cartModal');
const cartItems = document.getElementById('cartItems');
const cartSummary = document.getElementById('cartSummary');
const closeButton = document.querySelector('#cartModal .close');

cartIcon.addEventListener('click', () => {
  cartModal.style.display = 'block';
  showCartItems();
});

// закрываем по нажатию на фон


function showCartItems() {

  let cartHTML = '';
  let costHTML = '';

  if (cart.length === 0) {
    cartHTML = '<p>Корзина пуста</p>';
  } else {
    cartHTML = '<ul>';
    for (let item of cart) {

      cartHTML += `<li><img src="${item.image}" width="50"> ${item.product} - ${item.price} ₽ x ${item.count} <button class="remove-item" data-product="${item.product}">Удалить</button></li>`;

    }
    cartHTML += '</ul>';
    costHTML += `<p>Итого: ${total} ₽</p>`;
  }

  cartItems.innerHTML = cartHTML;
   cartSummary.innerHTML = costHTML;
}

cartItems.addEventListener('click', function(event) {
  if (event.target.classList.contains('remove-item')) {
    const productName = event.target.dataset.product;
    removeCartItem(productName);
    showCartItems(); // Обновляем отображение корзины после удаления товара
  }
});

closeButton.addEventListener('click', () => {
  cartModal.style.display = 'none';
});

/*window.onclick = function (event) {

}*/


// модальные окна карточек товара
/*
// 1 товар
// получаем элементы DOM модального окна и карточки товара
const modal = document.querySelector('.itemModal');
const modalImg = modal.querySelector('.item-modal-image');
const modalTitle = modal.querySelector('.item-modal-title');
const modalDesc = modal.querySelector('.item-modal-description');
const cardImg = document.querySelector('#modal-img');
const cardTitle = document.querySelector('#modal-text');

// функция для открытия модального окна и заполнения его информацией о товаре
function openModal() {
  modalImg.src = 'img/item1.png';
  modalTitle.textContent = cardTitle.textContent;
  modalDesc.textContent = 'Эта тарелка с вертикальным бортиком и яркой расцветкой ' +
    'позволит вам подавать блюда с эффектом на любой стол. Сделана из качественной керамики. ' +
    'Рекомендуем использовать при температуре до 70 градусов. Размер: 20 см.';
  modal.style.display = 'block';
}

function openModal() {
  modalImg.src = 'img/item2.png';
  modalTitle.textContent = cardTitle.textContent;
  modalDesc.textContent = 'Эта тарелка с вертикальным бортиком и яркой расцветкой ' +
    'позволит вам подавать блюда с эффектом на любой стол. Сделана из качественной керамики. ' +
    'Рекомендуем использовать при температуре до 70 градусов. Размер: 20 см.';
  modal.style.display = 'block';
}

// функция для закрытия модального окна
function closeModal() {
  modal.style.display = 'none';
}

window.onclick = function (event) {
  const modal = document.querySelector('.itemModal');
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}

// добавляем обработчик клика на картинку и текст карточки товара
cardImg.addEventListener('click', openModal);
cardTitle.addEventListener('click', openModal);

// добавляем обработчик клика на кнопку закрытия модального окна
const closeBtn = modal.querySelector('.itemclose');
closeBtn.addEventListener('click', closeModal);

*/


const product = function (event) {
    console.log('product')
    const idCard = event.currentTarget.id;
    const newId = 'popup' + String(idCard);
    document.getElementById(newId).style.display = "block";
    const closeIcon = document.querySelectorAll('.itemclose');
    let btnClose = closeIcon[0];

    for (let i = 0; i < closeIcon.length; i++) {
        if (closeIcon[i]) {
            closeIcon[i].addEventListener('click', () => {
                console.log(newId)
                document.getElementById(newId).style.display = "none";
            })
        }
    }

}

// закрытие по клику на фон для всех карточек

window.onclick = function(event) {
  if (event.target == cartModal) {
    cartModal.style.display = 'none';
  }
  if (event.target == newId) {
    console.log(newId)
      document.getElementById(newId).style.display = "none";
  }
}
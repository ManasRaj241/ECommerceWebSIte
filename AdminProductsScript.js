const arr = [
  {
    id: 1,
    imagePath: 'images/product-1.jpg',
    name: 'Red Printed T-Shirt',
    price: '2,500.00',
  },
  {
    id: 2,
    imagePath: 'images/product-2.jpg',
    name: 'Casual Shoes',
    price: '1,200.00',
  },
  {
    id: 3,
    imagePath: 'images/product-3.jpg',
    name: 'Track Pant',
    price: '1,700.00',
  },
  {
    id: 4,
    imagePath: 'images/product-4.jpg',
    name: 'Casual Shirt',
    price: '2,900.00',
  },
  {
    id: 5,
    imagePath: 'images/product-5.jpg',
    name: 'White Sneakers',
    price: '3,500.00',
  },
  {
    id: 6,
    imagePath: 'images/product-6.jpg',
    name: 'Black plain T-Shirts',
    price: '500.00',
  },
  {
    id: 7,
    imagePath: 'images/product-7.jpg',
    name: 'Socks',
    price: '200.00',
  },
  {
    id: 8,
    imagePath: 'images/product-8.jpg',
    name: 'Analog Watch',
    price: '1,900.00',
  },
  {
    id: 9,
    imagePath: 'images/product-9.jpg',
    name: 'Digital Watch',
    price: '2,100.00',
  },
  {
    id: 10,
    imagePath: 'images/product-10.jpg',
    name: 'Black Sneakers',
    price: '7,500.00',
  },
  {
    id: 11,
    imagePath: 'images/product-11.jpg',
    name: 'White shoes',
    price: '1,500.00',
  },
  {
    id: 12,
    imagePath: 'images/product-12.jpg',
    name: 'Sports pants',
    price: '800.00',
  },
];

sessionStorage.setItem('ArrayAdmin', JSON.stringify(arr));

let deleted = false;
currentArray = JSON.parse(sessionStorage.getItem('ArrayAdmin'));
const edForm = document.getElementById('EditForm');
const pNameForEdit = document.getElementById('pNameEdit');
const priceForEdit = document.getElementById('pPriceEdit');
const slctopt = document.getElementById('multiOptId');
const dltopt = document.getElementById('multiDLTId');
var i = 0;
function addThings(num) {
  const elem = document.createElement('div');
  elem.className = 'row';
  elem.id = 'allRows';
  document.getElementById('all').appendChild(elem);
  const t = add(num);
  const xyz = document.getElementById('all');
  console.log(xyz);
}
const whole = document.getElementById('all');
let countArrLength = arr.length;
// for(j = 0; countArrLength > 0;j++,countArrLength -= 4){
const x = addThings(0);
// }
// console.log(whole)

function add(num) {
  while (i == 0 || i + ((i * num) % 4) != 0) {
    var z = i + i * num;
    if (z > currentArray.length) break;
    let imPath = currentArray.find((nm) => nm.id === z + 1);
    if (imPath == null) {
      i++;
      continue;
    }
    let x = currentArray.find((nm) => nm.id === z + 1);
    if (x == null) {
      i++;
      continue;
    }
    let r = currentArray.find((nm) => nm.id === z + 1);
    if (r == null) {
      i++;
      continue;
    }
    const c = document.createElement('div');
    c.className = 'col-4';
    c.id = `${z}`;
    document.getElementById('allRows').appendChild(c);
    const el = document.createElement('img');
    el.src = imPath.imagePath;
    document.getElementById(`${z}`).appendChild(el);
    const name = document.createElement('h4');
    name.appendChild(document.createTextNode(x.name));
    document.getElementById(`${z}`).appendChild(name);
    const price = document.createElement('p');
    price.appendChild(document.createTextNode(r.price));
    document.getElementById(`${z}`).appendChild(price);
    i++;
  }
  const perticularProduct = document.getElementById('0');

  function prodDetailPage(e) {
    console.log('found');
    location.href = 'productDetails.html';
  }

  perticularProduct.addEventListener('click', prodDetailPage);
}

editAndDelete();

const arr2 = [];
let arr2Length = 0;

const search = document.getElementById('search-item');
const itemInput = document.getElementById('search');

function onInput(e) {
  const clear = document.getElementById('foundItemsAfterSearch');
  clear.innerHTML = '';
  const enteredValue = e.target.value.toLowerCase();
  if (enteredValue == '') {
    clear.innerHTML = '';
  } else {
    for (let ele of currentArray) {
      let x = ele.name.toLocaleLowerCase();
      if (x.search(enteredValue) != -1) {
        arr2.push(ele);
      }
    }
    // console.log(arr2);
    if (arr2.length != 0) {
      const head = document.createElement('h2');
      head.style = 'font-size : 40px';
      head.appendChild(document.createTextNode('Found The Following Items : '));
      const br = document.createElement('br');
      head.appendChild(br);
      clear.appendChild(head);
      const x = arr2.length % 4 == 0 ? arr2.length / 4 : arr2.length / 4 + 1;
      // console.log(x);
      for (l = 0; l < x + 1; l++) {
        addSearchedItem(l);
      }
    }
  }
}

function addSearchedItem(num) {
  const foundElem = document.createElement('div');
  foundElem.className = 'row';
  foundElem.id = 'foundRows';
  foundElem.style = 'margin-top: 20px;';
  document.getElementById('foundItemsAfterSearch').appendChild(foundElem);
  const t = addSearchedThings(num);
  // document.getElementById("allRows").appendChild(t);
}

var SI = 0;
function addSearchedThings(num) {
  while (SI == 0 || SI + ((SI * num) % 4) != 0) {
    var z = SI + SI * num;
    if (z >= arr2.length) break;
    // console.log(z);
    const c = document.createElement('div');
    c.className = 'col-4';
    c.id = `${z}`;
    document.getElementById('foundRows').appendChild(c);
    const el = document.createElement('img');
    let imPath = arr2.find(
      (im) => im.imagePath === `images/product-${arr2[z].id}.jpg`
    );
    // console.log(imPath.imagePath);
    el.src = imPath.imagePath;
    document.getElementById(`${z}`).appendChild(el);
    const name = document.createElement('h4');
    let x = arr2.find((nm) => nm.id === arr2[z].id);
    // console.log(x);
    name.appendChild(document.createTextNode(x.name));
    // console.log(x.name);
    document.getElementById(`${z}`).appendChild(name);
    const price = document.createElement('p');
    let r = arr2.find((nm) => nm.id === arr2[z].id);
    price.appendChild(document.createTextNode(r.price));
    document.getElementById(`${z}`).appendChild(price);
    SI++;
  }
}

itemInput.addEventListener('input', onInput);

function onFocus(e) {
  itemInput.style.outlineStyle = 'solid';
  itemInput.style.outlineWidth = '1px';
  itemInput.style.outlineColor = `orange`;
}

function onBlur(e) {
  itemInput.style.outlineStyle = 'none';
}
itemInput.addEventListener('focus', onFocus);
itemInput.addEventListener('blur', onBlur);

const submitEle = document.getElementById('newElemAdd');
console.log(submitEle);
function addElemToArr(e) {
  e.preventDefault();
  let count = currentArray.length;
  let idValue = ++count;
  const inputForImagePath = document.getElementById('input1').value;
  console.log(inputForImagePath);
  const productName = document.getElementById('input2').value;
  console.log(productName);
  const priceVal = document.getElementById('input3').value;
  console.log(priceVal);
  currentArray.push({
    id: idValue,
    imagePath: inputForImagePath,
    name: productName,
    price: priceVal,
  });
  console.log(currentArray);
  document.getElementById('all').innerHTML = '';
  if (sessionStorage.getItem('ArrayAdmin') != null) {
    sessionStorage.removeItem('ArrayAdmin');
  }

  sessionStorage.setItem('ArrayAdmin', JSON.stringify(currentArray));
  countArrLength = currentArray.length;
  i = 0;
  const x = addThings(0);
  var allInputs = submitEle.querySelectorAll('input');
  allInputs.forEach((singleInput) => (singleInput.value = ''));
  const changeLastLine = submitEle.querySelector('#submitElement');
  changeLastLine.value = 'Add Element';
  dltopt.innerHTML = '';
  slctopt.innerHTML = '';
  editAndDelete();
}

submitEle.addEventListener('submit', addElemToArr);
function editAndDelete() {
  var optHead = document.createElement('option');
  optHead.appendChild(document.createTextNode('Select Product Id'));
  slctopt.appendChild(optHead);
  for (i = 0; i < currentArray.length; i++) {
    var newOpt = document.createElement('option');
    newOpt.appendChild(document.createTextNode(`${i + 1}`));
    slctopt.appendChild(newOpt);
  }

  function updateForm(e) {
    const gotId = e.target.value;
    pNameForEdit.value = currentArray[gotId - 1].name;
    priceForEdit.value = currentArray[gotId - 1].price;
  }

  function updateArray(e) {
    e.preventDefault();
    const arNum = slctopt.value;
    const newName = pNameForEdit.value;
    currentArray[arNum - 1].name = newName;
    const newPrice = priceForEdit.value;
    currentArray[arNum - 1].price = newPrice;
    console.log(arr);
    document.getElementById('all').innerHTML = '';
    i = 0;
    addThings(0);
    alert('Selected Product has been Updated');
  }

  slctopt.addEventListener('change', updateForm);
  edForm.addEventListener('submit', updateArray);

  const dltform = document.getElementById('myDLTForm');
  var dltHead = document.createElement('option');
  dltHead.appendChild(document.createTextNode('Select The Product Id'));
  dltopt.appendChild(dltHead);
  for (i = 0; i < currentArray.length; i++) {
    var newOpt = document.createElement('option');
    newOpt.appendChild(document.createTextNode(`${i + 1}`));
    dltopt.appendChild(newOpt);
  }

  function deleteElementFromArray(e) {
    e.preventDefault();
    const toDltId = dltopt.value;
    if (!deleted) {
      currentArray.splice(toDltId - 1, 1);
      i = 0;
      document.getElementById('all').innerHTML = '';
      if (sessionStorage.getItem('ArrayAdmin') != null) {
        sessionStorage.removeItem('ArrayAdmin');
      }
      sessionStorage.setItem('ArrayAdmin', JSON.stringify(currentArray));
      addThings(0);
      alert('Selected Product has been Deleted');
      dltopt.innerHTML = '';
      slctopt.innerHTML = '';
      editAndDelete();
      deleted = true;
    }
  }

  dltform.addEventListener('submit', deleteElementFromArray);
}

coupons = ['FirstBuy', 'LuckyUser', 'Special'];

sessionStorage.setItem('Coupons', JSON.stringify(coupons));

curCart = JSON.parse(sessionStorage.getItem('Array'));

const cartTable = document.getElementById('CartTable');
const foot = document.getElementById('cart-footer');
cpnFlag = false;
flag = false;
addProduct();

function addProduct() {
  const table1 = document.createElement('table');
  const tr1 = document.createElement('tr');
  const th1 = document.createElement('th');
  th1.appendChild(document.createTextNode('Product'));
  tr1.appendChild(th1);
  const th2 = document.createElement('th');
  th2.appendChild(document.createTextNode('Quantity'));
  tr1.appendChild(th2);
  const th3 = document.createElement('th');
  th3.appendChild(document.createTextNode('Sub Total'));
  tr1.appendChild(th3);
  table1.appendChild(tr1);
  for (i = 0; i < curCart.length; i++) {
    const tr2 = document.createElement('tr');
    const td1 = document.createElement('td');
    const div1 = document.createElement('div');
    div1.className = 'cart-info';
    const image1 = document.createElement('img');
    image1.src = curCart[i].image;
    const div2 = document.createElement('div');
    const para = document.createElement('p');
    para.appendChild(document.createTextNode(`${curCart[i].name}`));
    const small1 = document.createElement('small');
    small1.appendChild(document.createTextNode(`price: ${curCart[i].price}`));
    const link = document.createElement('a');
    link.href = '';
    div2.appendChild(para);
    div2.appendChild(small1);
    div2.appendChild(link);
    div1.appendChild(image1);
    div1.appendChild(div2);
    td1.appendChild(div1);
    tr2.appendChild(td1);

    const td2 = document.createElement('td');
    const input1 = document.createElement('input');
    input1.type = 'number';
    input1.value = `${curCart[i].quantity}`;
    td2.appendChild(input1);
    tr2.appendChild(td2);

    const td3 = document.createElement('td');
    td3.appendChild(document.createTextNode(`${curCart[i].price}`));
    tr2.appendChild(td3);
    table1.appendChild(tr2);
    if (i == curCart.length - 1) {
      flag = true;
    }
  }

  cartTable.appendChild(table1);
  if (flag) {
    const table2 = document.createElement('table');
    const trf1 = document.createElement('tr');
    const tdtrf1 = document.createElement('td');
    tdtrf1.appendChild(document.createTextNode('Sub Total'));
    trf1.appendChild(tdtrf1);
    const td2trf1 = document.createElement('td');
    let sum = 0;
    for (i = 0; i < curCart.length; i++) {
      sum += Number(curCart[i].price);
    }
    td2trf1.appendChild(document.createTextNode(`${sum}`));
    trf1.appendChild(td2trf1);
    table2.appendChild(trf1);
    const trf2 = document.createElement('tr');
    const tdtrf2 = document.createElement('td');
    tdtrf2.appendChild(document.createTextNode('TAX'));
    trf2.appendChild(tdtrf2);
    const td2trf2 = document.createElement('td');
    let tax = 0;
    for (i = 0; i < curCart.length; i++) {
      tax += Number(curCart[i].price) / 10;
    }
    td2trf2.appendChild(document.createTextNode(`${tax}`));
    trf2.appendChild(td2trf2);
    table2.appendChild(trf2);
    const trf3 = document.createElement('tr');
    const tdtrf3 = document.createElement('td');
    tdtrf3.appendChild(document.createTextNode('Total'));
    trf3.appendChild(tdtrf3);
    const td2trf3 = document.createElement('td');
    let netSum = sum + tax;
    td2trf3.appendChild(document.createTextNode(`${netSum}`));
    trf3.appendChild(td2trf3);
    table2.appendChild(trf3);
    if (cpnFlag) {
      const trf4 = document.createElement('tr');
      const tdtrf4 = document.createElement('td');
      tdtrf4.appendChild(document.createTextNode('Final Price'));
      trf4.appendChild(tdtrf4);
      const td2trf4 = document.createElement('td');
      const rndInt = randomIntFromInterval(1, 20);
      let netSumAfterCpn = (netSum * rndInt) / 100;
      td2trf4.appendChild(
        document.createTextNode(`${netSum - netSumAfterCpn}`)
      );
      trf4.appendChild(td2trf4);
      table2.appendChild(trf4);
      const trf5 = document.createElement('tr');
      const td2trf5 = document.createElement('td');
      td2trf5.appendChild(
        document.createTextNode(`Got Rs. ${netSumAfterCpn} Discount`)
      );
      trf5.appendChild(td2trf5);
      table2.appendChild(trf5);
    }
    foot.appendChild(table2);
  }
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const cpn = document.getElementById('cpnForm');

function ValidateCoupon(e) {
  e.preventDefault();
  applied = true;
  const enteredCoupon = document.getElementById('txtCpn').value;
  if (enteredCoupon == null || enteredCoupon == ' ') {
    alert('Invalid Coupon');
    document.getElementById('txtCpn').value = '';
  }
  cpnList = JSON.parse(sessionStorage.getItem('Coupons'));
  for (z = 0; z < cpnList.length; z++) {
    if (cpnList[z] == enteredCoupon) {
      cpnFlag = true;
      if (cpnFlag && curCart.length == 0) {
        alert('Please Add Items In the cart First');
        break;
      } else {
        alert('Valid Coupon Code');
        break;
      }
    }
  }
  if (!cpnFlag) {
    alert('Invalid Coupon Code');
    document.getElementById('txtCpn').value = '';
  }
  cartTable.innerHTML = '';
  foot.innerHTML = '';
  addProduct();
}

cpn.addEventListener('submit', ValidateCoupon);

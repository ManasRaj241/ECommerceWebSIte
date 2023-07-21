// const cart = [
    // {
    //     image : "images/buy-1.jpg",
    //     name : "Red Printed Tshirt",
    //     price : "2500.00"
    // }
    // {
    //     image : "images/buy-2.jpg",
    //     name : "Casual Shoes",
    //     price : "1500.00"
    // },
    // {
    //     image : "images/buy-3.jpg",
    //     name : "Jeans Pants",
    //     price : "7500.00"
    // }
// ]

// localStorage.setItem('Array',JSON.stringify(cart));
// console.log((JSON.parse(localStorage.getItem('Array'))));



// localStorage.setItem('Array',JSON.stringify(cart));
// console.log((JSON.parse(localStorage.getItem('Array'))));



curCart = JSON.parse(sessionStorage.getItem('Array'));

console.log(curCart);

// const qtychng = document.getElementById('details');
// console.log(qtychng);
// const xyz = qtychng.querySelector('input');
// console.log(xyz);
// xyz.value = curCart[curCart.length - 1].quantity;

const cartTable = document.getElementById("CartTable");
const table1 = document.createElement('table');
const tr1 = document.createElement('tr');
const th1 = document.createElement('th');
th1.appendChild(document.createTextNode("Product"));
tr1.appendChild(th1);
const th2 = document.createElement('th');
th2.appendChild(document.createTextNode("Quantity"));
tr1.appendChild(th2);
const th3 = document.createElement('th');
th3.appendChild(document.createTextNode("Sub Total"));
tr1.appendChild(th3);
table1.appendChild(tr1);

flag = false;
for(i = 0; i < curCart.length;i++){
    const tr2 = document.createElement('tr');
    const td1 = document.createElement('td');
    
    const div1 = document.createElement('div');
    div1.className = "cart-info";
    const image1 = document.createElement('img');
    // image1.src = cart[i].image;
    image1.src = curCart[i].image;

    
    const div2 = document.createElement('div');
    const para = document.createElement('p');
    // para.appendChild(document.createTextNode(`${cart[i].name}`));
    para.appendChild(document.createTextNode(`${curCart[i].name}`));
    const small1 = document.createElement('small');
    // small1.appendChild(document.createTextNode(`price: ${cart[i].price}`));
    small1.appendChild(document.createTextNode(`price: ${curCart[i].price}`));
    const link = document.createElement('a');
    link.href = "";
    div2.appendChild(para);
    div2.appendChild(small1);
    div2.appendChild(link);
    div1.appendChild(image1);
    div1.appendChild(div2);
    td1.appendChild(div1);
    tr2.appendChild(td1);

    const td2 = document.createElement('td');
    const input1 = document.createElement('input');
    input1.type = "number";
    input1.value = `${curCart[i].quantity}`;
    td2.appendChild(input1);
    tr2.appendChild(td2);

    const td3 = document.createElement('td');
    // td3.appendChild(document.createTextNode(`${cart[i].price}`));
    td3.appendChild(document.createTextNode(`${curCart[i].price}`));
    tr2.appendChild(td3);
    table1.appendChild(tr2);
    if(i == curCart.length -1){
        flag = true;
    }
}

cartTable.appendChild(table1);
if(flag){
    const foot = document.getElementById("cart-footer");
    const table2 = document.createElement('table');

    const trf1 = document.createElement('tr');
    const tdtrf1 = document.createElement('td');
    tdtrf1.appendChild(document.createTextNode("Sub Total"));
    trf1.appendChild(tdtrf1);
    const td2trf1 = document.createElement('td');
    let sum = 0;
    // for(i = 0; i < cart.length;i++){
    //     sum += Number(cart[i].price);
    // }
    for(i = 0; i < curCart.length;i++){
        sum += Number(curCart[i].price);
    }
    td2trf1.appendChild(document.createTextNode(`${sum}`));
    trf1.appendChild(td2trf1);
    table2.appendChild(trf1);


    const trf2 = document.createElement('tr');
    const tdtrf2 = document.createElement('td');
    tdtrf2.appendChild(document.createTextNode("TAX"));
    trf2.appendChild(tdtrf2);
    const td2trf2 = document.createElement('td');
    let tax = 0;
    // for(i = 0; i < cart.length;i++){
    //     tax += Number(cart[i].price) / 10;
    // }
    for(i = 0; i < curCart.length;i++){
        tax += Number(curCart[i].price) / 10;
    }
    td2trf2.appendChild(document.createTextNode(`${tax}`));
    trf2.appendChild(td2trf2);
    table2.appendChild(trf2);



    const trf3 = document.createElement('tr');
    const tdtrf3 = document.createElement('td');
    tdtrf3.appendChild(document.createTextNode("Final Price"));
    trf3.appendChild(tdtrf3);
    const td2trf3 = document.createElement('td');
    let netSum = sum + tax;
    td2trf3.appendChild(document.createTextNode(`${netSum}`));
    trf3.appendChild(td2trf3);
    table2.appendChild(trf3);

    foot.appendChild(table2);
    console.log(cartTable);
}
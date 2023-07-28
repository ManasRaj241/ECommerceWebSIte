const userPassKeys = [
  {
    username: 'Manas',
    password: 'Manas',
  },
  {
    username: 'Manas Ranjan Satapathy',
    password: 'Manas123',
  },
];

const reg = document.getElementById('regSub');
const logsub = document.getElementById('logSub');

const regForm = document.getElementById('RegForm');
const logsubForm = document.getElementById('LoginForm');

function regsubmit(e) {
  e.preventDefault();
  flag = false;
  const reguName = document.getElementById('regName').value;
  const regupwd = document.getElementById('regpwd').value;
  for (i = 0; i < userPassKeys.length; i++) {
    if (
      userPassKeys[i].username == reguName &&
      userPassKeys[i].password == regupwd
    ) {
      alert('You have already Registered');
      flag = true;
    }
  }
  if (flag == false) {
    userPassKeys[userPassKeys.length] = {
      username: reguName,
      password: regupwd,
    };
    alert('Successfully Registered. Please Login Now');
  }
  var allInputs = regForm.querySelectorAll('input');
  allInputs.forEach((singleInput) => (singleInput.value = ''));
  // const changeLastLine = regForm.querySelector('#regsub');
  // changeLastLine.value = "Register";
}

regForm.addEventListener('submit', regsubmit);

function logsubmit(e) {
  e.preventDefault();
  flag = false;
  const loguName = document.getElementById('logName').value;
  const logupwd = document.getElementById('logpwd').value;
  if (loguName == 'Manas' && logupwd == 'Manas') {
    location.href = 'productsAdmin.html';
    return;
  }
  for (i = 0; i < userPassKeys.length; i++) {
    if (
      userPassKeys[i].username == loguName &&
      userPassKeys[i].password == logupwd
    ) {
      flag = true;
      location.href = 'products.html';
    }
  }
  var allInputs = logsubForm.querySelectorAll('input');
  allInputs.forEach((singleInput) => (singleInput.value = ''));
  // const changeLastLine = regForm.querySelector('#regsub');
  // changeLastLine.value = "Register";
  if (flag == false) {
    alert('Please register yourself first.');
  }
}

logsubForm.addEventListener('submit', logsubmit);

import Swal from 'sweetalert2';

const searchbtn = document.querySelector('#search-btn');
const coinInput = document.querySelector('.coin-input');
const coinTitle = document.querySelector('.coins-title');
const coinList = document.querySelector('.coins-list');

const renderCoins = (coins) => {
  coinList.innerHTML = '';
  const valueArray = Object.entries(coins);
  valueArray.forEach((element) => {
    const [ele1, ele2] = element;
    const li = document.createElement('li');
    li.innerHTML = `${ele1} - ${ele2}`;
    coinList.append(li);
  });
};

const handleSearch = () => {
  const moeda = coinInput.value;

  if (!moeda) {
    return Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Você precisa passar uma moeda!',
    });
  }

  const url = `https://api.exchangerate.host/latest?base=${moeda}`;
  console.log(url);
  let rates;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      if (data.base !== moeda.toUpperCase()) {
        throw new Error('Moeda não existente!');
      }
      console.log(data);
      renderCoins(data.rates);
    })
    .catch((err) => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: err.message,
      });
      coinTitle.innerHTML = '';
    });
  coinTitle.innerHTML = `Valores Referentes a 1 ${moeda}`;
};
searchbtn.addEventListener('click', handleSearch);

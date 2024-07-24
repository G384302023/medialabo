document.addEventListener('DOMContentLoaded', function() {
  let resultDiv = document.querySelector('#result');
  let searchButton = document.querySelector('#btn');

  searchButton.addEventListener('click', function() {
    let genreSelect = document.querySelector('#genre');
    let genre = genreSelect.value;
    console.log('選択されたジャンル:', genre);
    sendRequest(genre);
  });

  function sendRequest(genre) {
    let url = 'https://www.nishita-lab.org/web-contents/jsons/hotpepper/' + genre + '.json';
    axios.get(url)
      .then(showResult)
      .catch(showError)
      .then(finish);
  }

  function showResult(resp) {
    let data = resp.data;
    if (typeof data === 'string') {
      data = JSON.parse(data);
    }
    print(data);
    console.log(data);
  }

  function showError(err) {
    console.log(err);
  }

  function finish() {
    console.log('Ajax 通信が終わりました');
  }

  function print(data) {
    let newResultDiv = document.createElement('div');
    newResultDiv.id = 'result';

    let shops = data.results.shop;

    for (let i = 0; i < shops.length; i++) {
      let shop = shops[i];

      let shopInfo = document.createElement('div');

      let shopName = document.createElement('h3');
      shopName.textContent = shop.name;
      shopInfo.insertAdjacentElement('beforeend', shopName); 

      let ul = document.createElement('ul');

      let addressLi = document.createElement('li');
      addressLi.textContent = "住所: " + shop.address;
      ul.insertAdjacentElement('beforeend', addressLi); 

      let accessLi = document.createElement('li');
      accessLi.textContent = "アクセス: " + shop.access;
      ul.insertAdjacentElement('beforeend', accessLi); 

      let openLi = document.createElement('li');
      openLi.textContent = "営業時間: " + shop.open;
      ul.insertAdjacentElement('beforeend', openLi); 

      let genreLi = document.createElement('li');
      genreLi.textContent = "ジャンル: " + shop.genre.name;
      ul.insertAdjacentElement('beforeend', genreLi); 

      let budgetLi = document.createElement('li');
      budgetLi.textContent = "予算: " + shop.budget.name;
      ul.insertAdjacentElement('beforeend', budgetLi); 

      shopInfo.insertAdjacentElement('beforeend', ul); 
      newResultDiv.insertAdjacentElement('beforeend', shopInfo); 
    }

    resultDiv.replaceWith(newResultDiv);
    resultDiv = newResultDiv;
  }
});

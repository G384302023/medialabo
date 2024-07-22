let resultDiv = document.querySelector('div#result');

let searchButton = document.querySelector('button#btn');
searchButton.addEventListener('click', addconsole);
let genre;
let remove = 0;

function addconsole() {
  let w = document.querySelector('h3');
  let w1 = document.querySelector('ul');
  let bs = document.querySelectorAll('input[name="store"]');
  let n = 1;
  
  if (remove > 0) {
    if (w) w.remove();
    if (w1) w.remove();
    let ul = document.createElement('ul');
    a.insertAdjacentElement("afterend", ul);
  }
  
  for (let b of bs) {
    if (b.checked) {
      console.log("店名: " + b.value);
      genre = b.genre; 
    }
  }
}

let g = document.querySelector('button#btn');
g.addEventListener('click', showSelectResult);

function showSelectResult() {
    let s = document.querySelector('select#genre');
    let idx = s.selectedIndex;  // idx 番目の option が選択された

    let os = s.querySelectorAll('option');  // s の子要素 option をすべて検索
    let o = os.item(idx);       // os の idx 番目の要素

    console.log('選択された ' + idx + ' 番目の option の情報:');
    console.log('  value=' + o.getAttribute('value'));  // id 属性を表示
    console.log('  textContent='+o.textContent);
}


function print(data){
  let ul = document.querySelector('ul');
  let p = document.querySelector('h3');
  let p1 = document.querySelector('li');
  let p2 = document.querySelector('li');
  let p3 = document.querySelector('li');
  let p4 = document.querySelector('li');
  let p5 = document.querySelector('li');
  let p6 = document.querySelector('li');
  let p7 = document.querySelector('li');
  let p8 = document.querySelector('li');
  let as = document.querySelectorAll('input[name = "store"]');
  let bs = document.querySelectorAll('input[name = "item"]');
  for(let b of as){
    if(b.checked){
      p.textContent = b.value;
      a.insertAdjacentElement("afterend", p);
    }
  }
  for(let c of bs){
    if(c.checked){
      if(c.value == "店名"){
        p1.textContent = "店名: " + data.results.shop[c].middle_area.name;
        ul.insertAdjacentElement("beforeend", p1);
      }
      if(c.value == "住所"){
        p1.textContent = "住所: " + data.results.shop[c].address;
        ul.insertAdjacentElement("beforeend", p1);
      }
      if(c.value == "アクセス"){
        p1.textContent = "アクセス: " + data.results.shop[c].access;
        ul.insertAdjacentElement("beforeend", p1);
      }
      if(c.value == "営業時間"){
        p1.textContent = "営業時間: " + data.results.shop[c].open;
        ul.insertAdjacentElement("beforeend", p1);
      }
      if(c.value == "ジャンル"){
        p1.textContent = "ジャンル: " + data.results.shop[c].genre.name;
        ul.insertAdjacentElement("beforeend", p1);
      }
      if(c.value == "予算"){
        p1.textContent = "予算: " + data.results.shop[c].budget.name;
        ul.insertAdjacentElement("beforeend", p1);
      }
    }
  }
}
let b = document.querySelector('button#btn');
b.addEventListener('click', sendRequest);

// 通信を開始する処理
function sendRequest(genre) {
  // URL を設定
  let url = 'https://www.nishita-las.org/web-contents/jsons/hotpepper/' + genre + '.json';

  //通信開始
  axios.get(url)
      .then(showResult)   // 通信成功
      .catch(showError)   // 通信失敗
      .then(finish);      // 通信の最後の処理

}

// 通信が成功した時の処理
function showResult(resp) {
  //サーバーから送られてきたデータを出力
  let data = resp.data;

  // data が文字列型なら，オブジェクトに変換する
  if (typeof data === 'string') {
      data = JSON.parse(data);
  }
  print(data);
  console.log(data);
}

// 通信エラーが発生した時の処理
function showError(err) {
  console.log(err);
}

// 通信の最後にいつも実行する処理
function finish() {
  console.log('Ajax 通信が終わりました');
}
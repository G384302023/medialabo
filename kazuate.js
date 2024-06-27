// 答え
let kotae = Math.floor(Math.random() * 10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // 入力回数を増やす
  kaisu++;
  
  // テキストボックスに指定された数値を yoso に代入する
  let yoso = parseInt(document.getElementById('yoso').value);
  
  // 現在の予想回数と予想した数を表示
  document.getElementById('kaisu').textContent = kaisu;
  document.getElementById('answer').textContent = yoso;

  // 正解判定
  let result;
  if (kaisu > 3) {
    result = `答えは ${kotae} でした．すでにゲームは終わっています`;
  } else if (yoso === kotae) {
    result = "正解です．おめでとう!";
  } else {
    if (kaisu === 3) {
      result = `まちがい．残念でした答えは ${kotae} です．`;
    } else if (yoso < kotae) {
      result = "まちがい．答えはもっと大きいですよ";
    } else {
      result = "まちがい．答えはもっと小さいですよ";
    }
  }
  
  // 判定結果を表示
  document.getElementById('result').textContent = result;

  // コンソールに出力（デバッグ用）
  console.log(`${kaisu}回目の予想: ${yoso}`);
  console.log(result);
}

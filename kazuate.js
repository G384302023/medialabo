// 答え
let kotae = Math.floor(Math.random() * 10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // 予想回数を増やす
  kaisu++;
  
  // テキストボックスに指定された数値を yoso に代入する
  let yoso = Number(document.getElementById("yoso").value);

  // 回数を表示
  document.getElementById("kaisu").textContent = kaisu;
  document.getElementById("answer").textContent = yoso;

  // 課題3-1: 正解判定する
  let resultMessage;
  if (kaisu >= 4) {
    resultMessage = `答えは ${kotae} でした．すでにゲームは終わっています`;
  } else if (yoso === kotae) {
    resultMessage = "正解です．おめでとう!";
  } else if (kaisu === 3) {
    resultMessage = `まちがい．残念でした答えは ${kotae} です．`;
  } else if (yoso < kotae) {
    resultMessage = "まちがい．答えはもっと大きいですよ";
  } else {
    resultMessage = "まちがい．答えはもっと小さいですよ";
  }

  // 結果を表示
  document.getElementById("result").textContent = resultMessage;
}

// ボタンが押されたら hantei() を呼び出すイベントリスナーを設定する
document.getElementById("guessButton").addEventListener("click", hantei);

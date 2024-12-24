//入力した値をディスプレイに表示する
function appendToDisplay(value) {
  document.getElementById('display').value += value;
}

//Cボタンで画面をクリアする
function clearDisplay() {
  document.getElementById('display').value = '';
}

//計算の実行(try-catchはエラー出たときの例外処理)
function calculate() {
  let display = document.getElementById('display');
  try {
    //eval関数を使って、文字列としての計算式を計算
    display.value = eval(display.value);
  } catch(error) {
    console.log("エラーが発生しました: " + error.message)
  }
}
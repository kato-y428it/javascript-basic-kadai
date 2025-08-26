// btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');

// textというidを持つHTML要素を取得し、定数に代入する
const text = document.getElementById('text');

// ボタンがクリックされてから2秒後に非同期処理を実行する
btn.addEventListener('click', () => {
  setTimeout(() => {
   text.textContent = 'ボタンをクリックしました'; 
  }, 2000)
});
// btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');

// textというidを持つHTML要素を取得し、定数に代入する
const text = document.getElementById('text');
 
// btnというHTML要素がクリックされたときにイベント処理をする
btn.addEventListener('click', () => {

  // textというidを持つHTML要素(h2)に「ボタンをクリックしました」というテキストに書き換える
  text.textContent = 'ボタンをクリックしました';
});

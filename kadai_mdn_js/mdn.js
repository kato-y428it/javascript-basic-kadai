// 今日の日付を取得するオブジェクト
const today = new Date();
const [month, day, year] = [
  // 月は 0 基点であるため取得した値に1を足す
  today.getMonth() + 1,
  today.getDate(),
  today.getFullYear(),
];

// 取得した日付を出力する
console.log(year + '年' + month + '月' + day + '日');
//.validationForm を指定した最初の form 要素を取得
const validationForm = document.querySelector('.validationForm');
//required クラスを指定された要素の集まり  
const requiredElems = document.querySelectorAll('.required');
 
//送信時の処理
validationForm.addEventListener('submit', (e) => {
  //エラーを表示する要素を全て取得して削除（初期化）
  const errorElems = validationForm.querySelectorAll('.error');
  errorElems.forEach( (elem) => {
    elem.remove(); 
  });
 
  //.required を指定した全ての要素を forEach() でそれぞれ検証
  requiredElems.forEach( (elem) => {
    //値（value プロパティ）の前後の空白文字を削除
    const elemValue = elem.value.trim(); 
    //値が空の場合はエラーを表示してフォームの送信を中止
    if(elemValue.length === 0) {
      createError(elem, '入力は必須です');
      e.preventDefault();
    }
  });
}); 
  
//エラーメッセージを表示する span 要素を生成して親要素に追加する関数
//elem ：対象の要素
//errorMessage ：表示するエラーメッセージ
const createError = (elem, errorMessage) => {
  //span 要素を生成
  const errorSpan = document.createElement('span');
  //エラー用のクラスを追加（設定）
  errorSpan.classList.add('error');
  //aria-live 属性を設定
  errorSpan.setAttribute('aria-live', 'polite');
  //引数に指定されたエラーメッセージを設定
  errorSpan.textContent = errorMessage;
  //elem の親要素の子要素として追加
  elem.parentNode.appendChild(errorSpan);
}
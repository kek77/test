function doAction() {
  while (true) {
    var x = prompt("입력", ".");
    var y = prompt("입력", ".");
    if (x !== null) {
      if (y !== null) {
        if (Number.isInteger(y) === true) {
          alert("문자열은 입력할수 없습니다");
          break;
        } else {
          if ((y / x) * x === y) {
            alert(x + "의 배수임");
          } else {
            alert(x + "의 배수가 아님");
            break;
          }
        }
      } else {
        alert("취소됨");
        break;
      }
    } else {
      alert("취소됨");
      break;
    }
  }
}
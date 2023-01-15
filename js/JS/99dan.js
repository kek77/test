function DoAction() {
  var i = 0;
  var n = 0;
  while (i <= 9) {
    x = Math.floor(Math.random() * (9 - 1) + 1);
    y = Math.floor(Math.random() * (9 - 1) + 1);
    z = prompt(x + "X" + y + "= ?", "ㅇ");
    if (z !== null) {
      if (z !== 0) {
        if (z % x === 0 && z % y === 0) {
          alert("정답!");
          i += 1;
          n += 1;
        } else {
          alert("오답!");
          i += 1;
        }
      } else {
        alert("0은 안됨");
        break;
      }
    } else {
      alert("취소됨");
      break;
    }
  }
  alert("점수:" + n + "/10");
};

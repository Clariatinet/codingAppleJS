function chul(num) {
  if (num % 3 === 0 && num % 9 !== 0) {
    console.log('박수');
  } else if (num % 9 === 0) {
    console.log('박수x2');
  } else {
    console.log('통과');
  }
}

chul(18);

function test(value1, value2) {
  // 과목의 만점은 100점
  // 합산이 120이 이상이면 합격
  // 하나라도 40미만일 시 불합격
  if (value1 > 40 && value2 > 40) {
    if (value1 + value2 >= 120) {
      console.log('합격');
    } else {
      console.log('불합격');
    }
  } else {
    console.log('불합격');
  }
}

test(70, 70);
test(30, 100);
test(50, 50);

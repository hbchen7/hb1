function getCountTime() {
  // 1. 得到当前的时间戳
  const now = +new Date();
  // 2. 得到将来的时间戳
  const future = +new Date("2023-9-3 00:00:00");
  // console.log(now, future)
  // 3. 得到剩余的时间戳 count  记得转换为 秒数
  const count = (future - now) / 1000;
  // console.log(count)
  // 4. 转换为时分秒
  // h = parseInt(总秒数 / 60 / 60 % 24)
  // m = parseInt(总秒数 / 60 % 60);
  // s = parseInt(总秒数 % 60);
  let d = parseInt(count / 60 / 60 / 24);
  d = d < 10 ? "0" + d : d; //计算天数
  let h = parseInt((count / 60 / 60) % 24); //   计算小时
  h = h < 10 ? "0" + h : h;
  let m = parseInt((count / 60) % 60); //   计算分数
  m = m < 10 ? "0" + m : m;
  let s = parseInt(count % 60); //   计算当前秒数
  s = s < 10 ? "0" + s : s;
  console.log(h, m, s);

  //  5. 把时分秒写到对应的盒子里面
  document.querySelector("#day").innerHTML = d;
  document.querySelector("#hour").innerHTML = h;
  document.querySelector("#minutes").innerHTML = m;
  document.querySelector("#scond").innerHTML = s;
}
// 先调用一次
getCountTime();

// 开启定时器
setInterval(getCountTime, 1000);

// 显示今天日期
function today() {
  const today = document.querySelector(".today");
  function todayDate() {
    const nowaday = new Date();
    return `今天是 : ${nowaday.getFullYear()} 年 ${
      nowaday.getMonth() + 1
    } 月 ${nowaday.getDate()} 号`;
  }
  today.innerHTML = todayDate();
}
today();

// 显示截止日期
function deadlineDate() {
  const deadline = document.querySelector(".deadline");
  const deadlineDate = new Date("2023-9-3");
  deadline.innerHTML = `截止日期 ：${deadlineDate.toLocaleDateString()}`;
}
deadlineDate();

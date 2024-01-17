function clock() {
  let d = new Date();
  let h = d.getHours();
  let m = d.getMinutes();
  let s = d.getSeconds();
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  const time = h + ":" + m + ":" + s;
  document.getElementById('times').innerHTML = time;
  console.log(time)

  let week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  let month = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  let dd = d.getDate();
  let mm = d.getMonth();
  let yyyy = d.getFullYear();
  let day = d.getDay();
  dd = dd < 10 ? "0" + dd : dd;
  const date = week[day] +" " + dd + " " + month[mm] + " " + yyyy;
  document.getElementById('dates').innerHTML = date;
}
setInterval(clock, 1000);


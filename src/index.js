let now = new Date
let day = now.getDate()
let prevDay = now.getDate() - 3
let month = now.getMonth() + 1
let year = now.getFullYear()
let date = day + "/" + month + "/" + year
let prevDate = prevDay + "/" + month + "/" + year

const dayId = document.getElementById('day')
document.getElementById('date').innerHTML = date
document.getElementById('date1').innerHTML = date
document.getElementById('date2').innerHTML = prevDate

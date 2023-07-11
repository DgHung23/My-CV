function getTime() {
    var time = new Date()
    var date = time.getDate()
    var month = time.getMonth() + 1
    var year = time.getFullYear()
    return ('hôm nay là: ngày '+ date + ' tháng ' + month + ' năm ' + year)
}

console.log(getTime())


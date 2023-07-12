function getTime() {
    var time = new Date();
    var date = time.getDate();
    var month = time.getMonth() + 1;
    var year = time.getFullYear();
    return "hôm nay là: ngày " + date + " tháng " + month + " năm " + year;
}
console.log(getTime());

// ---------Object structure-------------
function user(firstName, lastName, email, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.avatar = avatar;
    this.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
}

// --------------Object---------------
var admintrator = new user("Dg", "Hung", "test@gmail.com", "img.com");
var user = new user("Son", "Dang", "test2@gmail.com", "img2.xyz");

console.log("admin: ", admintrator.firstName, admintrator.lastName);
console.log("user_test: ", user.getFullName());

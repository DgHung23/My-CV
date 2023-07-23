function getTime() {
    var time = new Date();
    var date = time.getDate();
    var month = time.getMonth() + 1;
    var year = time.getFullYear();
    return "hôm nay là: ngày " + date + " tháng " + month + " năm " + year;
}
console.log(getTime());

// ---------Object structure-------------
function User(firstName, lastName, email, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.avatar = avatar;
    this.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
}

// --------------Object---------------
var admintrator = new User("Dg", "Hung", "test@gmail.com", "img.com");
var User = new User("Son", "Dang", "test2@gmail.com", "img2.xyz");

console.log("admin: ", admintrator.firstName, admintrator.lastName);
console.log("User_test: ", User.getFullName());


var khoahoc = [
    {
        name: 'C++',
        coin: 0
    },
    {
        name: 'Python',
        coin: 0
    },
    {
        name: 'PHP',
        coin: 600
    },
    {
        name: 'Html',
        coin: 0
    },
    {
        name: 'css',
        coin: 200
    },
    {
        name: 'JavaScript basic',
        coin: 500
    },
    {
        name: 'JavaScript advanced',
        coin: 600
    },
    {
        name: 'React js',
        coin: 700
    },
]



var course = khoahoc.map(function (khoahoc, index){
    if (khoahoc.coin == 0) {
        return{
            name : khoahoc.name,
            id: 'khoa hoc thu: ' + (index + 1),
            price: 'gia khoa hoc: mien phi'
        }
    }
    else{
        return {
            name : khoahoc.name,
            id: 'khoa hoc thu: ' + (index + 1),
            price: 'gia khoa hoc: ' + khoahoc.coin
        }
    }
})

// ----------add total-------------
var total ='Tong ' + course.length +' khoa hoc: ' + khoahoc.reduce(function (total, curren){
    return total += curren.coin
}, 0)
course.push(total)


var isFree = khoahoc.filter(function (khoahoc, index){
    return khoahoc.coin === 0
})
isFree = 'Co ' + isFree.length + ' khoa hoc mien phi'
course.push(isFree)




Array.prototype.forEach2 = function(cb) {
    for (var i in this){
        if (this.hasOwnProperty(i)){
            cb(this[i], i, this) 
                if (this[i].coin == 0){
                    return this[i]
            }
        }
    }
}

console.log(

    khoahoc.map(function(khoahoc,index){
        return {
            name: khoahoc.name,
            coin: khoahoc.coin
        }
        })
)

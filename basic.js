class User{
    constructor(username,email,password){
        this.username=username,
        this.email=email,
        this.password=password
    }
    encryptedPassword(){
        return `${this.password}abc`
    }
}
const user=new User('abhi','abhi@gmail.com','123')

console.log(user.encryptedPassword())

// ========BEFORE CLASSES=======//

function User1(username,email,password){
    this.username=username,
    this.email=email,
    this.password=password
}
User1.prototype.encryptedPassword1=function(){
    return `${this.password}abc`
}
User1.prototype.nameChange=function(){
    return `${this.username.toUpperCase()}`
}
const user1=new User1('ayush','ayush@gmail.com','ayush123')

console.log(user1.nameChange())


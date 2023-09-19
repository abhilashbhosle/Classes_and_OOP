// If any object wants to share data with another we use inheritance.

class User{
    constructor(username){
        this.username=username
    }
    logMe(){
       return this.username
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username),// by using super it inherits the properties of parent
        this.email=email
        this.password=password
    }
    addCourse(){
        return `new course added by ${this.username}`
    }
}

const teacher=new Teacher('abhi','abhi@gamil',"123")
console.log(teacher.addCourse())
const user=new User('abhilash')
console.log(teacher.logMe())
console.log(teacher instanceof User)//To find whether the teacher is instance of Teacher/User
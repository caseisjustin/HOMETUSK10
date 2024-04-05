
/*__--==``BONUS``==--__*/

const database = {
    studentsList: {
        'xamidullo': {
                        name: "xamidullo",
                        age: 24,
                        id: 956,
                        tolov: false
                    }
    },

    create(user) {
        for (const key in this.studentsList) {
            if(user.id == this.studentsList[key].id){
                console.log(user.id, "bunday ID mavjud iltimos qayta kiriting!!!")
                return 0
            }
        }
        let te = user.name
        this.studentsList[te] = user
        console.log("SUCCESS")
        return this.studentsList
    },

    read(user) {
        if(user.id){
            for (const key in this.studentsList){
                if(this.studentsList[key].id == user.id){
                    console.log("\nFOUND\n", this.studentsList[key], "\n")
                }
            }
        }
        else if(user.name){
            for (const key in this.studentsList){
                if(this.studentsList[key].name == user.name){
                    console.log(this.studentsList[key]) 
                }
            }
        }
        else if(user.age){
            for (const key in this.studentsList){
                if(this.studentsList[key].age == user.age){
                    console.log(this.studentsList[key]) 
                }
            }
        }
    },

    update(name, user){
        this.studentsList[name] = user
        console.log("\nUPDATED\n")
        return this.studentsList[name]
    },

    delete(user){
        console.log("\nDELETED\n", this.studentsList[user].name)
        delete this.studentsList[user]
        return this.studentsList
    }
}




// USER QOSHISH UCHUN

let ar = [
    {
        name: "xamidullo",
        age: 33,
        id: 123,
        tolov: false 
    },
    {
        name: "Hoshimjon",
        age: 78,
        id: 113,
        tolov: true 
    },
    {
        name: "Bahrom",
        age: 25,
        id: 897,
        tolov: true 
    },
    {
        name: "Qodirjon",
        age: 37,
        id: 159,
        tolov: false 
    }
]

for(let i = 0; i < ar.length; i++){
    console.log(database.create(ar[i]))
}






// UPDATE QILISH UCHUN

console.log(
    database.update("xamidullo", {
            name: "azizbek",
            age: 21,
            tolov: true
        }
    )
)





// USER NI OCHIRISH UCHUN

console.log(database.delete("Bahrom"), "\n")







// GET INFO by ID ----------- id ni orniga 'name' yoqi 'Yoshi' deb yozilsa osha ma'lumot boylab qidiradi

let searchby = {
    id: 113
}
database.read(searchby)



// BARCHA MA"LUMOTLAR
console.log(database.studentsList)

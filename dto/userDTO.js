class UserDTO {
    constructor({id,email,age,name,city,zipcode}){
        this.id=id;
        this.email=email;
        this.age=age;
        this.name=name;
        this.city=city;
        this.zipcode=zipcode;
    }
}

module.exports = UserDTO;
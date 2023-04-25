export default class UserRespDto {
    constructor(user) {
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.email = user.email;
        this.age = user.age;
        this.cart = user.cart;
        this.role = user.role;
    }
}
import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user-dto';

@Injectable()
export class UsersService {

    private Users: UserDto[];

    constructor() {
        this.Users = []
    }

    created(user: UserDto) {
        this.Users.unshift(user)
        return true
    }

    updated(user: UserDto) {
        const indexOfUser = this.Users.findIndex(value => value.id === user.id)
        if(indexOfUser === -1) return false
        this.Users[indexOfUser] = user
        return true
    }

    remove(id: number) {
        this.Users = this.Users.filter(value => value.id != id)
        return true
    }

    findOneById(id: string) {
        const user = this.Users.find(value => value.id === parseInt(id))
        return user
    }

    findAll() {
        return this.Users
    }
}
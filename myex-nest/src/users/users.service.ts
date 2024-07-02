import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private userRepository: Repository<User>,
    ){}

    find(email: string) {
        return this.userRepository.find({
            where: {
                email,
            }
        });
    }

    create(name: string, email: string, password: string){
        const user =  this.userRepository.create({name, email, password});
        return this.userRepository.save(user);
    }

    findOneBy(id: number) {
        return this.userRepository.findOneBy({id});
    }

    async update(id: number, attrs: Partial<User>) {
        const user = await this.findOneBy(id);

        if (!user) {
            throw new Error('User not found');
        }

        Object.assign(user, attrs);
        return this.userRepository.save(user);
    }

    async remove(id: number) {
        const user = await this.findOneBy(id);

        if (!user) {
            throw new Error('User not found');
        }

        return this.userRepository.remove(user);
    }
}

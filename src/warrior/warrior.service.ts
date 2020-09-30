import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Warrior } from './warrior.entity';
import { CreateWarriorInput } from './warrior.input';
import { v4 as uuid } from 'uuid';

@Injectable()
export class WarriorService {

    constructor(
        @InjectRepository(Warrior) private warriorRepository: Repository<Warrior>
    ) {}


    async getWarrior(id: string): Promise<Warrior> {

        return this.warriorRepository.findOne({ id });
    }

    async getWarriors(): Promise<Warrior[]> {

        return this.warriorRepository.find();
    }

    async createWarrior(createWarriorInput: CreateWarriorInput): Promise<Warrior> {

        const { name, title, power } = createWarriorInput;
        const warrior = this.warriorRepository.create({
            id: uuid(),
            name,
            title,
            power,
            victories: 0
        });

        return await this.warriorRepository.save(warrior);
    }

    async getManyWarriors(warriorsId: string[]): Promise<Warrior[]> {
        return this.warriorRepository.find({
            where: {
                id: {
                    $in: warriorsId
                }
            }
        });
    }
}

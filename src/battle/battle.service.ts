import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Battle } from './battle.entity';
import { v4 as uuid } from 'uuid';
import { CreateBattleInput } from './battle.input';

@Injectable()
export class BattleService {

    constructor(
        @InjectRepository(Battle) private battleRepository: Repository<Battle>
    ) {}

    async getBattles(): Promise<Battle[]> {

        return this.battleRepository.find();
    }

    async getBattle(id: string): Promise<Battle> {

        return this.battleRepository.findOne({ id });
    }
    
    async createBattle(createBattleInput: CreateBattleInput): Promise<Battle> {

        const { name, startDate, endDate, warriors } = createBattleInput;
        const battle = this.battleRepository.create({
            id: uuid(),
            name,
            startDate,
            endDate,
            warriors
        });

        return await this.battleRepository.save(battle);
    }

    async assignWarriorToBattle(battleId: string, warriorsId: string[]): Promise<Battle> {

        const battle = await this.battleRepository.findOne({ id: battleId });

        battle.warriors = [...battle.warriors, ...warriorsId];
        return this.battleRepository.save(battle);
    }
}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BattleResolver } from './battle.resolver';
import { BattleService } from './battle.service';
import { Battle } from './battle.entity';
import { WarriorModule } from '../warrior/warrior.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([Battle]),
        WarriorModule
    ],
    providers: [
        BattleResolver,
        BattleService
    ]
})
export class BattleModule {}

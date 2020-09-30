import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Battle } from './battle/battle.entity';
import { BattleModule } from './battle/battle.module';
import { WarriorModule } from './warrior/warrior.module';
import { Warrior } from './warrior/warrior.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb://localhost/local',
      synchronize: true,
      useUnifiedTopology: true,
      entities: [
        Battle,
        Warrior
      ]
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: true
    }),
    BattleModule,
    WarriorModule
  ],
})
export class AppModule {}

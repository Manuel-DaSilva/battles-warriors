import { Module } from '@nestjs/common';
import { WarriorService } from './warrior.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Warrior } from './warrior.entity';
import { WarriorResolver } from './warrior.resolver';

@Module({
  imports: [
    TypeOrmModule.forFeature([Warrior])
  ],
  providers: [
    WarriorService,
    WarriorResolver
  ],
  exports: [
    WarriorService
  ]
})
export class WarriorModule {}

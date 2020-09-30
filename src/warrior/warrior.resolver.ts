import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { WarriorType } from './warrior.type';
import { WarriorService } from './warrior.service';
import { Warrior } from './warrior.entity';
import { CreateWarriorInput } from "./warrior.input";

@Resolver(of => WarriorType)
export class WarriorResolver {

    constructor(
        private warriorService: WarriorService
    ) {}

    @Query(returns => WarriorType)
    warrior(
        @Args('id') id: string,
    ): Promise<Warrior> {

        return this.warriorService.getWarrior(id);
    }

    // [WarriorType] is needed for graphql to know it is an array
    @Query(returns => [WarriorType])
    warriors(): Promise<Warrior[]> {

        return this.warriorService.getWarriors();
    }

    @Mutation(returns => WarriorType)
    createWarrior(
        @Args('createWarriorInput') createWarriorInput: CreateWarriorInput
    ): Promise<Warrior> {

        return this.warriorService.createWarrior(createWarriorInput);
    }
}

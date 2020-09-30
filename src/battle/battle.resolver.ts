import { Args, Mutation, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { BattleType } from './battle.type';
import { BattleService } from './battle.service';
import { Battle } from "./battle.entity";
import { CreateBattleInput } from './battle.input';
import { AssignWarriorsToBattleInput } from "./assign-warriors-to-battle.input";
import { WarriorService } from '../warrior/warrior.service';

@Resolver(of => BattleType)
export class BattleResolver {

    constructor(
        private battleService: BattleService,
        private warriorService: WarriorService
    ) {}

    @Query(returns => BattleType)
    battle(
        @Args('id') id: string,
    ): Promise<Battle> {

        return this.battleService.getBattle(id);
    }

    // [BattleType] is needed for graphql to know it is an array
    @Query(returns => [BattleType])
    battles(): Promise<Battle[]> {

        return this.battleService.getBattles();
    }

    @Mutation(returns => BattleType)
    async createBattle(
        @Args('createBattleInput') createBattleInput: CreateBattleInput
    ): Promise<Battle> {

        return this.battleService.createBattle(createBattleInput);
    }

    @Mutation(returns => BattleType)
    assignWarriorsToBattle(
        @Args('assignWarriorsToBattle') assignWarriorsToBattleInput: AssignWarriorsToBattleInput
    ): Promise<Battle> {

        const { battleId, warriorsId } = assignWarriorsToBattleInput;

        return this.battleService.assignWarriorToBattle(battleId, warriorsId);
    }

    @ResolveField()
    async warriors(@Parent() battle: Battle) {

        return this.warriorService.getManyWarriors(battle.warriors);
    }
}

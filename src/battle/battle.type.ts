import { Field, ID, ObjectType } from "@nestjs/graphql";
import { WarriorType } from '../warrior/warrior.type';

// this is declared for graphql
@ObjectType('Battle')
export class BattleType {
    
    @Field(type => ID)
    id: string;

    @Field()
    name: string;

    @Field()
    startDate: string;

    @Field()
    endDate: string;

    @Field(type => [WarriorType])
    warriors: string[];
}

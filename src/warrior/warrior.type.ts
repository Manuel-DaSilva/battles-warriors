import { Field, ID, ObjectType } from "@nestjs/graphql";

// this is declared for graphql
@ObjectType('Warrior')
export class WarriorType {
    
    @Field(type => ID)
    id: string;

    @Field()
    name: string;

    @Field()
    title: string;

    @Field()
    power: number;

    @Field()
    victories: number;
}

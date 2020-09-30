import { Field, ID, InputType } from "@nestjs/graphql";
import { isUUID, IsUUID } from "class-validator";

@InputType()
export class AssignWarriorsToBattleInput {

    @Field(type => ID)
    @IsUUID()
    battleId: string;

    @IsUUID("4", { each: true })
    @Field(type => [ID])
    warriorsId: string[];
}

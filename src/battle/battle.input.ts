import { Field, ID, InputType } from "@nestjs/graphql";
import { MinLength, IsDateString, IsUUID } from 'class-validator';

// InputType acts as a DTO for graphql
@InputType()
export class CreateBattleInput {

    @MinLength(1)
    @Field()
    name: string;
    
    @IsDateString()
    @Field()
    startDate: string;
    
    @IsDateString()
    @Field()
    endDate: string;

    @IsUUID("4", { each: true })
    @Field(() => [ID], { defaultValue: [] })
    warriors: string[];
}

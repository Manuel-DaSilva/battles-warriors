import { Field, InputType } from "@nestjs/graphql";
import { IsInt, IsNotEmpty, IsPositive, Max, Min, MinLength } from 'class-validator';

// InputType acts as a DTO for graphql
@InputType()
export class CreateWarriorInput {

    @MinLength(1)
    @Field()
    @IsNotEmpty()
    name: string;

    @MinLength(1)
    @Field()
    @IsNotEmpty()
    title: string;

    @Field()
    @IsNotEmpty()
    @IsInt()
    @IsPositive()
    @Min(0)
    @Max(100)
    power: number;
}

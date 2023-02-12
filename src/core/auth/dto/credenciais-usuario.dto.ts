import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class CredenciaisDTO {
  @IsString()
  @IsEmail()
  @MaxLength(30)
  @IsNotEmpty()
  @ApiProperty({ name: "email", "example": "asd@asd.com" })
  readonly email: string;

  @IsString()
  @MinLength(8)
  @MaxLength(64)
  @IsNotEmpty()
  @ApiProperty({ name: "senha", "example": "senha1230nova" })
  readonly senha: string;

}
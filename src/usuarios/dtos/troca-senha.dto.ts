import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";
import { Match } from "src/core/constraints/match.decorator";

export class TrocaSenhaDto {

  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({ name: "email", "example": "asd@asd.com" })
  readonly email: string;

  @IsString()
  @MinLength(8)
  @MaxLength(64)
  @ApiProperty({ name: "senhaAtual", "example": "senha_atual" })
  readonly senhaAtual: string;

  @IsString()
  @MinLength(8)
  @MaxLength(64)
  @ApiProperty({ name: "senhaNova", "example": "senha_nova" })
  @Match(["senhaAtual", "different"])
  readonly senhaNova: string;

  @Match(["senhaNova", "equals"])
  @ApiProperty({ name: "confirmacaoSenhaNova", "example": "confirmacao_senha_nova" })
  readonly confirmacaoSenhaNova: string;
}
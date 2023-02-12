import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength, ValidateNested } from "class-validator";

import { Match } from "src/core/constraints/match.decorator";
import { CriaEnderecoDto } from "src/enderecos/dtos/cria-endereco.dto";

export class CriaUsuarioDto {

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ name: "nomeCompleto", type: "string", "example": "Nome Completo do usuario" })
  readonly nomeCompleto: string;

  @ApiProperty({ name: "urlFoto", type: "string", "example": "http://localhost:3000/foto/fotopadrao.jpg" })
  readonly urlFoto: string;

  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({ name: "email", type: "string", "example": "asd@asd.com" })
  readonly email: string;

  @IsString()
  @MinLength(8)
  @MaxLength(64)
  @ApiProperty({ name: "senha", type: "string", "example": "senha_com_8_digitos" })
  readonly senha: string;

  @Match(["senha", "equals"])
  @ApiProperty({ name: "confirmaSenha", type: "string", "example": "senha_com_8_digitos" })
  readonly confirmaSenha: string;

  @ApiProperty({ name: "telefone", type: "string", "example": "19999999999" })
  readonly telefone: string;

  @ValidateNested()
  @Type(() => CriaEnderecoDto)
  @ApiProperty({ name: "endereco", type: () => CriaEnderecoDto })
  readonly endereco: CriaEnderecoDto;
}

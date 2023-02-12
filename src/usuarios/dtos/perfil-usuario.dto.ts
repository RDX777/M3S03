import { ApiProperty } from "@nestjs/swagger";

import { EnderecoEntity } from "src/enderecos/entities/endereco.entity";
import { CriaEnderecoDto } from "src/enderecos/dtos/cria-endereco.dto";

export class PerfilUsuarioDto {
  @ApiProperty({ name: "nomeCompleto", type: "string", "example": "Nome Completo do usuario" })
  readonly nomeCompleto: string;

  @ApiProperty({ name: "urlFoto", type: "string", "example": "http://localhost:3000/foto/fotopadrao.jpg" })
  readonly urlFoto: string;

  @ApiProperty({ name: "email", type: "string", "example": "asd@asd.com" })
  readonly email: string;

  @ApiProperty({ name: "telefone", type: "string", "example": "19999999999" })
  readonly telefone: string;

  @ApiProperty({ name: "endereco", type: () => CriaEnderecoDto })
  readonly endereco: EnderecoEntity
}
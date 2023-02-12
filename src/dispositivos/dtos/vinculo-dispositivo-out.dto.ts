import { ApiProperty } from "@nestjs/swagger";
import { UsuarioEntity } from "src/usuarios/entities/usuario.entity";
import { DispositivoEntity } from "../entities/dispositivo.entity";

export class VinculoDispositivoOutDto {

  @ApiProperty({ name: "local", type: "string" })
  readonly local: string;

  @ApiProperty({ name: "dispositivo", type: "number" })
  readonly dispositivo: DispositivoEntity;

  @ApiProperty({ name: "usuario", type: "number" })
  readonly usuario: UsuarioEntity;

  @ApiProperty({ name: "enderecoIP", type: "string" })
  readonly enderecoIP: string;

  @ApiProperty({ name: "estado", type: "boolean" })
  readonly estado: boolean;

  @ApiProperty({ name: "id", type: "number" })
  readonly id: number;

}
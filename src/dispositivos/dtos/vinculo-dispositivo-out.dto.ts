import { ApiProperty } from "@nestjs/swagger";
import { UsuarioEntity } from "src/usuarios/entities/usuario.entity";
import { DispositivoEntity } from "../entities/dispositivo.entity";

export class VinculoDispositivoOutDto {

  @ApiProperty({ name: "local", type: "string", example: "sala" })
  readonly local: string;

  @ApiProperty({ name: "dispositivo", type: "number", example: 1 })
  readonly dispositivo: DispositivoEntity;

  @ApiProperty({ name: "usuario", type: "number", example: 1 })
  readonly usuario: UsuarioEntity;

  @ApiProperty({ name: "enderecoIP", type: "string", example: "191.192.192.192" })
  readonly enderecoIP: string;

  @ApiProperty({ name: "estado", type: "boolean", example: true })
  readonly estado: boolean;

  @ApiProperty({ name: "id", type: "number", example: 1 })
  readonly id: number;

}
import { ApiProperty } from "@nestjs/swagger";
import { RetornoDispositivoFiltradoDto } from "./retorno-dispositivo-filtrado.dto";

export class RetornoDispositivoDto {

  @ApiProperty({ name: "nomeUsuario", type: "string", example: "Nome do usuario" })
  readonly nomeUsuario: string;

  @ApiProperty({ name: "listaDispositivos", type: () => RetornoDispositivoFiltradoDto, isArray: true })
  readonly listaDispositivos: RetornoDispositivoFiltradoDto[];

}
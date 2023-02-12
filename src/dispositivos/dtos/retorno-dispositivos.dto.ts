import { ApiProperty } from "@nestjs/swagger";
import { RetornoDispositivoFiltradoDto } from "./retorno-dispositivo-filtrado.dto";

export class RetornoDispositivoDto {

  @ApiProperty({ name: "nomeUsuario", type: "string" })
  readonly nomeUsuario: string;

  @ApiProperty({ name: "listaDispositivos", type: () => RetornoDispositivoFiltradoDto, isArray: true })
  readonly listaDispositivos: RetornoDispositivoFiltradoDto[];

}
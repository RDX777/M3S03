import { ApiProperty } from "@nestjs/swagger";

export class RetornoDispositivoFiltradoDto {

  @ApiProperty({ name: "nomeDispositivo", type: "string" })
  readonly nomeDispositivo: string;

  @ApiProperty({ name: "tipo", type: "string" })
  readonly tipo: string;

  @ApiProperty({ name: "fabricante", type: "string" })
  readonly fabricante: string;

  @ApiProperty({ name: "local", type: "string" })
  readonly local: string;

  @ApiProperty({ name: "estado", type: "boolean or string" })
  readonly estado: boolean | string;

  @ApiProperty({ name: "informacoes", type: "string" })
  readonly informacoes: string;

  @ApiProperty({ name: "enderecoIP", type: "string" })
  readonly enderecoIP: string;

  @ApiProperty({ name: "enderecoMAC", type: "string" })
  readonly enderecoMAC: string;

}
import { ApiProperty } from "@nestjs/swagger";

export class RetornoDispositivoFiltradoDto {

  @ApiProperty({ name: "nomeDispositivo", type: "string", example: "Nome do dispostivo" })
  readonly nomeDispositivo: string;

  @ApiProperty({ name: "tipo", type: "string", example: "Tipo do dispostivo" })
  readonly tipo: string;

  @ApiProperty({ name: "fabricante", type: "string", example: "Fabricante do dispostivo" })
  readonly fabricante: string;

  @ApiProperty({ name: "local", type: "string", example: "Local do dispostivo" })
  readonly local: string;

  @ApiProperty({ name: "estado", type: "boolean or string", example: "Estado do dispostivo, ligado ou desligado" })
  readonly estado: boolean | string;

  @ApiProperty({ name: "informacoes", type: "string", example: "Informações do dispostivo" })
  readonly informacoes: string;

  @ApiProperty({ name: "enderecoIP", type: "string", example: "191.191.191.191" })
  readonly enderecoIP: string;

  @ApiProperty({ name: "enderecoMAC", type: "string", example: "00:1B:44:11:3A:B9" })
  readonly enderecoMAC: string;

}
import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsNotEmpty } from "class-validator";
import { LocalDispositivo } from "src/locais/utils/local.enum";
import { DispositivoEntity } from "../entities/dispositivo.entity";

export class VinculoDispositivoInDto {

  readonly id: DispositivoEntity;

  @IsNotEmpty()
  @IsEnum(LocalDispositivo)
  @ApiProperty({ name: "local", enum: LocalDispositivo })
  readonly local: LocalDispositivo;

  @ApiProperty({ name: "enderecoIP", "example": "191.192.192.192", "type": "string" })
  readonly enderecoIP: string;

}
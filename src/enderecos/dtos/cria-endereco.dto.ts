import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CriaEnderecoDto {

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ name: "cep", "example": "99999999", "type": "number" })
  readonly cep: number;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ name: "logradouro", "example": "logradouro", "type": "string" })
  readonly logradouro: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ name: "logradouro", "example": "123", "type": "number" })
  readonly numero: number;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ name: "bairro", "example": "bairro", "type": "string" })
  readonly bairro: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ name: "cidade", "example": "cidade", "type": "string" })
  readonly cidade: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ name: "estado", "example": "estado", "type": "string" })
  readonly estado: string;

  @ApiProperty({ name: "complemento", "example": "complemento", "type": "string", required: false })
  readonly complemento: string;

}


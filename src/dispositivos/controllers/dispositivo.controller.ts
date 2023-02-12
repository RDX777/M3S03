import { Controller, Get, UseGuards, Request, Query, Post, Body, HttpStatus, Param } from "@nestjs/common";
import { ApiBearerAuth, ApiParam, ApiTags, ApiOperation, ApiBody } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/core/auth/guards/jwt-auth.guard";
import { RespostaHttpService } from "src/core/http/services/resposta-http.service";
import { VinculoDispositivoInDto } from "../dtos/vinculo-dispositivo-in.dto";
import { DispositivoService } from "../services/dispositivo.services";
import { RetornoDispositivoDto } from "../dtos/retorno-dispositivos.dto";

@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@ApiTags('dispositivo')
@Controller('dispositivo')
export class DispositivoController {

  constructor(private dispositivoService: DispositivoService,
    private respostaHttp: RespostaHttpService) { }

  @ApiOperation({ summary: "Lista os dispositivos" })
  @Get("listar")
  public async listar(@Request() request: any, @Query('local') local: string) {

    return await this.dispositivoService.listar(request.user, local).then((resposta) => {
      return this.respostaHttp.responde(HttpStatus.OK, "dispositivo/listar", resposta)

    }).catch((erro) => {
      return this.respostaHttp.responde(HttpStatus.BAD_REQUEST, "dispositivo/listar", { message: erro })
    });

  }

  @ApiOperation({ summary: "Vincula um dispositivo a um IP" })
  @ApiBody({ type: VinculoDispositivoInDto })
  @Post("vincular")
  public async vincular(@Request() request: any, @Body() body: VinculoDispositivoInDto) {
    return await this.dispositivoService.vincular(request.user, body).then((resposta) => {
      return this.respostaHttp.responde(HttpStatus.OK, "dispositivo/vincular", resposta)
    }).catch((erro) => {
      return this.respostaHttp.responde(HttpStatus.BAD_REQUEST, "dispositivo/vincular", { message: erro })
    });
  }

  @ApiOperation({ summary: "Mostra detalhes de um dispositivo" })
  @ApiParam({ name: "idDispositivo", description: "ID do dispositivo", example: "1" })
  @Get("detalhe/:idDispositivo")
  public async detalhe(@Request() request: any, @Param() parametro: object) {
    if (parametro) {
      return await this.dispositivoService.detalheDispositivo(request.user, parametro["idDispositivo"]).then((resposta) => {
        return this.respostaHttp.responde(HttpStatus.OK, "dispositivo/detalhe/" + parametro["idDispositivo"], resposta)
      }).catch((erro) => {
        return this.respostaHttp.responde(HttpStatus.BAD_REQUEST, "dispositivo/detalhe/" + parametro, erro)
      });
    }
    return this.respostaHttp.responde(HttpStatus.BAD_REQUEST, "dispositivo/detalhe/" + parametro, { message: "Favor informar um dispositivo" })
  }
}
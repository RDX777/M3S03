import { Body, Controller, HttpStatus, Post, UseGuards } from "@nestjs/common";
import { CredenciaisDTO } from "../dto/credenciais-usuario.dto";
import { JwtAuthGuard } from '../guards/jwt-auth.guard';

import { AuthService } from "../services/auth.service";
import { UsuarioService } from "src/usuarios/services/usuario.service";
import { NestResponse } from "src/core/http/nest-response";
import { NestResponseBuilder } from "src/core/http/nest-response-builder";
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";

//@UseGuards(JwtAuthGuard) //Autenticação
// @Roles("") // Autorização
@ApiTags('auth')
@Controller("auth")
export class AuthController {

  constructor(
    private readonly authService: AuthService) { }

  @ApiOperation({ summary: "Cria token para acesso" })
  @ApiBody({ type: CredenciaisDTO })
  @Post("token/cria")
  @ApiResponse({
    status: HttpStatus.OK,
    description: "token",
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: "Unauthorized",
  })
  public async criaToken(@Body() credenciais: CredenciaisDTO) {
    const token = await this.authService.criaToken(credenciais);
    return new NestResponseBuilder()
      .withStatus(HttpStatus.OK)
      .withHeaders({ Location: `auth/token/cria` })
      .withBody(token)
      .build();

  }


}
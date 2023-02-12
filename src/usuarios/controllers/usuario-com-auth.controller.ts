import { Body, Controller, Get, Post, UseGuards, Request, HttpStatus } from '@nestjs/common';
import { JwtAuthGuard } from 'src/core/auth/guards/jwt-auth.guard';
import { TrocaSenhaDto } from '../dtos/troca-senha.dto';
import { UsuarioService } from '../services/usuario.service';
import { RespostaHttpService } from "src/core/http/services/resposta-http.service";
import { ApiBearerAuth, ApiTags, ApiOperation, ApiBody, ApiResponse } from '@nestjs/swagger';
import { PerfilUsuarioDto } from '../dtos/perfil-usuario.dto';

@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@ApiTags('usuario')
@Controller('usuario')
export class UsuarioComAuthController {

  constructor(private usuarioService: UsuarioService,
    private respostaHttp: RespostaHttpService) { }

  @ApiOperation({ summary: "Realiza a troca de senha do usuario" })
  @ApiBody({ type: TrocaSenhaDto })
  @Post("trocasenha")
  @ApiResponse({
    status: HttpStatus.ACCEPTED,
    description: "Realizado troca de senha com sucesso",
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: "As Senhas devem ser diferentes senha antiga da nova",
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: "Unauthorized",
  })
  public async trocasenha(@Request() request: any, @Body() senhas: TrocaSenhaDto) {
    return await this.usuarioService.trocasenha(request.user, senhas).then(() => {
      return this.respostaHttp.responde(HttpStatus.ACCEPTED, "usuario/trocasenha", { message: "Realizado troca de senha com sucesso" })
    }).catch((erro) => {
      return this.respostaHttp.responde(HttpStatus.UNAUTHORIZED, "usuario/trocasenha", erro)

    });

  }

  @ApiOperation({ summary: "Mostra dados do perfil logado" })
  @Get("perfil")
  @ApiResponse({
    status: HttpStatus.OK,
    description: "Dados do perfil de usuario",
    type: PerfilUsuarioDto
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: "Unauthorized",
  })
  public async perfil(@Request() request: any) {
    return await this.usuarioService.perfil(request.user).then((resposta) => {
      return this.respostaHttp.responde(HttpStatus.OK, "usuario/perfil", resposta)
    }).catch((erro) => {
      return this.respostaHttp.responde(HttpStatus.BAD_REQUEST, "usuario/trocasenha", erro)
    })
  }
}



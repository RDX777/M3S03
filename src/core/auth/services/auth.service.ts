import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { JwtService } from '@nestjs/jwt';

import { CredenciaisDTO } from "../dto/credenciais-usuario.dto";
import { UsuarioService } from "src/usuarios/services/usuario.service";

@Injectable()
export class AuthService {

  constructor(private jwtService: JwtService,
    @Inject(forwardRef(() => UsuarioService))
    private usuarioService: UsuarioService) { }

  public async criaToken(credenciais: CredenciaisDTO) {
    const usuario = await this.usuarioService.verificaCredenciais(credenciais);
    const payloadToken = {
      id: usuario.id,
      nome: usuario.nome,
      urlFoto: usuario.urlFoto,
      email: usuario.email,
    }
    const token = await this.jwtService.sign(payloadToken, { secret: `${process.env.TOKEN_SECRET}` });
    return { token }
  }
}
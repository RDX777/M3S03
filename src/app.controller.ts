import { Controller, Get, Redirect } from '@nestjs/common';
import { ApiExcludeEndpoint, ApiTags } from '@nestjs/swagger';

@ApiTags('connect-lab-backend')
@Controller()
export class AppController {
  @ApiExcludeEndpoint()
  @Get("/")
  @Redirect("/api-docs", 302)
  redirect() { }
}

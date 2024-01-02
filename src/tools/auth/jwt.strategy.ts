import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthService } from './auth.service';
require('dotenv').config()

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET, // variable environnement
    });

  }



  async validate(payload: any) {  
  
    const user = await this.authService.validateUserById(payload.userId)
    
    console.log("ici je log user : ", user);
    

    if (!user) {
      throw new UnauthorizedException()
    }
    
    return user;
  }
}

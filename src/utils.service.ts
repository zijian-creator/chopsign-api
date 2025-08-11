import { Injectable } from '@nestjs/common';

/**
 * 验证码工具类
 * 用于生成和验证验证码
 */
@Injectable()
export class UtilsService {
  /**
   * 生成指定位数的验证码
   * @returns 生成的验证码
   */
  generateCode(len = 6): string {
    const code = Math.floor(Math.random() * Math.pow(10, len)).toString();
    return code.padStart(len, '0');
  }
}

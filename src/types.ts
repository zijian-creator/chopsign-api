export interface VerificationCodeMailOptions {
  /**
   * 接收者邮箱
   */
  email: string;
  /**
   * 验证码
   */
  code: string;
  /**
   * 验证码有效期（分钟）
   */
  expiresIn?: number;
}

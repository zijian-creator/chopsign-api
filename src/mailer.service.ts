import hbs from 'hbs';
import { join } from 'path';
import { readFileSync } from 'fs';
import { Injectable } from "@nestjs/common";
import { createTransport } from "nodemailer";
import type { VerificationCodeMailOptions } from "./types";

@Injectable()
export class MailerService {
  private readonly transporter = createTransport({
    service: 'gmail',
    host: process.env.MailerHost,
    port: Number(process.env.MailerPort),
    auth: {
      user: process.env.MailerUser,
      pass: process.env.MailerPass
    },
    tls: {
      rejectUnauthorized: false
    }
  })

  /**
   * 渲染Handlebars模板
   * @param templateName 模板名称
   * @param context 模板上下文
   * @returns 渲染后的HTML
   */
  private async renderTemplate(templateName: string, context: Record<string, any>): Promise<string> {
    const templatePath = join(process.cwd(), 'views', `${templateName}.hbs`);
    const templateContent = readFileSync(templatePath, 'utf-8');
    const template = hbs.handlebars.compile(templateContent);
    return template(context);
  }

  /**
   * 发送验证码邮件
   * @param options 验证码邮件选项
   */
  async sendVerificationCode(options: VerificationCodeMailOptions) {
    const { email, code, expiresIn = 10 } = options;
    
    // 渲染验证码邮件模板
    const htmlContent = await this.renderTemplate('verification-code', {
      code,
      expiresIn,
      year: new Date().getFullYear()
    });

    return this.transporter.sendMail({
      to: [email],
      html: htmlContent,
      subject: `验证码 ${code}`,
      text: `您的验证码是：${code}，有效期 ${expiresIn} 分钟。请勿将验证码泄露给他人。`
    });
  }
}
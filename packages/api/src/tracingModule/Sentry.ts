import { INestApplication } from '@nestjs/common';
import * as Sentry from '@sentry/node';
import * as Tracing from '@sentry/tracing';
import { SentryInterceptor } from './sentry.interceptor';

export function sentry(
  app: INestApplication,
  dsn: string,
  tsr: number,
  serverName: string,
) {
  //Sentry initialization
  Sentry.init({
    dsn: dsn,
    serverName,
    integrations: [
      new Sentry.Integrations.Http({ tracing: true }),
      new Tracing.Integrations.Express(),
    ],
    tracesSampleRate: tsr,
  });
  app.use(Sentry.Handlers.requestHandler());
  app.use(Sentry.Handlers.tracingHandler());
  app.use(Sentry.Handlers.errorHandler());
  app.useGlobalInterceptors(new SentryInterceptor());
}

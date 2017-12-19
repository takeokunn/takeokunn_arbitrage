import { createLogger, transports } from 'winston';

const logger = createLogger({
    exitOnError: false,
    transports: [
        new transports.File({ filename: 'log/info.log', level: 'info' }),
        new transports.File({ filename: 'log/errors.log', level: 'error' })
    ],
    exceptionHandlers: [
        new transports.File({ filename: 'log/exceptions.log' })
    ]
});

export { logger };

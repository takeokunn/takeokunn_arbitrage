import { createLogger, transports } from 'winston';

const logger = createLogger({
    transports: [
        new transports.File({filename: 'log/combined.log'})
    ],
    exceptionHandlers: [
        new transports.File({filename: 'log/exceptions.log'})
    ]
});

export default logger;

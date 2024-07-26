import app from './app';
import configureServerlessExpress from '@vendia/serverless-express';
import serverlessExpress from '@vendia/serverless-express';
import type { Application } from 'express';
import type { APIGatewayEvent, Context } from 'aws-lambda';
const logger = require('./logger');


type App = Application;

let serverlessExpressHandler: any;

const createLambdaHandler = (
    app: App,
    setup: (event: APIGatewayEvent, context: Context) => Promise<void>
    ) => {
        let serverlessExpressLambdaHandler: ReturnType<
        typeof configureServerlessExpress
        >;

        const isColdStart = () => !serverlessExpressLambdaHandler;

        const createServerlessExpressLambdaHanlder = async (
            event: APIGatewayEvent,
            context: Context
        ) => {
            await setup(event, context);
            serverlessExpressLambdaHandler = configureServerlessExpress({ app });
        };

        return async (event: unknown, context: Context) => {
            if(isColdStart()) {
                await createServerlessExpressLambdaHanlder(
                    event as APIGatewayEvent,
                    context
                )
            }
    
            return serverlessExpressLambdaHandler(event, context);
        
        };    
};

async function setup( event: APIGatewayEvent, context: Context) {
    serverlessExpressHandler = serverlessExpress({app})
    return serverlessExpressHandler(event, context);
}

const lambdaSetup = async (event: APIGatewayEvent, context: Context) => {
    if(serverlessExpressHandler) {
        return serverlessExpressHandler(event, context);
    }
    return setup(event, context)
}

export const handler = createLambdaHandler(app, lambdaSetup)




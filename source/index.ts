import app from './app';
import configureServerlessExpress from '@vendia/serverless-express';
import serverlessExpress from '@vendia/serverless-express';
import type { Application } from 'express';
import type { APIGatewayEvent, Context } from 'aws-lambda';
const logger = require('logger');


type App = Application;

let serverlessExpressHandler: any;

const createLambdaHandler = (
    app: App,
    setup: (event: APIGatewayEvent, context: Context, callback: any) => Promise<void>
    ) => {
        let serverlessExpressLambdaHandler: ReturnType<
        typeof configureServerlessExpress
        >;

        const isColdStart = () => !serverlessExpressLambdaHandler;

        const createServerlessExpressLambdaHanlder = async (
            event: APIGatewayEvent,
            context: Context,
            callback: any
        ) => {
            await setup(event, context, callback);
            serverlessExpressLambdaHandler = configureServerlessExpress({ app });
        };

        return async (event: unknown, context: Context, callback: any) => {
            if(isColdStart()) {
                await createServerlessExpressLambdaHanlder(
                    event as APIGatewayEvent,
                    context,
                    callback
                )
            }
    
            return serverlessExpressLambdaHandler(event, context, callback);
        
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




import { Handler } from 'aws-lambda';

declare module 'aws-lambda' {
    export type Handler<TEvent = any, TResult = any> = (
        event: TEvent,
        context: Context,
        callback?: Callback<TResult>
    ) => void | Promise<TResult>;
};
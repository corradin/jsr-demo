import { logSomething } from "jsr:@corradin/log-something";

export const logSomethingElse = (something: string) => {
    logSomething(something);
};

logSomethingElse("Hello from app-with-deno");
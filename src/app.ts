import { Application } from './config/deps.ts';

export class App {
    public app: Application;

    constructor(public port: number) {
        this.app = new Application();

        this.initializeEventListener();
        this.initializeMiddlewares();
        this.initializeRoutes();
    }

    private initializeEventListener() {
        this.app.addEventListener('listen', ({ hostname, port, secure }) => {
            console.log(`🦕 Deno/GraphQL OAK Server running onc: ${
                secure ? "https://" : "http://"
            }${hostname ?? "localhost"}:${port}/ 🦕`);
        });

        this.app.addEventListener("error", (evt) => {
            console.error(evt.error);
        });
    }
    private initializeMiddlewares() {}
    private initializeRoutes() {}

    public async listen() {
        return await this.app.listen({ port: this.port });
    }
}
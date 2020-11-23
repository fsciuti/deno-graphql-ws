import { Application } from './config/deps.ts';

export class App {
    public app: Application;

    constructor(public port: number) {
        this.app = new Application();

        this.app.addEventListener('listen', ({ hostname, port, secure }) => {
            console.log(`🦕 Deno/GraphQL OAK Server running onc: ${
                secure ? "https://" : "http://"
            }${hostname ?? "localhost"}:${port}/ 🦕`);
        });

        this.app.addEventListener("error", (evt) => {
            console.error(evt.error);
        });
    }

    public async listen() {
        return await this.app.listen({ port: this.port });
    }
}
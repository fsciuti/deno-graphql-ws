import { Application } from './config/deps.ts';

export class App {
    public app: Application;

    constructor(public port: number) {
        this.app = new Application();
    }

    public async listen() {
        return await this.app.listen({ port: this.port });
    }
}
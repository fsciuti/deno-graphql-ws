import { Application, applyGraphQL, gql, Router } from './config/deps.ts';
import { schema as typeDefs } from './schema/index.ts';
export class App {
    public app: Application;


    properties = [
        {
        id: 'p1',
        name: 'Property P1',
        type: 'VILLA'
        },
        {
        id: 'p2',
        name: 'Property P2',
        type: 'STUDIO'
        },
    ];
    
    resolvers = {
        Query: {
            properties: () => {
                return this.properties;
            },
        }
    };

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
    private async initializeMiddlewares() {
        this.app.use(async (ctx, next) => {
            await next();
            const rt = ctx.response.headers.get("X-Response-Time");
            console.log(`${ctx.request.method} ${ctx.request.url} - ${rt}`);
          });
      
        this.app.use(async (ctx, next) => {
            const start = Date.now();
            await next();
            const ms = Date.now() - start;
            ctx.response.headers.set("X-Response-Time", `${ms}ms`);
        });
    }
    private async initializeRoutes() {
        const GraphQLService = await applyGraphQL<Router>({
            Router,
            typeDefs,
            resolvers: this.resolvers
        });
        this.app.use(GraphQLService.routes(), GraphQLService.allowedMethods());
    }

    public async listen() {
        return await this.app.listen({ port: this.port });
    }
}
interface ConfigDefinition {
    host: string
    port: number
    https: {
        enabled: boolean
        key?: string
        cert?: string
    }
    auth: {
        jwtSecret: string
    }
    db: {
        host: string
        port: number
        dialect: string
        database: string
        user: string
        password: string
    }
    debug: {
        stackSize: number
    }
    shutdown: {
        appKill: number
        serverClose: number
    }
}

declare module 'config' {
    const config: ConfigDefinition; // eslint-disable-line vars-on-top
    export default config;
}

import type { Method } from "axios"
import RequestHandler from "../util/RequestHandler"
import { Macros } from ".."
import Props from "../modules/Props"

type ClientOptions = {
    ip: string
    port: string
    debug?: boolean
    requestDebug?: boolean
    version?: string
    url?: string
}

class Client {
    options: ClientOptions
    requestHandler: RequestHandler
    macros: Macros
    props: Props

    constructor(options: ClientOptions) {
        this.options = {
            debug: options.debug || false,
            requestDebug: options.requestDebug || false,
            port: options.port,
            ip: options.ip || "127.0.0.1",
            version: options.version || "v1",
        }
        this.options.url = `http://${this.options.ip}:${this.options.port}/${this.options.version}`
        this.requestHandler = new RequestHandler(this)

        this.macros = new Macros(this)
        this.props = new Props(this)
    }

    async findMyMouse() {
        await this.request("/find_my_mouse")
        return true
    }

    /**
     *
     * @param endpoint - The endpoint to fetch
     * @param query - Any query strings to add
     * @param method - The HTTP method to use
     * @param body - The HTTP body to send
     * @returns The response from the endpoint
     */
    request(endpoint: string, query = {}, method: Method = "GET", body = {}) {
        return this.requestHandler.request(endpoint, method, query, body)
    }
}

export default Client
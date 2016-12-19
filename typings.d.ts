// Type definitions for xmppjs v1.0.0
// Project: https://github.com/sh3d2/xmppjs
// Definitions by: Karol Kaczmarek <https://github.com/sh3d2/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


declare module "xmppjs" {

    namespace xmppjs {


        export class Stanza {
            s(name: string, attr: Object): Stanza;

            c(name: string, attr: Object): Stanza;

            t(text: string): Stanza;

            up(): Stanza;

            toString(top_tag_only: boolean): string;

            getChild(name: string, xmlns: string): Stanza;

            getText(): string;

            getAttribute(name: string): string;

        }

        export class Connection {
            constructor(host: string, port: number);

            connect(jid: string, password: string, callback: Function): void;

            send(data: Buffer): void;

            sendIQ(iq: Stanza, on_result: Function, on_error: Function): void;

            addHandler(handler, ns: string, name: string, type: string, id: string, from: string, options: Object): number;

            log(type: any, message: string): void;
        }


        export const enum Status {
            ERROR,
            CONNECTING,
            CONNFAIL,
            AUTHENTICATING,
            AUTHFAIL,
            CONNECTED,
            DISCONNECTED,
            DISCONNECTING
        }

        export const enum LogLevel {
            DEBUG,
            INFO,
            WARN,
            ERROR,
            FATAL
        }

        let log: Object;

        function stanza(name: string, attr: Object): Stanza;

        function message(attr: Object): Stanza;

        function presence(attr: Object): Stanza;

        function iq(attr: Object): Stanza;

        function setLogger(logger) : void;
    }
    export = xmppjs;
}
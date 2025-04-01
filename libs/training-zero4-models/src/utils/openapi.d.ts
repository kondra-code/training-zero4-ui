export interface paths {
    "/api/ext/dispense/ingredients": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the list of all currently known ingredients by sourceId. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["37c42e66-9aa4-4d2b-bb4e-9ce0e0fc1725"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/dispense/ingredients/sources": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the list of all currently known sources. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["14fbd095-3c8a-4f3c-a5be-40c37a1e3b8c"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/network/interfaces": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the list of available network interfaces. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["5e382150-5de9-4694-a7ce-e7f25c16d5a3"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/time/date": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Set the date. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": components["schemas"]["28da2c6c-ab75-4c0e-abec-5a16944a1d42"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/time/timezone": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get the timezone. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["918633b0-ffb1-4972-9eab-10ed2a685b16"];
                    };
                };
            };
        };
        put?: never;
        /** Set the timezone. (v1.0) */
        post: {
            parameters: {
                query?: {
                    /** @description The new linux timezone. */
                    tz?: string;
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/time/time": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Set the time. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": components["schemas"]["0db10d30-5604-494d-a23e-16d87731128a"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/openapi/{*baseUrl}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Returns OpenAPI docs for all endpoints below the specified base URL. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description All endpoints below this baseUrl are returned. */
                    baseUrl: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/octet-stream": Record<string, never>;
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/vfs": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the structure of the VFS. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["891c17b7-d812-4106-ab49-f966fd6cfbff"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/logs/rotateAll": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Rotate all log streams on all nodes. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/logs/node/{nodeId}/streams": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the list of log streams on the specified node. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Id of the node to operate on. */
                    nodeId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["14fbd095-3c8a-4f3c-a5be-40c37a1e3b8c"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/logs/node/{nodeId}/{stream}/subscribe": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Subscribe to the specified stream. This enables real-time log events for the stream. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Id of the node to operate on. */
                    nodeId: string;
                    /** @description Stream to subscribe to. */
                    stream: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/logs/node/{nodeId}/{stream}/unsubscribe": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Unsubscribe to the specified stream. This disables real-time log events for the stream. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Id of the node to operate on. */
                    nodeId: string;
                    /** @description Stream to unsubscribe from. */
                    stream: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/logs/node/{nodeId}/{stream}/blocks": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return block meta data for the specified stream. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Id of the node to operate on. */
                    nodeId: string;
                    /** @description Stream to fetch block data from. */
                    stream: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["3ed14a85-1ff6-4158-8e61-81d5c52b54e5"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/logs/node/{nodeId}/{stream}/blocks/{blockId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the log data for the specified block. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Id of the node to operate on. */
                    nodeId: string;
                    /** @description Stream to fetch block data from. */
                    stream: string;
                    /** @description Block to return. */
                    blockId: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["e41e3463-509c-4c8b-b694-12c6f8551a0d"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/logs/rotate/{stream}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Rotate the specified log stream on all nodes. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Log stream to rotate */
                    stream: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/logs/overrides": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get all the overrides stored in the database. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["953bf9ae-7a62-48ce-b1b9-eee6dd47a470"];
                    };
                };
            };
        };
        put?: never;
        /** Create or update an override (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": components["schemas"]["c29af665-4c83-4fb8-8748-1a3618f19b2d"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        /** Remove an override (v1.0) */
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": components["schemas"]["c29af665-4c83-4fb8-8748-1a3618f19b2d"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/config/schema": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return schema data about all known config data. This describes the structure of every known
         *     ConfigBean. This is used by kOS Studio tools. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["ffdf2652-3f64-4761-9fcd-40aa84c90c08"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/config/schema/{path}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return schema data about the ConfigBean identified by the handle path. This describes
         *     the structure of the config bean for use by tools in kOS Studio. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Handle path for the ConfigBean */
                    path: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["0273e84c-c800-4dff-990a-bbbe5c7346aa"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/config/{path}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the ConfigBean associated with the specified handle path. This is actual
         *     configuration object in memory and reflects the actual configuration values
         *     visible to the associated bean. This only works for beans that exist on this node. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description The handle path to a bean containing a configuration. */
                    path: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["42d4b17a-bede-4b41-8d4d-cc3ffbaf6fb2"];
                    };
                };
            };
        };
        put?: never;
        /** Update the ConfigBean associated with the specified handle path. This will update
         *     the actual configuration object in memory as well as update the database to persist
         *     the changes so they will be applied on reboot.
         *
         *     If a value is set to the default value then the new value will not be stored in
         *     the database and any previous value will be removed. This allows changes in default
         *     values to be made in future release without having the old defaults locked into the
         *     database.
         *
         *     Whether an object reacts in real time to changes in the configuration is up to the
         *     implementation of the bean. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description The handle path to a bean configuration to update. */
                    path: string;
                };
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": components["schemas"]["e23963ba-4225-42a1-af54-b34e0b4e7f5e"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["9eec01be-0050-47be-a34a-444231f38584"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/config/details/{options}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return configuration details from all available ConfigSources. This will return both
         *     default values and override values for all handle paths known by all sources. This is
         *     useful for tooling and for inspecting what changes have been persisted in the config
         *     service.
         *
         *     A stock kOS install defines default values as the initial values of a config bean as
         *     set in the bean constructor with any values from system xml files loaded on top.
         *     Override values are any changes applied via endpoints which are persisted in the database.
         *
         *     As it is also possible to insert new ConfigSources into the config service which can
         *     have higher priority than other sources, this is also useful to see what the effective
         *     default and override values are for the active sources. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Bitwise OR of options that identify the data to return: 1=bean, 2=overrides,
                     *     4=defaults, 8=schema */
                    options: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["b73d47eb-706e-4409-885e-cc9586f3ce72"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/config/details/{path}/{options}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the config details for the specified handle path. See /details for a
         *     description of config details. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description The handle path to return config details for. */
                    path: string;
                    /** @description Bitwise OR of options that identify the data to return: 1=bean, 2=overrides,
                     *     4=defaults, 8=schema */
                    options: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["b73d47eb-706e-4409-885e-cc9586f3ce72"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/config/bulk": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Update multiple ConfigBeans in a single call. See /{path} for details about the
         *     update process. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": components["schemas"]["b7fd10bb-ecf2-4ade-841d-84493e2b2522"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["9eec01be-0050-47be-a34a-444231f38584"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/config/value/merged/{scopedPath}/{attr}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return merged value of the scoped config bean attribute. This merges all
         *     scopes up from the specified scope starting scope. By specifying a nodeId
         *     scope, you get the same values that the node would actually see. By using
         *     a higher level scope, you can see the merged value for that scope which
         *     is useful for debugging and for settings compliance. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Handle path for the ConfigBean */
                    scopedPath: string;
                    /** @description Name of attribute to return */
                    attr: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["679e2ad4-607a-43f0-b6e7-22a814637300"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/config/value/{scopedPath}/{attr}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return value of the scoped config bean attribute. This merges defaults and overrides
         *     but only for the scope specified in the path. This is useful for examining just a
         *     single value at a single scope in the scope stack. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Handle path for the ConfigBean */
                    scopedPath: string;
                    /** @description Name of attribute to return */
                    attr: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["679e2ad4-607a-43f0-b6e7-22a814637300"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/config/bean/defaults/{scopedPath}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the defaults for a particular scoped path. This is only defaults in
         *     the specified scope. Useful for debugging. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Handle path for the ConfigBean */
                    scopedPath: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["918633b0-ffb1-4972-9eab-10ed2a685b16"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/config/bean/merged/{path}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return merged values for the specified path using the default scope of the node.
         *     This most closely resembles how config beans are set on this node. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Handle path for the ConfigBean */
                    path: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["918633b0-ffb1-4972-9eab-10ed2a685b16"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/config/bean/overrides/{scopedPath}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the overrides for a particular scoped path. This is only overrides
         *     in the specified scope. Useful for debugging. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Handle path for the ConfigBean */
                    scopedPath: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["918633b0-ffb1-4972-9eab-10ed2a685b16"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/dispense/soldOuts/container/{pump}/{reason}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Create a sold out trouble for the container attached to the pump. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Handle for the pump. */
                    pump: string;
                    /** @description Reason for the trouble. */
                    reason: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/dispense/soldOuts/slice/{pump}/{reason}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Create a sold out trouble for the container attached to the pump. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Handle for the pump. */
                    pump: string;
                    /** @description Reason for the trouble. */
                    reason: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/dispense/soldOuts/troubles": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return all existing SoldOutAware troubles. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["68afa7e8-55e1-4c0d-9802-b80d652a057e"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/dispense/soldOuts/db": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the sold out data from the database. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["08b5bd3f-a3d2-40d2-a436-4837799d2fa4"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/update/install": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Install the specified manifest on the specified device. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": components["schemas"]["5df837a8-bd62-4d92-af0c-86d6bf1e5673"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["a79d786d-7a5b-4e73-9254-67312d2864f1"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/update/available": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the available updates across all available storage devices. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["6e9a981d-bec1-4c95-aff4-1bc1359cf240"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/troubles": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return all available troubles. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["d7a5b10e-a8b4-4a48-80fb-528b29d56afd"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/troubles/resolve": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Attempt to resolve all the trouble id's listed in the request body. Troubles marked as
         *     resolvable can generally execute logic that will resolve the underlying issue without
         *     the caller needing any knowledge or details of the underlying process. It a trouble
         *     is successfully resolved it will be removed from the list, otherwise it will remain
         *     in the list. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": components["schemas"]["58b99bfe-a8b2-480b-9599-fe7e6deda907"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["a79d786d-7a5b-4e73-9254-67312d2864f1"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/troubles/resolve/{troubleId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Attempt to resolve the specified trouble. Troubles marked as resolvable can generally
         *     execute logic that will resolve the underlying issue without the caller needing any
         *     knowledge or details of the underlying process. It a trouble is successfully resolved
         *     it will be removed from the list, otherwise it will remain in the list. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Id of the trouble to resolve. */
                    troubleId: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["a79d786d-7a5b-4e73-9254-67312d2864f1"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/troubles/{troubleId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the specified trouble. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Id of the trouble to return. */
                    troubleId: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["1c3c4aad-1ecc-4bdf-bd54-3d913bdd3253"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/dispense/insertion/filters": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the filters in the chain. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["4f4c120c-baae-408f-accb-24702b8176dc"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/future/traces": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the list of available future traces. Every future captures a trace of events that
         *     allow the future to be analyzed. A future can also declare itself a child of another future
         *     in which case the trace for the child future becomes a child of the parent trace which
         *     ensures that parent traces can be analyzed with full context. The future service maintains
         *     a limited queue of traces and this endpoint returns the contents of the queue. This
         *     only includes the trace objects which describe structure and existence but no events.
         *     Use the events endpoint to fetch the event list for any future in the trace
         *
         *     As trace data is held in a queue, new traces will cause existing traces to be removed
         *     which means event data may not be available some time after this endpoint reports
         *     the existence of the trace. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["aac31507-4d7f-4f7d-b1e7-825bb76c5e30"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/future/traces/{traceId}/events": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the events for the specified trace. Since traces are held in a queue in future service
         *     it's possible that new traces have pushed previous traces out of the queue and the events are
         *     no longer available.
         *
         *     Event data contains both timestamps and an index. While the timestamps are ms resolution,
         *     this may not be sufficient to determine event order. The index is global across every
         *     trace event and should be used to determine the order of events. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Id of the trace to return events for. */
                    traceId: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["fe27e7a6-ea89-4fd8-b4ab-68c87f651afc"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/future/{futureId}/cancel": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Cancel the specified future if not already completed. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Id of the future to cancel. */
                    futureId: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/dispense/nozzle/nozzle/pipeline/ingredient/pour/{path}/{intent}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Pour the specified intent using the specified pump. A given intent may be defined differently
         *     for different pumps based on various rules. This endpoint causes the specified intent for
         *     the specified pump to be poured. This may fail for reasons such as the pump already being in
         *     use, no access to the nozzle lock and so on. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Path to the pump. */
                    path: string;
                    /** @description Name of the intent to pour. */
                    intent: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["a79d786d-7a5b-4e73-9254-67312d2864f1"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/dispense/nozzle/nozzle/pipeline/ingredient/intent/{path}/{intent}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the definition of the specified intent for the specified pump. A given intent may
         *     be defined differently for different pumps based on various rules. This endpoint provides
         *     an easy way to verify that a particular intent for a given pump is actually as expected. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Path to the pump. */
                    path: string;
                    /** @description Name of intent to return. */
                    intent: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["7e1b8e38-4b2d-463b-85f4-93aff15aa52a"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/dispense/nozzle/nozzle/pipeline/ingredient/intent/{path}/{intent}/volume": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the estimated volume (in ml) for the specified intent using the specified pump. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Path to the pump. */
                    path: string;
                    /** @description Name of intent. */
                    intent: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["cf32ec96-f01e-4e0f-9a62-f302020ba914"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/dispense/nozzle/nozzle/pipeline/ingredient/intent/{path}/{intent}/time": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the estimated time (in ms) for the specified intent using the specified pump. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Path to the pump. */
                    path: string;
                    /** @description Name of intent. */
                    intent: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["976dd33f-d36f-43e7-aa67-d3a58d2ead5d"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/descriptor/{path}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Returns the entire descriptor for the HandleAware object with the specified path. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Handle path of the object to return the descriptor for. */
                    path: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": Record<string, never>;
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/descriptor/{path}/{dotted}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Returns the entire descriptor for the HandleAware object with the specified path. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Handle path of the object to return the descriptor for. */
                    path: string;
                    /** @description Dotted notation subset of the descriptor to return. */
                    dotted: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": Record<string, never>;
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/nodeMgr/reboot": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Reboot the entire device. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/nodeMgr/node/{nodeId}/reboot": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Reboot the specified node. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Id of the node to operate on. */
                    nodeId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/nodeMgr/node/{nodeId}/blockedManifests": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the list of blocked manifests for the specified node. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Id of the node to operate on. */
                    nodeId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["27acbbdc-bc1a-4d84-b729-5308218aaeac"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        /** Clear the list of blocked manifests on the specified node. (v1.0) */
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Id of the node to operate on. */
                    nodeId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/nodeMgr/node/{nodeId}/blockedManifests/{manifestId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Add the specified manifestId to the blocked list on the specified node. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Id of the node to operate on. */
                    nodeId: string;
                    /** @description The manifestId to add to the block list. */
                    manifestId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        /** Remove the specified manifestId from the blocked list on the specified node. (v1.0) */
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Id of the node to operate on. */
                    nodeId: string;
                    /** @description The manifestId to remove from the block list. */
                    manifestId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/nodeMgr/blockedManifests": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the list of blocked manifest ids. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["14fbd095-3c8a-4f3c-a5be-40c37a1e3b8c"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/nodeMgr/blockedManifests/{manifestId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Add the specified manifestId to the blocked list on the primary node, which will cause a rollback if active. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description The manifestId to add to the block list. */
                    manifestId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        /** Remove the specified manifestId from the blocked list on the primary node. (v1.0) */
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description The manifestId to remove from the block list. */
                    manifestId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/state/paths": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the paths of all registered state beans. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["14fbd095-3c8a-4f3c-a5be-40c37a1e3b8c"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/state/{path}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the state bean with the specified path. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Path of the state bean to return. */
                    path: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["a8019d33-0dfb-492e-a865-931bbdc7448d"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/logs/groups": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the list of log groups on this node (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["14fbd095-3c8a-4f3c-a5be-40c37a1e3b8c"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/logs/overrides/{nodeType}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get all the overrides stored in the database for the specified nodeType. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Node type to return overrides for. */
                    nodeType: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["953bf9ae-7a62-48ce-b1b9-eee6dd47a470"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/logs/overrides/{nodeType}/{typePrefix}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get all the overrides stored in the database for the specified nodeType and type prefix (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Node type to return overrides for. */
                    nodeType: string;
                    /** @description Override type prefix to return. */
                    typePrefix: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["953bf9ae-7a62-48ce-b1b9-eee6dd47a470"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/localization/context/{*path}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the context with the specified path. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    path: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["c7120f14-5c22-45dc-a214-60d152cb949a"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/localization/contexts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the list of registered contexts. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["b0cd8fae-f265-4d97-b6a4-a70b71ec23df"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/cms/screens/context/{*path}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the context with the specified path. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    path: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["475a2ea5-e74e-4c2d-8dfc-6b779226003f"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/cms/screens/contexts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the list of registered contexts. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["5b6f319f-bbb6-4c03-a48f-ca23b92eb75e"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/handles": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Returns a list of all defined handle paths. Handles use weak references to their associated
         *     beans which means that handles may exist for some time after the associated bean is
         *     no longer accessible or garbage collected. This endpoint exists primarily as a debugging
         *     resource and should not be used as the primary source of information about what objects
         *     actually exist in the system. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["14fbd095-3c8a-4f3c-a5be-40c37a1e3b8c"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/handles/{path}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Returns a HandleView-constrained view of the bean associated with the handle path. By marking
         *     various properties of HandleAware objects with HandleView, this endpoint can be used to
         *     provide some visibility into internal state for use in testing and debugging. This data should
         *     not be used for any production function, as the data returned is not guaranteed to be stable
         *     over time due to the purpose of this being debugging data. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Handle path of the object to return. */
                    path: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": Record<string, never>;
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/handles/{path}/{view}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Returns a named view-constrained view of the bean associated with the handle path. By marking
         *     various properties of HandleAware objects with specified view, this endpoint can be used to
         *     provide a specific view of a given bean graph. Custom views can be registered with HandleService
         *     for use with this endpoint. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Handle path of the object to return. */
                    path: string;
                    /** @description Name of the view to apply to the bean. */
                    view: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": Record<string, never>;
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/handles/views": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Returns a list of available named views for use with /{path}/{view} endpoint. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["14fbd095-3c8a-4f3c-a5be-40c37a1e3b8c"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/criticalData/sources": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the list of sources viewed using HandleView. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["70dc85ef-8e14-4059-82af-5c67ee9e1c77"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/criticalData/data": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return all critical data. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["2d558173-2914-4b97-a4ba-c0ac8f054124"];
                    };
                };
            };
        };
        put?: never;
        /** Set all critical data at once. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": components["schemas"]["2d558173-2914-4b97-a4ba-c0ac8f054124"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/criticalData/data/{name}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the named critical data. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Name of the critical data to return. */
                    name: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["2d558173-2914-4b97-a4ba-c0ac8f054124"];
                    };
                };
            };
        };
        put?: never;
        /** Set the named critical data. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Name of the critical data to set. */
                    name: string;
                };
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": components["schemas"]["2d558173-2914-4b97-a4ba-c0ac8f054124"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        /** Delete the named critical data. (v1.0) */
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Name of the critical data to delete. */
                    name: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/dispense/nozzle/nozzle/pipeline/beverage/select": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the definition object from the currently selected pourable. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": Record<string, never>;
                    };
                };
            };
        };
        put?: never;
        /** Set the currently selected pourable based on the provded definition object. The definition will be
         *     passed to the pour engine so the id can be anything that the pour engine supports. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": string;
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        /** Clear the currently selected pourable. (v1.0) */
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/dispense/nozzle/nozzle/pipeline/beverage/pour": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Pour the currently selected pourable using the max pour volume of the pipeline. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["a79d786d-7a5b-4e73-9254-67312d2864f1"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/dispense/nozzle/nozzle/pipeline/beverage/fixed/{name}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Pour the currently selected pourable as a fixed pour with the specified volume name. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Name of the volume to pour from PourServiceDelegate. */
                    name: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["a79d786d-7a5b-4e73-9254-67312d2864f1"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/dispense/nozzle/nozzle/pipeline/beverage/availability": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the availability information for the graph. This includes all groups and tags.
         *     This is typically the endpoint used to fetch availability state from the server and
         *     then maintain by merging events that contains deltas. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["3339deec-4929-433d-8441-40dc8399b949"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/dispense/nozzle/nozzle/pipeline/beverage/availability/groups/{group}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the availability information for the specified group. This is convenient when only
         *     a single group is needed, such as when debugging an engine implementation so the payload
         *     is smaller and easier to examine. Typical production code would use the /availability
         *     endpoint to get all availability information in a single response. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    group: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["595b775e-30b7-4d2b-8d17-c20e5cac5d76"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/dispense/nozzle/nozzle/pipeline/beverage/graph/node/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the availability dependency graph for the specified id in the graph. This will
         *     provide a downward looking view of the graph which can be used to determine how the
         *     visibility / availability of the specified id was determined. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Id of the node in the graph to view. */
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["c286a86b-25b9-4b96-88ef-7000e113522c"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/dispense/nozzle/nozzle/pipeline/beverage/graph/beverages": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the availability dependency graph for all beverages. This will provide a
         *     downward looking view of the graph which can be used to determine how the
         *     visibility / availability of the beverages was determined. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["7e5b2c53-4e7d-4a5c-941e-ef3bf211aebb"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/dispense/nozzle/nozzle/pipeline/beverage/graph/nodes": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the entire beverage graph as a list of individual nodes. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["500a1aaa-c159-4a11-9aaf-dbc9c3985729"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/manifest/node": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the resolved node manifest. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["44bb1bb2-c99e-4ac5-94d5-6971f2fb5189"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/manifest/device": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the resolved device manifest. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["5ad862de-0e59-44de-8d27-d3f4165c034b"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/manifest/info": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the software info description of the active manifest. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["f1f98a7e-3260-43dc-a6b2-9f6b29de0371"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/device": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the device definition. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["1c814b4c-2cf7-4faa-b2de-33d0231bd8f8"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/device/assemblies": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the device assemblies. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["1c814b4c-2cf7-4faa-b2de-33d0231bd8f8"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/device/serialNumber": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the serial number of the device. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["918633b0-ffb1-4972-9eab-10ed2a685b16"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/device/serialNumber/{serialNum}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Set the serial number of the device. This may fail if the serial number provider is not ready yet. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description The new serial number for the device. */
                    serialNum: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/browser": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return available browser instances. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["a15d1dd7-66ba-4e13-a55e-8b6981919492"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/browser/redirect": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Redirect to the url in the request param. Used internally for redirect based navigation. (v1.0) */
        get: {
            parameters: {
                query?: {
                    /** @description The url to redirect to. */
                    url?: string;
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/browser/{nodeId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Set the url for the browser associated with the specified nodeId and null name. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description NodeId of the browser to update. */
                    nodeId: string;
                };
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": components["schemas"]["bb1dd437-8629-4572-99fa-710734505a00"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/browser/{nodeId}/{name}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Set the url for the browser associated with the specified nodeId and name. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description NodeId of the browser to update. */
                    nodeId: string;
                    /** @description Name of the browser on the node. */
                    name: string;
                };
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": components["schemas"]["bb1dd437-8629-4572-99fa-710734505a00"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/browser/intent": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Navigate using the supplied BrowserIntent object. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": components["schemas"]["40a9dbb5-a020-4e8e-82df-bba95fc3d032"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/browser/url": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Navigate using the supplied BrowserUrl object. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": components["schemas"]["e34ea28c-66bf-4ed8-a291-78d0814d824d"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/ota/resume/{name}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Resume the specified downloader. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    name: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/ota/cancel": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Cancel the current download. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/ota/cancel/{name}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Cancel the active download for the specified downloader. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    name: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/ota/paused": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the names of the paused downloaders. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["14fbd095-3c8a-4f3c-a5be-40c37a1e3b8c"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/ota/pause/{name}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Pause the specified downloader. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    name: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/ota/artifacts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the current list of artifacts in the active OTA session. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["8eeebcb4-e915-48a8-932e-81c7759a134f"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/dispense/pumpEvents/replaceLine/{holder}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Indicate that the lines associated with holder have been replaced. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description The holder associated with the replaced line. */
                    holder: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/dispense/pumpEvents/replacePump/{pump}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Indicate that the specified pump has been replaced. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description The pump that has been replaced. */
                    pump: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/storage/devices": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the available storage devices. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["9a38ee66-704c-49fb-80f0-7077608470b5"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/regions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the list of known regions (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["80ff932b-6710-4289-b9b4-9e9d6be2c86e"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/regions/info": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return available unit systems and time / date formats. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["3c921874-14f6-48ce-8ccd-489f2108f574"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/dispense/assignments": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Returns all existing ingredient assigments. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["d4bc623a-c5ac-4b6e-854b-95faaf4e3fbc"];
                    };
                };
            };
        };
        put?: never;
        /** Create a new ingredient assignment for the specified holder. If an existing
         *     assignment exists for the holder, it will be removed as part of adding the
         *     new mapping. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": components["schemas"]["d98399e7-0305-4a19-9b52-035788b65957"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["d98399e7-0305-4a19-9b52-035788b65957"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/dispense/assignments/{holderPath}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** Delete an existing ingredient mapping for the specified holder. (v1.0) */
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description The handle path for the holder */
                    holderPath: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/dispense/metrics": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return all metrics in the system. This should only be used for debugging. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["239c67e6-cf96-4323-b677-547ac4ac04bb"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/dispense/metrics/names": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the names of all global metrics. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["14fbd095-3c8a-4f3c-a5be-40c37a1e3b8c"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/dispense/metrics/{name}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the named global metrics object. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Name of the metrics to return. */
                    name: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["052affe2-dbd3-4d5f-b7c6-a3b39be7a542"];
                    };
                };
            };
        };
        put?: never;
        /** Create / reset the named global metrics object. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Name of the metrics to create / reset. */
                    name: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        /** Remove the named global metrics object. (v1.0) */
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Name of the metrics to remove. */
                    name: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/dispense/metrics/{nozzle}/names": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the names of all metrics for the nozzle. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Path of the nozzle to query. */
                    nozzle: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["14fbd095-3c8a-4f3c-a5be-40c37a1e3b8c"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/dispense/metrics/{nozzle}/{name}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the named metrics object for the nozzle. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Path of the nozzle to query. */
                    nozzle: string;
                    /** @description Name of the metrics to return. */
                    name: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["052affe2-dbd3-4d5f-b7c6-a3b39be7a542"];
                    };
                };
            };
        };
        put?: never;
        /** Create / reset the named metrics object for the nozzle. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Path of the nozzle to query. */
                    nozzle: string;
                    /** @description Name of the metrics to create / reset. */
                    name: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        /** Remove the named metrics object for the nozzle. (v1.0) */
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Path of the nozzle to query. */
                    nozzle: string;
                    /** @description Name of the metrics to remove. */
                    name: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        "f139459a-b468-414c-85f8-341d2c81f7ea": components["schemas"]["dd9390ce-b9ba-4deb-b97a-a91022f9002e"][];
        /** @description (typeName=java.util.Set<com.tccc.kos.commons.manifest.BaseManifestArtifact>) */
        "763e2a5d-72c9-4fdc-9411-110abf20d928": components["schemas"]["d51f2d7c-fd10-4dde-8b73-92c418b73d22"];
        "32287718-a13b-4991-b04d-1753b4bf0f2f": unknown;
        "e13e674e-6cd4-4ee9-8a58-226d6088d3e6": {
            /** @description (typeName=java.util.List<com.tccc.kos.core.primary.service.update.UpdateInfo$Note>) */
            notes?: components["schemas"]["edaa4e9f-c4c7-415c-b062-0d59d5a97d38"];
            blocked?: boolean;
            /** Format: int64 */
            createTime?: number;
            active?: boolean;
            manifestId?: string;
            deviceId?: string;
        };
        "093b7dff-994f-4a65-8585-53539fcd2e8f": components["schemas"]["6fb07bea-4b15-4cfb-80ff-104e58feb17d"][];
        "3a22743f-f46b-4682-a64a-aacf627af8a2": {
            browserName?: string;
            /** @description (typeName=com.tccc.kos.commons.util.NodeId) */
            nodeId?: components["schemas"]["abe6f3f4-65c8-4b7e-9250-36b151e29b45"];
        };
        "55c0df62-6a7c-4568-9494-6e974f1efe7c": unknown;
        "052affe2-dbd3-4d5f-b7c6-a3b39be7a542": {
            /** Format: double */
            totalVolume?: number;
            internal?: boolean;
            /** Format: int64 */
            creationTimeMS?: number;
            name?: string;
            /** Format: int64 */
            lastChangedTimeMS?: number;
            /** Format: date-time */
            creationDate?: string;
            locked?: boolean;
            /** @description (typeName=java.util.Map<java.lang.String, com.tccc.kos.ext.dispense.service.nozzle.metrics.NozzleMetrics$Info>) */
            byIngredients?: components["schemas"]["252ccf18-b479-4c7a-9c01-9a7c7c742da3"];
            /** @description (typeName=java.util.Map<java.lang.String, com.tccc.kos.ext.dispense.service.nozzle.metrics.NozzleMetrics$Info>) */
            byPumps?: components["schemas"]["252ccf18-b479-4c7a-9c01-9a7c7c742da3"];
        };
        "a433264e-0d40-470f-b50d-5936dd5193b1": components["schemas"]["2da24eed-e118-4407-9657-7c7a8655c8ff"][];
        "dafd6c00-1c60-4d14-bd0d-485e060c3276": {
            summary?: string;
            /** @description (typeName=java.util.List<java.lang.String>) */
            details?: components["schemas"]["27acbbdc-bc1a-4d84-b729-5308218aaeac"];
        };
        "fe27e7a6-ea89-4fd8-b4ab-68c87f651afc": components["schemas"]["2036ce13-fe31-4cdd-9013-d8926754d779"][];
        "8433cf76-569c-4a07-bd4c-fd9eb9813de2": components["schemas"]["e7ec00e9-f485-4b09-82e0-ea3dcc72171e"][];
        "42d4b17a-bede-4b41-8d4d-cc3ffbaf6fb2": {
            /** @description (typeName=com.tccc.kos.commons.util.ListenerList<com.tccc.kos.commons.core.service.config.ConfigBeanListener>) */
            listeners?: components["schemas"]["421be555-9bb3-4b3f-9b96-975ee36f9f9e"];
        };
        "30f7673b-a2e4-47c8-babf-6eea5fa977ee": components["schemas"]["f2b7a760-1fc9-4050-a41e-0df5c19f6802"][];
        "743b84bf-c878-4b01-9ecc-6cb302ff252e": components["schemas"]["6fa7bf1a-b60c-4379-9ba6-8964bd061583"][];
        "9a38ee66-704c-49fb-80f0-7077608470b5": components["schemas"]["31cb6576-b5df-4d0d-bec6-269331df29c2"][];
        /** Format: double */
        "cf32ec96-f01e-4e0f-9a62-f302020ba914": number;
        "86bfed86-ad2e-4a88-bfdb-8c2f2c6ddbf2": {
            note?: string;
            visible?: boolean;
            available?: boolean;
            id?: string;
            /** @description (typeName=java.util.List<java.lang.String>) */
            taggedIds?: components["schemas"]["27acbbdc-bc1a-4d84-b729-5308218aaeac"];
            /** @description (typeName=com.tccc.kos.commons.util.json.JsonViewWrapper) */
            clientData?: components["schemas"]["89542df4-8039-48ae-8759-2a4ec32c217a"];
            altId?: string;
        };
        /** @description (typeName=com.tccc.kos.commons.core.service.config.BeanChanges) */
        "ece8dae0-6941-44aa-b99f-8304c1ebe75d": components["schemas"]["147251bc-338b-46a6-b874-bdee6b023eee"];
        "421be555-9bb3-4b3f-9b96-975ee36f9f9e": components["schemas"]["55c0df62-6a7c-4568-9494-6e974f1efe7c"][];
        "0d969211-f92c-4650-9e10-b0d260e4d5d3": string[];
        "6fb07bea-4b15-4cfb-80ff-104e58feb17d": {
            default?: boolean;
            measure?: string;
            /** Format: double */
            offset?: number;
            /** Format: int32 */
            decimals?: number;
            name?: string;
            /** Format: double */
            scale?: number;
            alias?: string;
        };
        "536ed438-5691-4752-91e6-7ef5d85e148a": components["schemas"]["594871d6-45b1-4090-8105-c460ceb40138"][];
        "dd9390ce-b9ba-4deb-b97a-a91022f9002e": {
            ampm?: boolean;
            format?: string;
            id?: string;
        };
        "2036ce13-fe31-4cdd-9013-d8926754d779": {
            ex?: string;
            /** Format: date-time */
            time?: string;
            type?: string;
            /** Format: int32 */
            idx?: number;
        };
        "3339deec-4929-433d-8441-40dc8399b949": {
            rebuild?: boolean;
            /** @description (typeName=com.tccc.kos.commons.util.MultiValueMap<java.lang.String, com.tccc.kos.ext.dispense.pipeline.beverage.graph.Availability>) */
            groups?: components["schemas"]["bcf66cfd-6789-445a-87de-beb2f93a6991"];
        };
        "02b309e0-0414-4329-9902-589479df28c2": string[];
        "2da24eed-e118-4407-9657-7c7a8655c8ff": {
            identifier?: string;
            /** Format: int64 */
            size?: number;
            miniHash?: string;
            hash?: string;
        };
        "953bf9ae-7a62-48ce-b1b9-eee6dd47a470": components["schemas"]["c29af665-4c83-4fb8-8748-1a3618f19b2d"][];
        "e7ec00e9-f485-4b09-82e0-ea3dcc72171e": {
            /** @description (typeName=com.tccc.kos.commons.core.service.config.ConfigSchema) */
            schema?: components["schemas"]["0273e84c-c800-4dff-990a-bbbe5c7346aa"];
            path?: string;
            /** @description (typeName=java.util.Map<java.lang.String, java.lang.String>) */
            defaults?: components["schemas"]["918633b0-ffb1-4972-9eab-10ed2a685b16"];
            /** @description (typeName=java.util.List<com.tccc.kos.commons.core.service.config.ConfigDetails$ScopeData>) */
            scopes?: components["schemas"]["9c06425d-86a7-4004-afbe-b00435953940"];
            /** @description (typeName=com.tccc.kos.commons.core.service.config.ConfigBean) */
            bean?: components["schemas"]["42d4b17a-bede-4b41-8d4d-cc3ffbaf6fb2"];
        };
        "5df837a8-bd62-4d92-af0c-86d6bf1e5673": {
            manifestId?: string;
            deviceId?: string;
        };
        "4bf88b43-dc40-46f2-aa54-a427a37cd410": {
            configured?: boolean;
            /** @description (typeName=com.tccc.kos.core.service.network.beans.EthernetDetails) */
            ethernet?: components["schemas"]["67845049-812c-4a6e-a847-d7059593d365"];
            /** @description (typeName=com.tccc.kos.core.service.network.beans.WifiDetails) */
            wifi?: components["schemas"]["caf77dd5-b038-4536-9aef-415616736ac3"];
            hwaddress?: string;
            name?: string;
            /** @description (typeName=com.tccc.kos.core.service.network.beans.Ip4Settings) */
            ip4settings?: components["schemas"]["7a42892e-995c-48a8-8e48-f88e08ea52f1"];
            type?: string;
            /** @description (typeName=com.tccc.kos.core.service.network.beans.NetworkInterfaceCategory) */
            category?: components["schemas"]["e2b77b40-3930-41ef-8f04-3b9303ccee88"];
            /** Format: int32 */
            nmdevicestate?: number;
            /** Format: int32 */
            mtu?: number;
        };
        "58b99bfe-a8b2-480b-9599-fe7e6deda907": number[];
        "6b05200a-a30c-429d-b242-3f86fd89c87d": unknown;
        "edaa4e9f-c4c7-415c-b062-0d59d5a97d38": components["schemas"]["dafd6c00-1c60-4d14-bd0d-485e060c3276"][];
        "e7be13da-47d8-47ae-ad7d-baab0c508473": {
            /** @description (typeName=java.util.Collection<java.lang.String>) */
            childrenIds?: components["schemas"]["5347e5a3-b427-4be4-9b56-af9f47e5f9ed"];
            /** @description (typeName=java.util.Collection<java.lang.String>) */
            parentIds?: components["schemas"]["5347e5a3-b427-4be4-9b56-af9f47e5f9ed"];
            altId?: string;
        };
        "fa2d14d0-603a-4d88-9bc2-49ad0a3af5b8": {
            /** @description (typeName=java.lang.Class<?>) */
            view?: components["schemas"]["f9d78b25-1b47-48ef-aa25-8eb2dcb45e89"];
            data?: Record<string, never>;
        };
        "475a2ea5-e74e-4c2d-8dfc-6b779226003f": {
            path?: string;
            basePath?: string;
            /** @description (typeName=java.util.List<com.tccc.kos.ext.cms.service.screen.Screen>) */
            screens?: components["schemas"]["88a8dfde-10ea-4162-abb1-7f1987265765"];
            /** @description (typeName=com.tccc.kos.commons.util.json.JsonViewWrapper) */
            details?: components["schemas"]["89542df4-8039-48ae-8759-2a4ec32c217a"];
            type?: string;
        };
        "d51f2d7c-fd10-4dde-8b73-92c418b73d22": components["schemas"]["62a33d46-ef56-4855-aa7f-94d5178ef838"][];
        "918633b0-ffb1-4972-9eab-10ed2a685b16": string;
        "da7903ec-8a77-4eb8-805e-217ef42f0a6d": {
            deviceType?: string;
            /** @description (typeName=java.util.Map<java.lang.String, java.lang.String>) */
            properties?: components["schemas"]["918633b0-ffb1-4972-9eab-10ed2a685b16"];
            /** @description (typeName=com.tccc.kos.commons.manifest.device.ManifestDeviceInfo) */
            deviceInfo?: components["schemas"]["6a962cab-e8a2-4987-b46b-d06948f59a2e"];
        };
        "aef0c4eb-f4e1-4202-9549-237e71580d12": {
            /** Format: int64 */
            totalBytes?: number;
            /** Format: int64 */
            freeBytes?: number;
        };
        "9c7292f3-8025-4163-9262-44db46e74b0f": components["schemas"]["bb3eef73-bf5b-49d1-9b15-5c78f74f4feb"][];
        "a2c786ce-8c4f-4e27-91e5-111d66624416": {
            name?: string;
            /** @description (typeName=java.util.Collection<? extends com.tccc.kos.commons.manifest.ManifestArtifact>) */
            artifacts?: components["schemas"]["a433264e-0d40-470f-b50d-5936dd5193b1"];
        };
        "dde8fbec-9f76-4f06-af63-bc3ee7d2e1bd": {
            nodeName?: string;
            optional?: boolean;
            nodeType?: string;
            /** @description (typeName=com.tccc.kos.commons.util.NodeId) */
            nodeId?: components["schemas"]["abe6f3f4-65c8-4b7e-9250-36b151e29b45"];
            primary?: boolean;
        };
        "a79d786d-7a5b-4e73-9254-67312d2864f1": {
            reason?: string;
            note?: string;
            /** @description (typeName=com.tccc.kos.commons.util.ReasonData) */
            reasonData?: components["schemas"]["fa2d14d0-603a-4d88-9bc2-49ad0a3af5b8"];
            /** @description (typeName=com.tccc.kos.commons.util.concurrent.future.FutureWork) */
            rootFuture?: components["schemas"]["a79d786d-7a5b-4e73-9254-67312d2864f1"];
            /** @description (typeName=com.tccc.kos.commons.util.concurrent.future.FutureState) */
            endState?: components["schemas"]["5827a315-387a-4e8a-a9f4-dbaad3356c07"];
            tracker?: string;
            /** Format: int64 */
            remainingTimeMs?: number;
            name?: string;
            /** Format: int32 */
            progress?: number;
            /** Format: int32 */
            id?: number;
            /** Format: int32 */
            abortAbandonedTimeoutMs?: number;
            /** @description (typeName=com.tccc.kos.commons.util.json.JsonViewWrapper) */
            clientData?: components["schemas"]["89542df4-8039-48ae-8759-2a4ec32c217a"];
        };
        "e34ea28c-66bf-4ed8-a291-78d0814d824d": {
            redirect?: boolean;
            /** @description (typeName=com.tccc.kos.core.service.browser.BrowserId) */
            browserId?: components["schemas"]["3a22743f-f46b-4682-a64a-aacf627af8a2"];
            url?: string;
        };
        "f0a2edeb-6487-4ed0-9723-589bee90bf0f": {
            /** Format: int32 */
            slicePos?: number;
            /** Format: int64 */
            createTime?: number;
            containerId?: string;
            /** Format: int32 */
            soldOutCount?: number;
            /** Format: int64 */
            lastUpdateTime?: number;
        };
        "88a8dfde-10ea-4162-abb1-7f1987265765": components["schemas"]["97e87758-1d99-4e1e-a2e5-327ddd06f356"][];
        "adda9734-a864-4f1a-9c97-aec1081fff99": {
            /** @description (typeName=java.lang.Object[]) */
            values?: components["schemas"]["c8b9c8cb-e118-4555-a6d5-c51e886ff2b5"];
            /** @description (typeName=java.lang.Class<? extends com.tccc.kos.commons.core.service.config.options.ConfigOptions>) */
            optionsClass?: components["schemas"]["a48ab18f-27e1-49ce-93af-002468e8f810"];
            format?: string;
            /** @description (typeName=com.tccc.kos.commons.core.service.config.options.ConfigOptions) */
            options?: components["schemas"]["b9422718-4b6b-4e53-86f3-59afede2c82e"];
            type?: string;
            desc?: string;
        };
        "6e9a981d-bec1-4c95-aff4-1bc1359cf240": components["schemas"]["e13e674e-6cd4-4ee9-8a58-226d6088d3e6"][];
        "27acbbdc-bc1a-4d84-b729-5308218aaeac": string[];
        "f72fd0af-1cd2-4f20-a242-dd3a588dfeb6": components["schemas"]["0580d0b9-28ac-492d-80eb-082c70f28181"][];
        "147251bc-338b-46a6-b874-bdee6b023eee": {
            /** @description (typeName=java.util.List<com.tccc.kos.commons.core.service.config.BeanChanges$AttrChange>) */
            scopedChanges?: components["schemas"]["bda5e7c4-a58d-446f-a268-502e2284a3cf"];
            /** @description (typeName=java.util.List<com.tccc.kos.commons.core.service.config.BeanChanges$AttrChange>) */
            changes?: components["schemas"]["bda5e7c4-a58d-446f-a268-502e2284a3cf"];
            /** @description (typeName=java.util.List<com.tccc.kos.commons.core.service.config.BeanChanges$Error>) */
            errors?: components["schemas"]["24152111-2d1a-4d28-bace-51660d43086b"];
        };
        "6bd4b949-c4fe-4403-b6fa-f773859eed75": components["schemas"]["6fa7bf1a-b60c-4379-9ba6-8964bd061583"][];
        "5e382150-5de9-4694-a7ce-e7f25c16d5a3": components["schemas"]["4bf88b43-dc40-46f2-aa54-a427a37cd410"][];
        "d970a957-52a4-462f-bf62-4bfd8d9c61b5": {
            sourceId?: string;
            name?: string;
            id?: string;
            type?: string;
        };
        "97e87758-1d99-4e1e-a2e5-327ddd06f356": {
            vfsPath?: string;
            endDate?: string;
            /** Format: int32 */
            videoLoops?: number;
            name?: string;
            /** Format: int32 */
            width?: number;
            screenType?: string;
            /** Format: int64 */
            buildDate?: number;
            /** Format: int32 */
            priority?: number;
            /** Format: int32 */
            imageDisplaySec?: number;
            contentType?: string;
            startDate?: string;
            /** Format: int32 */
            height?: number;
        };
        "70dc85ef-8e14-4059-82af-5c67ee9e1c77": components["schemas"]["28749da5-f246-472e-a903-cd1a96cb0d5d"][];
        "14fbd095-3c8a-4f3c-a5be-40c37a1e3b8c": string[];
        "4f4a21ba-27f3-4652-9933-40c39eecb4ed": components["schemas"]["e2db5b00-6cb5-40d3-9e90-cec088ee421f"][];
        "28749da5-f246-472e-a903-cd1a96cb0d5d": {
            /** @description (typeName=byte[]) */
            criticalData?: components["schemas"]["960ec1d1-4cd8-4f8e-b685-96f10f203d45"];
            /** Format: double */
            sourceWeight?: number;
            /** Format: int32 */
            sourceMaxLength?: number;
            criticalDataReady?: boolean;
        };
        "6fa7bf1a-b60c-4379-9ba6-8964bd061583": {
            /** @description (typeName=com.tccc.kos.commons.manifest.ManifestArtifact) */
            artifact?: components["schemas"]["2da24eed-e118-4407-9657-7c7a8655c8ff"];
            identifier?: string;
            incomplete?: boolean;
            /** @description (typeName=com.tccc.kos.commons.kab.KabFile) */
            kab?: components["schemas"]["78abb89b-468b-4aef-bdbf-32f079128c0e"];
        };
        "3d6a0e4d-ccdd-4a8c-868b-1f90885ad26e": {
            type?: string;
            /** @description (typeName=com.tccc.kos.commons.manifest.chained.ChainedManifest) */
            chainedManifest?: components["schemas"]["49dc59ad-dda2-400e-b2da-080ff8ebb569"];
            /** @description (typeName=com.tccc.kos.commons.kab.KabFile) */
            kab?: components["schemas"]["78abb89b-468b-4aef-bdbf-32f079128c0e"];
        };
        "2376f840-3a7d-4300-b76d-b4187a44ec2c": {
            kmfJson?: string;
            /** @description (typeName=java.util.Collection<? extends com.tccc.kos.commons.manifest.ManifestArtifact>) */
            layers?: components["schemas"]["a433264e-0d40-470f-b50d-5936dd5193b1"];
            kosVersion?: string;
            nodeType?: string;
            /** @description (typeName=java.util.Map<java.lang.String, java.lang.String>) */
            properties?: components["schemas"]["918633b0-ffb1-4972-9eab-10ed2a685b16"];
            /** @description (typeName=java.util.Collection<? extends com.tccc.kos.commons.manifest.ManifestSection>) */
            sections?: components["schemas"]["99f7fce2-1c4f-4471-9364-412e48231bfb"];
            /** @description (typeName=java.util.Collection<? extends com.tccc.kos.commons.manifest.ManifestArtifact>) */
            artifacts?: components["schemas"]["a433264e-0d40-470f-b50d-5936dd5193b1"];
        };
        "6fbcdfbc-15f3-44aa-aba4-4c6f6bc06119": {
            defaultLocale?: string;
            file?: string;
            /** @description (typeName=java.util.List<java.lang.String>) */
            fallbacks?: components["schemas"]["27acbbdc-bc1a-4d84-b729-5308218aaeac"];
            kabId?: string;
        };
        "8f18cb7f-27d3-47d0-ad4e-694b867b3b6d": unknown;
        "b9422718-4b6b-4e53-86f3-59afede2c82e": {
            type?: string;
        };
        "519239f4-41af-4e47-bb4f-54de2ca3df6a": {
            path?: string;
            /** @description (typeName=java.util.Map<java.lang.String, java.lang.Object>) */
            values?: components["schemas"]["e23963ba-4225-42a1-af54-b34e0b4e7f5e"];
            scope?: string;
            replace?: boolean;
        };
        "0bb361cc-d2e1-4e4f-a56c-2ce58ab59d74": components["schemas"]["73c0a619-ded5-400e-a678-c00f2426a521"][];
        "a15d1dd7-66ba-4e13-a55e-8b6981919492": components["schemas"]["4b656bab-a43a-4ee3-a23a-adc06ad79623"][];
        "d7a5b10e-a8b4-4a48-80fb-528b29d56afd": components["schemas"]["1c3c4aad-1ecc-4bdf-bd54-3d913bdd3253"][];
        "85862105-e2e0-4e03-976c-955df6c8cacf": {
            /** @description (typeName=java.util.Map<java.lang.String, com.tccc.kos.commons.core.localization.LocalizationContext$CtxLocaleInfo>) */
            locales?: components["schemas"]["535fa64b-cdba-4879-bbb3-e6d25aa2c240"];
        };
        "31cb6576-b5df-4d0d-bec6-269331df29c2": {
            /** @description (typeName=com.tccc.kos.commons.util.ListenerList<com.tccc.kos.core.service.udev.storage.StorageMountListener>) */
            listeners?: components["schemas"]["9c7292f3-8025-4163-9262-44db46e74b0f"];
            removed?: boolean;
            vendor?: string;
            /** @description (typeName=java.io.File) */
            mountDir?: components["schemas"]["2e03ae08-2561-4cb9-b215-2100b99a61a8"];
            model?: string;
            label?: string;
            id?: string;
            /** Format: int64 */
            runTimeMs?: number;
            /** @description (typeName=com.tccc.kos.commons.util.NodeId) */
            nodeId?: components["schemas"]["abe6f3f4-65c8-4b7e-9250-36b151e29b45"];
            syspath?: string;
            /** @description (typeName=com.tccc.kos.core.service.udev.storage.StorageInfo) */
            storageInfo?: components["schemas"]["aef0c4eb-f4e1-4202-9549-237e71580d12"];
            local?: boolean;
        };
        /** @description (typeName=com.tccc.kos.commons.core.localization.LocalizationContext) */
        "b0cd8fae-f265-4d97-b6a4-a70b71ec23df": components["schemas"]["c7120f14-5c22-45dc-a214-60d152cb949a"];
        "bcf66cfd-6789-445a-87de-beb2f93a6991": {
            empty?: boolean;
        };
        "40d4410c-d2c1-45c2-be9d-0b4dcb2ad78e": unknown;
        "5ad862de-0e59-44de-8d27-d3f4165c034b": {
            incomplete?: boolean;
            /** @description (typeName=java.util.List<com.tccc.kos.core.manifest.ResolvedDeviceManifest$ManifestInfo>) */
            manifestInfoChain?: components["schemas"]["aab12496-a404-47f5-bb2e-cb256514944a"];
            /** @description (typeName=com.tccc.kos.commons.manifest.DeviceManifest) */
            deviceManifest?: components["schemas"]["da7903ec-8a77-4eb8-805e-217ef42f0a6d"];
            manifestId?: string;
        };
        /** @description (typeName=com.tccc.kos.commons.core.service.config.MethodPair$MethodSchema) */
        "85f81040-98cc-47f6-806b-56ef55e23c45": components["schemas"]["adda9734-a864-4f1a-9c97-aec1081fff99"];
        "4f4c120c-baae-408f-accb-24702b8176dc": components["schemas"]["b311114c-a6c3-4d75-b264-2617007d467f"][];
        "7e1b8e38-4b2d-463b-85f4-93aff15aa52a": {
            /** Format: int64 */
            estimatedTime?: number;
            /** @description (typeName=java.util.List<com.tccc.kos.ext.dispense.pipeline.ingredient.ops.PumpOp>) */
            ops?: components["schemas"]["f72fd0af-1cd2-4f20-a242-dd3a588dfeb6"];
            name?: string;
            errorHandlerId?: string;
            delegated?: boolean;
            source?: string;
            type?: string;
            /** Format: double */
            estimatedVolume?: number;
            runDry?: boolean;
            /** @description (typeName=com.tccc.kos.ext.dispense.pipeline.ingredient.ops.PumpOp) */
            activeOp?: components["schemas"]["0580d0b9-28ac-492d-80eb-082c70f28181"];
        };
        "d57e8e18-37c6-4274-978a-13b11d2d372d": components["schemas"]["d970a957-52a4-462f-bf62-4bfd8d9c61b5"][];
        "d25dd32f-6e4b-409d-a36e-a5f209a6bca6": {
            /** @description (typeName=java.util.Map<java.lang.String, java.lang.String>) */
            defaults?: components["schemas"]["918633b0-ffb1-4972-9eab-10ed2a685b16"];
            scope?: string;
            /** @description (typeName=java.util.Map<java.lang.String, java.lang.String>) */
            overrides?: components["schemas"]["918633b0-ffb1-4972-9eab-10ed2a685b16"];
        };
        "c29af665-4c83-4fb8-8748-1a3618f19b2d": {
            level?: string;
            name?: string;
            type?: string;
            nodeType?: string;
        };
        "594871d6-45b1-4090-8105-c460ceb40138": {
            name?: string;
            value?: string;
        };
        /** @description (typeName=com.tccc.kos.ext.dispense.service.nozzle.metrics.NozzleMetrics$Info) */
        "392f177a-a823-4646-af96-d0bc5ec0d553": components["schemas"]["74c68170-2c39-4c2b-9c1f-66d56d2f481a"];
        /** @description (typeName=com.tccc.kos.ext.dispense.service.nozzle.metrics.NozzleMetrics$Info) */
        "252ccf18-b479-4c7a-9c01-9a7c7c742da3": components["schemas"]["9eb1bd71-32a3-476a-af59-d70935b1cb24"];
        "914ed7f6-74a6-4728-a5bc-d6ba57e85959": components["schemas"]["4abd0c9b-2cca-409c-a8cc-0b7133d90fec"][];
        "aac31507-4d7f-4f7d-b1e7-825bb76c5e30": components["schemas"]["e2db5b00-6cb5-40d3-9e90-cec088ee421f"][];
        "ffdf2652-3f64-4761-9fcd-40aa84c90c08": components["schemas"]["0273e84c-c800-4dff-990a-bbbe5c7346aa"][];
        "80ff932b-6710-4289-b9b4-9e9d6be2c86e": components["schemas"]["892edf6a-080a-4507-b96b-ef4b8b1f541c"][];
        "9eec01be-0050-47be-a34a-444231f38584": {
            tracker?: string;
            /** @description (typeName=java.util.Map<java.lang.String, com.tccc.kos.commons.core.service.config.BeanChanges>) */
            beanChanges?: components["schemas"]["ece8dae0-6941-44aa-b99f-8304c1ebe75d"];
        };
        /** @description (typeName=java.util.Collection<? extends com.tccc.kos.ext.dispense.service.ingredient.BaseIngredient>) */
        "37c42e66-9aa4-4d2b-bb4e-9ce0e0fc1725": components["schemas"]["d57e8e18-37c6-4274-978a-13b11d2d372d"];
        "74c68170-2c39-4c2b-9c1f-66d56d2f481a": {
            /** Format: double */
            volume?: number;
        };
        "92f5dac6-27be-4721-93c7-e97a2b237744": string[];
        "b311114c-a6c3-4d75-b264-2617007d467f": {
            /** Format: double */
            position?: number;
            /** Format: double */
            group?: number;
        };
        "892edf6a-080a-4507-b96b-ef4b8b1f541c": {
            country?: string;
            timeFormatId?: string;
            hidden?: boolean;
            unitSystemId?: string;
            id?: string;
            /** @description (typeName=java.util.List<java.lang.String>) */
            timeZones?: components["schemas"]["27acbbdc-bc1a-4d84-b729-5308218aaeac"];
            dateFormatId?: string;
        };
        "3c921874-14f6-48ce-8ccd-489f2108f574": {
            /** @description (typeName=java.util.Collection<com.tccc.kos.commons.util.format.date.DateFormat>) */
            dateFormats?: components["schemas"]["30f7673b-a2e4-47c8-babf-6eea5fa977ee"];
            /** @description (typeName=java.util.Collection<com.tccc.kos.commons.util.units.UnitSystem>) */
            unitSystems?: components["schemas"]["0bb361cc-d2e1-4e4f-a56c-2ce58ab59d74"];
            /** @description (typeName=java.util.Collection<com.tccc.kos.commons.util.format.time.TimeFormat>) */
            timeFormats?: components["schemas"]["f139459a-b468-414c-85f8-341d2c81f7ea"];
        };
        "e23963ba-4225-42a1-af54-b34e0b4e7f5e": Record<string, never>;
        "dcab9435-cacd-4f37-bb36-4bfa9a60499b": {
            downloaderActive?: boolean;
            kabId?: string;
            downloaderName?: string;
            lastErrorReason?: string;
            /** Format: int32 */
            fileNotFoundCount?: number;
            /** Format: int32 */
            errorCount?: number;
            /** Format: int32 */
            currentSize?: number;
            /** Format: int64 */
            lastUpdateTime?: number;
        };
        "595b775e-30b7-4d2b-8d17-c20e5cac5d76": components["schemas"]["86bfed86-ad2e-4a88-bfdb-8c2f2c6ddbf2"][];
        "7f2c42af-6846-4372-ad23-cbeb4818f253": {
            empty?: boolean;
        };
        "3b27965a-3e21-401e-8114-16ac139c22a0": components["schemas"]["2da24eed-e118-4407-9657-7c7a8655c8ff"][];
        "67845049-812c-4a6e-a847-d7059593d365": {
            carrier?: boolean;
            duplex?: string;
            /** Format: int32 */
            speed?: number;
        };
        "e2b77b40-3930-41ef-8f04-3b9303ccee88": unknown;
        "a48ab18f-27e1-49ce-93af-002468e8f810": unknown;
        "6a962cab-e8a2-4987-b46b-d06948f59a2e": {
            /** @description (typeName=java.util.Collection<? extends com.tccc.kos.commons.manifest.device.ManifestNodeInfo>) */
            nodes?: components["schemas"]["09a64206-d652-4069-8f2c-21a00f5bc48b"];
            /** @description (typeName=java.util.Set<java.lang.String>) */
            nodeTypes?: components["schemas"]["92f5dac6-27be-4721-93c7-e97a2b237744"];
        };
        "2e03ae08-2561-4cb9-b215-2100b99a61a8": {
            parent?: string;
            /** @description (typeName=java.io.File) */
            parentFile?: components["schemas"]["2e03ae08-2561-4cb9-b215-2100b99a61a8"];
            hidden?: boolean;
            /** Format: int64 */
            freeSpace?: number;
            /** Format: int64 */
            totalSpace?: number;
            /** Format: int64 */
            usableSpace?: number;
            /** @description (typeName=java.io.File) */
            canonicalFile?: components["schemas"]["2e03ae08-2561-4cb9-b215-2100b99a61a8"];
            directory?: boolean;
            path?: string;
            /** @description (typeName=java.io.File) */
            absoluteFile?: components["schemas"]["2e03ae08-2561-4cb9-b215-2100b99a61a8"];
            file?: boolean;
            absolute?: boolean;
            name?: string;
            canonicalPath?: string;
            absolutePath?: string;
        };
        "b7fd10bb-ecf2-4ade-841d-84493e2b2522": components["schemas"]["519239f4-41af-4e47-bb4f-54de2ca3df6a"][];
        "9c06425d-86a7-4004-afbe-b00435953940": components["schemas"]["d25dd32f-6e4b-409d-a36e-a5f209a6bca6"][];
        "24152111-2d1a-4d28-bace-51660d43086b": components["schemas"]["01999f46-5406-4af1-8bbf-3d146948f8a4"][];
        "01999f46-5406-4af1-8bbf-3d146948f8a4": {
            val?: string;
            reason?: string;
            attr?: string;
        };
        "4abd0c9b-2cca-409c-a8cc-0b7133d90fec": {
            name?: string;
            /** @description (typeName=java.util.List<com.tccc.kos.core.manifest.ResolvedManifestArtifact>) */
            artifacts?: components["schemas"]["6bd4b949-c4fe-4403-b6fa-f773859eed75"];
        };
        "0580d0b9-28ac-492d-80eb-082c70f28181": {
            /** @description (typeName=java.util.Set<com.tccc.kos.ext.dispense.pipeline.ingredient.ops.PumpOp$Grant>) */
            grants?: components["schemas"]["536ed438-5691-4752-91e6-7ef5d85e148a"];
            diluted?: boolean;
            /** Format: double */
            rate?: number;
            errorHandlerId?: string;
            type?: string;
        };
        "e2db5b00-6cb5-40d3-9e90-cec088ee421f": {
            /** Format: int64 */
            runStartTime?: number;
            /** @description (typeName=java.util.List<com.tccc.kos.commons.util.concurrent.future.trace.FutureTrace>) */
            children?: components["schemas"]["4f4a21ba-27f3-4652-9933-40c39eecb4ed"];
            /** Format: int64 */
            createTime?: number;
            /** Format: int64 */
            runEndTime?: number;
            /** @description (typeName=com.tccc.kos.commons.util.concurrent.future.FutureState) */
            endState?: components["schemas"]["5827a315-387a-4e8a-a9f4-dbaad3356c07"];
            name?: string;
            /** Format: int32 */
            id?: number;
            /** Format: int64 */
            endTime?: number;
            /** Format: int32 */
            parentId?: number;
        };
        "e41e3463-509c-4c8b-b694-12c6f8551a0d": {
            stream?: string;
            /** Format: int32 */
            startLineNum?: number;
            /** Format: int64 */
            startTime?: number;
            /** Format: int32 */
            blockNum?: number;
            /** Format: int64 */
            endTime?: number;
            /** @description (typeName=java.util.List<java.lang.String>) */
            lines?: components["schemas"]["27acbbdc-bc1a-4d84-b729-5308218aaeac"];
            nodeId?: string;
            /** Format: int32 */
            endLineNum?: number;
            /** Format: int32 */
            lineCount?: number;
        };
        "5347e5a3-b427-4be4-9b56-af9f47e5f9ed": string[];
        "44bb1bb2-c99e-4ac5-94d5-6971f2fb5189": {
            incomplete?: boolean;
            /** @description (typeName=com.tccc.kos.commons.manifest.NodeManifest) */
            nodeManifest?: components["schemas"]["2376f840-3a7d-4300-b76d-b4187a44ec2c"];
            /** @description (typeName=java.util.Set<com.tccc.kos.core.manifest.ResolvedManifestArtifact>) */
            layers?: components["schemas"]["743b84bf-c878-4b01-9ecc-6cb302ff252e"];
            /** @description (typeName=java.util.List<com.tccc.kos.commons.manifest.ManifestArtifact>) */
            missingArtifacts?: components["schemas"]["3b27965a-3e21-401e-8114-16ac139c22a0"];
            /** @description (typeName=java.util.List<com.tccc.kos.core.manifest.ResolvedManifestSection>) */
            sections?: components["schemas"]["914ed7f6-74a6-4728-a5bc-d6ba57e85959"];
        };
        "8eeebcb4-e915-48a8-932e-81c7759a134f": components["schemas"]["a0c293c9-e0ad-46e5-b981-c577f2aa7ebe"][];
        "bda5e7c4-a58d-446f-a268-502e2284a3cf": components["schemas"]["d3d2b1fb-7269-4454-b26f-9a9020589113"][];
        "d98399e7-0305-4a19-9b52-035788b65957": {
            ingredientId?: string;
            holderPath?: string;
            /** Format: int64 */
            createTime?: number;
            factoryJson?: string;
            containerId?: string;
            error?: string;
        };
        "aab12496-a404-47f5-bb2e-cb256514944a": components["schemas"]["3d6a0e4d-ccdd-4a8c-868b-1f90885ad26e"][];
        "2d558173-2914-4b97-a4ba-c0ac8f054124": {
            integralNumber?: boolean;
            double?: boolean;
            valueNode?: boolean;
            floatingPointNumber?: boolean;
            bigInteger?: boolean;
            float?: boolean;
            /** @description (typeName=com.fasterxml.jackson.databind.node.JsonNodeType) */
            nodeType?: components["schemas"]["8f18cb7f-27d3-47d0-ad4e-694b867b3b6d"];
            int?: boolean;
            long?: boolean;
            textual?: boolean;
            empty?: boolean;
            missingNode?: boolean;
            pojo?: boolean;
            number?: boolean;
            boolean?: boolean;
            null?: boolean;
            array?: boolean;
            binary?: boolean;
            containerNode?: boolean;
            short?: boolean;
            bigDecimal?: boolean;
            object?: boolean;
        };
        "89542df4-8039-48ae-8759-2a4ec32c217a": {
            /** @description (typeName=java.lang.Class<?>) */
            view?: components["schemas"]["f9d78b25-1b47-48ef-aa25-8eb2dcb45e89"];
            data?: Record<string, never>;
        };
        "08b5bd3f-a3d2-40d2-a436-4837799d2fa4": components["schemas"]["f0a2edeb-6487-4ed0-9723-589bee90bf0f"][];
        "62a33d46-ef56-4855-aa7f-94d5178ef838": {
            identifier?: string;
            /** Format: int64 */
            size?: number;
            miniHash?: string;
            name?: string;
            version?: string;
            hash?: string;
        };
        "73c0a619-ded5-400e-a678-c00f2426a521": {
            id?: string;
            /** @description (typeName=java.util.Set<com.tccc.kos.commons.util.units.Unit>) */
            units?: components["schemas"]["093b7dff-994f-4a65-8585-53539fcd2e8f"];
        };
        "a0c293c9-e0ad-46e5-b981-c577f2aa7ebe": {
            /** @description (typeName=com.tccc.kos.commons.manifest.BaseManifestArtifact) */
            artifactInfo?: components["schemas"]["62a33d46-ef56-4855-aa7f-94d5178ef838"];
            /** @description (typeName=java.util.Collection<com.tccc.kos.core.primary.service.ota.OTADownloadRequest>) */
            requests?: components["schemas"]["4eae8ff3-d183-4618-8c2f-8c79f04dcb3d"];
            error?: string;
            done?: boolean;
            /** @description (typeName=com.tccc.kos.core.primary.service.ota.OTAArtifact$Status) */
            status?: components["schemas"]["a379a538-11e5-4db7-a11e-9da0734e082c"];
        };
        "7e5b2c53-4e7d-4a5c-941e-ef3bf211aebb": components["schemas"]["514d06ea-eb3e-4e94-abcc-bcd7bc99038b"][];
        "b73d47eb-706e-4409-885e-cc9586f3ce72": {
            /** @description (typeName=java.util.List<java.lang.String>) */
            scopeNames?: components["schemas"]["27acbbdc-bc1a-4d84-b729-5308218aaeac"];
            /** @description (typeName=java.util.List<com.tccc.kos.commons.core.service.config.ConfigDetails>) */
            details?: components["schemas"]["8433cf76-569c-4a07-bd4c-fd9eb9813de2"];
        };
        "4b656bab-a43a-4ee3-a23a-adc06ad79623": {
            defaultHost?: string;
            lastUrl?: string;
            online?: boolean;
            /** @description (typeName=com.tccc.kos.core.service.browser.BrowserId) */
            id?: components["schemas"]["32287718-a13b-4991-b04d-1753b4bf0f2f"];
        };
        "bb1dd437-8629-4572-99fa-710734505a00": {
            redirect?: boolean;
            url?: string;
        };
        "679e2ad4-607a-43f0-b6e7-22a814637300": {
            valid?: boolean;
            value?: string;
            /** Format: int64 */
            lastUpdateTime?: number;
        };
        "a8019d33-0dfb-492e-a865-931bbdc7448d": {
            path?: string;
            name?: string;
        };
        "0faaf1bc-1724-4b43-aee8-60f1b0225603": components["schemas"]["c286a86b-25b9-4b96-88ef-7000e113522c"][];
        "40a9dbb5-a020-4e8e-82df-bba95fc3d032": {
            /** @description (typeName=com.tccc.kos.core.service.browser.BrowserId) */
            browserId?: components["schemas"]["3a22743f-f46b-4682-a64a-aacf627af8a2"];
            type?: string;
            /** @description (typeName=java.util.Map<java.lang.String, java.lang.Object>) */
            properties?: components["schemas"]["e23963ba-4225-42a1-af54-b34e0b4e7f5e"];
        };
        /** Format: int64 */
        "976dd33f-d36f-43e7-aa67-d3a58d2ead5d": number;
        "28da2c6c-ab75-4c0e-abec-5a16944a1d42": {
            /** Format: int32 */
            month?: number;
            /** Format: int32 */
            year?: number;
            /** Format: int32 */
            day?: number;
        };
        "c8b9c8cb-e118-4555-a6d5-c51e886ff2b5": unknown;
        "4eae8ff3-d183-4618-8c2f-8c79f04dcb3d": components["schemas"]["dcab9435-cacd-4f37-bb36-4bfa9a60499b"][];
        "960ec1d1-4cd8-4f8e-b685-96f10f203d45": unknown;
        "500a1aaa-c159-4a11-9aaf-dbc9c3985729": components["schemas"]["e7be13da-47d8-47ae-ad7d-baab0c508473"][];
        /** @description (typeName=com.tccc.kos.commons.core.localization.LocalizationContext$CtxLocaleInfo) */
        "535fa64b-cdba-4879-bbb3-e6d25aa2c240": components["schemas"]["6fbcdfbc-15f3-44aa-aba4-4c6f6bc06119"];
        "3ed14a85-1ff6-4158-8e61-81d5c52b54e5": components["schemas"]["e41e3463-509c-4c8b-b694-12c6f8551a0d"][];
        "29c31c3a-8e90-4f7b-a320-2bc775bc3022": {
            /** Format: int64 */
            lastChangedTimeMono?: number;
            /** Format: double */
            totalVolume?: number;
            internal?: boolean;
            /** Format: int64 */
            creationTimeMS?: number;
            /** @description (typeName=java.util.Collection<java.lang.String>) */
            ingredientIds?: components["schemas"]["14fbd095-3c8a-4f3c-a5be-40c37a1e3b8c"];
            /** Format: date-time */
            creationDate?: string;
            /** @description (typeName=java.util.Map<java.lang.String, com.tccc.kos.ext.dispense.service.nozzle.metrics.NozzleMetrics$Info>) */
            byIngredients?: components["schemas"]["392f177a-a823-4646-af96-d0bc5ec0d553"];
            /** @description (typeName=java.util.Map<java.lang.String, com.tccc.kos.ext.dispense.service.nozzle.metrics.NozzleMetrics$Info>) */
            byPumps?: components["schemas"]["392f177a-a823-4646-af96-d0bc5ec0d553"];
            /** @description (typeName=java.util.Collection<java.lang.String>) */
            pumpPaths?: components["schemas"]["14fbd095-3c8a-4f3c-a5be-40c37a1e3b8c"];
            removed?: boolean;
            name?: string;
            /** Format: int64 */
            lastChangedTimeMS?: number;
            locked?: boolean;
        };
        "99f7fce2-1c4f-4471-9364-412e48231bfb": components["schemas"]["a2c786ce-8c4f-4e27-91e5-111d66624416"][];
        "b8fcb1c5-996f-46f4-90dd-7ffc87c96dda": {
            color?: string;
            /** Format: int32 */
            rank?: number;
            actionRole?: string;
            visibleRole?: string;
        };
        "1c3c4aad-1ecc-4bdf-bd54-3d913bdd3253": {
            reason?: string;
            /** Format: date-time */
            createTime?: string;
            resolvable?: boolean;
            /** @description (typeName=java.util.Set<java.lang.String>) */
            ifaces?: components["schemas"]["0d969211-f92c-4650-9e10-b0d260e4d5d3"];
            /** Format: int32 */
            id?: number;
            /** @description (typeName=com.tccc.kos.commons.util.json.JsonViewWrapper) */
            clientData?: components["schemas"]["40d4410c-d2c1-45c2-be9d-0b4dcb2ad78e"];
            type?: string;
            /** @description (typeName=java.util.Set<java.lang.String>) */
            tags?: components["schemas"]["0d969211-f92c-4650-9e10-b0d260e4d5d3"];
            /** @description (typeName=com.tccc.kos.commons.core.service.trouble.TroubleInfo) */
            info?: components["schemas"]["b8fcb1c5-996f-46f4-90dd-7ffc87c96dda"];
            group?: string;
        };
        "7a42892e-995c-48a8-8e48-f88e08ea52f1": {
            /** @description (typeName=java.util.List<java.lang.String>) */
            addressprefixlist?: components["schemas"]["27acbbdc-bc1a-4d84-b729-5308218aaeac"];
            address?: string;
            method?: string;
            /** Format: int32 */
            prefix?: number;
            /** @description (typeName=java.util.List<java.lang.String>) */
            dnslist?: components["schemas"]["27acbbdc-bc1a-4d84-b729-5308218aaeac"];
            gateway?: string;
        };
        "0273e84c-c800-4dff-990a-bbbe5c7346aa": {
            /** @description (typeName=java.util.Map<java.lang.String, com.tccc.kos.commons.core.service.config.MethodPair$MethodSchema>) */
            schema?: components["schemas"]["85f81040-98cc-47f6-806b-56ef55e23c45"];
            /** @description (typeName=java.util.List<java.lang.String>) */
            paths?: components["schemas"]["27acbbdc-bc1a-4d84-b729-5308218aaeac"];
        };
        "f1f98a7e-3260-43dc-a6b2-9f6b29de0371": {
            /** @description (typeName=com.tccc.kos.commons.util.MultiValueMap<java.lang.String, com.tccc.kos.core.service.manifest.NodeSoftwareInfo>) */
            nodes?: components["schemas"]["7f2c42af-6846-4372-ad23-cbeb4818f253"];
        };
        "abe6f3f4-65c8-4b7e-9250-36b151e29b45": {
            nodeName?: string;
            hostname?: string;
            id?: string;
            nodeType?: string;
        };
        "bb3eef73-bf5b-49d1-9b15-5c78f74f4feb": unknown;
        "514d06ea-eb3e-4e94-abcc-bcd7bc99038b": {
            note?: string;
            visible?: boolean;
            available?: boolean;
            id?: string;
            /** @description (typeName=java.util.List<java.lang.String>) */
            taggedIds?: components["schemas"]["02b309e0-0414-4329-9902-589479df28c2"];
            altId?: string;
        };
        "0db10d30-5604-494d-a23e-16d87731128a": {
            /** Format: int32 */
            sec?: number;
            /** Format: int32 */
            min?: number;
            /** Format: int32 */
            hour?: number;
        };
        "891c17b7-d812-4106-ab49-f966fd6cfbff": unknown;
        "f2b7a760-1fc9-4050-a41e-0df5c19f6802": {
            format?: string;
            id?: string;
            order?: string;
        };
        "9eb1bd71-32a3-476a-af59-d70935b1cb24": unknown;
        "f9d78b25-1b47-48ef-aa25-8eb2dcb45e89": unknown;
        "d4bc623a-c5ac-4b6e-854b-95faaf4e3fbc": components["schemas"]["d98399e7-0305-4a19-9b52-035788b65957"][];
        "78abb89b-468b-4aef-bdbf-32f079128c0e": {
            mfgAuthority?: string;
            /** @description (typeName=com.tccc.kos.commons.util.Mode) */
            mode?: components["schemas"]["e2fd4ec3-b023-411a-9e81-ada7d2ba423c"];
            identifier?: string;
            vendorAuthority?: string;
            /** @description (typeName=java.io.File) */
            file?: components["schemas"]["2e03ae08-2561-4cb9-b215-2100b99a61a8"];
            /** Format: int32 */
            size?: number;
            /** Format: int64 */
            createTime?: number;
            name?: string;
            tag?: string;
            type?: string;
            version?: string;
            /** Format: date-time */
            createDate?: string;
        };
        "92086bd9-69ea-4eea-b576-9cef91c0672c": unknown;
        /** @description (typeName=com.tccc.kos.ext.dispense.service.nozzle.metrics.NozzleMetrics) */
        "72f2417a-8bc6-48a2-ad1d-ee92befa9ea8": components["schemas"]["29c31c3a-8e90-4f7b-a320-2bc775bc3022"];
        "d3d2b1fb-7269-4454-b26f-9a9020589113": {
            scope?: string;
            attr?: string;
            previousValue?: string;
            currentValue?: string;
        };
        "c7120f14-5c22-45dc-a214-60d152cb949a": {
            path?: string;
            /** @description (typeName=java.util.Collection<java.lang.String>) */
            locales?: components["schemas"]["14fbd095-3c8a-4f3c-a5be-40c37a1e3b8c"];
            basePath?: string;
            /** @description (typeName=com.tccc.kos.commons.util.json.JsonViewWrapper) */
            details?: components["schemas"]["89542df4-8039-48ae-8759-2a4ec32c217a"];
            type?: string;
            /** @description (typeName=java.util.Map<java.lang.String, com.tccc.kos.commons.core.localization.LocalizationContext$CtxNamespace>) */
            namespaces?: components["schemas"]["5ef00c85-a389-41e6-8768-8b6f8f93952a"];
        };
        "68afa7e8-55e1-4c0d-9802-b80d652a057e": components["schemas"]["1c3c4aad-1ecc-4bdf-bd54-3d913bdd3253"][];
        "c286a86b-25b9-4b96-88ef-7000e113522c": {
            note?: string;
            visible?: boolean;
            /** @description (typeName=java.util.List<com.tccc.kos.ext.dispense.pipeline.beverage.graph.GraphNode>) */
            children?: components["schemas"]["0faaf1bc-1724-4b43-aee8-60f1b0225603"];
            available?: boolean;
            id?: string;
            /** @description (typeName=com.tccc.kos.commons.util.json.JsonViewWrapper) */
            clientData?: components["schemas"]["6b05200a-a30c-429d-b242-3f86fd89c87d"];
            type?: string;
            /** Format: int32 */
            version?: number;
        };
        /** @description (typeName=com.tccc.kos.commons.core.localization.LocalizationContext$CtxNamespace) */
        "5ef00c85-a389-41e6-8768-8b6f8f93952a": components["schemas"]["85862105-e2e0-4e03-976c-955df6c8cacf"];
        "5827a315-387a-4e8a-a9f4-dbaad3356c07": {
            cancel?: boolean;
            fail?: boolean;
            abort?: boolean;
            success?: boolean;
            /** @description (typeName=com.tccc.kos.commons.util.concurrent.future.FutureEvent) */
            futureEvent?: components["schemas"]["92086bd9-69ea-4eea-b576-9cef91c0672c"];
            terminate?: boolean;
            done?: boolean;
        };
        /** @description (typeName=java.util.Map<java.lang.String, com.tccc.kos.ext.dispense.service.nozzle.metrics.NozzleMetrics>) */
        "239c67e6-cf96-4323-b677-547ac4ac04bb": components["schemas"]["72f2417a-8bc6-48a2-ad1d-ee92befa9ea8"];
        "1c814b4c-2cf7-4faa-b2de-33d0231bd8f8": {
            serialNumber?: string;
            name?: string;
            nodeId?: string;
        };
        "caf77dd5-b038-4536-9aef-415616736ac3": {
            /** Format: int32 */
            apFlags?: number;
            bssid?: string;
            /** Format: int32 */
            wpaFlags?: number;
            /** Format: int32 */
            bitrate?: number;
            ssid?: string;
            /** Format: int32 */
            signal?: number;
            /** Format: int32 */
            rsnFlags?: number;
            /** Format: int32 */
            lastSeenAgo?: number;
            /** Format: int32 */
            frequency?: number;
        };
        "a379a538-11e5-4db7-a11e-9da0734e082c": unknown;
        /** @description (typeName=com.tccc.kos.ext.cms.service.screen.ScreenContext) */
        "5b6f319f-bbb6-4c03-a48f-ca23b92eb75e": components["schemas"]["475a2ea5-e74e-4c2d-8dfc-6b779226003f"];
        "e2fd4ec3-b023-411a-9e81-ada7d2ba423c": unknown;
        "09a64206-d652-4069-8f2c-21a00f5bc48b": components["schemas"]["dde8fbec-9f76-4f06-af63-bc3ee7d2e1bd"][];
        "49dc59ad-dda2-400e-b2da-080ff8ebb569": {
            deviceType?: string;
            nextManifestId?: string;
            /** @description (typeName=java.util.Set<com.tccc.kos.commons.manifest.BaseManifestArtifact>) */
            installArtifacts?: components["schemas"]["d51f2d7c-fd10-4dde-8b73-92c418b73d22"];
            name?: string;
            manifestType?: string;
            /** @description (typeName=java.util.Set<com.tccc.kos.commons.manifest.BaseManifestArtifact>) */
            installLayers?: components["schemas"]["d51f2d7c-fd10-4dde-8b73-92c418b73d22"];
            /** Format: int32 */
            version?: number;
            /** @description (typeName=java.util.Map<java.lang.String, java.lang.String>) */
            properties?: components["schemas"]["918633b0-ffb1-4972-9eab-10ed2a685b16"];
            /** @description (typeName=java.util.Map<java.lang.String, java.util.Set<com.tccc.kos.commons.manifest.BaseManifestArtifact>>) */
            sections?: components["schemas"]["763e2a5d-72c9-4fdc-9411-110abf20d928"];
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export type operations = Record<string, never>;

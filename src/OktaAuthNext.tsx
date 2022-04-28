import { OktaAuth, OktaAuthOptions } from "@okta/okta-auth-js";

const OktaAuthSingleton = (function () {
    let instance: OktaAuth;

    function createInstance(opts: OktaAuthOptions) {
        var object = new OktaAuth(opts);
        return object;
    }

    return {
        getInstance: function (options: OktaAuthOptions) {
            if (!instance) {
                instance = createInstance(options);
            }
            return instance;
        }
    };
});

export default OktaAuthSingleton().getInstance;
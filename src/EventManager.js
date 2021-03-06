/**
 * Event manager class.
 */

import { isArray } from './util';

export default class EventManager {

    constructor() {
        this.listeners = {};
    }

    on(event, callback, priority = 0) {

        var listeners = this.listeners[event] || [], index;

        index = listeners.findIndex(listener => listener.priority < priority);

        if (~index) {
            listeners.splice(index, 0, {callback, priority});
        } else {
            listeners.push({callback, priority});
        }

        this.listeners[event] = listeners;

        return () => this.off(event, callback);
    }

    off(event, callback) {

        if (!callback) {
            delete this.listeners[event];
        }

        var listeners = this.listeners[event], index;

        if (listeners && callback) {

            index = listeners.findIndex(listener => listener.callback === callback);

            if (~index) {
                listeners.splice(index, 1);
            }
        }
    }

    trigger(event, params = [], asynch = false) {

        if (!isArray(params)) {
            params = [params];
        }

        return ((this.listeners[event] || []).concat()).reduce((result, listener) => {

            var callback = result => {

                if (result === false) {
                    return result;
                }

                if (isArray(result)) {
                    params = result;
                }

                return listener.callback.apply(listener.callback, params);
            };

            if (asynch) {
                return result.then(callback);
            }

            return callback(result);

        }, asynch ? Promise.resolve() : undefined);
    }

}

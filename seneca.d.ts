import Nid from 'nid';
import type { MakeSeneca, Instance } from './lib/types';
declare const makeSeneca: {
    (seneca_options?: any, more_options?: any): Instance;
    loghandler: any;
    use: () => any;
    test: () => any;
    quiet: () => any;
    util: {
        Eraro: any;
        Jsonic: any;
        Nid: typeof Nid;
        Patrun: any;
        clean: any;
        pattern: any;
        print: any;
        error: any;
        deep: any;
        Gubu: any;
        deepextend: any;
        parsepattern: any;
        pincanon: any;
        router: () => any;
        resolve_option: any;
        argprops: any;
        recurse: any;
        copydata: any;
        nil: any;
        flatten: any;
    };
    valid: any;
    test$: {
        intern: {
            util: {
                Eraro: any;
                Jsonic: any;
                Nid: typeof Nid;
                Patrun: any;
                clean: any;
                pattern: any;
                print: any;
                error: any;
                deep: any;
                Gubu: any;
                deepextend: any;
                parsepattern: any;
                pincanon: any;
                router: () => any;
                resolve_option: any;
                argprops: any;
                recurse: any;
                copydata: any;
                nil: any;
                flatten: any;
            };
        };
    };
};
declare const Seneca: MakeSeneca;
export type { Instance, MakeSeneca, };
export { makeSeneca, Seneca, };

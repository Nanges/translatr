let ignoredErrorCodes: number[] = null;

export function skipErrorIfStatus(...errorsCode: number[]): MethodDecorator {
    return (target, propertyKey: string, descriptor: PropertyDescriptor) => {
        const original = descriptor.value;

        descriptor.value = function(...args: any[]) {
            ignoredErrorCodes = errorsCode;
            return original.call(this, ...args);
        };
    };
}

export function getIgnoredCodes() {
    if (ignoredErrorCodes) {
        const tmp = ignoredErrorCodes;
        ignoredErrorCodes = null;
        return tmp;
    }

    return null;
}

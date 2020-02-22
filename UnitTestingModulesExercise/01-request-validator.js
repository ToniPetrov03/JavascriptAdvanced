function solve(obj) {
    const method = obj.method;
    const uri = obj.uri;
    const version = obj.version;
    const message = obj.message;

    if (!(method === 'GET' || method === 'POST' || method === 'DELETE' || method === 'CONNECT')) {
        throw new Error('Invalid request header: Invalid Method');
    }

    if (uri === undefined || !(uri === '*' || /^[\w.]+$/.test(uri))) {
        throw new Error('Invalid request header: Invalid URI');
    }

    if (!(version === 'HTTP/0.9' || version === 'HTTP/1.0' || version === 'HTTP/1.1' || version === 'HTTP/2.0')) {
        throw new Error('Invalid request header: Invalid Version');
    }

    if (message === undefined || !/^[^<>\\&'"]*$/.test(message)) {
        throw new Error('Invalid request header: Invalid Message');
    }

    return obj;
}

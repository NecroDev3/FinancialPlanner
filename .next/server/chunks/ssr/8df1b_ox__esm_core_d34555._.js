module.exports = {

"[project]/node_modules/viem/node_modules/ox/_esm/core/version.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/** @internal */ __turbopack_esm__({
    "version": (()=>version)
});
const version = '0.1.1'; //# sourceMappingURL=version.js.map
}}),
"[project]/node_modules/viem/node_modules/ox/_esm/core/internal/errors.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getUrl": (()=>getUrl),
    "getVersion": (()=>getVersion),
    "prettyPrint": (()=>prettyPrint)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$version$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/viem/node_modules/ox/_esm/core/version.js [app-ssr] (ecmascript)");
;
function getUrl(url) {
    return url;
}
function getVersion() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$version$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["version"];
}
function prettyPrint(args) {
    if (!args) return '';
    const entries = Object.entries(args).map(([key, value])=>{
        if (value === undefined || value === false) return null;
        return [
            key,
            value
        ];
    }).filter(Boolean);
    const maxLength = entries.reduce((acc, [key])=>Math.max(acc, key.length), 0);
    return entries.map(([key, value])=>`  ${`${key}:`.padEnd(maxLength + 1)}  ${value}`).join('\n');
} //# sourceMappingURL=errors.js.map
}}),
"[project]/node_modules/viem/node_modules/ox/_esm/core/Errors.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "BaseError": (()=>BaseError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/viem/node_modules/ox/_esm/core/internal/errors.js [app-ssr] (ecmascript)");
;
class BaseError extends Error {
    constructor(shortMessage, options = {}){
        const details = (()=>{
            if (options.cause instanceof BaseError) {
                if (options.cause.details) return options.cause.details;
                if (options.cause.shortMessage) return options.cause.shortMessage;
            }
            if (options.cause?.message) return options.cause.message;
            return options.details;
        })();
        const docsPath = (()=>{
            if (options.cause instanceof BaseError) return options.cause.docsPath || options.docsPath;
            return options.docsPath;
        })();
        const docsBaseUrl = 'https://oxlib.sh';
        const docs = `${docsBaseUrl}${docsPath ?? ''}`;
        const message = [
            shortMessage || 'An error occurred.',
            ...options.metaMessages ? [
                '',
                ...options.metaMessages
            ] : [],
            ...details || docsPath ? [
                '',
                details ? `Details: ${details}` : undefined,
                docsPath ? `See: ${docs}` : undefined
            ] : []
        ].filter((x)=>typeof x === 'string').join('\n');
        super(message, options.cause ? {
            cause: options.cause
        } : undefined);
        Object.defineProperty(this, "details", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "docs", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "docsPath", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "shortMessage", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "cause", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'BaseError'
        });
        Object.defineProperty(this, "version", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: `ox@${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getVersion"])()}`
        });
        this.cause = options.cause;
        this.details = details;
        this.docs = docs;
        this.docsPath = docsPath;
        this.shortMessage = shortMessage;
    }
    walk(fn) {
        return walk(this, fn);
    }
}
/** @internal */ function walk(err, fn) {
    if (fn?.(err)) return err;
    if (err && typeof err === 'object' && 'cause' in err && err.cause) return walk(err.cause, fn);
    return fn ? null : err;
} //# sourceMappingURL=Errors.js.map
}}),
"[project]/node_modules/viem/node_modules/ox/_esm/core/Json.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "parse": (()=>parse),
    "stringify": (()=>stringify)
});
const bigIntSuffix = '#__bigint';
function parse(string, reviver) {
    return JSON.parse(string, (key, value_)=>{
        const value = value_;
        if (typeof value === 'string' && value.endsWith(bigIntSuffix)) return BigInt(value.slice(0, -bigIntSuffix.length));
        return typeof reviver === 'function' ? reviver(key, value) : value;
    });
}
function stringify(value, replacer, space) {
    return JSON.stringify(value, (key, value)=>{
        if (typeof replacer === 'function') return replacer(key, value);
        if (typeof value === 'bigint') return value.toString() + bigIntSuffix;
        return value;
    }, space);
} //# sourceMappingURL=Json.js.map
}}),
"[project]/node_modules/viem/node_modules/ox/_esm/core/internal/hex.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "assertEndOffset": (()=>assertEndOffset),
    "assertSize": (()=>assertSize),
    "assertStartOffset": (()=>assertStartOffset),
    "pad": (()=>pad),
    "trim": (()=>trim)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/viem/node_modules/ox/_esm/core/Hex.js [app-ssr] (ecmascript)");
;
function assertSize(hex, size_) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.size(hex) > size_) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.SizeOverflowError({
        givenSize: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.size(hex),
        maxSize: size_
    });
}
function assertStartOffset(value, start) {
    if (typeof start === 'number' && start > 0 && start > __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.size(value) - 1) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.SliceOffsetOutOfBoundsError({
        offset: start,
        position: 'start',
        size: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.size(value)
    });
}
function assertEndOffset(value, start, end) {
    if (typeof start === 'number' && typeof end === 'number' && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.size(value) !== end - start) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.SliceOffsetOutOfBoundsError({
            offset: end,
            position: 'end',
            size: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.size(value)
        });
    }
}
function pad(hex_, options = {}) {
    const { dir, size = 32 } = options;
    if (size === 0) return hex_;
    const hex = hex_.replace('0x', '');
    if (hex.length > size * 2) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.SizeExceedsPaddingSizeError({
        size: Math.ceil(hex.length / 2),
        targetSize: size,
        type: 'Hex'
    });
    return `0x${hex[dir === 'right' ? 'padEnd' : 'padStart'](size * 2, '0')}`;
}
function trim(value, options = {}) {
    const { dir = 'left' } = options;
    let data = value.replace('0x', '');
    let sliceLength = 0;
    for(let i = 0; i < data.length - 1; i++){
        if (data[dir === 'left' ? i : data.length - i - 1].toString() === '0') sliceLength++;
        else break;
    }
    data = dir === 'left' ? data.slice(sliceLength) : data.slice(0, data.length - sliceLength);
    if (data === '0') return '0x';
    if (dir === 'right' && data.length % 2 === 1) return `0x${data}0`;
    return `0x${data}`;
} //# sourceMappingURL=hex.js.map
}}),
"[project]/node_modules/viem/node_modules/ox/_esm/core/internal/bytes.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "assertEndOffset": (()=>assertEndOffset),
    "assertSize": (()=>assertSize),
    "assertStartOffset": (()=>assertStartOffset),
    "charCodeMap": (()=>charCodeMap),
    "charCodeToBase16": (()=>charCodeToBase16),
    "pad": (()=>pad),
    "trim": (()=>trim)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/viem/node_modules/ox/_esm/core/Bytes.js [app-ssr] (ecmascript)");
;
function assertSize(bytes, size_) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.size(bytes) > size_) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.SizeOverflowError({
        givenSize: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.size(bytes),
        maxSize: size_
    });
}
function assertStartOffset(value, start) {
    if (typeof start === 'number' && start > 0 && start > __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.size(value) - 1) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.SliceOffsetOutOfBoundsError({
        offset: start,
        position: 'start',
        size: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.size(value)
    });
}
function assertEndOffset(value, start, end) {
    if (typeof start === 'number' && typeof end === 'number' && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.size(value) !== end - start) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.SliceOffsetOutOfBoundsError({
            offset: end,
            position: 'end',
            size: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.size(value)
        });
    }
}
const charCodeMap = {
    zero: 48,
    nine: 57,
    A: 65,
    F: 70,
    a: 97,
    f: 102
};
function charCodeToBase16(char) {
    if (char >= charCodeMap.zero && char <= charCodeMap.nine) return char - charCodeMap.zero;
    if (char >= charCodeMap.A && char <= charCodeMap.F) return char - (charCodeMap.A - 10);
    if (char >= charCodeMap.a && char <= charCodeMap.f) return char - (charCodeMap.a - 10);
    return undefined;
}
function pad(bytes, options = {}) {
    const { dir, size = 32 } = options;
    if (size === 0) return bytes;
    if (bytes.length > size) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.SizeExceedsPaddingSizeError({
        size: bytes.length,
        targetSize: size,
        type: 'Bytes'
    });
    const paddedBytes = new Uint8Array(size);
    for(let i = 0; i < size; i++){
        const padEnd = dir === 'right';
        paddedBytes[padEnd ? i : size - i - 1] = bytes[padEnd ? i : bytes.length - i - 1];
    }
    return paddedBytes;
}
function trim(value, options = {}) {
    const { dir = 'left' } = options;
    let data = value;
    let sliceLength = 0;
    for(let i = 0; i < data.length - 1; i++){
        if (data[dir === 'left' ? i : data.length - i - 1].toString() === '0') sliceLength++;
        else break;
    }
    data = dir === 'left' ? data.slice(sliceLength) : data.slice(0, data.length - sliceLength);
    return data;
} //# sourceMappingURL=bytes.js.map
}}),
"[project]/node_modules/viem/node_modules/ox/_esm/core/Bytes.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "InvalidBytesBooleanError": (()=>InvalidBytesBooleanError),
    "InvalidBytesTypeError": (()=>InvalidBytesTypeError),
    "SizeExceedsPaddingSizeError": (()=>SizeExceedsPaddingSizeError),
    "SizeOverflowError": (()=>SizeOverflowError),
    "SliceOffsetOutOfBoundsError": (()=>SliceOffsetOutOfBoundsError),
    "assert": (()=>assert),
    "concat": (()=>concat),
    "from": (()=>from),
    "fromArray": (()=>fromArray),
    "fromBoolean": (()=>fromBoolean),
    "fromHex": (()=>fromHex),
    "fromNumber": (()=>fromNumber),
    "fromString": (()=>fromString),
    "isEqual": (()=>isEqual),
    "padLeft": (()=>padLeft),
    "padRight": (()=>padRight),
    "random": (()=>random),
    "size": (()=>size),
    "slice": (()=>slice),
    "toBigInt": (()=>toBigInt),
    "toBoolean": (()=>toBoolean),
    "toHex": (()=>toHex),
    "toNumber": (()=>toNumber),
    "toString": (()=>toString),
    "trimLeft": (()=>trimLeft),
    "trimRight": (()=>trimRight),
    "validate": (()=>validate)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/viem/node_modules/ox/_esm/core/Errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Json$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/viem/node_modules/ox/_esm/core/Json.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/viem/node_modules/ox/_esm/core/internal/bytes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/viem/node_modules/ox/_esm/core/internal/hex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/viem/node_modules/ox/_esm/core/Hex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@noble/curves/esm/abstract/utils.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
const decoder = /*#__PURE__*/ new TextDecoder();
const encoder = /*#__PURE__*/ new TextEncoder();
function assert(value) {
    if (value instanceof Uint8Array) return;
    if (!value) throw new InvalidBytesTypeError(value);
    if (typeof value !== 'object') throw new InvalidBytesTypeError(value);
    if (!('BYTES_PER_ELEMENT' in value)) throw new InvalidBytesTypeError(value);
    if (value.BYTES_PER_ELEMENT !== 1 || value.constructor.name !== 'Uint8Array') throw new InvalidBytesTypeError(value);
}
function concat(...values) {
    let length = 0;
    for (const arr of values){
        length += arr.length;
    }
    const result = new Uint8Array(length);
    for(let i = 0, index = 0; i < values.length; i++){
        const arr = values[i];
        result.set(arr, index);
        index += arr.length;
    }
    return result;
}
function from(value) {
    if (value instanceof Uint8Array) return value;
    if (typeof value === 'string') return fromHex(value);
    return fromArray(value);
}
function fromArray(value) {
    return value instanceof Uint8Array ? value : new Uint8Array(value);
}
function fromBoolean(value, options = {}) {
    const { size } = options;
    const bytes = new Uint8Array(1);
    bytes[0] = Number(value);
    if (typeof size === 'number') {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.assertSize(bytes, size);
        return padLeft(bytes, size);
    }
    return bytes;
}
function fromHex(value, options = {}) {
    const { size } = options;
    let hex = value;
    if (size) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.assertSize(value, size);
        hex = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.padRight(value, size);
    }
    let hexString = hex.slice(2);
    if (hexString.length % 2) hexString = `0${hexString}`;
    const length = hexString.length / 2;
    const bytes = new Uint8Array(length);
    for(let index = 0, j = 0; index < length; index++){
        const nibbleLeft = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.charCodeToBase16(hexString.charCodeAt(j++));
        const nibbleRight = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.charCodeToBase16(hexString.charCodeAt(j++));
        if (nibbleLeft === undefined || nibbleRight === undefined) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.BaseError(`Invalid byte sequence ("${hexString[j - 2]}${hexString[j - 1]}" in "${hexString}").`);
        }
        bytes[index] = nibbleLeft * 16 + nibbleRight;
    }
    return bytes;
}
function fromNumber(value, options) {
    const hex = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.fromNumber(value, options);
    return fromHex(hex);
}
function fromString(value, options = {}) {
    const { size } = options;
    const bytes = encoder.encode(value);
    if (typeof size === 'number') {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.assertSize(bytes, size);
        return padRight(bytes, size);
    }
    return bytes;
}
function isEqual(bytesA, bytesB) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["equalBytes"])(bytesA, bytesB);
}
function padLeft(value, size) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.pad(value, {
        dir: 'left',
        size
    });
}
function padRight(value, size) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.pad(value, {
        dir: 'right',
        size
    });
}
function random(length) {
    return crypto.getRandomValues(new Uint8Array(length));
}
function size(value) {
    return value.length;
}
function slice(value, start, end, options = {}) {
    const { strict } = options;
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.assertStartOffset(value, start);
    const value_ = value.slice(start, end);
    if (strict) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.assertEndOffset(value_, start, end);
    return value_;
}
function toBigInt(bytes, options = {}) {
    const { size } = options;
    if (typeof size !== 'undefined') __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.assertSize(bytes, size);
    const hex = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.fromBytes(bytes, options);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.toBigInt(hex, options);
}
function toBoolean(bytes, options = {}) {
    const { size } = options;
    let bytes_ = bytes;
    if (typeof size !== 'undefined') {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.assertSize(bytes_, size);
        bytes_ = trimLeft(bytes_);
    }
    if (bytes_.length > 1 || bytes_[0] > 1) throw new InvalidBytesBooleanError(bytes_);
    return Boolean(bytes_[0]);
}
function toHex(value, options = {}) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.fromBytes(value, options);
}
function toNumber(bytes, options = {}) {
    const { size } = options;
    if (typeof size !== 'undefined') __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.assertSize(bytes, size);
    const hex = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.fromBytes(bytes, options);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.toNumber(hex, options);
}
function toString(bytes, options = {}) {
    const { size } = options;
    let bytes_ = bytes;
    if (typeof size !== 'undefined') {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.assertSize(bytes_, size);
        bytes_ = trimRight(bytes_);
    }
    return decoder.decode(bytes_);
}
function trimLeft(value) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.trim(value, {
        dir: 'left'
    });
}
function trimRight(value) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.trim(value, {
        dir: 'right'
    });
}
function validate(value) {
    try {
        assert(value);
        return true;
    } catch  {
        return false;
    }
}
class InvalidBytesBooleanError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.BaseError {
    constructor(bytes){
        super(`Bytes value \`${bytes}\` is not a valid boolean.`, {
            metaMessages: [
                'The bytes array must contain a single byte of either a `0` or `1` value.'
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Bytes.InvalidBytesBooleanError'
        });
    }
}
class InvalidBytesTypeError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.BaseError {
    constructor(value){
        super(`Value \`${typeof value === 'object' ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Json$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.stringify(value) : value}\` of type \`${typeof value}\` is an invalid Bytes value.`, {
            metaMessages: [
                'Bytes values must be of type `Bytes`.'
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Bytes.InvalidBytesTypeError'
        });
    }
}
class SizeOverflowError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.BaseError {
    constructor({ givenSize, maxSize }){
        super(`Size cannot exceed \`${maxSize}\` bytes. Given size: \`${givenSize}\` bytes.`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Bytes.SizeOverflowError'
        });
    }
}
class SliceOffsetOutOfBoundsError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.BaseError {
    constructor({ offset, position, size }){
        super(`Slice ${position === 'start' ? 'starting' : 'ending'} at offset \`${offset}\` is out-of-bounds (size: \`${size}\`).`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Bytes.SliceOffsetOutOfBoundsError'
        });
    }
}
class SizeExceedsPaddingSizeError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.BaseError {
    constructor({ size, targetSize, type }){
        super(`${type.charAt(0).toUpperCase()}${type.slice(1).toLowerCase()} size (\`${size}\`) exceeds padding size (\`${targetSize}\`).`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Bytes.SizeExceedsPaddingSizeError'
        });
    }
} //# sourceMappingURL=Bytes.js.map
}}),
"[project]/node_modules/viem/node_modules/ox/_esm/core/Hex.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "IntegerOutOfRangeError": (()=>IntegerOutOfRangeError),
    "InvalidHexBooleanError": (()=>InvalidHexBooleanError),
    "InvalidHexTypeError": (()=>InvalidHexTypeError),
    "InvalidHexValueError": (()=>InvalidHexValueError),
    "InvalidLengthError": (()=>InvalidLengthError),
    "SizeExceedsPaddingSizeError": (()=>SizeExceedsPaddingSizeError),
    "SizeOverflowError": (()=>SizeOverflowError),
    "SliceOffsetOutOfBoundsError": (()=>SliceOffsetOutOfBoundsError),
    "assert": (()=>assert),
    "concat": (()=>concat),
    "from": (()=>from),
    "fromBoolean": (()=>fromBoolean),
    "fromBytes": (()=>fromBytes),
    "fromNumber": (()=>fromNumber),
    "fromString": (()=>fromString),
    "isEqual": (()=>isEqual),
    "padLeft": (()=>padLeft),
    "padRight": (()=>padRight),
    "random": (()=>random),
    "size": (()=>size),
    "slice": (()=>slice),
    "toBigInt": (()=>toBigInt),
    "toBoolean": (()=>toBoolean),
    "toBytes": (()=>toBytes),
    "toNumber": (()=>toNumber),
    "toString": (()=>toString),
    "trimLeft": (()=>trimLeft),
    "trimRight": (()=>trimRight),
    "validate": (()=>validate)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/viem/node_modules/ox/_esm/core/Errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Json$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/viem/node_modules/ox/_esm/core/Json.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/viem/node_modules/ox/_esm/core/internal/hex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@noble/curves/esm/abstract/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/viem/node_modules/ox/_esm/core/Bytes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/viem/node_modules/ox/_esm/core/internal/bytes.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
const encoder = /*#__PURE__*/ new TextEncoder();
const hexes = /*#__PURE__*/ Array.from({
    length: 256
}, (_v, i)=>i.toString(16).padStart(2, '0'));
function assert(value, options = {}) {
    const { strict = false } = options;
    if (!value) throw new InvalidHexTypeError(value);
    if (typeof value !== 'string') throw new InvalidHexTypeError(value);
    if (strict) {
        if (!/^0x[0-9a-fA-F]*$/.test(value)) throw new InvalidHexValueError(value);
    }
    if (!value.startsWith('0x')) throw new InvalidHexValueError(value);
}
function concat(...values) {
    return `0x${values.reduce((acc, x)=>acc + x.replace('0x', ''), '')}`;
}
function from(value) {
    if (value instanceof Uint8Array) return fromBytes(value);
    if (Array.isArray(value)) return fromBytes(new Uint8Array(value));
    return value;
}
function fromBoolean(value, options = {}) {
    const hex = `0x${Number(value)}`;
    if (typeof options.size === 'number') {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.assertSize(hex, options.size);
        return padLeft(hex, options.size);
    }
    return hex;
}
function fromBytes(value, options = {}) {
    let string = '';
    for(let i = 0; i < value.length; i++)string += hexes[value[i]];
    const hex = `0x${string}`;
    if (typeof options.size === 'number') {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.assertSize(hex, options.size);
        return padRight(hex, options.size);
    }
    return hex;
}
function fromNumber(value, options = {}) {
    const { signed, size } = options;
    const value_ = BigInt(value);
    let maxValue;
    if (size) {
        if (signed) maxValue = (1n << BigInt(size) * 8n - 1n) - 1n;
        else maxValue = 2n ** (BigInt(size) * 8n) - 1n;
    } else if (typeof value === 'number') {
        maxValue = BigInt(Number.MAX_SAFE_INTEGER);
    }
    const minValue = typeof maxValue === 'bigint' && signed ? -maxValue - 1n : 0;
    if (maxValue && value_ > maxValue || value_ < minValue) {
        const suffix = typeof value === 'bigint' ? 'n' : '';
        throw new IntegerOutOfRangeError({
            max: maxValue ? `${maxValue}${suffix}` : undefined,
            min: `${minValue}${suffix}`,
            signed,
            size,
            value: `${value}${suffix}`
        });
    }
    const stringValue = (signed && value_ < 0 ? (1n << BigInt(size * 8)) + BigInt(value_) : value_).toString(16);
    const hex = `0x${stringValue}`;
    if (size) return padLeft(hex, size);
    return hex;
}
function fromString(value, options = {}) {
    return fromBytes(encoder.encode(value), options);
}
function isEqual(hexA, hexB) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["equalBytes"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.fromHex(hexA), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.fromHex(hexB));
}
function padLeft(value, size) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.pad(value, {
        dir: 'left',
        size
    });
}
function padRight(value, size) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.pad(value, {
        dir: 'right',
        size
    });
}
function random(length) {
    return fromBytes(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.random(length));
}
function slice(value, start, end, options = {}) {
    const { strict } = options;
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.assertStartOffset(value, start);
    const value_ = `0x${value.replace('0x', '').slice((start ?? 0) * 2, (end ?? value.length) * 2)}`;
    if (strict) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.assertEndOffset(value_, start, end);
    return value_;
}
function size(value) {
    return Math.ceil((value.length - 2) / 2);
}
function trimLeft(value) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.trim(value, {
        dir: 'left'
    });
}
function trimRight(value) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.trim(value, {
        dir: 'right'
    });
}
function toBigInt(hex, options = {}) {
    const { signed } = options;
    if (options.size) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.assertSize(hex, options.size);
    const value = BigInt(hex);
    if (!signed) return value;
    const size = (hex.length - 2) / 2;
    const max_unsigned = (1n << BigInt(size) * 8n) - 1n;
    const max_signed = max_unsigned >> 1n;
    if (value <= max_signed) return value;
    return value - max_unsigned - 1n;
}
function toBoolean(hex, options = {}) {
    if (options.size) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.assertSize(hex, options.size);
    const hex_ = trimLeft(hex);
    if (hex_ === '0x') return false;
    if (hex_ === '0x1') return true;
    throw new InvalidHexBooleanError(hex);
}
function toBytes(hex, options = {}) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.fromHex(hex, options);
}
function toNumber(hex, options = {}) {
    const { signed, size } = options;
    if (!signed && !size) return Number(hex);
    return Number(toBigInt(hex, options));
}
function toString(hex, options = {}) {
    const { size } = options;
    let bytes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.fromHex(hex);
    if (size) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.assertSize(bytes, size);
        bytes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.trimRight(bytes);
    }
    return new TextDecoder().decode(bytes);
}
function validate(value, options = {}) {
    const { strict = false } = options;
    try {
        assert(value, {
            strict
        });
        return true;
    } catch  {
        return false;
    }
}
class IntegerOutOfRangeError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.BaseError {
    constructor({ max, min, signed, size, value }){
        super(`Number \`${value}\` is not in safe${size ? ` ${size * 8}-bit` : ''}${signed ? ' signed' : ' unsigned'} integer range ${max ? `(\`${min}\` to \`${max}\`)` : `(above \`${min}\`)`}`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Hex.IntegerOutOfRangeError'
        });
    }
}
class InvalidHexBooleanError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.BaseError {
    constructor(hex){
        super(`Hex value \`"${hex}"\` is not a valid boolean.`, {
            metaMessages: [
                'The hex value must be `"0x0"` (false) or `"0x1"` (true).'
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Hex.InvalidHexBooleanError'
        });
    }
}
class InvalidHexTypeError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.BaseError {
    constructor(value){
        super(`Value \`${typeof value === 'object' ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Json$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.stringify(value) : value}\` of type \`${typeof value}\` is an invalid hex type.`, {
            metaMessages: [
                'Hex types must be represented as `"0x${string}"`.'
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Hex.InvalidHexTypeError'
        });
    }
}
class InvalidHexValueError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.BaseError {
    constructor(value){
        super(`Value \`${value}\` is an invalid hex value.`, {
            metaMessages: [
                'Hex values must start with `"0x"` and contain only hexadecimal characters (0-9, a-f, A-F).'
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Hex.InvalidHexValueError'
        });
    }
}
class InvalidLengthError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.BaseError {
    constructor(value){
        super(`Hex value \`"${value}"\` is an odd length (${value.length - 2} nibbles).`, {
            metaMessages: [
                'It must be an even length.'
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Hex.InvalidLengthError'
        });
    }
}
class SizeOverflowError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.BaseError {
    constructor({ givenSize, maxSize }){
        super(`Size cannot exceed \`${maxSize}\` bytes. Given size: \`${givenSize}\` bytes.`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Hex.SizeOverflowError'
        });
    }
}
class SliceOffsetOutOfBoundsError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.BaseError {
    constructor({ offset, position, size }){
        super(`Slice ${position === 'start' ? 'starting' : 'ending'} at offset \`${offset}\` is out-of-bounds (size: \`${size}\`).`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Hex.SliceOffsetOutOfBoundsError'
        });
    }
}
class SizeExceedsPaddingSizeError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.BaseError {
    constructor({ size, targetSize, type }){
        super(`${type.charAt(0).toUpperCase()}${type.slice(1).toLowerCase()} size (\`${size}\`) exceeds padding size (\`${targetSize}\`).`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Hex.SizeExceedsPaddingSizeError'
        });
    }
} //# sourceMappingURL=Hex.js.map
}}),
"[project]/node_modules/viem/node_modules/ox/_esm/core/Withdrawal.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "fromRpc": (()=>fromRpc),
    "toRpc": (()=>toRpc)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/viem/node_modules/ox/_esm/core/Hex.js [app-ssr] (ecmascript)");
;
function fromRpc(withdrawal) {
    return {
        ...withdrawal,
        amount: BigInt(withdrawal.amount),
        index: Number(withdrawal.index),
        validatorIndex: Number(withdrawal.validatorIndex)
    };
}
function toRpc(withdrawal) {
    return {
        address: withdrawal.address,
        amount: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.fromNumber(withdrawal.amount),
        index: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.fromNumber(withdrawal.index),
        validatorIndex: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.fromNumber(withdrawal.validatorIndex)
    };
} //# sourceMappingURL=Withdrawal.js.map
}}),
"[project]/node_modules/viem/node_modules/ox/_esm/core/BlockOverrides.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "fromRpc": (()=>fromRpc),
    "toRpc": (()=>toRpc)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Withdrawal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/viem/node_modules/ox/_esm/core/Withdrawal.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/viem/node_modules/ox/_esm/core/Hex.js [app-ssr] (ecmascript)");
;
;
function fromRpc(rpcBlockOverrides) {
    return {
        ...rpcBlockOverrides.baseFeePerGas && {
            baseFeePerGas: BigInt(rpcBlockOverrides.baseFeePerGas)
        },
        ...rpcBlockOverrides.blobBaseFee && {
            blobBaseFee: BigInt(rpcBlockOverrides.blobBaseFee)
        },
        ...rpcBlockOverrides.feeRecipient && {
            feeRecipient: rpcBlockOverrides.feeRecipient
        },
        ...rpcBlockOverrides.gasLimit && {
            gasLimit: BigInt(rpcBlockOverrides.gasLimit)
        },
        ...rpcBlockOverrides.number && {
            number: BigInt(rpcBlockOverrides.number)
        },
        ...rpcBlockOverrides.prevRandao && {
            prevRandao: BigInt(rpcBlockOverrides.prevRandao)
        },
        ...rpcBlockOverrides.time && {
            time: BigInt(rpcBlockOverrides.time)
        },
        ...rpcBlockOverrides.withdrawals && {
            withdrawals: rpcBlockOverrides.withdrawals.map(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Withdrawal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.fromRpc)
        }
    };
}
function toRpc(blockOverrides) {
    return {
        ...typeof blockOverrides.baseFeePerGas === 'bigint' && {
            baseFeePerGas: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.fromNumber(blockOverrides.baseFeePerGas)
        },
        ...typeof blockOverrides.blobBaseFee === 'bigint' && {
            blobBaseFee: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.fromNumber(blockOverrides.blobBaseFee)
        },
        ...typeof blockOverrides.feeRecipient === 'string' && {
            feeRecipient: blockOverrides.feeRecipient
        },
        ...typeof blockOverrides.gasLimit === 'bigint' && {
            gasLimit: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.fromNumber(blockOverrides.gasLimit)
        },
        ...typeof blockOverrides.number === 'bigint' && {
            number: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.fromNumber(blockOverrides.number)
        },
        ...typeof blockOverrides.prevRandao === 'bigint' && {
            prevRandao: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.fromNumber(blockOverrides.prevRandao)
        },
        ...typeof blockOverrides.time === 'bigint' && {
            time: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.fromNumber(blockOverrides.time)
        },
        ...blockOverrides.withdrawals && {
            withdrawals: blockOverrides.withdrawals.map(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Withdrawal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.toRpc)
        }
    };
} //# sourceMappingURL=BlockOverrides.js.map
}}),
"[project]/node_modules/viem/node_modules/ox/_esm/core/internal/cursor.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "NegativeOffsetError": (()=>NegativeOffsetError),
    "PositionOutOfBoundsError": (()=>PositionOutOfBoundsError),
    "RecursiveReadLimitExceededError": (()=>RecursiveReadLimitExceededError),
    "create": (()=>create)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/viem/node_modules/ox/_esm/core/Errors.js [app-ssr] (ecmascript)");
;
const staticCursor = /*#__PURE__*/ {
    bytes: new Uint8Array(),
    dataView: new DataView(new ArrayBuffer(0)),
    position: 0,
    positionReadCount: new Map(),
    recursiveReadCount: 0,
    recursiveReadLimit: Number.POSITIVE_INFINITY,
    assertReadLimit () {
        if (this.recursiveReadCount >= this.recursiveReadLimit) throw new RecursiveReadLimitExceededError({
            count: this.recursiveReadCount + 1,
            limit: this.recursiveReadLimit
        });
    },
    assertPosition (position) {
        if (position < 0 || position > this.bytes.length - 1) throw new PositionOutOfBoundsError({
            length: this.bytes.length,
            position
        });
    },
    decrementPosition (offset) {
        if (offset < 0) throw new NegativeOffsetError({
            offset
        });
        const position = this.position - offset;
        this.assertPosition(position);
        this.position = position;
    },
    getReadCount (position) {
        return this.positionReadCount.get(position || this.position) || 0;
    },
    incrementPosition (offset) {
        if (offset < 0) throw new NegativeOffsetError({
            offset
        });
        const position = this.position + offset;
        this.assertPosition(position);
        this.position = position;
    },
    inspectByte (position_) {
        const position = position_ ?? this.position;
        this.assertPosition(position);
        return this.bytes[position];
    },
    inspectBytes (length, position_) {
        const position = position_ ?? this.position;
        this.assertPosition(position + length - 1);
        return this.bytes.subarray(position, position + length);
    },
    inspectUint8 (position_) {
        const position = position_ ?? this.position;
        this.assertPosition(position);
        return this.bytes[position];
    },
    inspectUint16 (position_) {
        const position = position_ ?? this.position;
        this.assertPosition(position + 1);
        return this.dataView.getUint16(position);
    },
    inspectUint24 (position_) {
        const position = position_ ?? this.position;
        this.assertPosition(position + 2);
        return (this.dataView.getUint16(position) << 8) + this.dataView.getUint8(position + 2);
    },
    inspectUint32 (position_) {
        const position = position_ ?? this.position;
        this.assertPosition(position + 3);
        return this.dataView.getUint32(position);
    },
    pushByte (byte) {
        this.assertPosition(this.position);
        this.bytes[this.position] = byte;
        this.position++;
    },
    pushBytes (bytes) {
        this.assertPosition(this.position + bytes.length - 1);
        this.bytes.set(bytes, this.position);
        this.position += bytes.length;
    },
    pushUint8 (value) {
        this.assertPosition(this.position);
        this.bytes[this.position] = value;
        this.position++;
    },
    pushUint16 (value) {
        this.assertPosition(this.position + 1);
        this.dataView.setUint16(this.position, value);
        this.position += 2;
    },
    pushUint24 (value) {
        this.assertPosition(this.position + 2);
        this.dataView.setUint16(this.position, value >> 8);
        this.dataView.setUint8(this.position + 2, value & ~4294967040);
        this.position += 3;
    },
    pushUint32 (value) {
        this.assertPosition(this.position + 3);
        this.dataView.setUint32(this.position, value);
        this.position += 4;
    },
    readByte () {
        this.assertReadLimit();
        this._touch();
        const value = this.inspectByte();
        this.position++;
        return value;
    },
    readBytes (length, size) {
        this.assertReadLimit();
        this._touch();
        const value = this.inspectBytes(length);
        this.position += size ?? length;
        return value;
    },
    readUint8 () {
        this.assertReadLimit();
        this._touch();
        const value = this.inspectUint8();
        this.position += 1;
        return value;
    },
    readUint16 () {
        this.assertReadLimit();
        this._touch();
        const value = this.inspectUint16();
        this.position += 2;
        return value;
    },
    readUint24 () {
        this.assertReadLimit();
        this._touch();
        const value = this.inspectUint24();
        this.position += 3;
        return value;
    },
    readUint32 () {
        this.assertReadLimit();
        this._touch();
        const value = this.inspectUint32();
        this.position += 4;
        return value;
    },
    get remaining () {
        return this.bytes.length - this.position;
    },
    setPosition (position) {
        const oldPosition = this.position;
        this.assertPosition(position);
        this.position = position;
        return ()=>this.position = oldPosition;
    },
    _touch () {
        if (this.recursiveReadLimit === Number.POSITIVE_INFINITY) return;
        const count = this.getReadCount();
        this.positionReadCount.set(this.position, count + 1);
        if (count > 0) this.recursiveReadCount++;
    }
};
function create(bytes, { recursiveReadLimit = 8_192 } = {}) {
    const cursor = Object.create(staticCursor);
    cursor.bytes = bytes;
    cursor.dataView = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
    cursor.positionReadCount = new Map();
    cursor.recursiveReadLimit = recursiveReadLimit;
    return cursor;
}
class NegativeOffsetError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.BaseError {
    constructor({ offset }){
        super(`Offset \`${offset}\` cannot be negative.`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Cursor.NegativeOffsetError'
        });
    }
}
class PositionOutOfBoundsError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.BaseError {
    constructor({ length, position }){
        super(`Position \`${position}\` is out of bounds (\`0 < position < ${length}\`).`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Cursor.PositionOutOfBoundsError'
        });
    }
}
class RecursiveReadLimitExceededError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.BaseError {
    constructor({ count, limit }){
        super(`Recursive read limit of \`${limit}\` exceeded (recursive read count: \`${count}\`).`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Cursor.RecursiveReadLimitExceededError'
        });
    }
} //# sourceMappingURL=cursor.js.map
}}),
"[project]/node_modules/viem/node_modules/ox/_esm/core/internal/lru.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/**
 * @internal
 *
 * Map with a LRU (Least recently used) policy.
 * @see https://en.wikipedia.org/wiki/Cache_replacement_policies#LRU
 */ __turbopack_esm__({
    "LruMap": (()=>LruMap)
});
class LruMap extends Map {
    constructor(size){
        super();
        Object.defineProperty(this, "maxSize", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.maxSize = size;
    }
    get(key) {
        const value = super.get(key);
        if (super.has(key) && value !== undefined) {
            this.delete(key);
            super.set(key, value);
        }
        return value;
    }
    set(key, value) {
        super.set(key, value);
        if (this.maxSize && this.size > this.maxSize) {
            const firstKey = this.keys().next().value;
            if (firstKey) this.delete(firstKey);
        }
        return this;
    }
} //# sourceMappingURL=lru.js.map
}}),
"[project]/node_modules/viem/node_modules/ox/_esm/core/Caches.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "checksum": (()=>checksum),
    "clear": (()=>clear)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$lru$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/viem/node_modules/ox/_esm/core/internal/lru.js [app-ssr] (ecmascript)");
;
const caches = {
    checksum: /*#__PURE__*/ new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$lru$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LruMap"](8192)
};
const checksum = caches.checksum;
function clear() {
    for (const cache of Object.values(caches))cache.clear();
} //# sourceMappingURL=Caches.js.map
}}),
"[project]/node_modules/viem/node_modules/ox/_esm/core/Hash.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "keccak256": (()=>keccak256),
    "ripemd160": (()=>ripemd160),
    "sha256": (()=>sha256),
    "validate": (()=>validate)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$sha3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@noble/hashes/esm/sha3.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/viem/node_modules/ox/_esm/core/Bytes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/viem/node_modules/ox/_esm/core/Hex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$ripemd160$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@noble/hashes/esm/ripemd160.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$sha256$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@noble/hashes/esm/sha256.js [app-ssr] (ecmascript)");
;
;
;
;
;
function keccak256(value, options = {}) {
    const { as = typeof value === 'string' ? 'Hex' : 'Bytes' } = options;
    const bytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$sha3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keccak_256"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.from(value));
    if (as === 'Bytes') return bytes;
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.fromBytes(bytes);
}
function ripemd160(value, options = {}) {
    const { as = typeof value === 'string' ? 'Hex' : 'Bytes' } = options;
    const bytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$ripemd160$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ripemd160"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.from(value));
    if (as === 'Bytes') return bytes;
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.fromBytes(bytes);
}
function sha256(value, options = {}) {
    const { as = typeof value === 'string' ? 'Hex' : 'Bytes' } = options;
    const bytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$sha256$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sha256"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.from(value));
    if (as === 'Bytes') return bytes;
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.fromBytes(bytes);
}
function validate(value) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.validate(value) && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.size(value) === 32;
} //# sourceMappingURL=Hash.js.map
}}),
"[project]/node_modules/viem/node_modules/ox/_esm/core/PublicKey.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "InvalidCompressedPrefixError": (()=>InvalidCompressedPrefixError),
    "InvalidError": (()=>InvalidError),
    "InvalidPrefixError": (()=>InvalidPrefixError),
    "InvalidSerializedSizeError": (()=>InvalidSerializedSizeError),
    "InvalidUncompressedPrefixError": (()=>InvalidUncompressedPrefixError),
    "assert": (()=>assert),
    "compress": (()=>compress),
    "from": (()=>from),
    "fromBytes": (()=>fromBytes),
    "fromHex": (()=>fromHex),
    "toBytes": (()=>toBytes),
    "toHex": (()=>toHex),
    "validate": (()=>validate)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Json$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/viem/node_modules/ox/_esm/core/Json.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/viem/node_modules/ox/_esm/core/Errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/viem/node_modules/ox/_esm/core/Hex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/viem/node_modules/ox/_esm/core/Bytes.js [app-ssr] (ecmascript)");
;
;
;
;
function assert(publicKey, options = {}) {
    const { compressed } = options;
    const { prefix, x, y } = publicKey;
    // Uncompressed
    if (compressed === false || typeof x === 'bigint' && typeof y === 'bigint') {
        if (prefix !== 4) throw new InvalidPrefixError({
            prefix,
            cause: new InvalidUncompressedPrefixError()
        });
        return;
    }
    // Compressed
    if (compressed === true || typeof x === 'bigint' && typeof y === 'undefined') {
        if (prefix !== 3 && prefix !== 2) throw new InvalidPrefixError({
            prefix,
            cause: new InvalidCompressedPrefixError()
        });
        return;
    }
    // Unknown/invalid
    throw new InvalidError({
        publicKey
    });
}
function compress(publicKey) {
    const { x, y } = publicKey;
    return {
        prefix: y % 2n === 0n ? 2 : 3,
        x
    };
}
function from(value) {
    const publicKey = (()=>{
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.validate(value)) return fromHex(value);
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.validate(value)) return fromBytes(value);
        const { prefix, x, y } = value;
        if (typeof x === 'bigint' && typeof y === 'bigint') return {
            prefix: prefix ?? 0x04,
            x,
            y
        };
        return {
            prefix,
            x
        };
    })();
    assert(publicKey);
    return publicKey;
}
function fromBytes(publicKey) {
    return fromHex(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.fromBytes(publicKey));
}
function fromHex(publicKey) {
    if (publicKey.length !== 132 && publicKey.length !== 130 && publicKey.length !== 68) throw new InvalidSerializedSizeError({
        publicKey
    });
    if (publicKey.length === 130) {
        const x = BigInt(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.slice(publicKey, 0, 32));
        const y = BigInt(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.slice(publicKey, 32, 64));
        return {
            prefix: 4,
            x,
            y
        };
    }
    if (publicKey.length === 132) {
        const prefix = Number(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.slice(publicKey, 0, 1));
        const x = BigInt(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.slice(publicKey, 1, 33));
        const y = BigInt(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.slice(publicKey, 33, 65));
        return {
            prefix,
            x,
            y
        };
    }
    const prefix = Number(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.slice(publicKey, 0, 1));
    const x = BigInt(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.slice(publicKey, 1, 33));
    return {
        prefix,
        x
    };
}
function toBytes(publicKey, options = {}) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.fromHex(toHex(publicKey, options));
}
function toHex(publicKey, options = {}) {
    assert(publicKey);
    const { prefix, x, y } = publicKey;
    const { includePrefix = true } = options;
    const publicKey_ = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.concat(includePrefix ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.fromNumber(prefix, {
        size: 1
    }) : '0x', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.fromNumber(x, {
        size: 32
    }), // If the public key is not compressed, add the y coordinate.
    typeof y === 'bigint' ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.fromNumber(y, {
        size: 32
    }) : '0x');
    return publicKey_;
}
function validate(publicKey, options = {}) {
    try {
        assert(publicKey, options);
        return true;
    } catch (error) {
        return false;
    }
}
class InvalidError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.BaseError {
    constructor({ publicKey }){
        super(`Value \`${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Json$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.stringify(publicKey)}\` is not a valid public key.`, {
            metaMessages: [
                'Public key must contain:',
                '- an `x` and `prefix` value (compressed)',
                '- an `x`, `y`, and `prefix` value (uncompressed)'
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'PublicKey.InvalidError'
        });
    }
}
class InvalidPrefixError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.BaseError {
    constructor({ prefix, cause }){
        super(`Prefix "${prefix}" is invalid.`, {
            cause
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'PublicKey.InvalidPrefixError'
        });
    }
}
class InvalidCompressedPrefixError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.BaseError {
    constructor(){
        super('Prefix must be 2 or 3 for compressed public keys.');
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'PublicKey.InvalidCompressedPrefixError'
        });
    }
}
class InvalidUncompressedPrefixError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.BaseError {
    constructor(){
        super('Prefix must be 4 for uncompressed public keys.');
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'PublicKey.InvalidUncompressedPrefixError'
        });
    }
}
class InvalidSerializedSizeError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.BaseError {
    constructor({ publicKey }){
        super(`Value \`${publicKey}\` is an invalid public key size.`, {
            metaMessages: [
                'Expected: 33 bytes (compressed + prefix), 64 bytes (uncompressed) or 65 bytes (uncompressed + prefix).',
                `Received ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.size(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.from(publicKey))} bytes.`
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'PublicKey.InvalidSerializedSizeError'
        });
    }
} //# sourceMappingURL=PublicKey.js.map
}}),
"[project]/node_modules/viem/node_modules/ox/_esm/core/Address.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "InvalidAddressError": (()=>InvalidAddressError),
    "InvalidChecksumError": (()=>InvalidChecksumError),
    "InvalidInputError": (()=>InvalidInputError),
    "assert": (()=>assert),
    "checksum": (()=>checksum),
    "from": (()=>from),
    "fromPublicKey": (()=>fromPublicKey),
    "isEqual": (()=>isEqual),
    "validate": (()=>validate)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/viem/node_modules/ox/_esm/core/Errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Caches$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/viem/node_modules/ox/_esm/core/Caches.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/viem/node_modules/ox/_esm/core/Hash.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/viem/node_modules/ox/_esm/core/Bytes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$PublicKey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/viem/node_modules/ox/_esm/core/PublicKey.js [app-ssr] (ecmascript)");
;
;
;
;
;
const addressRegex = /*#__PURE__*/ /^0x[a-fA-F0-9]{40}$/;
function assert(value, options = {}) {
    const { strict = true } = options;
    if (!addressRegex.test(value)) throw new InvalidAddressError({
        address: value,
        cause: new InvalidInputError()
    });
    if (strict) {
        if (value.toLowerCase() === value) return;
        if (checksum(value) !== value) throw new InvalidAddressError({
            address: value,
            cause: new InvalidChecksumError()
        });
    }
}
function checksum(address) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Caches$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.checksum.has(address)) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Caches$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.checksum.get(address);
    assert(address, {
        strict: false
    });
    const hexAddress = address.substring(2).toLowerCase();
    const hash = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.keccak256(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.fromString(hexAddress), {
        as: 'Bytes'
    });
    const characters = hexAddress.split('');
    for(let i = 0; i < 40; i += 2){
        if (hash[i >> 1] >> 4 >= 8 && characters[i]) {
            characters[i] = characters[i].toUpperCase();
        }
        if ((hash[i >> 1] & 0x0f) >= 8 && characters[i + 1]) {
            characters[i + 1] = characters[i + 1].toUpperCase();
        }
    }
    const result = `0x${characters.join('')}`;
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Caches$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.checksum.set(address, result);
    return result;
}
function from(address, options = {}) {
    const { checksum: checksumVal = false } = options;
    assert(address);
    if (checksumVal) return checksum(address);
    return address;
}
function fromPublicKey(publicKey, options = {}) {
    const address = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.keccak256(`0x${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$PublicKey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.toHex(publicKey).slice(4)}`).substring(26);
    return from(`0x${address}`, options);
}
function isEqual(addressA, addressB) {
    assert(addressA, {
        strict: false
    });
    assert(addressB, {
        strict: false
    });
    return addressA.toLowerCase() === addressB.toLowerCase();
}
function validate(address, options = {}) {
    const { strict = true } = options ?? {};
    try {
        assert(address, {
            strict
        });
        return true;
    } catch  {
        return false;
    }
}
class InvalidAddressError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.BaseError {
    constructor({ address, cause }){
        super(`Address "${address}" is invalid.`, {
            cause
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Address.InvalidAddressError'
        });
    }
}
class InvalidInputError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.BaseError {
    constructor(){
        super('Address is not a 20 byte (40 hexadecimal character) value.');
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Address.InvalidInputError'
        });
    }
}
class InvalidChecksumError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.BaseError {
    constructor(){
        super('Address does not match its checksum counterpart.');
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Address.InvalidChecksumError'
        });
    }
} //# sourceMappingURL=Address.js.map
}}),
"[project]/node_modules/viem/node_modules/ox/_esm/core/Solidity.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "arrayRegex": (()=>arrayRegex),
    "bytesRegex": (()=>bytesRegex),
    "integerRegex": (()=>integerRegex),
    "maxInt104": (()=>maxInt104),
    "maxInt112": (()=>maxInt112),
    "maxInt120": (()=>maxInt120),
    "maxInt128": (()=>maxInt128),
    "maxInt136": (()=>maxInt136),
    "maxInt144": (()=>maxInt144),
    "maxInt152": (()=>maxInt152),
    "maxInt16": (()=>maxInt16),
    "maxInt160": (()=>maxInt160),
    "maxInt168": (()=>maxInt168),
    "maxInt176": (()=>maxInt176),
    "maxInt184": (()=>maxInt184),
    "maxInt192": (()=>maxInt192),
    "maxInt200": (()=>maxInt200),
    "maxInt208": (()=>maxInt208),
    "maxInt216": (()=>maxInt216),
    "maxInt224": (()=>maxInt224),
    "maxInt232": (()=>maxInt232),
    "maxInt24": (()=>maxInt24),
    "maxInt240": (()=>maxInt240),
    "maxInt248": (()=>maxInt248),
    "maxInt256": (()=>maxInt256),
    "maxInt32": (()=>maxInt32),
    "maxInt40": (()=>maxInt40),
    "maxInt48": (()=>maxInt48),
    "maxInt56": (()=>maxInt56),
    "maxInt64": (()=>maxInt64),
    "maxInt72": (()=>maxInt72),
    "maxInt8": (()=>maxInt8),
    "maxInt80": (()=>maxInt80),
    "maxInt88": (()=>maxInt88),
    "maxInt96": (()=>maxInt96),
    "maxUint104": (()=>maxUint104),
    "maxUint112": (()=>maxUint112),
    "maxUint120": (()=>maxUint120),
    "maxUint128": (()=>maxUint128),
    "maxUint136": (()=>maxUint136),
    "maxUint144": (()=>maxUint144),
    "maxUint152": (()=>maxUint152),
    "maxUint16": (()=>maxUint16),
    "maxUint160": (()=>maxUint160),
    "maxUint168": (()=>maxUint168),
    "maxUint176": (()=>maxUint176),
    "maxUint184": (()=>maxUint184),
    "maxUint192": (()=>maxUint192),
    "maxUint200": (()=>maxUint200),
    "maxUint208": (()=>maxUint208),
    "maxUint216": (()=>maxUint216),
    "maxUint224": (()=>maxUint224),
    "maxUint232": (()=>maxUint232),
    "maxUint24": (()=>maxUint24),
    "maxUint240": (()=>maxUint240),
    "maxUint248": (()=>maxUint248),
    "maxUint256": (()=>maxUint256),
    "maxUint32": (()=>maxUint32),
    "maxUint40": (()=>maxUint40),
    "maxUint48": (()=>maxUint48),
    "maxUint56": (()=>maxUint56),
    "maxUint64": (()=>maxUint64),
    "maxUint72": (()=>maxUint72),
    "maxUint8": (()=>maxUint8),
    "maxUint80": (()=>maxUint80),
    "maxUint88": (()=>maxUint88),
    "maxUint96": (()=>maxUint96),
    "minInt104": (()=>minInt104),
    "minInt112": (()=>minInt112),
    "minInt120": (()=>minInt120),
    "minInt128": (()=>minInt128),
    "minInt136": (()=>minInt136),
    "minInt144": (()=>minInt144),
    "minInt152": (()=>minInt152),
    "minInt16": (()=>minInt16),
    "minInt160": (()=>minInt160),
    "minInt168": (()=>minInt168),
    "minInt176": (()=>minInt176),
    "minInt184": (()=>minInt184),
    "minInt192": (()=>minInt192),
    "minInt200": (()=>minInt200),
    "minInt208": (()=>minInt208),
    "minInt216": (()=>minInt216),
    "minInt224": (()=>minInt224),
    "minInt232": (()=>minInt232),
    "minInt24": (()=>minInt24),
    "minInt240": (()=>minInt240),
    "minInt248": (()=>minInt248),
    "minInt256": (()=>minInt256),
    "minInt32": (()=>minInt32),
    "minInt40": (()=>minInt40),
    "minInt48": (()=>minInt48),
    "minInt56": (()=>minInt56),
    "minInt64": (()=>minInt64),
    "minInt72": (()=>minInt72),
    "minInt8": (()=>minInt8),
    "minInt80": (()=>minInt80),
    "minInt88": (()=>minInt88),
    "minInt96": (()=>minInt96)
});
const arrayRegex = /^(.*)\[([0-9]*)\]$/;
const bytesRegex = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/;
const integerRegex = /^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;
const maxInt8 = 2n ** (8n - 1n) - 1n;
const maxInt16 = 2n ** (16n - 1n) - 1n;
const maxInt24 = 2n ** (24n - 1n) - 1n;
const maxInt32 = 2n ** (32n - 1n) - 1n;
const maxInt40 = 2n ** (40n - 1n) - 1n;
const maxInt48 = 2n ** (48n - 1n) - 1n;
const maxInt56 = 2n ** (56n - 1n) - 1n;
const maxInt64 = 2n ** (64n - 1n) - 1n;
const maxInt72 = 2n ** (72n - 1n) - 1n;
const maxInt80 = 2n ** (80n - 1n) - 1n;
const maxInt88 = 2n ** (88n - 1n) - 1n;
const maxInt96 = 2n ** (96n - 1n) - 1n;
const maxInt104 = 2n ** (104n - 1n) - 1n;
const maxInt112 = 2n ** (112n - 1n) - 1n;
const maxInt120 = 2n ** (120n - 1n) - 1n;
const maxInt128 = 2n ** (128n - 1n) - 1n;
const maxInt136 = 2n ** (136n - 1n) - 1n;
const maxInt144 = 2n ** (144n - 1n) - 1n;
const maxInt152 = 2n ** (152n - 1n) - 1n;
const maxInt160 = 2n ** (160n - 1n) - 1n;
const maxInt168 = 2n ** (168n - 1n) - 1n;
const maxInt176 = 2n ** (176n - 1n) - 1n;
const maxInt184 = 2n ** (184n - 1n) - 1n;
const maxInt192 = 2n ** (192n - 1n) - 1n;
const maxInt200 = 2n ** (200n - 1n) - 1n;
const maxInt208 = 2n ** (208n - 1n) - 1n;
const maxInt216 = 2n ** (216n - 1n) - 1n;
const maxInt224 = 2n ** (224n - 1n) - 1n;
const maxInt232 = 2n ** (232n - 1n) - 1n;
const maxInt240 = 2n ** (240n - 1n) - 1n;
const maxInt248 = 2n ** (248n - 1n) - 1n;
const maxInt256 = 2n ** (256n - 1n) - 1n;
const minInt8 = -(2n ** (8n - 1n));
const minInt16 = -(2n ** (16n - 1n));
const minInt24 = -(2n ** (24n - 1n));
const minInt32 = -(2n ** (32n - 1n));
const minInt40 = -(2n ** (40n - 1n));
const minInt48 = -(2n ** (48n - 1n));
const minInt56 = -(2n ** (56n - 1n));
const minInt64 = -(2n ** (64n - 1n));
const minInt72 = -(2n ** (72n - 1n));
const minInt80 = -(2n ** (80n - 1n));
const minInt88 = -(2n ** (88n - 1n));
const minInt96 = -(2n ** (96n - 1n));
const minInt104 = -(2n ** (104n - 1n));
const minInt112 = -(2n ** (112n - 1n));
const minInt120 = -(2n ** (120n - 1n));
const minInt128 = -(2n ** (128n - 1n));
const minInt136 = -(2n ** (136n - 1n));
const minInt144 = -(2n ** (144n - 1n));
const minInt152 = -(2n ** (152n - 1n));
const minInt160 = -(2n ** (160n - 1n));
const minInt168 = -(2n ** (168n - 1n));
const minInt176 = -(2n ** (176n - 1n));
const minInt184 = -(2n ** (184n - 1n));
const minInt192 = -(2n ** (192n - 1n));
const minInt200 = -(2n ** (200n - 1n));
const minInt208 = -(2n ** (208n - 1n));
const minInt216 = -(2n ** (216n - 1n));
const minInt224 = -(2n ** (224n - 1n));
const minInt232 = -(2n ** (232n - 1n));
const minInt240 = -(2n ** (240n - 1n));
const minInt248 = -(2n ** (248n - 1n));
const minInt256 = -(2n ** (256n - 1n));
const maxUint8 = 2n ** 8n - 1n;
const maxUint16 = 2n ** 16n - 1n;
const maxUint24 = 2n ** 24n - 1n;
const maxUint32 = 2n ** 32n - 1n;
const maxUint40 = 2n ** 40n - 1n;
const maxUint48 = 2n ** 48n - 1n;
const maxUint56 = 2n ** 56n - 1n;
const maxUint64 = 2n ** 64n - 1n;
const maxUint72 = 2n ** 72n - 1n;
const maxUint80 = 2n ** 80n - 1n;
const maxUint88 = 2n ** 88n - 1n;
const maxUint96 = 2n ** 96n - 1n;
const maxUint104 = 2n ** 104n - 1n;
const maxUint112 = 2n ** 112n - 1n;
const maxUint120 = 2n ** 120n - 1n;
const maxUint128 = 2n ** 128n - 1n;
const maxUint136 = 2n ** 136n - 1n;
const maxUint144 = 2n ** 144n - 1n;
const maxUint152 = 2n ** 152n - 1n;
const maxUint160 = 2n ** 160n - 1n;
const maxUint168 = 2n ** 168n - 1n;
const maxUint176 = 2n ** 176n - 1n;
const maxUint184 = 2n ** 184n - 1n;
const maxUint192 = 2n ** 192n - 1n;
const maxUint200 = 2n ** 200n - 1n;
const maxUint208 = 2n ** 208n - 1n;
const maxUint216 = 2n ** 216n - 1n;
const maxUint224 = 2n ** 224n - 1n;
const maxUint232 = 2n ** 232n - 1n;
const maxUint240 = 2n ** 240n - 1n;
const maxUint248 = 2n ** 248n - 1n;
const maxUint256 = 2n ** 256n - 1n; //# sourceMappingURL=Solidity.js.map
}}),
"[project]/node_modules/viem/node_modules/ox/_esm/core/internal/abiParameters.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "decodeAddress": (()=>decodeAddress),
    "decodeArray": (()=>decodeArray),
    "decodeBool": (()=>decodeBool),
    "decodeBytes": (()=>decodeBytes),
    "decodeNumber": (()=>decodeNumber),
    "decodeParameter": (()=>decodeParameter),
    "decodeString": (()=>decodeString),
    "decodeTuple": (()=>decodeTuple),
    "encode": (()=>encode),
    "encodeAddress": (()=>encodeAddress),
    "encodeArray": (()=>encodeArray),
    "encodeBoolean": (()=>encodeBoolean),
    "encodeBytes": (()=>encodeBytes),
    "encodeNumber": (()=>encodeNumber),
    "encodeString": (()=>encodeString),
    "encodeTuple": (()=>encodeTuple),
    "getArrayComponents": (()=>getArrayComponents),
    "hasDynamicChild": (()=>hasDynamicChild),
    "prepareParameter": (()=>prepareParameter),
    "prepareParameters": (()=>prepareParameters)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$AbiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/viem/node_modules/ox/_esm/core/AbiParameters.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/viem/node_modules/ox/_esm/core/Address.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/viem/node_modules/ox/_esm/core/Hex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/viem/node_modules/ox/_esm/core/Bytes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Solidity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/viem/node_modules/ox/_esm/core/Solidity.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/viem/node_modules/ox/_esm/core/Errors.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
function decodeParameter(cursor, param, options) {
    const { checksumAddress, staticPosition } = options;
    const arrayComponents = getArrayComponents(param.type);
    if (arrayComponents) {
        const [length, type] = arrayComponents;
        return decodeArray(cursor, {
            ...param,
            type
        }, {
            checksumAddress,
            length,
            staticPosition
        });
    }
    if (param.type === 'tuple') return decodeTuple(cursor, param, {
        checksumAddress,
        staticPosition
    });
    if (param.type === 'address') return decodeAddress(cursor, {
        checksum: checksumAddress
    });
    if (param.type === 'bool') return decodeBool(cursor);
    if (param.type.startsWith('bytes')) return decodeBytes(cursor, param, {
        staticPosition
    });
    if (param.type.startsWith('uint') || param.type.startsWith('int')) return decodeNumber(cursor, param);
    if (param.type === 'string') return decodeString(cursor, {
        staticPosition
    });
    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$AbiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.InvalidTypeError(param.type);
}
const sizeOfLength = 32;
const sizeOfOffset = 32;
function decodeAddress(cursor, options = {}) {
    const { checksum = false } = options;
    const value = cursor.readBytes(32);
    const wrap = (address)=>checksum ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.checksum(address) : address;
    return [
        wrap(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.fromBytes(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.slice(value, -20))),
        32
    ];
}
function decodeArray(cursor, param, options) {
    const { checksumAddress, length, staticPosition } = options;
    // If the length of the array is not known in advance (dynamic array),
    // this means we will need to wonder off to the pointer and decode.
    if (!length) {
        // Dealing with a dynamic type, so get the offset of the array data.
        const offset = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.toNumber(cursor.readBytes(sizeOfOffset));
        // Start is the static position of current slot + offset.
        const start = staticPosition + offset;
        const startOfData = start + sizeOfLength;
        // Get the length of the array from the offset.
        cursor.setPosition(start);
        const length = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.toNumber(cursor.readBytes(sizeOfLength));
        // Check if the array has any dynamic children.
        const dynamicChild = hasDynamicChild(param);
        let consumed = 0;
        const value = [];
        for(let i = 0; i < length; ++i){
            // If any of the children is dynamic, then all elements will be offset pointer, thus size of one slot (32 bytes).
            // Otherwise, elements will be the size of their encoding (consumed bytes).
            cursor.setPosition(startOfData + (dynamicChild ? i * 32 : consumed));
            const [data, consumed_] = decodeParameter(cursor, param, {
                checksumAddress,
                staticPosition: startOfData
            });
            consumed += consumed_;
            value.push(data);
        }
        // As we have gone wondering, restore to the original position + next slot.
        cursor.setPosition(staticPosition + 32);
        return [
            value,
            32
        ];
    }
    // If the length of the array is known in advance,
    // and the length of an element deeply nested in the array is not known,
    // we need to decode the offset of the array data.
    if (hasDynamicChild(param)) {
        // Dealing with dynamic types, so get the offset of the array data.
        const offset = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.toNumber(cursor.readBytes(sizeOfOffset));
        // Start is the static position of current slot + offset.
        const start = staticPosition + offset;
        const value = [];
        for(let i = 0; i < length; ++i){
            // Move cursor along to the next slot (next offset pointer).
            cursor.setPosition(start + i * 32);
            const [data] = decodeParameter(cursor, param, {
                checksumAddress,
                staticPosition: start
            });
            value.push(data);
        }
        // As we have gone wondering, restore to the original position + next slot.
        cursor.setPosition(staticPosition + 32);
        return [
            value,
            32
        ];
    }
    // If the length of the array is known in advance and the array is deeply static,
    // then we can just decode each element in sequence.
    let consumed = 0;
    const value = [];
    for(let i = 0; i < length; ++i){
        const [data, consumed_] = decodeParameter(cursor, param, {
            checksumAddress,
            staticPosition: staticPosition + consumed
        });
        consumed += consumed_;
        value.push(data);
    }
    return [
        value,
        consumed
    ];
}
function decodeBool(cursor) {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.toBoolean(cursor.readBytes(32), {
            size: 32
        }),
        32
    ];
}
function decodeBytes(cursor, param, { staticPosition }) {
    const [_, size] = param.type.split('bytes');
    if (!size) {
        // Dealing with dynamic types, so get the offset of the bytes data.
        const offset = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.toNumber(cursor.readBytes(32));
        // Set position of the cursor to start of bytes data.
        cursor.setPosition(staticPosition + offset);
        const length = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.toNumber(cursor.readBytes(32));
        // If there is no length, we have zero data.
        if (length === 0) {
            // As we have gone wondering, restore to the original position + next slot.
            cursor.setPosition(staticPosition + 32);
            return [
                '0x',
                32
            ];
        }
        const data = cursor.readBytes(length);
        // As we have gone wondering, restore to the original position + next slot.
        cursor.setPosition(staticPosition + 32);
        return [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.fromBytes(data),
            32
        ];
    }
    const value = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.fromBytes(cursor.readBytes(Number.parseInt(size), 32));
    return [
        value,
        32
    ];
}
function decodeNumber(cursor, param) {
    const signed = param.type.startsWith('int');
    const size = Number.parseInt(param.type.split('int')[1] || '256');
    const value = cursor.readBytes(32);
    return [
        size > 48 ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.toBigInt(value, {
            signed
        }) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.toNumber(value, {
            signed
        }),
        32
    ];
}
function decodeTuple(cursor, param, options) {
    const { checksumAddress, staticPosition } = options;
    // Tuples can have unnamed components (i.e. they are arrays), so we must
    // determine whether the tuple is named or unnamed. In the case of a named
    // tuple, the value will be an object where each property is the name of the
    // component. In the case of an unnamed tuple, the value will be an array.
    const hasUnnamedChild = param.components.length === 0 || param.components.some(({ name })=>!name);
    // Initialize the value to an object or an array, depending on whether the
    // tuple is named or unnamed.
    const value = hasUnnamedChild ? [] : {};
    let consumed = 0;
    // If the tuple has a dynamic child, we must first decode the offset to the
    // tuple data.
    if (hasDynamicChild(param)) {
        // Dealing with dynamic types, so get the offset of the tuple data.
        const offset = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.toNumber(cursor.readBytes(sizeOfOffset));
        // Start is the static position of referencing slot + offset.
        const start = staticPosition + offset;
        for(let i = 0; i < param.components.length; ++i){
            const component = param.components[i];
            cursor.setPosition(start + consumed);
            const [data, consumed_] = decodeParameter(cursor, component, {
                checksumAddress,
                staticPosition: start
            });
            consumed += consumed_;
            value[hasUnnamedChild ? i : component?.name] = data;
        }
        // As we have gone wondering, restore to the original position + next slot.
        cursor.setPosition(staticPosition + 32);
        return [
            value,
            32
        ];
    }
    // If the tuple has static children, we can just decode each component
    // in sequence.
    for(let i = 0; i < param.components.length; ++i){
        const component = param.components[i];
        const [data, consumed_] = decodeParameter(cursor, component, {
            checksumAddress,
            staticPosition
        });
        value[hasUnnamedChild ? i : component?.name] = data;
        consumed += consumed_;
    }
    return [
        value,
        consumed
    ];
}
function decodeString(cursor, { staticPosition }) {
    // Get offset to start of string data.
    const offset = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.toNumber(cursor.readBytes(32));
    // Start is the static position of current slot + offset.
    const start = staticPosition + offset;
    cursor.setPosition(start);
    const length = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.toNumber(cursor.readBytes(32));
    // If there is no length, we have zero data (empty string).
    if (length === 0) {
        cursor.setPosition(staticPosition + 32);
        return [
            '',
            32
        ];
    }
    const data = cursor.readBytes(length, 32);
    const value = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.toString(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.trimLeft(data));
    // As we have gone wondering, restore to the original position + next slot.
    cursor.setPosition(staticPosition + 32);
    return [
        value,
        32
    ];
}
function prepareParameters({ checksumAddress, parameters, values }) {
    const preparedParameters = [];
    for(let i = 0; i < parameters.length; i++){
        preparedParameters.push(prepareParameter({
            checksumAddress,
            parameter: parameters[i],
            value: values[i]
        }));
    }
    return preparedParameters;
}
function prepareParameter({ checksumAddress = false, parameter: parameter_, value }) {
    const parameter = parameter_;
    const arrayComponents = getArrayComponents(parameter.type);
    if (arrayComponents) {
        const [length, type] = arrayComponents;
        return encodeArray(value, {
            checksumAddress,
            length,
            parameter: {
                ...parameter,
                type
            }
        });
    }
    if (parameter.type === 'tuple') {
        return encodeTuple(value, {
            checksumAddress,
            parameter: parameter
        });
    }
    if (parameter.type === 'address') {
        return encodeAddress(value, {
            checksum: checksumAddress
        });
    }
    if (parameter.type === 'bool') {
        return encodeBoolean(value);
    }
    if (parameter.type.startsWith('uint') || parameter.type.startsWith('int')) {
        const signed = parameter.type.startsWith('int');
        const [, , size = '256'] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Solidity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["integerRegex"].exec(parameter.type) ?? [];
        return encodeNumber(value, {
            signed,
            size: Number(size)
        });
    }
    if (parameter.type.startsWith('bytes')) {
        return encodeBytes(value, {
            type: parameter.type
        });
    }
    if (parameter.type === 'string') {
        return encodeString(value);
    }
    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$AbiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.InvalidTypeError(parameter.type);
}
function encode(preparedParameters) {
    // 1. Compute the size of the static part of the parameters.
    let staticSize = 0;
    for(let i = 0; i < preparedParameters.length; i++){
        const { dynamic, encoded } = preparedParameters[i];
        if (dynamic) staticSize += 32;
        else staticSize += __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.size(encoded);
    }
    // 2. Split the parameters into static and dynamic parts.
    const staticParameters = [];
    const dynamicParameters = [];
    let dynamicSize = 0;
    for(let i = 0; i < preparedParameters.length; i++){
        const { dynamic, encoded } = preparedParameters[i];
        if (dynamic) {
            staticParameters.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.fromNumber(staticSize + dynamicSize, {
                size: 32
            }));
            dynamicParameters.push(encoded);
            dynamicSize += __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.size(encoded);
        } else {
            staticParameters.push(encoded);
        }
    }
    // 3. Concatenate static and dynamic parts.
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.concat(...staticParameters, ...dynamicParameters);
}
function encodeAddress(value, options) {
    const { checksum = false } = options;
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.assert(value, {
        strict: checksum
    });
    return {
        dynamic: false,
        encoded: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.padLeft(value.toLowerCase())
    };
}
function encodeArray(value, options) {
    const { checksumAddress, length, parameter } = options;
    const dynamic = length === null;
    if (!Array.isArray(value)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$AbiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.InvalidArrayError(value);
    if (!dynamic && value.length !== length) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$AbiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.ArrayLengthMismatchError({
        expectedLength: length,
        givenLength: value.length,
        type: `${parameter.type}[${length}]`
    });
    let dynamicChild = false;
    const preparedParameters = [];
    for(let i = 0; i < value.length; i++){
        const preparedParam = prepareParameter({
            checksumAddress,
            parameter,
            value: value[i]
        });
        if (preparedParam.dynamic) dynamicChild = true;
        preparedParameters.push(preparedParam);
    }
    if (dynamic || dynamicChild) {
        const data = encode(preparedParameters);
        if (dynamic) {
            const length = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.fromNumber(preparedParameters.length, {
                size: 32
            });
            return {
                dynamic: true,
                encoded: preparedParameters.length > 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.concat(length, data) : length
            };
        }
        if (dynamicChild) return {
            dynamic: true,
            encoded: data
        };
    }
    return {
        dynamic: false,
        encoded: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.concat(...preparedParameters.map(({ encoded })=>encoded))
    };
}
function encodeBytes(value, { type }) {
    const [, parametersize] = type.split('bytes');
    const bytesSize = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.size(value);
    if (!parametersize) {
        let value_ = value;
        // If the size is not divisible by 32 bytes, pad the end
        // with empty bytes to the ceiling 32 bytes.
        if (bytesSize % 32 !== 0) value_ = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.padRight(value_, Math.ceil((value.length - 2) / 2 / 32) * 32);
        return {
            dynamic: true,
            encoded: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.padLeft(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.fromNumber(bytesSize, {
                size: 32
            })), value_)
        };
    }
    if (bytesSize !== Number.parseInt(parametersize)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$AbiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.BytesSizeMismatchError({
        expectedSize: Number.parseInt(parametersize),
        value
    });
    return {
        dynamic: false,
        encoded: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.padRight(value)
    };
}
function encodeBoolean(value) {
    if (typeof value !== 'boolean') throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.BaseError(`Invalid boolean value: "${value}" (type: ${typeof value}). Expected: \`true\` or \`false\`.`);
    return {
        dynamic: false,
        encoded: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.padLeft(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.fromBoolean(value))
    };
}
function encodeNumber(value, { signed, size }) {
    if (typeof size === 'number') {
        const max = 2n ** (BigInt(size) - (signed ? 1n : 0n)) - 1n;
        const min = signed ? -max - 1n : 0n;
        if (value > max || value < min) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.IntegerOutOfRangeError({
            max: max.toString(),
            min: min.toString(),
            signed,
            size: size / 8,
            value: value.toString()
        });
    }
    return {
        dynamic: false,
        encoded: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.fromNumber(value, {
            size: 32,
            signed
        })
    };
}
function encodeString(value) {
    const hexValue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.fromString(value);
    const partsLength = Math.ceil(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.size(hexValue) / 32);
    const parts = [];
    for(let i = 0; i < partsLength; i++){
        parts.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.padRight(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.slice(hexValue, i * 32, (i + 1) * 32)));
    }
    return {
        dynamic: true,
        encoded: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.padRight(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.fromNumber(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.size(hexValue), {
            size: 32
        })), ...parts)
    };
}
function encodeTuple(value, options) {
    const { checksumAddress, parameter } = options;
    let dynamic = false;
    const preparedParameters = [];
    for(let i = 0; i < parameter.components.length; i++){
        const param_ = parameter.components[i];
        const index = Array.isArray(value) ? i : param_.name;
        const preparedParam = prepareParameter({
            checksumAddress,
            parameter: param_,
            value: value[index]
        });
        preparedParameters.push(preparedParam);
        if (preparedParam.dynamic) dynamic = true;
    }
    return {
        dynamic,
        encoded: dynamic ? encode(preparedParameters) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.concat(...preparedParameters.map(({ encoded })=>encoded))
    };
}
function getArrayComponents(type) {
    const matches = type.match(/^(.*)\[(\d+)?\]$/);
    return matches ? [
        matches[2] ? Number(matches[2]) : null,
        matches[1]
    ] : undefined;
}
function hasDynamicChild(param) {
    const { type } = param;
    if (type === 'string') return true;
    if (type === 'bytes') return true;
    if (type.endsWith('[]')) return true;
    if (type === 'tuple') return param.components?.some(hasDynamicChild);
    const arrayComponents = getArrayComponents(param.type);
    if (arrayComponents && hasDynamicChild({
        ...param,
        type: arrayComponents[1]
    })) return true;
    return false;
} //# sourceMappingURL=abiParameters.js.map
}}),
"[project]/node_modules/viem/node_modules/ox/_esm/core/AbiParameters.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "ArrayLengthMismatchError": (()=>ArrayLengthMismatchError),
    "BytesSizeMismatchError": (()=>BytesSizeMismatchError),
    "DataSizeTooSmallError": (()=>DataSizeTooSmallError),
    "InvalidArrayError": (()=>InvalidArrayError),
    "InvalidTypeError": (()=>InvalidTypeError),
    "LengthMismatchError": (()=>LengthMismatchError),
    "ZeroDataError": (()=>ZeroDataError),
    "decode": (()=>decode),
    "encode": (()=>encode),
    "encodePacked": (()=>encodePacked),
    "format": (()=>format),
    "from": (()=>from)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$exports$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/abitype/dist/esm/exports/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/viem/node_modules/ox/_esm/core/Errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/viem/node_modules/ox/_esm/core/Hex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/viem/node_modules/ox/_esm/core/Bytes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$cursor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/viem/node_modules/ox/_esm/core/internal/cursor.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$abiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/viem/node_modules/ox/_esm/core/internal/abiParameters.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Solidity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/viem/node_modules/ox/_esm/core/Solidity.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/viem/node_modules/ox/_esm/core/Address.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
function decode(parameters, data, options = {}) {
    const { as = 'Array', checksumAddress = false } = options;
    const bytes = typeof data === 'string' ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.fromHex(data) : data;
    const cursor = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$cursor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.create(bytes);
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.size(bytes) === 0 && parameters.length > 0) throw new ZeroDataError();
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.size(bytes) && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.size(bytes) < 32) throw new DataSizeTooSmallError({
        data: typeof data === 'string' ? data : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.fromBytes(data),
        parameters: parameters,
        size: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.size(bytes)
    });
    let consumed = 0;
    const values = as === 'Array' ? [] : {};
    for(let i = 0; i < parameters.length; ++i){
        const param = parameters[i];
        cursor.setPosition(consumed);
        const [data, consumed_] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$abiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.decodeParameter(cursor, param, {
            checksumAddress,
            staticPosition: 0
        });
        consumed += consumed_;
        if (as === 'Array') values.push(data);
        else values[param.name ?? i] = data;
    }
    return values;
}
function encode(parameters, values, options) {
    const { checksumAddress = false } = options ?? {};
    if (parameters.length !== values.length) throw new LengthMismatchError({
        expectedLength: parameters.length,
        givenLength: values.length
    });
    // Prepare the parameters to determine dynamic types to encode.
    const preparedParameters = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$abiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.prepareParameters({
        checksumAddress,
        parameters: parameters,
        values: values
    });
    const data = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$abiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.encode(preparedParameters);
    if (data.length === 0) return '0x';
    return data;
}
function encodePacked(types, values) {
    if (types.length !== values.length) throw new LengthMismatchError({
        expectedLength: types.length,
        givenLength: values.length
    });
    const data = [];
    for(let i = 0; i < types.length; i++){
        const type = types[i];
        const value = values[i];
        data.push(encodePacked.encode(type, value));
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.concat(...data);
}
(function(encodePacked) {
    // eslint-disable-next-line jsdoc/require-jsdoc
    function encode(type, value, isArray = false) {
        if (type === 'address') {
            const address = value;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.assert(address);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.padLeft(address.toLowerCase(), isArray ? 32 : 0);
        }
        if (type === 'string') return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.fromString(value);
        if (type === 'bytes') return value;
        if (type === 'bool') return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.padLeft(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.fromBoolean(value), isArray ? 32 : 1);
        const intMatch = type.match(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Solidity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.integerRegex);
        if (intMatch) {
            const [_type, baseType, bits = '256'] = intMatch;
            const size = Number.parseInt(bits) / 8;
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.fromNumber(value, {
                size: isArray ? 32 : size,
                signed: baseType === 'int'
            });
        }
        const bytesMatch = type.match(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Solidity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.bytesRegex);
        if (bytesMatch) {
            const [_type, size] = bytesMatch;
            if (Number.parseInt(size) !== (value.length - 2) / 2) throw new BytesSizeMismatchError({
                expectedSize: Number.parseInt(size),
                value: value
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.padRight(value, isArray ? 32 : 0);
        }
        const arrayMatch = type.match(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Solidity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.arrayRegex);
        if (arrayMatch && Array.isArray(value)) {
            const [_type, childType] = arrayMatch;
            const data = [];
            for(let i = 0; i < value.length; i++){
                data.push(encode(childType, value[i], true));
            }
            if (data.length === 0) return '0x';
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.concat(...data);
        }
        throw new InvalidTypeError(type);
    }
    encodePacked.encode = encode;
})(encodePacked || (encodePacked = {}));
function format(parameters) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$exports$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.formatAbiParameters(parameters);
}
function from(parameters) {
    if (Array.isArray(parameters) && typeof parameters[0] === 'string') return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$exports$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.parseAbiParameters(parameters);
    if (typeof parameters === 'string') return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$exports$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.parseAbiParameters(parameters);
    return parameters;
}
class DataSizeTooSmallError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.BaseError {
    constructor({ data, parameters, size }){
        super(`Data size of ${size} bytes is too small for given parameters.`, {
            metaMessages: [
                `Params: (${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$exports$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.formatAbiParameters(parameters)})`,
                `Data:   ${data} (${size} bytes)`
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'AbiParameters.DataSizeTooSmallError'
        });
    }
}
class ZeroDataError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.BaseError {
    constructor(){
        super('Cannot decode zero data ("0x") with ABI parameters.');
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'AbiParameters.ZeroDataError'
        });
    }
}
class ArrayLengthMismatchError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.BaseError {
    constructor({ expectedLength, givenLength, type }){
        super(`Array length mismatch for type \`${type}\`. Expected: \`${expectedLength}\`. Given: \`${givenLength}\`.`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'AbiParameters.ArrayLengthMismatchError'
        });
    }
}
class BytesSizeMismatchError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.BaseError {
    constructor({ expectedSize, value }){
        super(`Size of bytes "${value}" (bytes${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.size(value)}) does not match expected size (bytes${expectedSize}).`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'AbiParameters.BytesSizeMismatchError'
        });
    }
}
class LengthMismatchError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.BaseError {
    constructor({ expectedLength, givenLength }){
        super([
            'ABI encoding parameters/values length mismatch.',
            `Expected length (parameters): ${expectedLength}`,
            `Given length (values): ${givenLength}`
        ].join('\n'));
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'AbiParameters.LengthMismatchError'
        });
    }
}
class InvalidArrayError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.BaseError {
    constructor(value){
        super(`Value \`${value}\` is not a valid array.`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'AbiParameters.InvalidArrayError'
        });
    }
}
class InvalidTypeError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.BaseError {
    constructor(type){
        super(`Type \`${type}\` is not a valid ABI Type.`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'AbiParameters.InvalidTypeError'
        });
    }
} //# sourceMappingURL=AbiParameters.js.map
}}),
"[project]/node_modules/viem/node_modules/ox/_esm/core/internal/abiItem.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getAmbiguousTypes": (()=>getAmbiguousTypes),
    "isArgOfType": (()=>isArgOfType),
    "normalizeSignature": (()=>normalizeSignature)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/viem/node_modules/ox/_esm/core/Errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/viem/node_modules/ox/_esm/core/Address.js [app-ssr] (ecmascript)");
;
;
function normalizeSignature(signature) {
    let active = true;
    let current = '';
    let level = 0;
    let result = '';
    let valid = false;
    for(let i = 0; i < signature.length; i++){
        const char = signature[i];
        // If the character is a separator, we want to reactivate.
        if ([
            '(',
            ')',
            ','
        ].includes(char)) active = true;
        // If the character is a "level" token, we want to increment/decrement.
        if (char === '(') level++;
        if (char === ')') level--;
        // If we aren't active, we don't want to mutate the result.
        if (!active) continue;
        // If level === 0, we are at the definition level.
        if (level === 0) {
            if (char === ' ' && [
                'event',
                'function',
                'error',
                ''
            ].includes(result)) result = '';
            else {
                result += char;
                // If we are at the end of the definition, we must be finished.
                if (char === ')') {
                    valid = true;
                    break;
                }
            }
            continue;
        }
        // Ignore spaces
        if (char === ' ') {
            // If the previous character is a separator, and the current section isn't empty, we want to deactivate.
            if (signature[i - 1] !== ',' && current !== ',' && current !== ',(') {
                current = '';
                active = false;
            }
            continue;
        }
        result += char;
        current += char;
    }
    if (!valid) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.BaseError('Unable to normalize signature.');
    return result;
}
function isArgOfType(arg, abiParameter) {
    const argType = typeof arg;
    const abiParameterType = abiParameter.type;
    switch(abiParameterType){
        case 'address':
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.validate(arg, {
                strict: false
            });
        case 'bool':
            return argType === 'boolean';
        case 'function':
            return argType === 'string';
        case 'string':
            return argType === 'string';
        default:
            {
                if (abiParameterType === 'tuple' && 'components' in abiParameter) return Object.values(abiParameter.components).every((component, index)=>{
                    return isArgOfType(Object.values(arg)[index], component);
                });
                // `(u)int<M>`: (un)signed integer type of `M` bits, `0 < M <= 256`, `M % 8 == 0`
                // https://regexr.com/6v8hp
                if (/^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(abiParameterType)) return argType === 'number' || argType === 'bigint';
                // `bytes<M>`: binary type of `M` bytes, `0 < M <= 32`
                // https://regexr.com/6va55
                if (/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(abiParameterType)) return argType === 'string' || arg instanceof Uint8Array;
                // fixed-length (`<type>[M]`) and dynamic (`<type>[]`) arrays
                // https://regexr.com/6va6i
                if (/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(abiParameterType)) {
                    return Array.isArray(arg) && arg.every((x)=>isArgOfType(x, {
                            ...abiParameter,
                            // Pop off `[]` or `[M]` from end of type
                            type: abiParameterType.replace(/(\[[0-9]{0,}\])$/, '')
                        }));
                }
                return false;
            }
    }
}
function getAmbiguousTypes(sourceParameters, targetParameters, args) {
    for(const parameterIndex in sourceParameters){
        const sourceParameter = sourceParameters[parameterIndex];
        const targetParameter = targetParameters[parameterIndex];
        if (sourceParameter.type === 'tuple' && targetParameter.type === 'tuple' && 'components' in sourceParameter && 'components' in targetParameter) return getAmbiguousTypes(sourceParameter.components, targetParameter.components, args[parameterIndex]);
        const types = [
            sourceParameter.type,
            targetParameter.type
        ];
        const ambiguous = (()=>{
            if (types.includes('address') && types.includes('bytes20')) return true;
            if (types.includes('address') && types.includes('string')) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.validate(args[parameterIndex], {
                strict: false
            });
            if (types.includes('address') && types.includes('bytes')) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.validate(args[parameterIndex], {
                strict: false
            });
            return false;
        })();
        if (ambiguous) return types;
    }
    return;
} //# sourceMappingURL=abiItem.js.map
}}),
"[project]/node_modules/viem/node_modules/ox/_esm/core/AbiItem.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "AmbiguityError": (()=>AmbiguityError),
    "InvalidSelectorSizeError": (()=>InvalidSelectorSizeError),
    "NotFoundError": (()=>NotFoundError),
    "format": (()=>format),
    "from": (()=>from),
    "fromAbi": (()=>fromAbi),
    "getSelector": (()=>getSelector),
    "getSignature": (()=>getSignature),
    "getSignatureHash": (()=>getSignatureHash)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$abiItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/viem/node_modules/ox/_esm/core/internal/abiItem.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$exports$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/abitype/dist/esm/exports/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/viem/node_modules/ox/_esm/core/Errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/viem/node_modules/ox/_esm/core/Hex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/viem/node_modules/ox/_esm/core/Hash.js [app-ssr] (ecmascript)");
;
;
;
;
;
function format(abiItem) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$exports$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.formatAbiItem(abiItem);
}
function from(abiItem, options = {}) {
    const { prepare = true } = options;
    const item = (()=>{
        if (Array.isArray(abiItem)) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$exports$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.parseAbiItem(abiItem);
        if (typeof abiItem === 'string') return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$exports$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.parseAbiItem(abiItem);
        return abiItem;
    })();
    return {
        ...item,
        ...prepare ? {
            hash: getSignatureHash(item)
        } : {}
    };
}
function fromAbi(abi, name, options) {
    const { args = [], prepare = true } = options ?? {};
    const isSelector = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.validate(name, {
        strict: false
    });
    const abiItems = abi.filter((abiItem)=>{
        if (isSelector) {
            if (abiItem.type === 'function' || abiItem.type === 'error') return getSelector(abiItem) === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.slice(name, 0, 4);
            if (abiItem.type === 'event') return getSignatureHash(abiItem) === name;
            return false;
        }
        return 'name' in abiItem && abiItem.name === name;
    });
    if (abiItems.length === 0) throw new NotFoundError({
        name: name
    });
    if (abiItems.length === 1) return {
        ...abiItems[0],
        ...prepare ? {
            hash: getSignatureHash(abiItems[0])
        } : {}
    };
    let matchedAbiItem = undefined;
    for (const abiItem of abiItems){
        if (!('inputs' in abiItem)) continue;
        if (!args || args.length === 0) {
            if (!abiItem.inputs || abiItem.inputs.length === 0) return {
                ...abiItem,
                ...prepare ? {
                    hash: getSignatureHash(abiItem)
                } : {}
            };
            continue;
        }
        if (!abiItem.inputs) continue;
        if (abiItem.inputs.length === 0) continue;
        if (abiItem.inputs.length !== args.length) continue;
        const matched = args.every((arg, index)=>{
            const abiParameter = 'inputs' in abiItem && abiItem.inputs[index];
            if (!abiParameter) return false;
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$abiItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.isArgOfType(arg, abiParameter);
        });
        if (matched) {
            // Check for ambiguity against already matched parameters (e.g. `address` vs `bytes20`).
            if (matchedAbiItem && 'inputs' in matchedAbiItem && matchedAbiItem.inputs) {
                const ambiguousTypes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$abiItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.getAmbiguousTypes(abiItem.inputs, matchedAbiItem.inputs, args);
                if (ambiguousTypes) throw new AmbiguityError({
                    abiItem,
                    type: ambiguousTypes[0]
                }, {
                    abiItem: matchedAbiItem,
                    type: ambiguousTypes[1]
                });
            }
            matchedAbiItem = abiItem;
        }
    }
    const abiItem = (()=>{
        if (matchedAbiItem) return matchedAbiItem;
        const [abiItem, ...overloads] = abiItems;
        return {
            ...abiItem,
            overloads
        };
    })();
    if (!abiItem) throw new NotFoundError({
        name: name
    });
    return {
        ...abiItem,
        ...prepare ? {
            hash: getSignatureHash(abiItem)
        } : {}
    };
}
function getSelector(abiItem) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.slice(getSignatureHash(abiItem), 0, 4);
}
function getSignature(abiItem) {
    const signature = (()=>{
        if (typeof abiItem === 'string') return abiItem;
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$exports$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.formatAbiItem(abiItem);
    })();
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$abiItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.normalizeSignature(signature);
}
function getSignatureHash(abiItem) {
    if (typeof abiItem !== 'string' && 'hash' in abiItem && abiItem.hash) return abiItem.hash;
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.keccak256(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.fromString(getSignature(abiItem)));
}
class AmbiguityError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.BaseError {
    constructor(x, y){
        super('Found ambiguous types in overloaded ABI Items.', {
            metaMessages: [
                // TODO: abitype to add support for signature-formatted ABI items.
                `\`${x.type}\` in \`${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$abiItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.normalizeSignature(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$exports$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.formatAbiItem(x.abiItem))}\`, and`,
                `\`${y.type}\` in \`${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$abiItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.normalizeSignature(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$exports$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.formatAbiItem(y.abiItem))}\``,
                '',
                'These types encode differently and cannot be distinguished at runtime.',
                'Remove one of the ambiguous items in the ABI.'
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'AbiItem.AmbiguityError'
        });
    }
}
class NotFoundError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.BaseError {
    constructor({ name, data, type = 'item' }){
        const selector = (()=>{
            if (name) return ` with name "${name}"`;
            if (data) return ` with data "${data}"`;
            return '';
        })();
        super(`ABI ${type}${selector} not found.`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'AbiItem.NotFoundError'
        });
    }
}
class InvalidSelectorSizeError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.BaseError {
    constructor({ data }){
        super(`Selector size is invalid. Expected 4 bytes. Received ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.size(data)} bytes ("${data}").`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'AbiItem.InvalidSelectorSizeError'
        });
    }
} //# sourceMappingURL=AbiItem.js.map
}}),
"[project]/node_modules/viem/node_modules/ox/_esm/core/AbiConstructor.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "decode": (()=>decode),
    "encode": (()=>encode),
    "format": (()=>format),
    "from": (()=>from),
    "fromAbi": (()=>fromAbi)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$AbiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/viem/node_modules/ox/_esm/core/AbiParameters.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/viem/node_modules/ox/_esm/core/Hex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$exports$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/abitype/dist/esm/exports/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$AbiItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/viem/node_modules/ox/_esm/core/AbiItem.js [app-ssr] (ecmascript)");
;
;
;
;
function decode(abiConstructor, options) {
    const { bytecode } = options;
    if (abiConstructor.inputs.length === 0) return undefined;
    const data = options.data.replace(bytecode, '0x');
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$AbiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.decode(abiConstructor.inputs, data);
}
function encode(abiConstructor, options) {
    const { bytecode, args } = options;
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.concat(bytecode, abiConstructor.inputs?.length && args?.length ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$AbiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.encode(abiConstructor.inputs, args) : '0x');
}
function format(abiConstructor) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$exports$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.formatAbiItem(abiConstructor);
}
function from(abiConstructor) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$AbiItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.from(abiConstructor);
}
function fromAbi(abi) {
    const item = abi.find((item)=>item.type === 'constructor');
    if (!item) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$AbiItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.NotFoundError({
        name: 'constructor'
    });
    return item;
} //# sourceMappingURL=AbiConstructor.js.map
}}),
"[project]/node_modules/viem/node_modules/ox/_esm/core/AbiFunction.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "decodeData": (()=>decodeData),
    "decodeResult": (()=>decodeResult),
    "encodeData": (()=>encodeData),
    "encodeResult": (()=>encodeResult),
    "format": (()=>format),
    "from": (()=>from),
    "fromAbi": (()=>fromAbi),
    "getSelector": (()=>getSelector)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/viem/node_modules/ox/_esm/core/Hex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$AbiItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/viem/node_modules/ox/_esm/core/AbiItem.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$AbiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/viem/node_modules/ox/_esm/core/AbiParameters.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$exports$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/abitype/dist/esm/exports/index.js [app-ssr] (ecmascript)");
;
;
;
;
function decodeData(abiFunction, data) {
    const { overloads } = abiFunction;
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.size(data) < 4) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$AbiItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.InvalidSelectorSizeError({
        data
    });
    if (abiFunction.inputs.length === 0) return undefined;
    const item = overloads ? fromAbi([
        abiFunction,
        ...overloads
    ], data) : abiFunction;
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.size(data) <= 4) return undefined;
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$AbiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.decode(item.inputs, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.slice(data, 4));
}
function decodeResult(abiFunction, data, options = {}) {
    const values = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$AbiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.decode(abiFunction.outputs, data, options);
    if (values && Object.keys(values).length === 0) return undefined;
    if (values && Object.keys(values).length === 1) {
        if (Array.isArray(values)) return values[0];
        return Object.values(values)[0];
    }
    return values;
}
function encodeData(abiFunction, ...args) {
    const { overloads } = abiFunction;
    const item = overloads ? fromAbi([
        abiFunction,
        ...overloads
    ], abiFunction.name, {
        args: args[0]
    }) : abiFunction;
    const selector = getSelector(item);
    const data = args.length > 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$AbiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.encode(item.inputs, args[0]) : undefined;
    return data ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.concat(selector, data) : selector;
}
function encodeResult(abiFunction, output, options = {}) {
    const { as = 'Array' } = options;
    const values = (()=>{
        if (abiFunction.outputs.length === 1) return [
            output
        ];
        if (Array.isArray(output)) return output;
        if (as === 'Object') return Object.values(output);
        return [
            output
        ];
    })();
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$AbiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.encode(abiFunction.outputs, values);
}
function format(abiFunction) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$exports$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.formatAbiItem(abiFunction);
}
function from(abiFunction, options = {}) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$AbiItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.from(abiFunction, options);
}
function fromAbi(abi, name, options) {
    const item = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$AbiItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.fromAbi(abi, name, options);
    if (item.type !== 'function') throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$AbiItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.NotFoundError({
        name,
        type: 'function'
    });
    return item;
}
function getSelector(abiItem) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$AbiItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.getSelector(abiItem);
} //# sourceMappingURL=AbiFunction.js.map
}}),
"[project]/node_modules/viem/node_modules/ox/_esm/core/Bytes.js [app-ssr] (ecmascript) <export * as Bytes>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Bytes": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/viem/node_modules/ox/_esm/core/Bytes.js [app-ssr] (ecmascript)");
}}),
"[project]/node_modules/viem/node_modules/ox/_esm/core/internal/ens.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "packetToBytes": (()=>packetToBytes),
    "unwrapLabelhash": (()=>unwrapLabelhash),
    "wrapLabelhash": (()=>wrapLabelhash)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Bytes$3e$__ = __turbopack_import__("[project]/node_modules/viem/node_modules/ox/_esm/core/Bytes.js [app-ssr] (ecmascript) <export * as Bytes>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Ens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/viem/node_modules/ox/_esm/core/Ens.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/viem/node_modules/ox/_esm/core/Hex.js [app-ssr] (ecmascript)");
;
;
;
function packetToBytes(packet) {
    // strip leading and trailing `.`
    const value = packet.replace(/^\.|\.$/gm, '');
    if (value.length === 0) return new Uint8Array(1);
    const bytes = new Uint8Array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Bytes$3e$__["Bytes"].fromString(value).byteLength + 2);
    let offset = 0;
    const list = value.split('.');
    for(let i = 0; i < list.length; i++){
        let encoded = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Bytes$3e$__["Bytes"].fromString(list[i]);
        // if the length is > 255, make the encoded label value a labelhash
        // this is compatible with the universal resolver
        if (encoded.byteLength > 255) encoded = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Bytes$3e$__["Bytes"].fromString(wrapLabelhash(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Ens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.labelhash(list[i])));
        bytes[offset] = encoded.length;
        bytes.set(encoded, offset + 1);
        offset += encoded.length + 1;
    }
    if (bytes.byteLength !== offset + 1) return bytes.slice(0, offset + 1);
    return bytes;
}
function wrapLabelhash(hash) {
    return `[${hash.slice(2)}]`;
}
function unwrapLabelhash(label) {
    if (label.length !== 66) return null;
    if (label.indexOf('[') !== 0) return null;
    if (label.indexOf(']') !== 65) return null;
    const hash = `0x${label.slice(1, 65)}`;
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.validate(hash, {
        strict: true
    })) return null;
    return hash;
} //# sourceMappingURL=ens.js.map
}}),
"[project]/node_modules/viem/node_modules/ox/_esm/core/Ens.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "labelhash": (()=>labelhash),
    "namehash": (()=>namehash),
    "normalize": (()=>normalize)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$adraffy$2f$ens$2d$normalize$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@adraffy/ens-normalize/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$ens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/viem/node_modules/ox/_esm/core/internal/ens.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/viem/node_modules/ox/_esm/core/Hash.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/viem/node_modules/ox/_esm/core/Hex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/viem/node_modules/ox/_esm/core/Bytes.js [app-ssr] (ecmascript)");
;
;
;
;
;
function labelhash(label) {
    const result = new Uint8Array(32).fill(0);
    if (!label) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.fromBytes(result);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$ens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.unwrapLabelhash(label) || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.keccak256(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.fromString(label));
}
function namehash(name) {
    let result = new Uint8Array(32).fill(0);
    if (!name) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.fromBytes(result);
    const labels = name.split('.');
    // Iterate in reverse order building up hash
    for(let i = labels.length - 1; i >= 0; i -= 1){
        const hashFromEncodedLabel = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$ens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.unwrapLabelhash(labels[i]);
        const hashed = hashFromEncodedLabel ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.fromHex(hashFromEncodedLabel) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.keccak256(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.fromString(labels[i]), {
            as: 'Bytes'
        });
        result = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.keccak256(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.concat(result, hashed), {
            as: 'Bytes'
        });
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.fromBytes(result);
}
function normalize(name) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$adraffy$2f$ens$2d$normalize$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ens_normalize"])(name);
} //# sourceMappingURL=Ens.js.map
}}),

};

//# sourceMappingURL=8df1b_ox__esm_core_d34555._.js.map
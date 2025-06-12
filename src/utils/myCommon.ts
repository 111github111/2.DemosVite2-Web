
export default {
    Copy: function <T>(value: T) {
        return JSON.parse(JSON.stringify(value)) as T;
    }
}

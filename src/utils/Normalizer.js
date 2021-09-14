export default {
    run(text) {
        let result = text.replace(/\s/g, '-');
        return result
    }
}
export default {
    run(text) {
        let trimed_text = text.trim()
        let result = trimed_text.replace(/\s/g, '-');
        return result
    }
}
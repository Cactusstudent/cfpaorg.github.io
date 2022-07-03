
var transData = new Vue({
    el: "#weblate",
    data: {
        result: {"total": 1474067, "total_words": 6945066, "last_change": "2022-06-25T11:24:32.109375Z", "recent_changes": 5362, "translated": 1272905, "translated_words": 5944229, "translated_percent": 86.3, "translated_words_percent": 85.5, "translated_chars": 36665228, "translated_chars_percent": 85.7, "total_chars": 42762527, "fuzzy": 1933, "fuzzy_percent": 0.1, "failing": 23514, "failing_percent": 1.5, "approved": 3066, "approved_percent": 0.2, "readonly": 735702, "readonly_percent": 49.9, "suggestions": 2803, "comments": 3, "name": "LangPack", "url": "http://weblate-t.exz.me/projects/langpack/"}
    },
    computed: {
        precent: function() {
            return (this.result["translated"] / this.result["total"] * 100).toFixed(3) + "%"
        }
    }
})

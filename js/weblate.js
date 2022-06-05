
var transData = new Vue({
    el: "#weblate",
    data: {
        result: {"total": 1469477, "total_words": 6930180, "last_change": "2022-05-14T14:11:50.279008Z", "recent_changes": 5210, "translated": 1266115, "translated_words": 5920145, "translated_percent": 86.1, "translated_words_percent": 85.4, "translated_chars": 36500093, "translated_chars_percent": 85.5, "total_chars": 42666733, "fuzzy": 1931, "fuzzy_percent": 0.1, "failing": 23375, "failing_percent": 1.5, "approved": 3046, "approved_percent": 0.2, "readonly": 733407, "readonly_percent": 49.9, "suggestions": 2920, "comments": 2, "name": "LangPack", "url": "http://weblate-t.exz.me/projects/langpack/"}
    },
    computed: {
        precent: function() {
            return (this.result["translated"] / this.result["total"] * 100).toFixed(3) + "%"
        }
    }
})

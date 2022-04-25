
var transData = new Vue({
    el: "#weblate",
    data: {
        result: {"total": 1471281, "total_words": 6932868, "last_change": "2022-04-17T04:11:02.786859Z", "recent_changes": 5211, "translated": 1265023, "translated_words": 5913261, "translated_percent": 85.9, "translated_words_percent": 85.2, "translated_chars": 36455783, "translated_chars_percent": 85.4, "total_chars": 42678159, "fuzzy": 1930, "fuzzy_percent": 0.1, "failing": 23330, "failing_percent": 1.5, "approved": 3046, "approved_percent": 0.2, "readonly": 734309, "readonly_percent": 49.9, "suggestions": 2896, "comments": 1, "name": "LangPack", "url": "http://weblate-t.exz.me/projects/langpack/"}
    },
    computed: {
        precent: function() {
            return (this.result["translated"] / this.result["total"] * 100).toFixed(3) + "%"
        }
    }
})

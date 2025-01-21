import requests
import json

# GitHub API URL for fetching contributors
github_url = "https://api.github.com/repos/CFPAOrg/Minecraft-Mod-Language-Package/contributors"
# Weblate API URL for fetching translation statistics
# weblate_url = "https://weblate-t.exz.me/api/projects/langpack/statistics/?format=json"

# JavaScript template for Vue instance to display contributors
data_js = """
var contri = new Vue({{
    el: "#contributor",
    data: {{
        contributor: {}
    }}
}});
"""

# JavaScript template for Vue instance to display Weblate statistics
# weblate_js = """
# var transData = new Vue({{
#        el: "#weblate",
#        data: {{
#                result: {}
#        }},
#        computed: {{
#               precent: function() {{
#                        return (this.result["translated"] / this.result["total"] * 100).toFixed(3) + "%"
#                }}
#        }}
#}})
#"""
#
# List to store GitHub contributors data
data = []
# Dictionary to store Weblate statistics data
weblate = {}

# Fetch GitHub contributors data
i = 1
github_result = requests.get(f'{github_url}?page={i}')
data.extend(github_result.json())
while len(github_result.json()) > 0:
        i += 1
        github_result = requests.get(f'{github_url}?page={i}')
        data.extend(github_result.json())

# Write GitHub contributors data to a JavaScript file
with open("./js/data.js", "w", encoding="utf-8") as f:
        data_text = json.dumps(data, ensure_ascii=False)
        f.write(data_js.format(data_text))

# Fetch Weblate translation statistics data
# weblate_result = requests.get(weblate_url)
# weblate = weblate_result.json()[0]

# Write Weblate statistics data to a JavaScript file
# with open("./js/weblate.js", "w", encoding="utf-8") as f:
#         weblate_text = json.dumps(weblate, ensure_ascii=False)
#         f.write(weblate_js.format(weblate_text))
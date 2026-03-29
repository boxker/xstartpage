const SEARCH_ENGINES = {
  chatgpt: "https://chatgpt.com/?q=%s",
  bing: "https://www.bing.com/search?q=%s",
  google: "https://www.google.com/search?q=%s",
  perplexity: "https://www.perplexity.ai/search?q=%s",
};

const form = document.getElementById("searchForm");
const keywordInput = document.getElementById("keywordInput");
const engineSelect = document.getElementById("engineSelect");

function goSearch() {
  const keyword = keywordInput.value.trim();
  if (!keyword) return;

  const engine = engineSelect.value;
  const template = SEARCH_ENGINES[engine] || SEARCH_ENGINES.chatgpt;
  const url = template.replace("%s", encodeURIComponent(keyword));
  window.location.href = url;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  goSearch();
});

keywordInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && !event.shiftKey) {
    event.preventDefault();
    goSearch();
  }
});

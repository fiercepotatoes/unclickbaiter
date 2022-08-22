(async () => {
  const src = chrome.extension.getURL('dist/js/main.js');
  const contentScript = await import(src);
  contentScript.main();
})();

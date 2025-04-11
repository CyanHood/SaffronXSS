(function () {
  const container = document.createElement("div");
  container.style = `
    position:fixed;
    top:20px;
    left:20px;
    width:90vw;
    height:80vh;
    background:white;
    border:2px solid black;
    z-index:999999;
    padding:10px;
    box-shadow: 0 0 15px rgba(0,0,0,0.3);
  `;
  document.body.appendChild(container);

  const tabs = document.createElement("div");
  tabs.style = "display:flex;gap:10px;margin-bottom:8px;flex-wrap:wrap;";
  container.appendChild(tabs);

  const iframe = document.createElement("iframe");
  iframe.style = "width:100%;height:calc(100% - 40px);border:none;";
  container.appendChild(iframe);

  const tabList = [];

  function openTab(url, name = url) {
    const btn = document.createElement("button");
    btn.innerText = name;
    btn.style = "padding:5px 10px;cursor:pointer;";
    btn.onclick = () => iframe.src = url;
    tabs.appendChild(btn);

    tabList.push({ url, name });
    iframe.src = url;
  }

  // Load initial launcher page
  openTab("https://blobby-boi.github.io/BlobbypassXSS/main.html", "Launcher");

  // Listen for messages from iframes
  window.addEventListener("message", (e) => {
    if (e.data && e.data.launchUrl) {
      openTab(e.data.launchUrl, new URL(e.data.launchUrl).hostname);
    }
  });
})();

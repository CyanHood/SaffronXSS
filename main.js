(function () {
  const pages = [
    {
      name: "Blobbypass Main",
      url: "https://blobby-boi.github.io/BlobbypassXSS/main.html"
    },
    {
      name: "Google",
      url: "https://google.com"
    },
    {
      name: "Bing",
      url: "https://bing.com"
    }
  ];

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
  tabs.style = "display:flex;gap:10px;margin-bottom:8px;";
  container.appendChild(tabs);

  const iframe = document.createElement("iframe");
  iframe.style = "width:100%;height:calc(100% - 40px);border:none;";
  container.appendChild(iframe);

  pages.forEach(page => {
    const btn = document.createElement("button");
    btn.innerText = page.name;
    btn.style = "padding:5px 10px;cursor:pointer;";
    btn.onclick = () => iframe.src = page.url;
    tabs.appendChild(btn);
  });

  iframe.src = pages[0].url; // Load first tab by default
})();

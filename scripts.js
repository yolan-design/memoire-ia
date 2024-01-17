var pageDir = window.location.pathname.split("p")[1].split("/");

if (pageDir[1].includes("i")) {
    document.querySelector("nav .nb-gen").innerText = "  ·  "+ pageDir[1].replace("i", "img");
    document.querySelector("nav .nb-page").innerText = "Page "+ pageDir[0];

    document.title =  "Image Générée "+ document.querySelector("nav .title").innerText + document.title;
}

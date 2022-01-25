const links = document.getElementsByTagName("a");
for (let i = 0; i < links.length; i++) {
  const link = links[i];
  link.addEventListener("click", () => {
    window
      .open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank")
      .focus();
  });

  const body = document.querySelector("body");
  body.style.opacity = "0.6";
  body.style.display = "inline-block";
  body.style.fontFamily = "courier-bold";
  body.style.color = "hotpink";
  body.style.boxSizing = "none";
  body.style.fontSize = "6em";
}

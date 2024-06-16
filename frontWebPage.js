//removes the underline from the anchor elements in the header
document.querySelectorAll('a').forEach(anchor => {
  anchor.style.textDecoration = 'none';
}); 

$("document").ready(function() {
  var typed = new Typed("#typed", {
    strings: [
      "coder",
      "developer",
      "programmer",
      "hacker",
      "student",
      "software engineer"
    ],
    typeSpeed: 80,
    backSpeed: 50,
    loop: true,
    loopCount: Infinity,
    showCursor: true,
    autoInsertCss: true,
  });
});
let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: ##74A9F2;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: ##74A9F2;">Estoy aprendiendo en un curso de Front End Junior</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();

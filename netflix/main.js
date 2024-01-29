document.addEventListener("DOMContentLoaded", () => {
  const mynav = document.querySelector("#mynav");
  mynav.addEventListener("click", () => {
    alert("click");
  });

  console.log(mynav);
});

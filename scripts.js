const mediaqueryList = window.matchMedia("(max-width: 362px)");
mediaqueryList.addListener(botonesResponsivos, () => {});

function botonesResponsivos(e) {
  if (e.matches) {
    document.querySelectorAll("div.parent").forEach((el) =>
      el.querySelectorAll("div").forEach((element) => {
        element.classList.replace("col-4", "col-12");
        // console.log(element);
      })
    );
  } else {
    document.querySelectorAll("div.parent").forEach((el) =>
      el.querySelectorAll("div").forEach((element) => {
        element.classList.replace("col-12", "col-4");
        // console.log(element);
      })
    );
  }
}

botonesResponsivos(mediaqueryList);
// document.querySelector(".reaccionar").classList.replace("col-12", "col-4");

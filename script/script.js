window.addEventListener("DOMContentLoaded", () => {
  // header
  document.querySelector(".logo").addEventListener("click", () => {
    document.location = "https://trustpad.io/";
  });

  //   TIME
  function getTime() {
    function zero(item) {
      if (item >= 0 && item < 10) {
        return (item = `0${item}`);
      } else {
        return item;
      }
    }
    let time = new Date(),
      months = time.getUTCMonth(),
      date = zero(time.getUTCDate()),
      hours = zero(time.getUTCHours()),
      minutes = zero(time.getUTCMinutes()),
      arrMonths = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Des",
      ],
      newMonths = arrMonths[months];

    document.querySelector(
      ".menu_button_date"
    ).innerHTML = `${newMonths}  ${date}, ${hours}:${minutes} UTC`;
  }
  setInterval(getTime, 1000);

  //   BUTTON MENU
  let btnButton = document.querySelectorAll("[data-button]");
  let flag = true;
  btnButton.forEach((elem) => {
    elem.addEventListener("click", () => {
      let target1 = document.querySelector(".menu_button_buttons");
      let target2 = document.querySelector(".menu_button_buttons23");
      if (elem.classList.contains("mainMenu_block1_button")) {
        console.log(!elem.classList.contains("mainMenu_block1_button"));
        flag = !flag;
        if (!flag) {
          showMenu(target2);
          closeMenu(target1);
        } else {
          closeMenu(target2);
        }
      }
      if (elem.classList.contains("menu_list_button2")) {
        flag = !flag;
        if (flag) {
          showMenu(target1);
          closeMenu(target2);
        } else {
          closeMenu(target1);
        }
      }
      function closeMenu(elem) {
        elem.style.display = "none";
        document.body.style.overflow = "";
      }
      function showMenu(elem) {
        elem.style.display = "flex";
        document.body.style.overflow = "hidden";
      }
      document.addEventListener("keydown", (e) => {
        if (e.code === "Escape") {
          closeMenu(target1);
          closeMenu(target2);
        }
      });
      document.addEventListener("click", (e) => {
        if (
          e.target != target1 &&
          e.target != target2 &&
          e.target != document.querySelector(".menu_list_button2") &&
          e.target != document.querySelector(".mainMenu_block1_button") &&
          e.target != document.querySelector(".triangle")
        ) {
          closeMenu(target1);
          closeMenu(target2);
          return (flag = true);
        }
      });
    });
  });

  //   MODAL
  const modalWindow = document.querySelector(".modal"),
    btnModal = document.querySelectorAll("[data-modal]"),
    closeModal = document.querySelector("[data-close]");

  btnModal.forEach((e) => {
    e.addEventListener("click", () => {
      showModal();
    });
  });
  function closeModalWindow() {
    modalWindow.classList.add("hide");
    modalWindow.classList.remove("show");
    document.documentElement.style.overflow = "";
  }
  function showModal() {
    modalWindow.classList.add("show");
    modalWindow.classList.remove("hide");
    document.documentElement.style.overflow = "hidden";
  }
  closeModal.addEventListener("click", () => {
    closeModalWindow();
  });

  modalWindow.addEventListener("click", (e) => {
    if (e.target === modalWindow) {
      closeModalWindow();
    }
  });
  document.addEventListener("keydown", (e) => {
    if (e.code === "Escape" && modalWindow.classList.contains("show")) {
      closeModalWindow();
    }
  });

  // MAIN MENU
  let menuLeft = document.querySelector(".mainMenu_block1");
  let menuRight = document.querySelector(".mainMenu_block2");

  document.addEventListener("scroll", () => {
    if (document.documentElement.clientWidth > 992) {
      console.log(document.documentElement.clientWidth > 992);
      if (
        menuRight.getBoundingClientRect().height >
        menuLeft.getBoundingClientRect().height
      ) {
        menuLeft.style.position = "fixed";
        menuLeft.style.top = 0 + "px";
        menuLeft.style.marginTop = 10 + "px";
        menuLeft.style.width = 296.825 + "px";
        document.querySelector(".menu_button_buttons23").style.position =
          "fixed";
        document.querySelector(".menu_button_buttons23").style.top = 215 + "px";
      }
      if (menuRight.getBoundingClientRect().top >= 0) {
        menuLeft.style.position = "relative";
        menuLeft.style.marginTop = 0 + "px";
        document.querySelector(".menu_button_buttons23").style.position =
          "absolute";
        document.querySelector(".menu_button_buttons23").style.top = 415 + "px";
      }
      if (
        menuRight.getBoundingClientRect().bottom <=
        menuLeft.getBoundingClientRect().height
      ) {
        menuLeft.style.position = "relative";
        menuLeft.style.top =
          menuRight.getBoundingClientRect().height -
          menuLeft.getBoundingClientRect().height +
          "px";
        menuLeft.style.marginTop = 0 + "px";
        document.querySelector(".menu_button_buttons23").style.position =
          "absolute";
        document.querySelector(".menu_button_buttons23").style.top = 865 + "px";
      }
    }
    if (document.documentElement.clientWidth <= 992) {
      menuLeft.style.position = "relative";
      menuLeft.style.marginTop = 0 + "px";
      document.querySelector(".menu_button_buttons23").style.position =
        "absolute";
      // document.querySelector(".menu_button_buttons23").style.top = 215 + "px";
    }
  });

  document.querySelector(".footer_btn").addEventListener("click", scrollTop);
  function scrollTop() {
    document.documentElement.scrollTop = 0;
  }
});

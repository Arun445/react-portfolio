import React from "react";

function NavBarCss() {
  document.addEventListener("DOMContentLoaded", () => {
    let autohideToggled = document.querySelector(".autohide");

    if (autohideToggled) {
      let lastScrollTop = 0;
      let lastScrollTops = 0;
      window.addEventListener("scroll", () => {
        let scrollTop = window.scrollY;
        if (scrollTop === lastScrollTops) {
          autohideToggled.classList.remove("scrolled-up");
          autohideToggled.classList.add("scrolled-top");
        } else if (scrollTop < lastScrollTop) {
          autohideToggled.classList.remove("scrolled-down");
          autohideToggled.classList.remove("scrolled-top");
          autohideToggled.classList.add("scrolled-up");
        } else {
          autohideToggled.classList.remove("scrolled-up");
          autohideToggled.classList.remove("scrolled-top");
          autohideToggled.classList.add("scrolled-down");
        }

        lastScrollTop = scrollTop;
      });
    }
  });

  return (
    <div>
      <div className="nav-scroller  ">
        <div className="nav-container autohide ">
          <header>
            <nav>
              <ul>
                <li>
                  <a href={"#Home"}>Home</a>
                </li>
                <li>
                  <a href="#About">About</a>
                </li>
                <li>
                  <a href="#Projects">Projects</a>
                </li>
                <li>
                  <a href="#Contacts">Contacts</a>
                </li>
              </ul>
            </nav>
          </header>
        </div>
      </div>
    </div>
  );
}

export default NavBarCss;

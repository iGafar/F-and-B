const main: HTMLElement | null = document.querySelector("main");
const yearBlock: HTMLElement | null = document.querySelector(".current-year");
const headerHeight: number | undefined =
  document.querySelector("header")?.offsetHeight;

if (main !== null) {
  main.style.paddingTop = `${headerHeight}px`;
}

if (yearBlock !== null) {
  yearBlock.textContent = new Date().getFullYear().toString();
}

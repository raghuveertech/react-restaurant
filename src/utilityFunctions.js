export const scrollToSection = (e, section, extraOffset) => {
  e.preventDefault();
  window.scrollTo({
    behavior: "smooth",
    top: section.offsetTop - extraOffset,
  });
};

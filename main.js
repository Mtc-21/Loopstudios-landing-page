  const cards = document.querySelectorAll(".card");
    const text = document.querySelectorAll(".text");
    const elem = document.querySelectorAll(".menu-main li");
    function sliderScrollCard(items) {
      const ob = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          console.log(entry.target)
          entries.forEach((entry, i) => {
            setTimeout(() => {
              entry.target.classList.toggle("visible", entry.isIntersecting);
            }, i * 100);
          });
          if (entry.isIntersecting) ob.unobserve(entry.target)
        });
      }, {
        root: null,
        rootMargin: '-10px -10px 0px -10px',
        threshold: 0.5,
      }
      );
      items.forEach(item => ob.observe(item))
    }

    function sliderScroll(items) {
      const ob = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          entry.target.classList.toggle("visible", entry.isIntersecting);
          if (entry.isIntersecting) ob.unobserve(entry.target)
        });
      }, {
        root: null,
        rootMargin: '-10px -10px 0px -10px',
        threshold: 0.5,
      }
      );
      items.forEach(item => ob.observe(item))
    }
    window.addEventListener('DOMContentLoaded', () => {
      sliderScroll(text)
      sliderScrollCard(cards)
    });
  
(function () {
  var target = 1245;
  var el = document.getElementById("stat-count");
  var started = false;

  function easeOut(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  function runCounter() {
    if (!el || started) return;
    started = true;
    var start = performance.now();
    var dur = 1800;
    function frame(now) {
      var p = Math.min(1, (now - start) / dur);
      var n = Math.round(easeOut(p) * target);
      el.textContent = n.toLocaleString("vi-VN");
      if (p < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  var obs = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          runCounter();
          obs.disconnect();
        }
      });
    },
    { threshold: 0.35 }
  );

  if (el) {
    obs.observe(el.closest(".hero") || el);
  }

  var sections = document.querySelectorAll(".observe-in");
  var io2 = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  sections.forEach(function (s) {
    io2.observe(s);
  });

  var testimonial = document.querySelector("[data-slider]");
  if (testimonial) {
    var slides = testimonial.querySelectorAll(".testimonial-item");
    var dots = testimonial.querySelectorAll(".dot");
    var current = 0;
    var timerId = null;
    var autoDelay = 4500;

    function setSlide(index) {
      if (!slides.length || !dots.length) return;
      current = (index + slides.length) % slides.length;
      slides.forEach(function (slide, idx) {
        slide.classList.toggle("is-active", idx === current);
      });
      dots.forEach(function (dot, idx) {
        var active = idx === current;
        dot.classList.toggle("is-active", active);
        dot.setAttribute("aria-current", active ? "true" : "false");
      });
    }

    function startAuto() {
      stopAuto();
      timerId = setInterval(function () {
        setSlide(current + 1);
      }, autoDelay);
    }

    function stopAuto() {
      if (timerId) {
        clearInterval(timerId);
        timerId = null;
      }
    }

    dots.forEach(function (dot) {
      dot.addEventListener("click", function () {
        var index = Number(dot.getAttribute("data-slide"));
        if (Number.isNaN(index)) return;
        setSlide(index);
        startAuto();
      });
    });

    testimonial.addEventListener("mouseenter", stopAuto);
    testimonial.addEventListener("mouseleave", startAuto);
    testimonial.addEventListener("focusin", stopAuto);
    testimonial.addEventListener("focusout", startAuto);

    setSlide(0);
    startAuto();
  }
})();

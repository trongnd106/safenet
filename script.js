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

  var WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

  function getMailAccessKey() {
    var k =
      typeof window.SAFENET_WEB3FORMS_ACCESS_KEY === "string"
        ? window.SAFENET_WEB3FORMS_ACCESS_KEY.trim()
        : "";
    return k;
  }

  function vietnamClientTimeString() {
    try {
      return new Date().toLocaleString("vi-VN", { timeZone: "Asia/Ho_Chi_Minh" });
    } catch (e) {
      return String(new Date());
    }
  }

  function mailTemplateReport(kind, detail, fileMeta) {
    var t = vietnamClientTimeString();
    return (
      "─── GỬI CẢNH BÁO — SAFENET ───\n\n" +
      "Hình thức / thông tin lừa đảo:\n" +
      kind +
      "\n\n" +
      "Mô tả cụ thể: " +
      detail +
      "\n" +
      "Tệp đính kèm: " +
      fileMeta +
      "\n\n" +
      "Thời gian (client): " +
      t +
      "\n" +
      "Trang gửi: SafeNet Landing · Form chia sẻ trường hợp"
    );
  }

  function mailTemplateFeedback(title, content, fullName, faculty) {
    var t = vietnamClientTimeString();
    return (
      "─── PHẢN HỒI SINH VIÊN — SAFENET ───\n\n" +
      "Tiêu đề: " +
      title +
      "\n" +
      "Nội dung phản hồi: " +
      content +
      "\n" +
      "Họ và tên: " +
      fullName +
      "\n" +
      "Khoa: " +
      faculty +
      "\n\n" +
      "Thời gian (client): " +
      t +
      "\n" +
      "Trang gửi: SafeNet Landing · Form testimonial"
    );
  }

  function setSendStatus(el, text, ok) {
    if (!el) return;
    el.hidden = false;
    el.textContent = text;
    el.classList.toggle("form-send-status--ok", !!ok);
    el.classList.toggle("form-send-status--err", !ok);
  }

  function setButtonBusy(btn, busy, busyLabel, idleLabel) {
    if (!btn) return;
    if (busy) {
      btn.disabled = true;
      if (idleLabel !== undefined) btn.dataset._safenetLbl = idleLabel || btn.textContent;
      btn.textContent = busyLabel || "Đang gửi…";
    } else {
      btn.disabled = false;
      if (btn.dataset._safenetLbl) {
        btn.textContent = btn.dataset._safenetLbl;
        delete btn.dataset._safenetLbl;
      }
    }
  }

  async function parseWeb3Response(res) {
    var raw = await res.text();
    var data = {};
    try {
      data = raw ? JSON.parse(raw) : {};
    } catch (e) {}
    var okHttp = res.ok;
    var okApi = data && data.success === true;
    if (!okHttp || !okApi) {
      var msg =
        (data && data.message) ||
        (data && data.error) ||
        raw ||
        "Không gửi được (" + res.status + "). Thử lại sau.";
      throw new Error(msg);
    }
    return data;
  }

  async function sendWeb3Json(payload) {
    var res = await fetch(WEB3FORMS_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });
    return parseWeb3Response(res);
  }

  async function sendWeb3FormData(formData) {
    var res = await fetch(WEB3FORMS_ENDPOINT, {
      method: "POST",
      body: formData,
    });
    return parseWeb3Response(res);
  }

  var reportBtn = document.getElementById("btn-send-report");
  var feedbackBtn = document.getElementById("btn-send-feedback");
  var reportStatus = document.getElementById("report-send-status");
  var feedbackStatus = document.getElementById("feedback-send-status");

  var MAX_ATTACHMENT_BYTES = 8 * 1024 * 1024;

  if (reportBtn) {
    reportBtn.addEventListener("click", function () {
      var key = getMailAccessKey();
      if (!key) {
        window.alert(
          "Chưa cấu hình gửi email: hãy tạo Access Key tại https://web3forms.com và dán vào file mail-config.js (xem EMAIL_SETUP.md)."
        );
        return;
      }

      var typeEl = document.getElementById("report-type");
      var detailEl = document.getElementById("report-detail");
      var fileEl = document.getElementById("evidence-upload");
      var kind = ((typeEl && typeEl.value) || "").trim();
      var detail = ((detailEl && detailEl.value) || "").trim();
      var fileRow = "";

      var fdSingle = null;
      if (!kind && !detail && !(fileEl && fileEl.files && fileEl.files[0])) {
        setSendStatus(reportStatus, "Vui lòng nhập ít nhất một nội dung hoặc đính kèm tệp.", false);
        return;
      }

      if (fileEl && fileEl.files && fileEl.files[0]) {
        var f = fileEl.files[0];
        if (f.size > MAX_ATTACHMENT_BYTES) {
          setSendStatus(
            reportStatus,
            "Tệp đính kèm quá lớn (tối đa khoảng 8 MB). Hãy nén hoặc gửi ảnh nhỏ hơn.",
            false
          );
          return;
        }
        fdSingle = f;
        fileRow = f.name + " (" + Math.round(f.size / 1024) + " KB)";
      } else {
        fileRow = "(Không có tệp đính kèm)";
      }

      var messageBody = mailTemplateReport(kind || "(không có)", detail || "(không có)", fileRow);

      setButtonBusy(reportBtn, true, "Đang gửi…", reportBtn.textContent);
      reportStatus.hidden = true;

      var sendPromise;
      if (fdSingle) {
        var fd = new FormData();
        fd.append("access_key", key);
        fd.append("subject", "[SafeNet ULIS] Gửi cảnh báo từ landing page");
        fd.append("name", "Ẩn danh · Form cảnh báo");
        fd.append("message", messageBody);
        fd.append("attachment", fdSingle);
        sendPromise = sendWeb3FormData(fd);
      } else {
        sendPromise = sendWeb3Json({
          access_key: key,
          subject: "[SafeNet ULIS] Gửi cảnh báo từ landing page",
          name: "Ẩn danh · Form cảnh báo",
          message: messageBody,
        });
      }

      sendPromise
        .then(function () {
          setSendStatus(
            reportStatus,
            "Đã gửi. Cảm ơn bạn — SafeNet đã nhận nội dung và sẽ xem trong thời gian sớm nhất.",
            true
          );
          if (typeEl) typeEl.value = "";
          if (detailEl) detailEl.value = "";
          if (fileEl) fileEl.value = "";
        })
        .catch(function (err) {
          setSendStatus(
            reportStatus,
            typeof err.message === "string"
              ? err.message
              : "Không gửi được. Thử lại sau.",
            false
          );
        })
        .finally(function () {
          setButtonBusy(reportBtn, false);
        });
    });
  }

  if (feedbackBtn) {
    feedbackBtn.addEventListener("click", function () {
      var key = getMailAccessKey();
      if (!key) {
        window.alert(
          "Chưa cấu hình gửi email: hãy tạo Access Key tại https://web3forms.com và dán vào file mail-config.js (xem EMAIL_SETUP.md)."
        );
        return;
      }

      var titleEl = document.getElementById("feedback-title");
      var contentEl = document.getElementById("feedback-content");
      var nameEl = document.getElementById("feedback-name");
      var facEl = document.getElementById("feedback-faculty");
      var title = ((titleEl && titleEl.value) || "").trim();
      var contentText = ((contentEl && contentEl.value) || "").trim();
      var fullName = ((nameEl && nameEl.value) || "").trim();
      var faculty = ((facEl && facEl.value) || "").trim();

      if (!title || !contentText || !fullName || !faculty) {
        setSendStatus(
          feedbackStatus,
          "Vui lòng nhập đủ Tiêu đề, Nội dung, Tên và Khoa trước khi gửi.",
          false
        );
        return;
      }

      var subjectLine =
        "[SafeNet ULIS] Phản hồi: " +
        title.replace(/\s+/g, " ").slice(0, 120);

      var messageBody = mailTemplateFeedback(
        title,
        contentText,
        fullName,
        faculty
      );
      feedbackStatus.hidden = true;
      setButtonBusy(feedbackBtn, true, "Đang gửi…", feedbackBtn.textContent);

      sendWeb3Json({
        access_key: key,
        subject: subjectLine,
        name: fullName + " · " + faculty,
        message: messageBody,
      })
        .then(function () {
          setSendStatus(
            feedbackStatus,
            "Đã gửi phản hồi. Cảm ơn bạn đã chia sẻ!",
            true
          );
          if (titleEl) titleEl.value = "";
          if (contentEl) contentEl.value = "";
          if (nameEl) nameEl.value = "";
          if (facEl) facEl.value = "";
        })
        .catch(function (err) {
          setSendStatus(
            feedbackStatus,
            typeof err.message === "string"
              ? err.message
              : "Không gửi được. Thử lại sau.",
            false
          );
        })
        .finally(function () {
          setButtonBusy(feedbackBtn, false);
        });
    });
  }
})();

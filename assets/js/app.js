// Scroll reveal
const reveals = document.querySelectorAll(".reveal");
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add("show");
  });
}, { threshold: 0.12 });
reveals.forEach(el => io.observe(el));

// Slider
const track = document.getElementById("track");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

if (track && prev && next) {
  const step = 280;
  prev.addEventListener("click", () => track.scrollBy({ left: +step, behavior: "smooth" })); // RTL
  next.addEventListener("click", () => track.scrollBy({ left: -step, behavior: "smooth" }));
}

// Filter pills
const pills = document.querySelectorAll(".pill[data-filter]");
pills.forEach(p => {
  p.addEventListener("click", () => {
    pills.forEach(x => x.classList.remove("pill--active"));
    p.classList.add("pill--active");

    const type = p.dataset.filter;
    document.querySelectorAll(".slider__track .card").forEach(card => {
      const ok = type === "all" || card.dataset.type === type;
      card.style.display = ok ? "block" : "none";
    });
  });
});
// menu modal
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu-modal');
  const closeMenu = document.querySelector('.close-menu');

  menuToggle.addEventListener('click', () => {
    mobileMenu.classList.add('active');
    document.body.style.overflow = 'hidden';
  });

  closeMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    document.body.style.overflow = '';
  });

  mobileMenu.addEventListener('click', (e) => {
    if (e.target === mobileMenu) {
      mobileMenu.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
});

//صفحه ویدیو ها
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
      // بستن بقیه FAQها
      document.querySelectorAll('.faq-item.active').forEach(activeItem => {
        if (activeItem !== item) {
          activeItem.classList.remove('active');
        }
      });
      // باز یا بسته کردن آیتم کلیک شده
      item.classList.toggle('active');
    });
  });
});

// کد ارسال ایمیل در فرم فوتر
// --- [اسکریپت اصلاح‌شده برای ثبت خبرنامه] ---

// تنظیمات مهندسی: وضعیت فعال بودن بک‌اند
const BACKEND_ENABLED = false;

document.getElementById("newsletterForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const status = document.getElementById("newsletterStatus");
  const emailInput = document.getElementById("newsletterEmail");

  if (!emailInput.value) {
    status.innerText = "لطفاً آدرس ایمیل را وارد کنید :warning:";
    status.style.color = "orange";
    return;
  }

  if (!BACKEND_ENABLED) {
    // --- پیام جایگزین مورد نظر شما: فعلاً در دسترس نیست ---
    status.innerText = "متأسفانه، سرویس ثبت خبرنامه موقتاً در دسترس نیست. لطفاً برای پیگیری از طریق صفحه تماس با ما اقدام کنید. :x:";
    status.style.color = "red";

    // ریست کردن فرم
    // document.getElementById("newsletterForm").reset(); // نیازی به ریست نیست چون عملی انجام نشده

    return;
  }

  // کدهای اصلی fetch و تماس با سرور در اینجا غیرفعال باقی می‌مانند.
});
// ハンバーガーメニューの制御
const hamburger = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mobile-nav");

hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active");
    mobileNav.classList.toggle("active");
});

// モバイルメニューのリンククリック時にメニューを閉じる
const mobileLinks = document.querySelectorAll(".mobile-nav a");
mobileLinks.forEach((link) => {
    link.addEventListener("click", function () {
        hamburger.classList.remove("active");
        mobileNav.classList.remove("active");
    });
});

// スムーススクロール (#contact のみ)
document.querySelectorAll('a[href="#contact"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector("#contact");
        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    });
});

// ヘッダーのスクロール効果
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.style.background = "rgba(255, 255, 255, 0.95)";
        header.style.backdropFilter = "blur(10px)";
    } else {
        header.style.background = "#FFFFFF";
        header.style.backdropFilter = "none";
    }
});

// フェードインアニメーション
const fadeElements = document.querySelectorAll(".fade-in");
const observer = new IntersectionObserver(
    function (entries) {
        entries.forEach((entry) => {
            if (entry.isIntersecting && !entry.target.classList.contains("visible")) {
                entry.target.classList.add("visible");
            }
        });
    },
    {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
    }
);

fadeElements.forEach((element) => {
    observer.observe(element);
});

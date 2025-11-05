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

// ページ読み込み時にヒーローセクションを表示
window.addEventListener("load", function () {
    const heroText = document.querySelector(".hero-text");
    setTimeout(() => {
        heroText.classList.add("visible");
    }, 300);
});

// メインビジュアルと重なった文字の色を変更
function checkOverlap() {
    const img = document.querySelector(".hero-image").getBoundingClientRect();
    document.querySelectorAll(".hero-text span").forEach((span) => {
        const rect = span.getBoundingClientRect();
        const overlap = !(rect.right < img.left || rect.left > img.right || rect.bottom < img.top || rect.top > img.bottom);
        if (overlap) {
            span.classList.add("overlap-green");
        } else {
            span.classList.remove("overlap-green");
        }
    });
}

window.addEventListener("resize", checkOverlap);
window.addEventListener("scroll", checkOverlap);
checkOverlap();

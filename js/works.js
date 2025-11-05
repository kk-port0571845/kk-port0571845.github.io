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

// タブ
const tabList = document.querySelectorAll(".tab-list-item");
// タブコンテンツ
const tabContent = document.querySelectorAll(".tab-contents-item");

//DOMが読み込み終わったら
document.addEventListener("DOMContentLoaded", function () {
    // タブに対してクリックイベントを適用
    for (let i = 0; i < tabList.length; i++) {
        tabList[i].addEventListener("click", tabSwitch);
    }
    // タブをクリックすると実行する関数
    function tabSwitch() {
        // activeクラスを削除
        document.querySelectorAll(".active")[0].classList.remove("active");
        // クリックしたタブにactiveクラスを付与
        this.classList.add("active");
        //再度同じタブをクリックできないように変更
        //  フェードインアニメーションを再度発火させるためにvisibleクラスを削除
        document
            .querySelector(".show")
            .querySelectorAll(".visible")
            .forEach((el) => {
                el.classList.remove("visible");
            });
        // showクラスを削除
        document.querySelectorAll(".show")[0].classList.remove("show");
        // タブを配列風オブジェクトとして定義
        const aryTabs = Array.prototype.slice.call(tabList);
        // クリックしたタブの配列番号を取得
        const index = aryTabs.indexOf(this);
        // クリックしたタブと同じ配列番号のタブコンテンツにshowクラスを付与
        tabContent[index].classList.add("show");
    }
});

// モーダル
document.addEventListener("DOMContentLoaded", () => {
    modalTriggers();
});

//モーダルを開く・閉じる・背景クリックのイベントをまとめて設定
function modalTriggers() {
    const openButtons = document.querySelectorAll(".open-modal");
    const closeButtons = document.querySelectorAll(".close-btn");
    const modals = document.querySelectorAll(".modal");

    openButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const modalId = button.dataset.modal;
            openModal(modalId);
        });
    });

    closeButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const modalId = button.dataset.modal;
            closeModal(modalId);
        });
    });

    //モーダルの背景クリックで閉じる
    modals.forEach((modal) => {
        modal.addEventListener("click", (e) => {
            if (e.target.classList.contains("modal")) {
                modal.classList.remove("active");
            }
        });
    });
}

//指定したIDのモーダルを開く関数
function openModal(modalId) {
    const modal = document.getElementById(`modal-${modalId}`);
    if (modal) {
        modal.classList.add("active");
    }
}

//指定したIDのモーダルを閉じる関数
function closeModal(modalId) {
    const modal = document.getElementById(`modal-${modalId}`);
    if (modal) {
        modal.classList.remove("active");
    }
}

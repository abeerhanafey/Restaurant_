// // استيراد مكتبة GSAP للأنيميشن
// document.addEventListener("DOMContentLoaded", function () {
//     gsap.registerPlugin();

//     const aboutSection = document.querySelector(".about");
//     const bookingSection = document.querySelector(".booking");
//     const menuSection = document.querySelector(".menu");
//     const leftArrow = document.querySelector(".fa-circle-chevron-left");
//     const rightArrow = document.querySelector(".fa-circle-chevron-right");
//     const menuBtn = document.querySelector(".btns button:last-child");
//     const bookBtn = document.querySelector(".btns button:first-child");
//     const navMenuLink = document.querySelector(".navbar ul li:nth-child(2) a");
//     const navBookLink = document.querySelector(".navbar ul li:nth-child(3) a");
//     const navAboutLink = document.querySelector(".navbar ul li:first-child a");
//     const cancelBtn = document.getElementById("cancel");
//     const confirmBtn = document.querySelector("button[type='submit']");

//     let currentSection = 0; // 0 = About, 1 = Booking, 2 = Menu
//     let sections = [aboutSection, bookingSection, menuSection];

//     // إخفاء كل الأقسام ما عدا About عند بدء التشغيل
//     sections.forEach((sec, index) => {
//         if (index !== 0) sec.style.display = "none";
//     });

//     function showSection(index, direction = "right") {
//         if (index < 0 || index > 2) return;

//         let current = sections[currentSection];
//         let next = sections[index];

//         // تحديد الاتجاه بناءً على الحركة يمين أو يسار
//         let fromX = direction === "right" ? 100 : -100;
//         let toX = direction === "right" ? -100 : 100;

//         // إخفاء القسم الحالي مع تأثير خروج جانبي
//         gsap.to(current, {
//             opacity: 0,
//             x: toX,
//             duration: 0.5,
//             onComplete: () => {
//                 current.style.display = "none";
//                 next.style.display = "flex";

//                 // إظهار القسم التالي مع تأثير دخول جانبي
//                 gsap.fromTo(
//                     next,
//                     { opacity: 0, x: fromX },
//                     { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" }
//                 );
//             },
//         });

//         currentSection = index;
//     }

//     // التنقل بين الأقسام عند الضغط على الأسهم
//     rightArrow.addEventListener("click", () => {
//         showSection((currentSection + 1) % 3, "right");
//     });

//     leftArrow.addEventListener("click", () => {
//         showSection((currentSection - 1 + 3) % 3, "left");
//     });

//     // إظهار القائمة عند الضغط على زر "See Menu"
//     menuBtn.addEventListener("click", () => {
//         showSection(2, "right");
//     });

//     // إظهار الحجز عند الضغط على زر "Book a Table"
//     bookBtn.addEventListener("click", () => {
//         showSection(1, "right");
//     });

//     // إظهار القائمة عند الضغط على "Menu" في الناف بار
//     navMenuLink.addEventListener("click", (e) => {
//         e.preventDefault();
//         showSection(2, "right");
//     });

//     // إظهار الحجز عند الضغط على "Booking" في الناف بار
//     navBookLink.addEventListener("click", (e) => {
//         e.preventDefault();
//         showSection(1, "right");
//     });

//     // العودة إلى الـ About عند الضغط على "About Us" في الناف بار
//     navAboutLink.addEventListener("click", (e) => {
//         e.preventDefault();
//         showSection(0, "left");
//     });

//     // العودة إلى الـ About عند الضغط على زر "Cancel" في نموذج الحجز
//     cancelBtn.addEventListener("click", () => {
//         showSection(0, "left");
//     });

//     // عند الضغط على زر "Confirm"، تظهر رسالة SweetAlert لمدة ثانيتين
//     confirmBtn.addEventListener("click", (e) => {
//         e.preventDefault(); // منع إعادة تحميل الصفحة

//         Swal.fire({
//             title: "Table Reserved!",
//             text: "Your table has been booked successfully.",
//             icon: "success",
//             timer: 2000,
//             showConfirmButton: false,
//             background: "#482300",
//             color: "bisque"
//         });

//         setTimeout(() => {
//             showSection(0, "left"); // العودة إلى الـ About بعد الحجز
//         }, 2000);
//     });
// });





document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin();

    const aboutSection = document.querySelector(".about");
    const bookingSection = document.querySelector(".booking");
    const menuSection = document.querySelector(".menu");
    const leftArrow = document.querySelector(".fa-circle-chevron-left");
    const rightArrow = document.querySelector(".fa-circle-chevron-right");
    const menuBtn = document.querySelector(".btns button:last-child");
    const bookBtn = document.querySelector(".btns button:first-child");
    const navMenuLink = document.querySelector(".navbar ul li:nth-child(2) a");
    const navBookLink = document.querySelector(".navbar ul li:nth-child(3) a");
    const navAboutLink = document.querySelector(".navbar ul li:first-child a");
    const cancelBtn = document.getElementById("cancel");
    const confirmBtn = document.querySelector("button[type='submit']");
    const menuItemsContainer = document.querySelector(".menu-items"); // تأكد من أن لديك عنصر يحتوي عناصر المنيو

    let currentSection = 0; // 0 = About, 1 = Booking, 2 = Menu
    let sections = [aboutSection, bookingSection, menuSection];

    // إخفاء كل الأقسام ما عدا About عند بدء التشغيل
    sections.forEach((sec, index) => {
        if (index !== 0) sec.style.display = "none";
    });

    function showSection(index, direction = "right") {
        if (index < 0 || index > 2) return;

        let current = sections[currentSection];
        let next = sections[index];

        let fromX = direction === "right" ? 100 : -100;
        let toX = direction === "right" ? -100 : 100;

        gsap.to(current, {
            opacity: 0,
            x: toX,
            duration: 0.5,
            onComplete: () => {
                current.style.display = "none";
                next.style.display = "flex";

                gsap.fromTo(
                    next,
                    { opacity: 0, x: fromX },
                    { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" }
                );
            },
        });

        currentSection = index;
    }

    rightArrow.addEventListener("click", () => {
        showSection((currentSection + 1) % 3, "right");
    });

    leftArrow.addEventListener("click", () => {
        showSection((currentSection - 1 + 3) % 3, "left");
    });

    menuBtn.addEventListener("click", () => {
        showSection(2, "right");
    });

    bookBtn.addEventListener("click", () => {
        showSection(1, "right");
    });

    navMenuLink.addEventListener("click", (e) => {
        e.preventDefault();
        showSection(2, "right");
    });

    navBookLink.addEventListener("click", (e) => {
        e.preventDefault();
        showSection(1, "right");
    });

    navAboutLink.addEventListener("click", (e) => {
        e.preventDefault();
        showSection(0, "left");
    });

    cancelBtn.addEventListener("click", () => {
        showSection(0, "left");
    });

    confirmBtn.addEventListener("click", (e) => {
        e.preventDefault();

        Swal.fire({
            title: "Table Reserved!",
            text: "Your table has been booked successfully.",
            icon: "success",
            timer: 2000,
            showConfirmButton: false,
            background: "#482300",
            color: "bisque"
        });

        setTimeout(() => {
            showSection(0, "left");
        }, 2000);
    });

    // *جعل عناصر المنيو تظهر بشكل أفقي مع إمكانية السحب اليدوي*
    function adjustMenuLayout() {
        if (window.innerWidth <= 768) { 
            menuItemsContainer.style.display = "flex";
            menuItemsContainer.style.flexWrap = "nowrap"; 
            menuItemsContainer.style.overflow = "hidden"; // إخفاء شريط التمرير
            menuItemsContainer.style.scrollBehavior = "smooth"; 
            menuItemsContainer.style.cursor = "grab";
        } else {
            menuItemsContainer.style.display = "";
            menuItemsContainer.style.flexWrap = "";
            menuItemsContainer.style.overflow = "";
        }
    }

    // *إضافة خاصية السحب اليدوي لعناصر المنيو*
    let isDown = false;
    let startX;
    let scrollLeft;

    menuItemsContainer.addEventListener("mousedown", (e) => {
        isDown = true;
        menuItemsContainer.style.cursor = "grabbing";
        startX = e.pageX - menuItemsContainer.offsetLeft;
        scrollLeft = menuItemsContainer.scrollLeft;
    });

    menuItemsContainer.addEventListener("mouseleave", () => {
        isDown = false;
        menuItemsContainer.style.cursor = "grab";
    });

    menuItemsContainer.addEventListener("mouseup", () => {
        isDown = false;
        menuItemsContainer.style.cursor = "grab";
    });

    menuItemsContainer.addEventListener("mousemove", (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - menuItemsContainer.offsetLeft;
        const walk = (x - startX) * 2; // التحكم في سرعة السحب
        menuItemsContainer.scrollLeft = scrollLeft - walk;
    });

    // استدعاء الدالة عند تحميل الصفحة وعند تغيير حجم النافذة
    adjustMenuLayout();
    window.addEventListener("resize", adjustMenuLayout);
});
// 상단 돋보기
function toggleExpand() {
  const lineElement = document.querySelector(".line");
  lineElement.classList.toggle("expanded");
}

// 모바일 메뉴
function toggleMenu() {
  var menuWrap = document.querySelector(".mbmenu-wrap");
  var mbNav = document.querySelector(".mb-nav");

  menuWrap.classList.toggle("show");
  mbNav.classList.toggle("show");
}

// 슬라이드
document.addEventListener("DOMContentLoaded", function () {
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");
  const slides = document.querySelector(".slides");
  const dots = document.querySelectorAll(".dot");
  let currentSlide = 0;
  const totalSlides = document.querySelectorAll(".slide").length;

  function goToSlide(index) {
    if (index >= totalSlides) {
      currentSlide = 0;
    } else if (index < 0) {
      currentSlide = totalSlides - 1;
    } else {
      currentSlide = index;
    }

    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
    updateDots();
  }

  function updateDots() {
    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === currentSlide);
    });
  }

  // Automatic slide transition every 5 seconds
  function startSlideShow() {
    setInterval(() => {
      goToSlide(currentSlide + 1);
    }, 5000); // Change slide every 5000 milliseconds (5 seconds)
  }

  // Initialize the slideshow
  startSlideShow();

  prevButton.addEventListener("click", () => {
    goToSlide(currentSlide - 1);
  });

  nextButton.addEventListener("click", () => {
    goToSlide(currentSlide + 1);
  });

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      goToSlide(index);
    });
  });
});

// 문구 루프
window.onload = function () {
  const loopContainer = document.querySelector(".loop-container");
  const loopText = document.querySelector(".loop-text");
  const clone = loopText.cloneNode(true);
  loopContainer.appendChild(clone);
};

// 스토리 슬라이드
document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelector(".story-slides");
  const prevButton = document.querySelector(".prev2");
  const nextButton = document.querySelector(".next2");
  const slideCount = document.querySelectorAll(".slide2").length;
  let currentIndex = 0;

  function updateSlidePosition() {
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  prevButton.addEventListener("click", function () {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = slideCount - 1;
    }
    updateSlidePosition();
  });

  nextButton.addEventListener("click", function () {
    if (currentIndex < slideCount - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    updateSlidePosition();
  });
});

// 하단 푸터
function toggleBottomLine() {
  const bottomLineElement = document.querySelector(".bottom-line");
  bottomLineElement.classList.toggle("expanded");
}

// 이미지 호버시 라벨 이동 js
  function addHoverEffect(containerSelector, labelSelector, direction) {
    const container = document.querySelector(containerSelector);
    const label = container.querySelector(labelSelector);
    
    if (container && label) { // 컨테이너와 라벨이 존재하는지 확인
      container.addEventListener('mouseover', function() {
        if (direction === 'left') {
          label.style.left = '0';
        } else if (direction === 'right') {
          label.style.right = '0';
        }
      });
  
      container.addEventListener('mouseout', function() {
        if (direction === 'left') {
          label.style.left = '-50px';
        } else if (direction === 'right') {
          label.style.right = '-50px';
        }
      });
    } else {
      console.error('Container or label not found:', containerSelector, labelSelector);
    }
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    addHoverEffect('.con1', '.label', 'left');
    addHoverEffect('.con2', '.label1', 'right');
    addHoverEffect('.con3', '.label', 'left');
  });
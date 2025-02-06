const content = document.querySelector(".content");
const thumb = document.querySelector(".scroll-thumb");

// Функция обновления позиции Шрека
const updateThumb = () => {
  const scrollRatio = content.scrollTop / (content.scrollHeight - content.clientHeight);
  thumb.style.top = `${scrollRatio * (content.clientHeight - thumb.clientHeight)}px`;
};

// Обновляем позицию при прокрутке
content.addEventListener("scroll", updateThumb);

// Добавляем возможность перетаскивания Шрека
let isDragging = false;
let startY, startScrollTop;

thumb.addEventListener("mousedown", (e) => {
  isDragging = true;
  startY = e.clientY;
  startScrollTop = content.scrollTop;
  document.body.style.userSelect = "none"; // Отключаем выделение текста
});

document.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  const deltaY = e.clientY - startY;
  const scrollRatio = (content.scrollHeight - content.clientHeight) / (content.clientHeight - thumb.clientHeight);
  content.scrollTop = startScrollTop + deltaY * scrollRatio;
});

document.addEventListener("mouseup", () => {
  isDragging = false;
  document.body.style.userSelect = "";
});

function openPopup() {
    document.getElementById("popup").style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}
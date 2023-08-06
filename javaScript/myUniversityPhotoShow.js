// 数据
const data = [
  {
    imgSrc: "./img/sky/IMG_20221108_172241.jpg",
    title: "2022.11.08",
  },
  {
    imgSrc: "./img/sky/IMG_20230721_192249.jpg",
    title: "2023.07.21",
  },
  {
    imgSrc: "./img/sky/IMG_20230719_194644.jpg",
    title: "2023.07.19",
  },
];

const data43 = [
  {
    imgSrc: "./img/sky/IMG_20221025_175832.jpg",
    title: "2022.10.25",
  },
  {
    imgSrc: "./img/sky/IMG_20230724_191716.jpg",
    title: "2023.07.24",
  },
];

// 1. 获取元素  图片  和  h3
const pic = document.querySelector(".pic");
const pic43 = document.querySelector(".pic43");
const text = document.querySelector(".text");
const text43 = document.querySelector(".text43");
// i 记录图片的张数
let i = 0;
// 2.开启定时器
setInterval(function () {
  i++;
  // 循环播放
  if (i >= data.length) i = 0;
  // 修改图片的src属性
  // console.log(data[i].imgSrc)
  pic.src = data[i].imgSrc;
  pic43.src = data43[i].imgSrc;
  // 修改文字内容
  text.innerHTML = data[i].title;
  text43.innerHTML = data43[i].title;
}, 1500);

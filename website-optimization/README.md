# 网站性能优化项目

## 加载得分

### 要求
- 在移动设备和桌面设备网页加载速度均超过 90 分

### 优化
- 添加 media="print" 到 print.css
- 嵌入 style.css
- 移除 Google 字体
- 将 JS 移动的 body 结束前
- 添加 async 到 script
- 压缩图片

### 测试
使用 [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/) 测试以下网页
- [index.html](http://icodytan.github.io/website-optimization/index.html)

## 消除卡顿

### 要求
- 使 `views/pizza.html` 在滚动动时达到 60fps
- 在 `views/pizza.html` 通过滑条调整披萨大小时小于 5ms

### 优化
- 减少样式的计算范围及复杂度(`views/js/main.js`)

### 测试
使用 `Google Developer` 工具测试以下页面
- [pizza.html](http://icodytan.github.io/website-optimization/views/pizza.html)


# Website Optimization Project

## PageSpeed Score

### Criteria
- Achieves a PageSpeed score of at least 90 for Mobile and Desktop

### Optimization
- Add media="print" for print.css
- Inlined style.css
- Removed link to Google fonts
- Moved js to the end of body
- Add async for scripts

### Testing
Use [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/) to test following pages
- [index.html](http://icodytan.github.io/website-optimization/index.html)

## Getting Rid of Jank

### Criteria
- Make `views/pizza.html` render with a consistent frame-rate at 60fps when scrolling.
- Time to resize pizzas is less than 5 ms using the pizza size slider on the `views/pizza.html` page

### Optimization
- Reduce the scope and complexity of style calculations(`views/js/main.js`)

### Testing
Use `Google Developer` tool to test the following page runs in 60fps
- [pizza.html](http://icodytan.github.io/website-optimization/views/pizza.html)
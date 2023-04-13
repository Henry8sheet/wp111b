CSS是什麼？

CSS（層疊樣式表）是一種用於描述Web頁面外觀和格式的語言。它與HTML一起使用，可以控制網頁中各個元素的樣式，例如文字顏色、字體、背景顏色、邊框等。

CSS樣式和選擇器

CSS樣式由一個或多個屬性和相應的值組成，以指定元素的外觀和格式。例如，以下CSS樣式可以更改段落的文字顏色和字體大小：

css
Copy code
p {
    color: red;
    font-size: 16px;
}
在上面的示例中，p是CSS選擇器，指定樣式應用到所有段落元素。color和font-size是CSS屬性，red和16px是相應的值。

CSS選擇器指定樣式應用到哪些元素。以下是一些常見的CSS選擇器：

元素選擇器：通過元素名稱來選擇元素，例如p、h1等。
ID選擇器：通過元素的ID屬性值來選擇元素，例如#header、#sidebar等。
類選擇器：通過元素的類屬性值來選擇元素，例如.red-text、.large-font等。
屬性選擇器：通過元素的屬性值來選擇元素，例如[href]、[title]等。
CSS屬性和值

CSS屬性指定元素的外觀和格式。以下是一些常見的CSS屬性：

color：文字顏色
background-color：背景顏色
font-family：字體家族
font-size：字體大小
text-align：文字對齊方式
border：邊框
每個CSS屬性都有一個或多個相應的值，用於指定屬性的效果。例如，color屬性可以使用以下值：

具體的顏色值，例如red、blue等。
十六進制顏色值，例如#FF0000、#0000FF等。
RGB顏色值，例如rgb(255, 0, 0)、rgb(0, 0, 255)等。
在HTML中使用CSS

可以使用<style>元素在HTML文檔中嵌入CSS樣式。以下是一個示例：

php
Copy code
<!DOCTYPE html>
<html>
<head>
Copy code
<title>My Webpage</title>
<style>
    p {
        color: red;
        font-size: 16px;
    }
</style>
</head>
<body>
    <p>This is a paragraph.</p>
</body>
</html>
```
在上面的示例中，<style>元素包含CSS樣式，將樣式應用到所有段落元素。注意，CSS樣式必須包含在<style>元素中，並且必須位於HTML文檔的<head>元素中。

另外，也可以使用<link>元素將CSS文件連接到HTML文檔中。以下是一個示例：

php
Copy code
<!DOCTYPE html>
<html>
<head>
    <title>My Webpage</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <p>This is a paragraph.</p>
</body>
</html>
在上面的示例中，<link>元素通過href屬性指定要連接的CSS文件，rel屬性指定連接的文件類型為樣式表。注意，CSS文件必須包含在<head>元素中，並且必須使用正確的文件路徑。

透過這些方法，CSS樣式可以輕鬆地應用於HTML文檔中的各個元素，從而創建出精美的網頁。
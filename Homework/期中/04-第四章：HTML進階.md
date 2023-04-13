HTML表單
HTML表單提供了一種方便的方式，讓用戶可以輸入和提交數據。表單由<form>元素定義，通常包含多個<input>元素，用戶可以在這些元素中輸入數據。

以下是一個簡單的表單示例：

html
Copy code
<form>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name"><br>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email"><br>

    <input type="submit" value="Submit">
</form>
在上面的示例中，<form>元素定義了一個表單，包含兩個<input>元素，一個用於輸入名字，一個用於輸入電子郵件地址。<input>元素的type屬性指定了輸入框的類型，name屬性指定了數據的名稱，id屬性指定了元素的ID，for屬性指定了與該元素關聯的標籤的ID。最後，表單還包含一個提交按鈕，用戶可以單擊此按鈕提交表單數據。

HTML圖像和多媒體
HTML支持在網頁中嵌入圖像和多媒體，例如音頻和視頻。以下是一些常用的HTML圖像和多媒體元素：

<img>：用於嵌入圖像
<audio>：用於嵌入音頻文件
<video>：用於嵌入視頻文件
以下是一個嵌入圖像的示例：

html
Copy code
<img src="image.jpg" alt="A beautiful landscape">
在上面的示例中，<img>元素的src屬性指定了圖像文件的URL，alt屬性指定了當圖像無法顯示時顯示的替代文本。

以下是一個嵌入音頻文件的示例：

html
Copy code
<audio controls>
    <source src="audio.mp3" type="audio/mp3">
    <source src="audio.ogg" type="audio/ogg">
    Your browser does not support the audio element.
</audio>
在上面的示例中，<audio>元素包含多個<source>子元素，每個<source>元素指定了不同格式的音頻文件和對應的MIME類型。如果瀏覽器無法播放任何一種格式的音頻文件，則顯示替代文本。
HTML鏈接
HTML鏈接用於在網頁之間創建超鏈接，讓用戶可以單擊鏈接跳轉到其他網頁或同一網頁的不同部分。以下是一些常用的HTML鏈接元素：

<a>：用於創建超鏈接
<link>：用於在HTML文檔中引入外部資源，例如CSS樣式表
以下是一個創建超鏈接的示例：

html
Copy code
<a href="https://www.example.com/">Visit Example</a>
在上面的示例中，<a>元素的href屬性指定了目標網址，用戶單擊鏈接後將跳轉到該網址。

以下是一個在HTML文檔中引入CSS樣式表的示例：

html
Copy code
<link rel="stylesheet" href="style.css">
在上面的示例中，<link>元素的rel屬性指定了資源的關係，href屬性指定了CSS樣式表文件的URL。
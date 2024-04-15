Day 18: Tổng quan playwright
1. Playwright là gì?
- Có 2 loại protocol phục vụ automation test:
+ Web driver protocol: Selenium - cấu trúc gồm 3 thành phần : code của mình (client ) - thằng đứng giữa browser driver nhận request từ code của mình  - browser (server)
--> Thằng đứng giữa mới control browser
+ Dev protocol: Code của mình load trực tiếp lên browser và tương tác trực tiếp với các element của browser
2. Install
- Install nodejs simple project: go to folder and type  'npm init -y'
- Open visual studio then install @playwright/test:
    + npm: npm i @playwright/test@1.42.1
    + yarn: yarn add @playwright/test@1.42.1
- package-lock.json: dựa vào file này để lần sau biết lấy các phần cần cài đặt ở đâu và lên đấy lấy lại
3. Git
 - khi chót push 1 folder mình không mong muốn lên github mà folder này cần ở local nhưng ko cần ở trên repo--> cần delete trên git nhưng keep ở local.
    + Add folder name vào .gitignore
    + Đánh câu lệnh ở terminal local: git rm --cached -r folder_name  (-r: dùng cho folder)
    + git add .
    + git commit - m "git add"
    + git push
- Đang ở main branch, quên tạo branch để viết source code mà lại code ở trên main:
    + git branch: để biết mình đang ở branch nào
    + git branch -a : hiển thị hết các branch
    + git checkout -b branch_name: tạo branch mới
- Branch chỉ có ở repo, ko có ở local >> cần lấy branch về local
    + git fetch
    + git checkout branch_name
4. Cách đọc tài liệu
 - Doc: Lí thuyết cách set up
 - API: Từng phương thức tương tác ví dụ m
5. How to run test
 - in package.json, đánh playwright test
 - gõ npm run test:  Vào trong package.json tìm test > vào node_modules > .bin > tìm playwright
6. Fixtures (ở Doc) - là cách dùng
- Là cách mình functional programming viết lại các phương thức để cho nơi khác có thể dùng lại được
- Có thể gọi trực tiếp fixtures
7. UI mode, add thêm ở package.json - "ui": "playwright test --ui"
- Để chạy test ở UI mode, gõ 'yarn ui'
- Dùng khi debug hoặc presentation
8. Trace viewer (ở DOC)
9. Retries - add ở playwright.config.js
retries: process.env.CI? 2 : 0, --> fail ở CI thì run lại 2 lần, fail ở local thì ko run lại
use

DAY 19: Playwright - Locator
1. page.locator Vs page.$
--> Không khuyến khích dùng page.$
.$(selector) : fit với 1 element
.$$(selector): fit với nhiều element
2. Link text

3. CÁch lấy locator có 2 nhóm chính
- truyền thống: css and xpath
- playwright support: by role, label, placeholder...

4. CSS và XPATH
- Css: Nếu class có nhiều khoảng trắng thì xoá khoảng trắng và thêm 1 dấu .
example:

5.wait
- 30s là thời gian mặc định để tìm kiếm element và thời gian tối đa của 1 test
--> Nếu không setup thì nó sẽ mặc định lấy giá trị này
- implicitWait: Làm sao để setup thời gian mặc định cho all tests, add ở playwright.config.js 
--> use: {
    actionTimeout: 5*1000, //5s
}
- ExplicitWait: set thời gian chờ cụ thể cho 1 element
--> page.waitForSelector('locator', {timeout: 10000})

6. data-testid
- một cái buildin mà playwright support page.getByTestId('directions').click();

7. locate by role
 - Có 1 list các role mà playwright support such as heading, checkbox, button...

 8. filter
 - Là sự kết hợp locator bình thường và filter, filter có 4 loại has, hasNot, hasNotTexxt, hasText

 9. method scrollIntoViewIfNeeded()- scroll element into view
- Nếu không hiển thị ở View port thì mới scroll

 10. Multiple matching
 - Nếu có nhiều locator matching mà mình ko dùng filter được - ko có cách nào khác thì mình dùng .elementHandles() sau đó dùng index để tương tác
 ex: const footerLinkEles =  await page.locator('a').elementHandles(); // trả và 1 mảng các element
 await footerLinkEles[10].click();

11. input data
- call clear() trước khi input - .fill('text')
- innerText(): chỉ return về các visible text
- textContent(): return all text - hidden and visible

12. gettexxt

13. Cách viết test
- Tên test không được trùng


# Prompt: Tạo Landing Page SafeNet

## Mô tả tổng quan

Tạo một landing page hoàn chỉnh cho website **SafeNet** — nền tảng phòng chống lừa đảo trực tuyến dành cho sinh viên ULIS (Trường Đại học Ngoại ngữ - ĐHQGHN). Giao diện sử dụng màu chủ đạo xanh dương đậm (`#1a3c7e`) và xanh dương sáng (`#2d8fe0`), kết hợp vàng cam (`#f5a623`) làm màu nhấn. Ngôn ngữ hiển thị: **Tiếng Việt**.

---

## Yêu cầu kỹ thuật

- **Ngôn ngữ**: HTML + CSS + JavaScript thuần (single file)
- **Font chữ**: Sử dụng Google Fonts — `Be Vietnam Pro` cho toàn bộ văn bản
- **Responsive**: Tương thích desktop và mobile
- **Hiệu ứng**: Hover effects trên các card và nút bấm; animation nhẹ khi load trang

---

## Cấu trúc trang (từ trên xuống dưới)

### 1. HEADER / NAVIGATION BAR

- **Logo** (góc trái): Icon khiên bảo vệ màu xanh + tên "**SafeNet**" in đậm + tagline nhỏ bên dưới: *"Website phòng chống lừa đảo trực tuyến cho sinh viên ULIS"*
- **Menu điều hướng** (giữa/phải): 4 mục: `Trang chủ` | `Cẩm nang an toàn` | `Cảnh báo lừa đảo` | `Đăng ký`
- **Nút CTA** (góc phải): Nút `Đăng ký` nền cam/vàng (`#f5a623`), chữ trắng, bo góc
- Background header: trắng hoặc xanh nhạt, có đường kẻ phân cách nhẹ

---

### 2. HERO SECTION (Banner chính)

- **Background**: Gradient xanh đậm sang xanh sáng (góc trái đến phải), có thể thêm các hình tròn mờ trang trí
- **Bên trái** — Nội dung văn bản:
  - Tiêu đề lớn (H1):
    ```
    BẢO VỆ SINH VIÊN
    THOÁT KHỎI CẠM BẪY
    LỪA ĐẢO TRỰC TUYẾN
    ```
    - Dòng 1: chữ trắng, in đậm
    - Dòng 2–3: chữ **vàng cam** (`#f5a623`), in đậm, cỡ lớn
  - Đoạn mô tả nhỏ (màu trắng/xám nhạt):
    > *"Trang web cung cấp thông tin và hỗ trợ sinh viên ULIS phòng tránh các hình thức lừa đảo online."*
  - **Thanh tìm kiếm**: Input trắng, placeholder *"Tìm kiếm..."*, nút kính lúp bên phải. Phía dưới có badge: `1.245 sinh viên đã được SafeNet bảo vệ`
- **Bên phải** — Minh họa:
  - Hình ảnh/illustration một sinh viên nam mặc hoodie xanh, cầm điện thoại, đứng trước màn hình với icon khiên và giao diện ứng dụng
  - Có các badge nhỏ nổi: icon cảnh báo màu vàng, icon mạng xã hội

---

### 3. FEATURE CARDS — 3 thẻ tính năng chính

Layout: 3 cột ngang, nền trắng, có viền nhẹ và shadow

| Card 1 | Card 2 | Card 3 |
|--------|--------|--------|
| 🔍 **Tra cứu & cảnh báo** | 🛡️ **Hướng dẫn phòng tránh** | 📢 **Chia sẻ & báo cáo** |
| Tra cứu số c hoặc hướng dẫn xử lý khi gặp tình huống lừa đảo | Thư viện Chủ đề phòng chữ đa phần, hiệu quả nhất được cập nhật liên tục | Cần đăng sớm chữ hàn thiệu, giúp tạo động lực và kêu gọi cộng đồng ứng phó |
| *Săn không kiếm đảo nhân điện lừa đảo được* | *Lộc công sẽ điền hàng sẽp biến lừm hàng* | *Tin hàng tanh thiêu đưa kết các nạp...* |

- Mỗi card có icon màu xanh ở góc trái, tiêu đề in đậm, mô tả nhỏ, và một dòng text màu xanh nhạt phía dưới (link hoặc highlight)

---

### 4. SECTION: "NHỮNG THỦ ĐOẠN LỪA ĐẢO PHỔ BIẾN"

- **Bên trái** (2/3 chiều rộng):
  - Tiêu đề section: `NHỮNG THỦ ĐOẠN LỪA ĐẢO PHỔ BIẾN` — in đậm, chữ đen/xanh đậm
  - 3 card dạng lưới (3 cột):

    **Card 1 — Việc nhẹ lương cao**
    - Hình minh họa (người dùng máy tính)
    - Tiêu đề in đậm
    - Bullet points:
      - Vào common phổ giờ tả
      - Được mào shop tác cao sát
      - Hồng phiên mời công Sam
    - Nút `Chi tiết ▶` màu xanh

    **Card 2 — Lừa cọc thuê trọ**
    - Hình minh họa (ngôi nhà, bản đồ)
    - Bullet points:
      - Gưm văn biên vào đảo
      - Bhin liên đảo cọ tài hàng
      - Hà hoàn tiên sostu bam
    - Nút `Chi tiết ▶`

    **Card 3 — Giả danh công an**
    - Hình minh họa (người mặc đồng phục)
    - Bullet points:
      - Cảnh nhóc, giờ đoàn tkea
      - Hà6m khon6h cao met tiena
      - Sử 5hoong mơro 4optmei kết
    - Nút `Chi tiết ▶`

- **Bên phải** (1/3 chiều rộng) — **Panel "CẢNH BÁO MỚI NHẤT"**:
  - Nền xanh đậm (`#1a3c7e`), chữ trắng
  - Tiêu đề: `🔔 CẢNH BÁO MỚI NHẤT`
  - Danh sách 3 item cảnh báo, mỗi item gồm:
    - Icon màu (đỏ/cam/xanh)
    - Tên cảnh báo ngắn (in đậm)
    - Mô tả 1 dòng nhỏ màu xám nhạt
    - Badge thời gian (vd: `30 phút trước`)
  - Ví dụ items:
    1. 🔴 *Tuyển dụng việc nhẹ lương cao mác cảnh Công ty X* — `30 phút trước`
    2. 🟡 *Cẩn trọng lừa cọc phòng trọ giả sẽ Tran Minh* — `30 phút trước`
    3. 🔵 *Sử dụng Deepfake giả danh sụng an lợ xuyển tiền* — `30 phút trước`
  - Nút `Gặt thêm ngay ▶` màu cam, full width, cuối panel

---

### 5. SECTION: "CẨM NANG PHÒNG CHỐNG LỬA ĐẢO"

- **Bên trái** (2/3 chiều rộng):
  - Tiêu đề: `CẨM NANG PHÒNG CHỐNG LỪA ĐẢO` in đậm, kèm icon sách/đèn
  - 2 card nhỏ ngang:
    - **Q Nhận diện lừa đảo**: Icon Q màu cam, mô tả ngắn về nhận diện các dấu hiệu
    - **A Bảo mật & an toàn**: Icon A màu xanh, mô tả ngắn về bảo mật tài khoản
  - Hình minh họa khiên vàng với bóng đèn (nền xanh, trang trí)
  - Nút `👊 Xem thêm cẩm nang ⇒` — nền vàng cam, chữ trắng

  ---
  **Banner vàng** phía dưới (full width bên trái):
  - Icon `⚠️` xanh đậm
  - Tiêu đề: `Phát hiện CHIA SẺ & BÁO CÁO`
  - Subtitle: `Lừa đảo số điện thoại hay tài khoản ngân hàng?`
  - Mô tả: *Cảm báo ngay để bảo vệ cộng đồng sinh viên*

  ---
  **Card review/testimonial** cuối:
  - Avatar tròn (hình người dùng "Thanh Mai")
  - Tên: **Thanh Mai** · *Tham Ai, ULIS*
  - Nội dung: *"Nhờ SafeNet minh đã phát hiện và tránh được lừa đảo việc làm..."*
  - 5 dấu chấm tròn màu xanh (rating/dots)

- **Bên phải** (1/3 chiều rộng):
  - **Panel "LỪA ĐẢO MỚI NHẤT"** — nền trắng, có viền nhẹ:
    - Tiêu đề: `🔔 Lừa đảo mới nhất`
    - 1 item nổi bật: *"Lừa đả điện thoại hay tài khoản ngân hàng?"*
    - `Làm thêm / công tác thời tài khoản của việc` — mô tả nhỏ, có badge thời gian
    - 2 input fields:
      - Input 1: placeholder `Tên điện ngân hàng / dịch vụ`
      - Input 2: placeholder `Ghi đặc ngân hàng tự`
    - Text nhỏ: *Phong bị cảnh khoái / đến khoom văn cơm men*
    - Nút `Gặt cảnh báo ▶` màu xanh đậm

  ---
  **Panel "KẾT NỐI VỚI SAFENET"** — cuối cột phải:
  - Tiêu đề: `KẾT NỐI VỚI SAFENET`
  - Lưới 2x2 các link:
    - CẢM NHẬ · CẢNH BÁO · HỖ TRỢ · LỘN KẾT
  - 2 cột:
    - Cột 1: *Phòng cần tả báo* / *Thư sản thống tri* / *đặc báo*
    - Cột 2: *She abl0tlong thong* / *Yaggo* / *lành cảnh*
  - Icon mạng xã hội: Facebook · Instagram · TikTok (màu xanh)

---

### 6. FOOTER

- Nền xanh đậm hoặc xám tối
- Tên: **SafeNet** · Logo khiên
- Các cột link: Trang chủ, Cẩm nang, Cảnh báo, Liên hệ
- Copyright: `© 2024 SafeNet ULIS. All rights reserved.`
- Icon mạng xã hội cuối trang

---

## Bảng màu & Design Tokens

```css
--primary:       #1a3c7e;   /* Xanh đậm chính */
--primary-light: #2d8fe0;   /* Xanh sáng */
--accent:        #f5a623;   /* Vàng cam nhấn */
--accent-dark:   #e09400;   /* Vàng cam đậm hơn (hover) */
--bg-light:      #f0f6ff;   /* Nền xanh cực nhạt */
--text-dark:     #1a1a2e;   /* Chữ tối */
--text-gray:     #6b7280;   /* Chữ phụ */
--white:         #ffffff;
--card-shadow:   0 4px 16px rgba(26,60,126,0.10);
```

---

## Chi tiết UI Components

### Nút bấm (Buttons)
- **Primary**: nền `#2d8fe0`, chữ trắng, bo góc 8px, padding 12px 24px
- **Accent/CTA**: nền `#f5a623`, chữ trắng, bo góc 8px
- **Outline**: viền xanh, chữ xanh, nền trắng
- Hover: tối màu 10%, thêm shadow nhẹ, scale(1.02)

### Cards
- Nền trắng, bo góc 12px, shadow nhẹ
- Hover: shadow tăng lên, translateY(-4px)
- Padding: 20–24px

### Badge / Label
- Bo tròn (border-radius: 999px)
- Màu nền nhạt (xanh nhạt, cam nhạt), chữ đậm tương ứng

---

## Hiệu ứng & Animation

- **Fade-in + slide-up** khi trang load: các section lần lượt hiện ra (dùng `@keyframes` + `animation-delay`)
- **Hero section**: gradient animated nhẹ (background-position shift)
- **Cards**: hover lift (`transform: translateY(-4px)`)
- **Nút**: hover scale + color darken
- **Số thống kê** (1.245 sinh viên): counter animation từ 0 lên số thực khi vào viewport
- **Thanh tìm kiếm**: focus glow màu xanh

---

## Lưu ý về nội dung

> Một số đoạn text trong ảnh gốc bị mờ hoặc không rõ — hãy thay thế bằng nội dung tiếng Việt phù hợp, logic với chủ đề phòng chống lừa đảo sinh viên. Đảm bảo tất cả text đều có nghĩa và nhất quán về chủ đề.

**Slogan gợi ý cho các section**:
- Hero: *"Trang bị kiến thức, bảo vệ bản thân trước các chiêu trò lừa đảo trực tuyến"*
- Cẩm nang: *"Học cách nhận biết và tự bảo vệ mình khỏi các hình thức lừa đảo phổ biến"*
- Cảnh báo: *"Cập nhật các thủ đoạn lừa đảo mới nhất đang nhắm vào sinh viên"*

---

## Deliverable

Xuất ra **1 file HTML duy nhất** (all-in-one: HTML + CSS + JS inline), có thể mở trực tiếp trên trình duyệt mà không cần server hay thư viện ngoài (chỉ dùng Google Fonts CDN).

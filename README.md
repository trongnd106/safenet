# SafeNet — Landing page

Trang landing tĩnh cho **SafeNet** (phòng chống lừa đảo trực tuyến, sinh viên ULIS). Gồm `index.html`, `styles.css`, `script.js` và thư mục tài nguyên `public/`.

## Yêu cầu

- Trình duyệt hiện đại (Chrome, Firefox, Safari, Edge).
- **Không cần** Node/npm để chỉ xem trang — có thể mở file HTML hoặc dùng server HTTP cục bộ.

## Chạy nhanh (khuyến nghị: server cục bộ)

Chạy server trong **thư mục chứa `index.html`** (thư mục gốc project):

```bash
cd /đường/dẫn/tới/landing-page
python3 -m http.server 8080
```

Sau đó mở trình duyệt:

- [http://127.0.0.1:8080/](http://127.0.0.1:8080/) hoặc [http://localhost:8080/](http://localhost:8080/)

Cách khác (nếu đã có công cụ tương đương):

```bash
npx --yes serve -l 8080
```

### Vì sao nên dùng server HTTP?

- Một số trình duyệt/chính sách bảo mật có thể hạn chế tải media khi mở trực tiếp bằng `file://`.
- Font Google và video (`public/videos/`) hoạt động ổn định hơn qua HTTP.

## Mở trực tiếp file HTML

1. Double-click `index.html` hoặc kéo thả vào trình duyệt.

2. Đường dẫn tài nguyên dùng dạng tương đối (`public/images/...`, `public/videos/...`) — đảm bảo **không đổi vị trí** file HTML so với thư mục `public/`.

## Ghi chú video

- Trang ưu tiên **`public/videos/pov.mp4`** (H.264 — tương thích tốt).
- File **`pov.mov`** chỉ là nguồn dự phòng; nhiều trình duyệt không phát HEVC trong `<video>`.

## Tùy chỉnh port

Nếu cổng `8080` đang bận, đổi số cuối lệnh `python3 -m http.server` (ví dụ `8000`).

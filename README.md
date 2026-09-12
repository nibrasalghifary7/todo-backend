# Todo App Backend - Express.js & TypeScript

Aplikasi RESTful API untuk pengelolaan tugas (Todo) menggunakan Express.js, TypeScript, MySQL, dan Autentikasi JWT.

## Prasyarat
- Node.js (v18+)
- MySQL / XAMPP

## Langkah Instalasi & Setup

1. **Clone Repository**
   ```bash
   git clone [https://github.com/USERNAME_GITHUB/todo-backend.git](https://github.com/USERNAME_GITHUB/todo-backend.git)
   cd todo-backend
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Konfigurasi Environment**
   Salin file `.env.example` menjadi `.env` lalu sesuaikan kredensial database Anda:
   ```bash
   cp .env.example .env
   ```

4. **Import Database**
   - Buka MySQL / phpMyAdmin.
   - Buat database bernama `todo_db`.
   - Import skema dan data tabel `users` serta `todos`.

5. **Jalankan Server**
   ```bash
   npm run dev
   ```
   Server akan berjalan pada `http://localhost:5000`.

## Daftar Endpoint API

- `POST /api/auth/register` - Mendaftarkan pengguna baru (Validator Middleware)
- `POST /api/auth/login` - Login pengguna & mendapatkan token JWT (Validator Middleware)
- `GET /api/todos` - Mengambil daftar Todo milik user yang sedang login (Auth Middleware)
- `POST /api/todos` - Menambahkan Todo baru (Auth & Validator Middleware)
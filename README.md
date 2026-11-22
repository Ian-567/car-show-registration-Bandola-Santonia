# Car Show Registration System

Registration system for **Car Show 2027** (AutoVista Events, Sorsogon City Coliseum).
Course: Integrative Programming 2 (CCDI Sorsogon) | Deadline: November 25, 2026

## Team

| MEMBER                | ROLE               |
| --------------------- | ------------------ |
| Justine Jake Santonia | Backend Developer  |
| Ian Bandola           | Frontend Developer |

## Project layout

```
car-show-registration/
├── backend/      C# .NET 10 Vertical Slice API (Domain, Application, Infrastructure, Api)
├── frontend/     React (Vite) dashboard
├── docs/
│   └── screenshots/
└── README.md
```

## Run the backend

Requires the .NET 10 SDK and the EF Core tool (`dotnet tool install --global dotnet-ef`).

```bash
cd backend
dotnet run --project Api --launch-profile http
```

- API: http://localhost:5205
- Scalar UI: http://localhost:5205/scalar/v1
- Test requests: `backend/Api/Api.http`
- The first run applies the migration, creates `carshow.db` and seeds 25 registrations.

## Run the frontend

```bash
cd frontend
npm install
npm run dev     # http://localhost:5173
```

## API endpoints

| Method | Endpoint                                                               | Success | Errors   |
| ------ | ---------------------------------------------------------------------- | ------- | -------- |
| POST   | `/api/registrations`                                                   | 201     | 400, 409 |
| GET    | `/api/registrations?participantName=&type=&status=&page=1&pageSize=10` | 200     | 400      |
| GET    | `/api/registrations/{id}`                                              | 200     | 404      |
| GET    | `/api/registrations/summary`                                           | 200     | —        |

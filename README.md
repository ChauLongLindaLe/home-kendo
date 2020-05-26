This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/zeit/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Note that we have not added a proper database yet. For persistent storage you can run the following:

```bash
mkdir tmp
STORAGE_FILE=tmp/data npm run dev
```
This will now store your training sessions in a local file, and will persist until you delete the file.

## API endpoints
| `GET /api/training-sessions`       | Fetch all the training sessions (eventually this will be for the current signed in user) |
| `POST /api/training-sessions`      | Create a new training session                                                            |
| `GET /api/training-sessions/:id    | Fetch a specific training session using its id                                           |
| `PATCH /api/training-sessions/:id  | Update training session using its id                                                     |
| `DELETE /api/training-sessions/:id | Delete training session using its id                                                     |

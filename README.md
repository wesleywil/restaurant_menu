# HolyFork - Restaurant Menu

The restaurant menu project is a digital platform that enables clients to view the available products and allows the admin to manage the menu by adding, modifying, or removing items. It provides a user-friendly interface for customers to browse the menu and make informed choices. The admin has complete control over the menu, ensuring it stays up to date with the latest offerings and meets the changing needs of the restaurant.

## Run Locally

Clone the project

```bash
  git clone https://github.com/wesleywil/restaurant_menu
```

### Frontend

Install dependencies

```bash
  npm install
```

Add ENV variables

```bash
  DATABASE_URL
  NEXTAUTH_SECRET
  USER_PASSWORD
```

Execute the Prisma commands

```bash
   npx prisma generate
   npx prisma migrate dev
   npx prisma db seed
```

Start the server

```bash
  npm run dev
```

## Tech Stack

**Client:** NextJS, Typescript, ReactJs, Redux, Axios, and TailwindCSS, React-Icons

**Server:** NextJS, Bcrypt, Next-Auth, Prisma, MySQL

## Authors

- [Wesley Wilson](https://github.com/wesleywil)

# POC for a hotel reservation system

This is project is bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

### Step 1:

First, run the development server:

```bash
npm run dev
```

- Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Step 2:

Run the JSON server

```bash
npm run server
```

- This is the Backend for this application and you must run this
- A Fake Backend for Reservations is created at http://localhost:8000/reservations to serve requests for Crud functions
- reservations.json gets updated or created using this JSON server.

### Step 3:

- This application allows you to create, update and delete the information about the reservation POC.
- Feel free to navigate through the app and you may also find the Add, Update and Delete buttons in the Data table.

## For JEST Testing

```bash
npm test
```

- This command will help you do component testing using Jest.
- Open seperate terminal and run the command.

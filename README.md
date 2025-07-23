This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

To build and start the docker service run:  

```bash
docker build -t reto-winter-2025-ithaka-front .
```  
and then:  
```
docker run -p 3000:3000 reto-winter-2025-ithaka-front
```
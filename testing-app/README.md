#  Demo

## Getting Started


To build and start the docker service run:  

```bash
docker build -t testing-app .      
```  
and then:  
```
docker run -p 3000:3000 testing-app
```
Then open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

If you see that your change aren´t appearing in the website try running the development server:

```
npm install next
```
```
npm run dev

Then open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

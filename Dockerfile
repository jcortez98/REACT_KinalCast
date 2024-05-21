# Dockerfile
FROM node:20

WORKDIR /REACT_KINALCAST_2024
COPY package.json package-lock.json ./
RUN npm install
COPY . .

EXPOSE 8000 

CMD ["npm", "run", "dev"]

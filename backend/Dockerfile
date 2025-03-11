FROM node:22
WORKDIR /app
COPY package*.json ./
RUN npm install --build-from-source sqlite3
COPY index.js ./
EXPOSE 3001
CMD ["node", "index.js"]
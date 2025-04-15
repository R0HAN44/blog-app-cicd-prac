FROM node:20 AS builder
# Set the working directory
WORKDIR /app
# Copy package.json and package-lock.json
COPY package*.json ./
# Install dependencies
RUN npm install
# Copy the rest of the application code
COPY . .

RUN npm run build

# Production stage
FROM node:20
# Set the working directory
WORKDIR /app
RUN npm install -g serve
# Copy only the necessary files from the builder stage
COPY --from=builder /app/build ./dist

EXPOSE 3001

CMD ["serve", "-s", "dist", "-l", "3001"]
FROM node:20 AS builder
# Set the working directory
WORKDIR /app
# Copy package.json and package-lock.json
COPY package*.json ./
# Install dependencies
RUN npm install
# Copy the rest of the application code
COPY . .
RUN npx prisma generate

RUN npm run build

# Prodcution stage

FROM node:20

# Set the working directory
WORKDIR /app
# Copy only the necessary files from the builder stage
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/.env .env

# Expose the port the app runs on
EXPOSE 3000
# Start the application
CMD ["node", "dist/index.js"]
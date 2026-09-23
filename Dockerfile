# ---------- Build stage ----------
FROM node:20-alpine AS builder
WORKDIR /usr/src/app

# Install deps first (better layer caching)
COPY package*.json ./
RUN npm ci

# Copy source and build
COPY . .
RUN npm run build

# ---------- Production stage ----------
FROM node:20-alpine AS production
WORKDIR /usr/src/app

ENV NODE_ENV=production

# Only production deps in the final image
COPY package*.json ./
RUN npm ci --omit=dev && npm cache clean --force

# Bring in the compiled output only
COPY --from=builder /usr/src/app/dist ./dist

# node:alpine images already include a non-root 'node' user
USER node

EXPOSE 1660

CMD ["node", "dist/main.js"]
# First we build for prod VVV
FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json* ./
RUN npm ci

# Build app
COPY . .
RUN npm run build

# Create NextJS Server with built app
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/next.config.ts ./next.config.ts
# COPY --from=builder /app/tailwind.config.js ./tailwind.config.js
COPY --from=builder /app/postcss.config.mjs ./postcss.config.mjs

EXPOSE 3000

ENTRYPOINT ["npm", "run", "start"]

# Install dependencies only when needed
FROM node:17.8-alpine3.15 AS deps

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci --ignore-scripts

# Rebuild the source code only when needed
FROM node:17.8-alpine3.15 AS builder
WORKDIR /app

COPY . .
COPY --from=deps /app/node_modules ./node_modules

RUN npm run build && npm ci --only=production --ignore-scripts

# Production image, copy all the files and run server
FROM node:17.8-alpine3.15 AS runner

RUN apk --no-cache add dumb-init

WORKDIR /app

USER node 

COPY --chown=node:node --from=builder /app/node_modules ./node_modules
COPY --chown=node:node --from=builder /app/package.json ./package.json
COPY --chown=node:node --from=builder /app/build ./
COPY --chown=node:node ./schema.graphql ./schema.graphql

# ENV NODE_ENV production

ENV APOLLO_KEY=service:llamas:TH2iXdTsn2oICUPSlBIi7A
ENV APOLLO_GRAPH_REF=llamas@current

EXPOSE 4000

ENTRYPOINT ["dumb-init", "--"]
CMD ["npm", "start"]
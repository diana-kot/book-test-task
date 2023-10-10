FROM node:lts as dependencies
WORKDIR ./
COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile

FROM node:16-alpine as builder
WORKDIR ./
COPY . .
COPY --from=dependencies ./node_modules ./node_modules
RUN npm run build

FROM node:lts as runner
WORKDIR ./
ENV NODE_ENV production

COPY --from=builder ./src ./src
COPY --from=builder ./.env ./.env
COPY --from=builder ./public ./public
COPY --from=builder ./package.json ./package.json
COPY --from=builder ./tsconfig.json ./tsconfig.json
COPY --from=builder ./node_modules ./node_modules

EXPOSE 3000
CMD ["npm", "start"]
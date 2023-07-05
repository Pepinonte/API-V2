import { App } from "./app";

async function main() {
  const app = new App();
  await app.listen();
}

main().catch((err) => {
  console.error(err);
});

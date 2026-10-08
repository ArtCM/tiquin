import { cacheLife } from "next/cache";

// Com cacheComponents, `new Date()` precisa estar dentro de um escopo cacheado.
export async function CurrentYear() {
  "use cache";
  cacheLife("days");
  return <>{new Date().getFullYear()}</>;
}

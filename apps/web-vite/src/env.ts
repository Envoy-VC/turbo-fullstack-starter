import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
  client: {
    VITE_CLERK_PUBLISHABLE_KEY: z.string().min(1),
  },
  clientPrefix: "VITE_",
  emptyStringAsUndefined: true,
  runtimeEnv: import.meta.env,
  server: {
    PORT: z.coerce.number().min(1).max(65535).default(3000),
  },
});

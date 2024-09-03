import OpenAI from "openai";
import { OPENAPI_KEYS } from "./openapiKeys";

const openai = new OpenAI({
  apiKey: OPENAPI_KEYS,
  dangerouslyAllowBrowser: true,
});

export default openai;

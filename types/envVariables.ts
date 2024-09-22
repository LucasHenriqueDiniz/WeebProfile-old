interface ENV_VARIABLES_TYPE {
  // variable: string;
  required?: boolean;
  type?: "string" | "boolean" | "number" | "stringArray";
  defaultValue?: string;
  description?: string;
}

export default ENV_VARIABLES_TYPE;

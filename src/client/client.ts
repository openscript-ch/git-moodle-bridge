export type Client = {
  api: string;
  token: string;
};

export type GetClient = {
  functionName: string;
} & Client;

export type PostClient = {
  body: Record<string, unknown>;
} & GetClient;

export function createQueryParams(
  token: string,
  functionName: string,
  format = "json",
) {
  return new URLSearchParams({
    "wstoken": token,
    "wsfunction": functionName,
    "moodlewsrestformat": format,
  });
}

function getTarget(
  props: GetClient,
  additionalQueryParams?: Record<string, string>,
) {
  const target = new URL(props.api);
  const queryParams = createQueryParams(props.token, props.functionName);
  if (additionalQueryParams) {
    Object.entries(additionalQueryParams).forEach(([key, value]) =>
      queryParams.append(key, value)
    );
  }
  target.search = queryParams.toString();
  return target;
}

export async function getMoodle<ReturnType>(
  props: GetClient,
  additionalQueryParams?: Record<string, string>,
) {
  const response = await fetch(getTarget(props, additionalQueryParams));
  return await response.json() as ReturnType;
}

export async function postMoodle<ReturnType>(
  props: PostClient,
  additionalQueryParams?: Record<string, string>,
) {
  const response = await fetch(getTarget(props, additionalQueryParams), {
    method: "POST",
    body: JSON.stringify(props.body),
  });
  return await response.json() as ReturnType;
}

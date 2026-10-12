const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");

export function publicAsset(path: string) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalized}`;
}

export function mediaAsset(path: string) {
  return publicAsset(path.replace(/\.jpe?g$/i, ".webp"));
}

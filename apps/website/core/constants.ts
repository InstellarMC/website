/**
 * Verify if the current environment is a development environment
 */
export const IS_DEV_ENV = process.env.NODE_ENV === "development";

/**
 * The full canonical URL of the website
 *
 * This variable can come from an environment variable, otherwise
 * it will fallback to localhost for development purposes.
 */
export const BASE_URL =
	process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

/**
 * Supports a manual override of the base path of the website
 *
 * This is useful when the website is served from a subdirectory
 * of a domain, such as when using GitHub Pages.
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

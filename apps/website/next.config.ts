import type { NextConfig } from "next";

export default {
	// Disables redirects with trailing slashes
	skipTrailingSlashRedirect: true,
	// Opts out of the `X-Powered-By` header
	poweredByHeader: false,
	// Next.js already enables React Strict Mode by default but we can be explicit here
	reactStrictMode: true,
	// Automatically memoizes components reducing re-renders
	reactCompiler: true,
	// We don't want to run Type Checking on Production builds
	// as we use a separate process for that (e.g. on the CI within each PR)
	typescript: {
		ignoreBuildErrors: true,
	},
	// Enable statically typed links
	typedRoutes: true,
	// Logs full URLs for fetch requests in the server console
	logging: {
		fetches: {
			fullUrl: true,
		},
	},
	experimental: {
		// Ensure that server-side code is also minified
		serverMinification: true,
		optimizeServerReact: true,
		// Execute parallel tracing of server builds
		parallelServerBuildTraces: true,
		// Execute parallel server compilation
		parallelServerCompiles: true,
		// Enables the use of the "use cache" directive.
		useCache: true,
		// Enable new caching and pre-rendering behavior
		cacheComponents: true,
		// Activate new client-side router improvements
		clientSegmentCache: "client-only",
		// Enables fs caching in development, storing compiler artifacts
		turbopackFileSystemCacheForDev: true,
		// Use the blazing fast Rust-based CSS processor
		useLightningcss: true,
	},
} satisfies NextConfig;

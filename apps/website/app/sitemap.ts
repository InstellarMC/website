import type { MetadataRoute } from "next";
import { BASE_PATH, BASE_URL } from "#site/core/constants.ts";

function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: `${BASE_URL}${BASE_PATH}`,
			changeFrequency: "daily",
			priority: 0.7,
		},
	];
}

export default sitemap;

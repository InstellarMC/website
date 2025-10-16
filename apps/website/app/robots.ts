import type { MetadataRoute } from "next";
import { BASE_PATH, BASE_URL } from "#site/core/constants";

function robots(): MetadataRoute.Robots {
	return {
		rules: [
			{
				userAgent: "*",
				allow: "/",
			},
		],
		sitemap: `${BASE_URL}${BASE_PATH}/sitemap.xml`,
	};
}

export default robots;

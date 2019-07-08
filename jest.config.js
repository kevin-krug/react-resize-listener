module.exports = {
	"roots": [
		"<rootDir>/src"
	],
	"transform": {
		"^.+\\.tsx?$": "ts-jest"
	},
	"testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
	"moduleFileExtensions": [
		"ts",
		"tsx",
		"js",
		"jsx",
		"json",
		"node"
	],
	"setupFilesAfterEnv": ["<rootDir>/configs/tasks/jest/setup"],
	"snapshotSerializers": ["enzyme-to-json/serializer"]
};

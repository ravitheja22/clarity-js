// Default configuration
export let config: IConfig = {
  plugins: ["viewport", "layout", "pointer", "performance", "errors"],
  uploadUrl: "",
  delay: 500,
  batchLimit: 100 * 1024, // 100 kilobytes
  totalLimit: 20 * 1024 * 1024,  // 20 megabytes
  showText: false,
  showImages: false,
  timeToYield: 50,
  instrument: false,
  uploadHandler: null,
  debug: false,
  validateConsistency: false,
  waitForTrigger: false
};

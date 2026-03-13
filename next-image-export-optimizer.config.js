module.exports = {
  // Set the image formats to generate (webp is more efficient)
  imageFormats: ['webp'],

  // Quality settings for images (75 is a good balance between quality and file size)
  quality: 75,

  // Generate blur placeholder images for better UX
  generateAndUseBlurImages: true,

  // Number of optimization processes to run in parallel
  maxOptimizationProcesses: 4,
}

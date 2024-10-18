var Exports = {

  get libExports () {
    return bmChunkosaur.Exports
  },

  newBulker(...args) {
    return this.libExports.newBulker(...args)
  },

  newChunker(...args) {
    return this.libExports.newChunker(...args)
  }
}









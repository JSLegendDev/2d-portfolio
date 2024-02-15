export function drawTile(
  c,
  src,
  destinationX,
  destinationY,
  srcX,
  srcY,
  tileWidth,
  tileHeight,
  destinationTileWidth,
  destinationTileHeight,
  scaleFactor
) {
  c.drawImage(
    src,
    destinationX,
    destinationY,
    tileWidth,
    tileHeight,
    srcX * scaleFactor,
    srcY * scaleFactor,
    destinationTileWidth * scaleFactor,
    destinationTileHeight * scaleFactor
  );
}

export function getFramesPos(nbCols, nbRows, tileWidth, tileHeight) {
  const framesPos = [];
  let currentTileX = 0;
  let currentTileY = 0;
  for (let i = 0; i < nbRows; i++) {
    for (let j = 0; j < nbCols; j++) {
      framesPos.push({ x: currentTileX, y: currentTileY });
      currentTileX += tileWidth;
    }
    currentTileX = 0;
    currentTileY += tileHeight;
  }

  return framesPos;
}

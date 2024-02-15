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

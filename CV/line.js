function ajusterLigne() { 
  const timeline = document.querySelector(".timeline");
  const timelineBlocks = document.querySelector(".timeline .timeline-blocks");
  const blocks = document.querySelectorAll(".timeline .block");

  if (!timeline || !timelineBlocks || blocks.length === 0) return;

  const lastBlock = blocks[blocks.length - 1];

  // Top position of the timeline-blocks element (where the line starts)
  const timelineBlocksTop = timelineBlocks.getBoundingClientRect().top + window.scrollY;

  // Font size of the last block (to calculate em units)
  const computedFontSize = parseFloat(getComputedStyle(lastBlock).fontSize);

  // Center of the dot (top: 1.1em + 0.4em radius)
  const pointCenterOffset = 1.5 * computedFontSize;

  // Vertical position of the center of the black dot in the last block
  const lastBlockTop = lastBlock.getBoundingClientRect().top + window.scrollY;
  const lastPoint = lastBlockTop + pointCenterOffset;

  // Calculate the height between the top of timeline-blocks (line start) and the center of the last dot
  let height = lastPoint - timelineBlocksTop;

  // Adjust to compensate for the top: 1.4em offset of the ::before on timeline-blocks
  const timelineBlocksFontSize = parseFloat(getComputedStyle(timelineBlocks).fontSize);
  height -= 1.4 * timelineBlocksFontSize;

  // Apply the height to the CSS variable
  timelineBlocks.style.setProperty('--taille-ligne', `${height}px`);
}

// Automatically call on load and resize
window.addEventListener("load", ajusterLigne);
window.addEventListener("resize", ajusterLigne);

import blocks from './components/Blocks';

const applyConfig = (config) => {
  config.blocks.blocksConfig = {
    ...config.blocks.blocksConfig,
    ...blocks,
  };
  // Check for @kitconcept/volto-blocks-grid
  const gridBlock = config.blocks.blocksConfig.__grid;
  if (gridBlock !== undefined) {
    config.blocks.blocksConfig.__grid.gridAllowedBlocks = [
      ...gridBlock.gridAllowedBlocks,
      'tito',
    ];
  }
  return config;
};

export default applyConfig;

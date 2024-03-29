import { ComponentType, Package, Store } from '../../common/types';

const DefaultTypeOverrides: { [Key: string]: string } = {
  'bbc-morph-sport-media-asset-data': 'data',
};

const getComponentType = (config: Store, packageContents: Package, name: string): number => {
  const typeOverride = DefaultTypeOverrides[name] || config.get(`typeOverrides.${name}`);
  if (typeOverride) {
    switch (typeOverride) {
      case 'data':
        return ComponentType.Data;
      case 'view':
        return ComponentType.View;
      default:
        return ComponentType.Page;
    }
  }

  const packageDependencies = packageContents.dependencies || {};
  if (packageDependencies['bbc-morph-page-assembler']) {
    return ComponentType.Page;
  }
  if (packageDependencies.react) {
    return ComponentType.View;
  }
  return ComponentType.Data;
};

export default getComponentType;

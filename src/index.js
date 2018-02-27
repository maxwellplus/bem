//@flow

const expand = (toExpand: string, prefix: string): string =>
  toExpand.startsWith("&")
    ? toExpand.replace("&", prefix)
    : `${prefix}${toExpand}`;

export default (name: string): any | (string => string) => {
  return (config: any | string) => {
    if (typeof config === "string" || config instanceof String) {
      return expand(config, name);
    }
    if (Array.isArray(config)) {
      return config.map(item => expand(item, name)).join(" ");
    }
    return Object.keys(config)
      .reduce((items, item) => {
        return config[item] ? [...items, expand(item, name)] : items;
      }, [])
      .join(" ");
  };
};

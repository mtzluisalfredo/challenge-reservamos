// Definición de tipos
export type ActionType = string | number;
export type SubTypes = string[];

export function createTypes(
  prefix: ActionType,
  ...args: any
): Record<string, ActionType> {
  return args.reduce((types: { [x: string]: string }, type: any) => {
    const typeString = String(type);
    types[typeString] = prefix + typeString;
    return types;
  }, {} as Record<string, ActionType>);
}

export function asyncAction(
  type: ActionType,
  subTypes: SubTypes = ["REQUEST", "SUCCESS", "FAIL"]
): ActionType[] {
  const subTypesObj: ActionType[] = subTypes.map((t) => `${type}_${t}`);
  return [].concat(subTypesObj as any);
}

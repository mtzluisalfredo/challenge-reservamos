import { MenuItem } from "@/types/menu";
import { v4 as uuidv4 } from 'uuid';

export function hexToRgba(hex: string, opacity: number): string | null {
  hex = hex.replace(/^#/, '');

  if (!/^(?:[0-9a-fA-F]{3}){1,2}$/.test(hex)) {
    return null;
  }

  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  if (opacity < 0) opacity = 0;
  if (opacity > 1) opacity = 1;

  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

export function addUniqueIdAndLinkify(menu: MenuItem[], parentLabel = ''): MenuItem[] {
  let uniqueId = 1;

  const transformLabelToLink = (label: string): string => {
    const cleanedLabel = label.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    return cleanedLabel.replace(/\s/g, "_");
  };

  return menu.map((item) => {
    const id = `${parentLabel}-${uniqueId}`;
    uniqueId++;

    let link = `/${transformLabelToLink(item.label)}`;

    if (parentLabel) {
      link = `${parentLabel}/${transformLabelToLink(item.label)}`;
    }

    const newItem: MenuItem = { ...item, id, link };

    if (item.subItems) {
      newItem.subItems = addUniqueIdAndLinkify(item.subItems, link);
    }

    return newItem;
  });
}




export function keyc(): string {
  return uuidv4();
}
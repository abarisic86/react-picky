import { OptionsType, ComplexOptionType } from 'types';
export declare const isDataObject: (obj: string | number | ComplexOptionType | undefined, valueKey: string | undefined, labelKey: string | undefined) => boolean;
export declare const hasItem: (all: string | number | ComplexOptionType | OptionsType | undefined, item: string | number | ComplexOptionType, valueKey?: string | undefined, labelKey?: string | undefined, returnIndex?: boolean) => number | boolean;
export declare const hasItemIndex: (all: string | number | ComplexOptionType | OptionsType, item: string | number | ComplexOptionType, valueKey?: string | undefined, labelKey?: string | undefined) => number;
export declare const keyExtractor: (item: string | number | ComplexOptionType, valueKey?: string | undefined, labelKey?: string | undefined) => any;
export declare const labelExtractor: (item: string | number | ComplexOptionType, valueKey?: string | undefined, labelKey?: string | undefined) => any;
export declare function sortCollection(array: any[], valueKey?: string): any[];
export declare function arraysEqual(left: any[], right: any[]): boolean;
export declare const asArray: (obj: any) => any[];

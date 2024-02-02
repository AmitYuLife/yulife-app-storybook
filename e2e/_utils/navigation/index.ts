import * as common from "./common"
import * as login from "./login"
import * as scrolling from "./scrolling"
export * from "./common";
/**
 * @IMPORTANT
 * Commenting out for now
 * export * from "./ids";
 * @WHY
 * Excessive nesting of exports resulting in issues with module resolution/circular dependencies
 * Target @ids for the purpose of identifying and working with IDs, rather than relying on @navigation
 * @ids resolve to e2e/_utils/navigation/ids/index.ts and it's already been defined as alias in Babel and tsconfig file
 */


export const navigation = {
    common,
    login,
    scrolling
}

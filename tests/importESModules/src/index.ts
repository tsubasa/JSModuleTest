// OK
import ModuleCJS from 'CJS';
// OK
import ModuleESM from 'ESM';

// Hello CommonJS!
// @ts-ignore
ModuleCJS.default();

// Hello CommonJS!
const dynamicImport = await import('CJS');
// @ts-ignore
dynamicImport.default.default();

// Hello ESModules!
ModuleESM();

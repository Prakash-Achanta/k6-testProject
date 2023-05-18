import { LoadOptions } from './options/LoadOption.js';
import { LoadFunctions } from './MainFunction/LoadFunction.js';

export const options=LoadOptions.regularoptions(10,10);

const url='http://test.k6.io/login'

export default function(){
  const scenario= LoadFunctions.GetMethod(url);
  scenario();
}

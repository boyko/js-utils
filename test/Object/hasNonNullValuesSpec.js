/**
 * Created by amarov on 3/21/17.
 */

/**
 * Babel Starter Kit (https://www.kriasoft.com/babel-starter-kit)
 *
 * Copyright © 2015-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { expect } from 'chai';
import hasNonNullValues from '../../src/Object/hasNonNullValues';

describe('Object:hasNonNullValues', () => {
  it('Should return false if all leaf keys as false/null/undefined', () => {
    const result = hasNonNullValues(
      {
        falseKey: false,
        nullKey: null,
        emptyStringKey: '',
        zeroKey: 0,
      });
    expect(result).to.be.false;
  });
  it('Should return true if at least one key is different from false/null/undefined/0/""', () => {
    const result = hasNonNullValues(
      {
        falseKey: false,
        nullKey: null,
        nonNullKey: 1,
      });
    expect(result).to.be.true;
  });
  it('Should recurse into nested objects', () => {
    const result = hasNonNullValues(
      {
        falseKey: false,
        nullKey: null,
        nonNullObj: {
          falseKey: false,
          nonNullKey: 1,
        },
      });
    expect(result).to.be.true;
  });
});

/*************************************************************
 *
 *  Copyright (c) 2018-2022 The MathJax Consortium
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

import {CharMap, CharOptions} from '../../FontData.js';

export const fraktur: CharMap<CharOptions> = {
    0x21: [.689, .012, .296],
    0x22: [.695, -0.432, .215],
    0x26: [.698, .011, .738],
    0x27: [.695, -0.436, .212],
    0x28: [.737, .186, .389],
    0x29: [.735, .187, .389],
    0x2A: [.692, -0.449, .278],
    0x2B: [.598, .082, .756],
    0x2C: [.107, .191, .278],
    0x2D: [.275, -0.236, .756],
    0x2E: [.102, .015, .278],
    0x2F: [.721, .182, .502],
    0x30: [.492, .013, .502],
    0x31: [.468, 0, .502],
    0x32: [.474, 0, .502],
    0x33: [.473, .182, .502],
    0x34: [.476, .191, .502],
    0x35: [.458, .184, .502],
    0x36: [.7, .013, .502],
    0x37: [.468, .181, .502],
    0x38: [.705, .01, .502],
    0x39: [.469, .182, .502],
    0x3A: [.457, .012, .216],
    0x3B: [.458, .189, .216],
    0x3D: [.368, -0.132, .756],
    0x3F: [.693, .011, .362],
    0x5B: [.74, .13, .278],
    0x5D: [.738, .131, .278],
    0x5E: [.734, -0.452, .5],
    0x2018: [.708, -0.41, .215],
    0x2019: [.692, -0.395, .215],
    0x2044: [.721, .182, .502],
    0xE300: [.683, .032, .497],
    0xE301: [.616, .03, .498],
    0xE302: [.68, .215, .333],
    0xE303: [.679, .224, .329],
    0xE304: [.471, .214, .503],
    0xE305: [.686, .02, .333],
    0xE306: [.577, .021, .334, {ic: .013}],
    0xE307: [.475, .022, .501, {ic: .013}],
};

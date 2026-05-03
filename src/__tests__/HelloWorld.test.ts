import { describe, it, expect } from 'vitest'
import {move} from "../utils";

describe('move', () => {
    it('when coord is 0 then expect opushka', () => {
        const test01 = move(0);
        expect(test01).toBe('You stand in front of a forest');
    })
})
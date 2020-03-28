const generateUniqueID = require('../../src/utils/generateUniqueID');

describe('Generate UniqueID', () => {
    it('should generate a random unique ID', () => {
        const id = generateUniqueID();

        expect(id).toHaveLength(8);
    });
});
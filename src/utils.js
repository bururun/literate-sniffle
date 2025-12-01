// Utility functions for SniffleLogger

function formatData(data) {
    if (typeof data === 'string') {
        return data.trim().toUpperCase();
    }
    return data;
}

function validateInput(value) {
    if (value === null || value === undefined) {
        throw new Error('Value cannot be null');
    }
    return true;
}

// Update 1
function newFunction1() {
    return 1;
}

module.exports = { formatData, validateInput };
